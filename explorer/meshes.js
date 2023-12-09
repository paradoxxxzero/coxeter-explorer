import { ambiances } from '../statics'
import { sphere, tri, tube } from './geometries'
import { mesh } from './helpers'
import { PI, cbrt, sqrt, tan } from './math'
import { columnMajor } from './math/matrix'
import { isDual, isHoloSnub, isSnub } from './mirrors'
import { dual, holosnub, snub } from './operator'
import { render } from './render'
import fragmentEdge from './shaders/edge/fragment.glsl?raw'
import vertexEdge from './shaders/edge/vertex.glsl?raw'
import fragmentFace from './shaders/face/fragment.glsl?raw'
import vertexFace from './shaders/face/vertex.glsl?raw'
import fragmentVertex from './shaders/vertex/fragment.glsl?raw'
import vertexVertex from './shaders/vertex/vertex.glsl?raw'

const geometries = {
  vertex: (_, detail) =>
    sphere(
      {
        low: { widthSegments: 16, segments: 8 },
        medium: { widthSegments: 32, segments: 16 },
        high: { widthSegments: 64, segments: 32 },
        ultra: { widthSegments: 128, segments: 64 },
      }[detail || 'medium']
    ),
  edge: (segments, detail) =>
    tube(
      {
        low: { segments, radialSegments: 4 },
        medium: { segments, radialSegments: 8 },
        high: { segments, radialSegments: 16 },
        ultra: { segments, radialSegments: 32 },
      }[detail || 'medium']
    ),
  face: (segments, detail) =>
    tri(
      {
        low: { segments: ~~cbrt(segments) },
        medium: { segments: ~~sqrt(segments) },
        high: { segments },
        ultra: { segments: 3 * segments },
      }[detail || 'medium']
    ),
}

