import { ambiances } from '../statics'
import { sphere, tri, tube } from './geometries'
import { mesh } from './helpers'
import { PI, abs, cbrt, sqrt, tan } from './math'
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
          mesh.uniforms.metric.update(columnMajor(rt.space.metric))
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
      const { dimensions } = rt
      const arity = dimensions > 4 ? 9 : dimensions
      const ambiance = ambiances[rt.ambiance]
      const index = ['vertex', 'edge', 'face'].indexOf(type)
      const count = rt.visit[index].detail.reduce(
        (acc, visit) => acc + visit.objects.length,
        0
      )
      if (mesh.instances < count) {
        mesh.extendAttributes(count)
      }

      let idx = 0
      for (let i = 0; i < rt.visit[index].detail.length; i++) {
        const visit = rt.visit[index].detail[i]
        for (let j = 0; j < visit.objects.length; j++) {
          const object = visit.objects[j]
          for (let k = 0; k < dimensions; k++) {
            for (let l = 0; l < object.vertices.length; l++) {
              const vertex = object.vertices[l]
              const attr = mesh.varying[l]
              mesh.attributes[attr].data[idx * arity + k] = vertex[k]
            }
          }
          const c = ambiance.color(
            {
              vertex,
              word: object.word,
              key: visit.key,
              subShape: i,
            },
            type,
            rt
          )
          mesh.attributes.color.data[idx * 3 + 0] = c[0]
          mesh.attributes.color.data[idx * 3 + 1] = c[1]
          mesh.attributes.color.data[idx * 3 + 2] = c[2]
          idx++
        }
      }
      for (let l = 0; l < mesh.varying.length; l++) {
        const attr = mesh.varying[l]
        mesh.attributes[attr].update(0, idx)
      }
      mesh.attributes.color.update(0, idx)
      mesh.count = idx
    },
    preprocess(rt, plot) {
      if (rt.mirrors.some(mirror => isSnub(mirror))) {
        plot = snub(plot, rt.mirrors, rt.dimensions, rt.space.metric)
      }
      if (rt.mirrors.some(mirror => isHoloSnub(mirror))) {
        plot = holosnub(plot, rt.mirrors, rt.dimensions, rt.space.metric)
      }
      if (rt.mirrors.some(mirror => isDual(mirror))) {
        plot = dual(plot, rt.mirrors, rt.dimensions, rt.space.metric)
      }
      return plot
    },
    plot(rt) {
      // let face_extended = rt.face
      // let ranges_extended = ranges_
      // if (ranges_.face[1] === rt.face.length && rt.partial) {
      //   face_extended = face_extended.concat(rt.partial)
      //   ranges_extended = {
      //     ...ranges_,
      //     face: [ranges_.face[0], ranges_.face[1] + rt.partial.length],
      //   }
      // }

      // const { vertex, edge, face, ranges } = this.preprocess(rt, plot)
      for (let i = 0; i < this.meshes.length; i++) {
        const type = this.meshes[i]
        const mesh = this[type]
        if (mesh.visible) {
          this.plotType(rt, type)
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
