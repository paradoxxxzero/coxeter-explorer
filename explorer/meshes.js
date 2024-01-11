import { types } from '../statics'
import { sphere, tri, tube } from './geometries'
import { mesh } from './helpers'
import { PI, pow, tan } from './math'
import { columnMajor } from './math/matrix'
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
        lowest: { widthSegments: 6, segments: 2 },
        lower: { widthSegments: 8, segments: 4 },
        low: { widthSegments: 8, segments: 8 },
        lowish: { widthSegments: 12, segments: 8 },
        medium: { widthSegments: 16, segments: 16 },
        highish: { widthSegments: 32, segments: 16 },
        high: { widthSegments: 32, segments: 32 },
        higher: { widthSegments: 64, segments: 32 },
        ultra: { widthSegments: 128, segments: 64 },
      }[detail || 'medium']
    ),
  edge: (curve, detail) =>
    tube(
      {
        lowest: { segments: curve ? 4 : 1, radialSegments: 4 },
        lower: { segments: curve ? 8 : 1, radialSegments: 5 },
        low: { segments: curve ? 12 : 1, radialSegments: 6 },
        lowish: { segments: curve ? 14 : 1, radialSegments: 7 },
        medium: { segments: curve ? 16 : 1, radialSegments: 8 },
        highish: { segments: curve ? 24 : 1, radialSegments: 10 },
        high: { segments: curve ? 32 : 1, radialSegments: 12 },
        higher: { segments: curve ? 64 : 1, radialSegments: 16 },
        ultra: { segments: curve ? 128 : 1, radialSegments: 32 },
      }[detail || 'medium']
    ),
  face: (curve, detail) =>
    tri(
      {
        lowest: { segments: curve ? 4 : 1 },
        lower: { segments: curve ? 8 : 1 },
        low: { segments: curve ? 12 : 1 },
        lowish: { segments: curve ? 14 : 1 },
        medium: { segments: curve ? 16 : 1 },
        highish: { segments: curve ? 24 : 1 },
        high: { segments: curve ? 32 : 1 },
        higher: { segments: curve ? 64 : 1 },
        ultra: { segments: curve ? 128 : 1 },
      }[detail || 'medium']
    ),
}

export default function getMeshes(rt) {
  return {
    meshes: types,
    ...mesh(
      rt,
      'vertex',
      vertexVertex,
      fragmentVertex,
      geometries.vertex,
      1024,
      rt.dimensions
    ),
    ...mesh(
      rt,
      'edge',
      vertexEdge,
      fragmentEdge,
      geometries.edge,
      1024,
      rt.dimensions,
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
      ['position', 'target', 'center']
    ),
    reset() {
      for (let i = 0; i < this.meshes.length; i++) {
        this[this.meshes[i]].count = 0
      }
    },
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
            mesh.uniforms.thickness.update(rt.sizeVertex)
          } else if (type === 'edge') {
            mesh.uniforms.thickness.update(rt.sizeEdge)
          }
        }
        mesh.uniforms.viewProjection.update(rt.camera.viewProjection)
        mesh.uniforms.zoom.update(quick ? zoom : rt.zoom)
        mesh.uniforms.eye.update(rt.camera.eye)
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