export default function getMeshes(rt) {
  return {
    meshes: ['vertex', 'edge', 'face'],
    ...mesh(
      rt,
      'vertex',
      vertexVertex,
      fragmentVertex,
      geometries.vertex,
      1024,
      rt.dimensions,
      rt.showVertices
    ),
    ...mesh(
      rt,
      'edge',
      vertexEdge,
      fragmentEdge,
      geometries.edge,
      1024,
      rt.dimensions,
      rt.showEdges,
      ['position', 'target']
    ),
    ...mesh(
      rt,
      'face',
      vertexFace,
      fragmentFace,
      geometries.face,
      1024,
      rt.dimensions,
      rt.showFaces,
      ['position', 'target', 'center']
    ),
    changeArity(arity) {
      for (let i = 0; i < this.meshes.length; i++) {
        this[this.meshes[i]].changeArity(arity)
      }
    },
    updateGeometries(rt) {
      for (let i = 0; i < this.meshes.length; i++) {
        this[this.meshes[i]].updateGeometry(rt)
      }
    },
    recompilePrograms(rt) {
      for (let i = 0; i < this.meshes.length; i++) {
        this[this.meshes[i]].recompileProgram(rt)
      }
    },
    updateUniforms(rt, quick = false, zoom = null) {
      for (let i = 0; i < this.meshes.length; i++) {
        const type = this.meshes[i]
        const mesh = this[type]
        if (!quick) {
          mesh.uniforms.metric.update(columnMajor(rt.spaceType.metric))
          mesh.uniforms.matrix.update(columnMajor(rt.matrix))
          for (let i = 4; i <= rt.dimensions; i++) {
            mesh.uniforms[`fov${i}`].update(
              1 / tan((PI * rt[`fov${i}`] * 0.5) / 180)
            )
          }
          if (type === 'vertex') {
            mesh.uniforms.thickness.update(rt.vertexThickness)
          } else if (type === 'edge') {
            mesh.uniforms.thickness.update(rt.edgeThickness)
          }
        }
        mesh.uniforms.viewProjection.update(rt.camera.viewProjection)
        mesh.uniforms.zoom.update(quick ? zoom : rt.zoom)
        mesh.uniforms.eye.update(rt.camera.eye)
      }
    },
    plotType(rt, type, range, vertex, objects = null) {
      const mesh = this[type]
      objects = objects || vertex
      const { dimensions } = rt
      const ambiance = ambiances[rt.ambiance]

      const [start, stop] = range

      let startIdx = start
      let stopIdx = stop
      if (type === 'face') {
        let idx = 0
        for (let i = 0; i < start; i++) {
          const vertices = objects[i].vertices.length
          idx += vertices < 3 ? 0 : vertices === 3 ? 1 : vertices
        }
        startIdx = idx
        for (let i = start; i < stop; i++) {
          const vertices = objects[i].vertices.length
          idx += vertices < 3 ? 0 : vertices === 3 ? 1 : vertices
        }
        stopIdx = idx
      }

      if (mesh.instances < stopIdx) {
        mesh.extendAttributes(stopIdx)
      }
      mesh.count = stopIdx
      const arity = dimensions > 4 ? 9 : dimensions

      let idx = startIdx
      for (let i = start; i < stop; i++) {
        let vertices = []
        const object = objects[i]
        if (type === 'vertex') {
          vertices.push({
            ...object,
            position: object.vertex,
            type,
          })
        } else if (type === 'edge') {
          vertices.push({
            ...object,
            position: vertex[object.start].vertex,
            target: vertex[object.end].vertex,
            type,
          })
        } else {
          if (object.vertices.length < 3) {
            continue
          }
          if (object.vertices.length === 3) {
            vertices.push({
              ...object,
              position: vertex[object.vertices[0]].vertex,
              target: vertex[object.vertices[1]].vertex,
              center: vertex[object.vertices[2]].vertex,
              parity: 0,
            })
          } else {
            const faceVertices = new Array(object.vertices.length)
            for (let j = 0; j < object.vertices.length; j++) {
              faceVertices[j] = vertex[object.vertices[j]].vertex
            }
            const center = new Array(dimensions).fill(0)
            for (let j = 0; j < faceVertices.length; j++) {
              const vertices = faceVertices[j]
              for (let k = 0; k < dimensions; k++) {
                center[k] += vertices[k]
              }
            }
            for (let j = 0; j < dimensions; j++) {
              center[j] /= faceVertices.length
            }
            for (let j = 0; j < faceVertices.length; j++) {
              const vertex = {
                ...object,
                position: faceVertices[j],
                target: faceVertices[(j + 1) % faceVertices.length],
                center,
                parity: j % 2,
              }
              if (
                object.word.length % 2 ===
                (rt.spaceType.curvature > 0 ? 0 : 1)
              ) {
                ;[vertex.position, vertex.target] = [
                  vertex.target,
                  vertex.position,
                ]
              }
              vertices.push(vertex)
            }
          }
        }

        for (let j = 0; j < vertices.length; j++) {
          const vertex = vertices[j]
          for (let k = 0; k < dimensions; k++) {
            for (let l = 0; l < mesh.varying.length; l++) {
              const attr = mesh.varying[l]
              mesh.attributes[attr].data[idx * arity + k] = vertex[attr][k]
            }
          }
          const c = ambiance.color(vertex, type, rt)
          mesh.attributes.color.data[idx * 3 + 0] = c[0]
          mesh.attributes.color.data[idx * 3 + 1] = c[1]
          mesh.attributes.color.data[idx * 3 + 2] = c[2]
          idx++
        }
        for (let l = 0; l < mesh.varying.length; l++) {
          const attr = mesh.varying[l]
          mesh.attributes[attr].update(startIdx, stopIdx)
        }
        mesh.attributes.color.update(startIdx, stopIdx)
      }
    },
    preprocess(rt, plot) {
      if (rt.mirrors.some(mirror => isSnub(mirror))) {
        plot = snub(plot, rt.mirrors, rt.dimensions, rt.spaceType.metric)
      }
      if (rt.mirrors.some(mirror => isHoloSnub(mirror))) {
        plot = holosnub(plot, rt.mirrors, rt.dimensions, rt.spaceType.metric)
      }
      if (rt.mirrors.some(mirror => isDual(mirror))) {
        plot = dual(plot, rt.mirrors, rt.dimensions, rt.spaceType.metric)
      }
      return plot
    },
    plot(rt, ranges_) {
      let face_extended = rt.face
      let ranges_extended = ranges_
      if (ranges_.face[1] === rt.face.length && rt.partial) {
        face_extended = face_extended.concat(rt.partial)
        ranges_extended = {
          ...ranges_,
          face: [ranges_.face[0], ranges_.face[1] + rt.partial.length],
        }
      }
      const plot = {
        vertex: rt.vertex,
        edge: rt.edge,
        face: face_extended,
        ranges: ranges_extended,
      }
      const { vertex, edge, face, ranges } = this.preprocess(rt, plot)
      for (let i = 0; i < this.meshes.length; i++) {
        const type = this.meshes[i]
        const mesh = this[type]
        if (mesh.visible) {
          this.plotType(
            rt,
            type,
            ranges[type],
            vertex,
            type !== 'vertex' ? (type === 'face' ? face : edge) : null
          )
        }
      }
    },
  }
}

if (import.meta.hot) {
  const updateMeshShader = (mesh, type) => module => {
    const rt = window.rt
    console.debug('Accepting the new mesh shader')
    rt.meshes[mesh][type] = module.default
    rt.meshes.recompilePrograms(rt)
    rt.meshes.updateUniforms(rt)

    render(rt)
  }
  import.meta.hot.accept(
    './shaders/edge/fragment.glsl?raw',
    updateMeshShader('edge', 'fragment')
  )
  import.meta.hot.accept(
    './shaders/edge/vertex.glsl?raw',
    updateMeshShader('edge', 'vertex')
  )
  import.meta.hot.accept(
    './shaders/face/fragment.glsl?raw',
    updateMeshShader('face', 'fragment')
  )
  import.meta.hot.accept(
    './shaders/face/vertex.glsl?raw',
    updateMeshShader('face', 'vertex')
  )
  import.meta.hot.accept(
    './shaders/vertex/fragment.glsl?raw',
    updateMeshShader('vertex', 'fragment')
  )
  import.meta.hot.accept(
    './shaders/vertex/vertex.glsl?raw',
    updateMeshShader('vertex', 'vertex')
  )
}
