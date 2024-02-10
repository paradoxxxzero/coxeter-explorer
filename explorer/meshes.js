import { types } from '../statics'
import { range } from '../utils'
import { sphere, tri, tube } from './geometries'
import { attribute, augment, indices, compileProgram } from './helpers'
import { PI, tan } from './math'
import { columnMajor, ident } from './math/matrix'
import { render } from './render'
import fragmentEdge from './shaders/edge/fragment.glsl?raw'
import vertexEdge from './shaders/edge/vertex.glsl?raw'
import fragmentFace from './shaders/face/fragment.glsl?raw'
import vertexFace from './shaders/face/vertex.glsl?raw'
import fragmentVertex from './shaders/vertex/fragment.glsl?raw'
import vertexVertex from './shaders/vertex/vertex.glsl?raw'
import { getArity } from './utils'

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

export const mesh = (
  rt,
  type,
  vertex,
  fragment,
  geometryFunc,
  size,
  arity,
  varying = ['position']
) => {
  const { gl } = rt
  const geometry = geometryFunc(rt.space?.curvature && rt.curve, rt.detail)
  const uniforms = rt => [
    {
      name: 'viewProjection',
      type: 'm4fv',
      value: columnMajor(ident(4)),
    },
    {
      name: 'matrix',
      type: `m${rt.dimensions}fv`,
      value: columnMajor(rt.matrix),
    },
    {
      name: 'eye',
      type: `3fv`,
      value: [0, 0, 0],
    },
    {
      name: 'metric',
      type: `m${rt.dimensions}fv`,
      value: columnMajor(ident(rt.dimensions)),
    },
    {
      name: 'zoom',
      type: '1f',
      value: 1,
    },
    {
      name: 'envMap',
      type: '1i',
      value: 3,
    },
    {
      name: 'textureMap',
      type: '1i',
      value: 4,
    },
    {
      name: 'normalMap',
      type: '1i',
      value: 5,
    },
    {
      name: 'displacementMap',
      type: '1i',
      value: 6,
    },
    ...(['vertex', 'edge'].includes(type)
      ? [
          {
            name: 'thickness',
            type: '1f',
            value: 0,
          },
        ]
      : []),
    ...range(3, rt.dimensions + 1, 1, true).map(i => ({
      name: `fov${i}`,
      type: '1f',
      value: rt[`fov${i}`],
    })),
  ]

  arity = getArity(arity)
  const mesh = {
    attributes: {},
    varying,
    vertex,
    type,
    fragment,
    ...compileProgram(
      rt,
      type,
      ...augment(rt, vertex, fragment, type),
      uniforms(rt)
    ),
    recompileProgram(rt) {
      const [newVertex, newFragment] = augment(
        rt,
        this.vertex,
        this.fragment,
        this.type
      )
      this.recompile(rt, newVertex, newFragment, uniforms(rt))
    },
    changeArity(arity) {
      arity = getArity(arity)
      if (this.arity === arity) {
        return
      }
      this.arity = arity
      this.extendAttributes(this.instances)
    },
    extendAttributes(maxSize) {
      this.instances = maxSize
      varying.forEach(attr => {
        this.attributes[attr].extend(
          this.arity,
          new Float32Array(maxSize * this.arity),
          true
        )
      })
      this.attributes.color.extend(3, new Float32Array(maxSize * 3), true)
    },
    updateGeometry(rt) {
      const geometry = geometryFunc(rt.space.curvature && rt.curve, rt.detail)
      this.indices.update(new Uint16Array(geometry.indices))
      this.attributes.vertex.extend(3, new Float32Array(geometry.vertices))
      this.attributes.uv.extend(2, new Float32Array(geometry.uvs))
      this.attributes.normal.extend(3, new Float32Array(geometry.normals))
    },
    fillGeometry(data, info) {
      if (info.arity !== this.arity) {
        return
      }
      this.count = info.start + info.size
      if (this.instances < this.count) {
        this.extendAttributes(this.count)
      }

      for (let i = 0; i < this.varying.length; i++) {
        const attr = this.varying[i]
        this.attributes[attr].update(data[i], info.start, info.size)
      }
    },
    fillColor(data, info) {
      if (info.arity !== this.arity) {
        return
      }
      this.count = info.start + info.size
      if (this.instances < this.count) {
        this.extendAttributes(this.count)
      }

      this.attributes.color.update(data, info.start, info.size)
    },
    render(rt) {
      if (!this.count) {
        return
      }
      const { gl } = rt
      gl.useProgram(this.program)
      gl.bindVertexArray(this.vao)
      gl.drawElementsInstanced(
        gl.TRIANGLES,
        this.indices.count,
        gl.UNSIGNED_SHORT,
        0,
        this.count
      )
    },
  }
  mesh.vao = gl.createVertexArray()
  mesh.indices = indices(rt, mesh.vao, new Uint16Array(geometry.indices))

  mesh.attributes.vertex = attribute(
    rt,
    mesh,
    'vertex',
    3,
    new Float32Array(geometry.vertices)
  )
  mesh.attributes.uv = attribute(
    rt,
    mesh,
    'uv',
    2,
    new Float32Array(geometry.uvs)
  )
  mesh.attributes.normal = attribute(
    rt,
    mesh,
    'normal',
    3,
    new Float32Array(geometry.normals)
  )
  mesh.attributes.color = attribute(
    rt,
    mesh,
    'color',
    3,
    new Float32Array(size * 3),
    1
  )
  varying.forEach(attr => {
    mesh.attributes[attr] = attribute(
      rt,
      mesh,
      attr,
      arity,
      new Float32Array(size * arity),
      1
    )
  })
  mesh.type = type
  mesh.arity = arity
  mesh.instances = size
  mesh.count = 0
  return { [type]: mesh }
}

export default function getMeshes(rt) {
  return {
    meshes: types.slice(0, 3),
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
    fillGeometry(geometry) {
      for (let i = 0; i < this.meshes.length; i++) {
        const type = this.meshes[i]
        const mesh = this[type]
        if (geometry.data[i]) {
          mesh.fillGeometry(geometry.data[i], geometry.infos[i])
        }
      }
    },
    fillColor(color) {
      for (let i = 0; i < this.meshes.length; i++) {
        const type = this.meshes[i]
        const mesh = this[type]
        if (color.data[i]) {
          mesh.fillColor(color.data[i], color.infos[i])
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
