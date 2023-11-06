import Stats from 'stats.js'
import { ambiances } from '../statics'
import { sphere, tri, tube } from './geometries'
import {
  compileProgram,
  mesh,
  renderMesh,
  resizeCanvasToDisplaySize,
  uniform,
} from './helpers'
import { PI, tan } from './math'
import {
  columnMajor,
  lookAt,
  multiply,
  multiplyVector,
  perspective,
} from './math/matrix'
import fragmentBloom from './shaders/bloom/fragment.glsl?raw'
import vertexBloom from './shaders/bloom/vertex.glsl?raw'
import fragmentDown from './shaders/down/fragment.glsl?raw'
import vertexDown from './shaders/down/vertex.glsl?raw'
import fragmentEdge from './shaders/edge/fragment.glsl?raw'
import vertexEdge from './shaders/edge/vertex.glsl?raw'
import fragmentFace from './shaders/face/fragment.glsl?raw'
import vertexFace from './shaders/face/vertex.glsl?raw'
import fragmentOit from './shaders/oit/fragment.glsl?raw'
import vertexOit from './shaders/oit/vertex.glsl?raw'
import fragmentUp from './shaders/up/fragment.glsl?raw'
import vertexUp from './shaders/up/vertex.glsl?raw'
import fragmentVertex from './shaders/vertex/fragment.glsl?raw'
import vertexVertex from './shaders/vertex/vertex.glsl?raw'
import refreshTextures from './textures'

const showStats = window.location.search.includes('stats')
let stats
if (showStats) {
  stats = new Stats()
  stats.dom.id = 'stats'
  document.body.appendChild(stats.dom)
}

export const initializeGl = rt => {
  if (document.getElementById('webgl2')) {
    // FIXME
    console.error('WebGL already initialized')
    return rt
  }
  const canvas = document.createElement('canvas')
  canvas.id = 'webgl2'
  document.body.appendChild(canvas)

  const gl = canvas.getContext('webgl2', {
    // alpha: false,
    antialias: false,
    depth: true,
    stencil: false,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: false,
  })
  rt = { ...rt, gl }
  if (!gl) {
    console.error(
      'Unable to initialize WebGL. Your browser may not support it.'
    )
    return
  }
  gl.getExtension('EXT_color_buffer_float')

  gl.enable(gl.DEPTH_TEST)
  // gl.clearColor(...state.background, 1.0) // FIXME
  const camera = {
    zoom: 1,
    fov: PI / 3,
    position: { z: 2 },
  }
  const meshes = {}
  camera.update = () => {
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight
    const eye = [0, 0, camera.position.z * camera.zoom]
    const viewMatrix = lookAt(eye, [0, 0, 0], [0, 1, 0])
    const projectionMatrix = perspective(camera.fov, aspect, 0.001, 1000)
    const viewProjection = columnMajor(multiply(projectionMatrix, viewMatrix))
    Object.values(meshes).forEach(mesh => {
      mesh.uniforms.viewProjection.update(viewProjection)
      mesh.uniforms.eye.update(eye)
    })
  }
  const passes = { kawase: {} }
  passes.oit = {
    attributes: {},
    uniforms: {},
    ...compileProgram(rt, 'oit', vertexOit, fragmentOit),
  }

  passes.kawase.down = {
    attributes: {},
    uniforms: {},
    ...compileProgram(rt, 'kawase/down', vertexDown, fragmentDown),
  }
  passes.kawase.up = {
    attributes: {},
    uniforms: {},
    ...compileProgram(rt, 'kawase/up', vertexUp, fragmentUp),
  }
  passes.bloom = {
    attributes: {},
    uniforms: {},
    ...compileProgram(rt, 'bloom', vertexBloom, fragmentBloom),
  }

  const rb = {}
  rb.opaque = gl.createRenderbuffer()
  rb.transparent = gl.createRenderbuffer()
  rb.depth = gl.createRenderbuffer()

  const fb = {}
  fb.transparent = gl.createFramebuffer()
  fb.opaque = gl.createFramebuffer()
  fb.bloom = gl.createFramebuffer()
  fb.kawase = gl.createFramebuffer()

  const arity = rt.dimensions > 4 ? 9 : rt.dimensions
  const geometries = {
    vertex: () => sphere(),
    edge: segments => tube({ segments }),
    face: segments => tri({ segments }),
  }

  meshes.vertex = mesh(
    rt,
    'vertex',
    vertexVertex,
    fragmentVertex,
    geometries.vertex,
    rt.maxVertices,
    arity
  )
  meshes.vertex.visible = rt.showVertices

  meshes.edge = mesh(
    rt,
    'edge',
    vertexEdge,
    fragmentEdge,
    geometries.edge,
    rt.maxEdges,
    arity,
    ['position', 'target']
  )
  meshes.edge.visible = rt.showEdges

  meshes.face = mesh(
    rt,
    'face',
    vertexFace,
    fragmentFace,
    geometries.face,
    rt.maxFaces,
    arity,
    ['position', 'center', 'target']
  )
  meshes.face.visible = rt.showFaces

  passes.kawase.down.uniforms.screen = uniform(
    rt,
    passes.kawase.down.program,
    'screen',
    '1i'
  )

  passes.kawase.down.uniforms.offset = uniform(
    rt,
    passes.kawase.down.program,
    'offset',
    '1f'
  )
  passes.kawase.down.uniforms.screen.update(0)

  passes.kawase.up.uniforms.screen = uniform(
    rt,
    passes.kawase.up.program,
    'screen',
    '1i'
  )
  passes.kawase.up.uniforms.offset = uniform(
    rt,
    passes.kawase.up.program,
    'offset',
    '1f'
  )
  passes.kawase.up.uniforms.screen.update(0)

  gl.useProgram(passes.bloom.program)
  passes.bloom.uniforms.screen = uniform(
    rt,
    passes.bloom.program,
    'screen',
    '1i'
  )
  passes.bloom.uniforms.bloom = uniform(rt, passes.bloom.program, 'bloom', '1i')
  passes.bloom.uniforms.exposure = uniform(
    rt,
    passes.bloom.program,
    'exposure',
    '1f'
  )

  passes.bloom.uniforms.strength = uniform(
    rt,
    passes.bloom.program,
    'strength',
    '1f'
  )

  passes.bloom.uniforms.screen.update(0)
  passes.bloom.uniforms.bloom.update(1)

  passes.oit.uniforms.accum = uniform(
    rt,
    passes.oit.program,
    'accumTexture',
    '1i'
  )
  passes.oit.uniforms.accumAlpha = uniform(
    rt,
    passes.oit.program,
    'revealageTexture',
    '1i'
  )
  passes.oit.uniforms.accum.update(0)
  passes.oit.uniforms.accumAlpha.update(1)

  camera.update()

  return {
    ...rt,
    gl,
    camera,
    meshes,
    passes,
    rb,
    fb,
  }
}

const plotVertices = (rt, range = null) => {
  const { dimensions } = rt
  const ambiance = ambiances[rt.ambiance]
  const ipos = rt.meshes.vertex.attributes.position.data
  const icolor = rt.meshes.vertex.attributes.color.data

  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.vertices.length

  const arity = dimensions > 4 ? 9 : dimensions
  rt.meshes.vertex.count = stop

  for (let i = start; i < stop; i++) {
    let vertex = rt.vertices[i].vertex
    if (dimensions > 4) {
      vertex = multiplyVector(rt.matrix, vertex)
    }
    for (let j = 0; j < dimensions; j++) {
      ipos[i * arity + j] = vertex[j]
    }
    const c = ambiance.color(rt.vertices[i], 'vertex', dimensions)
    icolor[i * 3 + 0] = c[0]
    icolor[i * 3 + 1] = c[1]
    icolor[i * 3 + 2] = c[2]
  }
  // FIXME use update range
  rt.meshes.vertex.attributes.position.update()
  rt.meshes.vertex.attributes.color.update()
}

const plotEdges = (rt, range = null) => {
  const ambiance = ambiances[rt.ambiance]
  const ipos = rt.meshes.edge.attributes.position.data
  const itarget = rt.meshes.edge.attributes.target.data
  const icolor = rt.meshes.edge.attributes.color.data

  const { dimensions } = rt
  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.edges.length

  const arity = dimensions > 4 ? 9 : dimensions
  rt.meshes.edge.count = stop
  for (let i = start; i < stop; i++) {
    const edge = rt.edges[i]

    let start = rt.vertices[edge.start].vertex
    let end = rt.vertices[edge.end].vertex

    if (dimensions > 4) {
      start = multiplyVector(rt.matrix, start)
      end = multiplyVector(rt.matrix, end)
    }
    for (let j = 0; j < dimensions; j++) {
      ipos[i * arity + j] = start[j]
      itarget[i * arity + j] = end[j]
    }

    const c = ambiance.color(edge, 'edge', dimensions)
    icolor[i * 3 + 0] = c[0]
    icolor[i * 3 + 1] = c[1]
    icolor[i * 3 + 2] = c[2]
  }
  rt.meshes.edge.attributes.position.update()
  rt.meshes.edge.attributes.target.update()
  rt.meshes.edge.attributes.color.update()
}

const plotFaces = (rt, range = null) => {
  const ambiance = ambiances[rt.ambiance]
  const ipos = rt.meshes.face.attributes.position.data
  const itarget = rt.meshes.face.attributes.target.data
  const icenter = rt.meshes.face.attributes.center.data
  const icolor = rt.meshes.face.attributes.color.data

  const { dimensions } = rt
  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.faces.length
  let idx = 0
  for (let i = 0; i < start; i++) {
    const vertices = rt.faces[i].vertices.length
    idx += vertices < 3 ? 0 : vertices === 3 ? 1 : vertices
  }
  const arity = dimensions > 4 ? 9 : dimensions
  for (let i = start; i < stop; i++) {
    const face = rt.faces[i]
    if (face.vertices.length < 3) {
      continue
    }
    let vertices
    if (face.vertices.length === 3) {
      vertices = [
        [
          rt.vertices[face.vertices[0]].vertex,
          rt.vertices[face.vertices[1]].vertex,
          rt.vertices[face.vertices[2]].vertex,
        ],
      ]
      if (dimensions > 4) {
        vertices[0][0] = multiplyVector(rt.matrix, vertices[0][0])
        vertices[0][1] = multiplyVector(rt.matrix, vertices[0][1])
        vertices[0][2] = multiplyVector(rt.matrix, vertices[0][2])
      }
    } else {
      const faceVertices = new Array(face.vertices.length)
      for (let j = 0; j < face.vertices.length; j++) {
        faceVertices[j] = rt.vertices[face.vertices[j]].vertex

        if (dimensions > 4) {
          faceVertices[j] = multiplyVector(rt.matrix, faceVertices[j])
        }
      }
      const centroid = new Array(dimensions).fill(0)
      for (let j = 0; j < faceVertices.length; j++) {
        const vertex = faceVertices[j]
        for (let k = 0; k < dimensions; k++) {
          centroid[k] += vertex[k]
        }
      }
      for (let j = 0; j < dimensions; j++) {
        centroid[j] /= faceVertices.length
      }
      vertices = new Array(faceVertices.length)
      for (let j = 0; j < faceVertices.length; j++) {
        vertices[j] = [
          centroid,
          faceVertices[j],
          faceVertices[(j + 1) % faceVertices.length],
        ]
      }
    }

    for (let j = 0; j < vertices.length; j++) {
      let [centroid, pos, target] = vertices[j]
      if (face.word.length % 2 === (rt.curvature > 0 ? 0 : 1)) {
        ;[pos, target] = [target, pos]
      }
      for (let k = 0; k < dimensions; k++) {
        icenter[idx * arity + k] = centroid[k]
        ipos[idx * arity + k] = pos[k]
        itarget[idx * arity + k] = target[k]
      }
      const c = ambiance.color(face, 'face', dimensions)
      icolor[idx * 3 + 0] = c[0]
      icolor[idx * 3 + 1] = c[1]
      icolor[idx * 3 + 2] = c[2]
      idx++
    }
  }
  rt.meshes.face.count = idx
  rt.meshes.face.attributes.position.update()
  rt.meshes.face.attributes.target.update()
  rt.meshes.face.attributes.center.update()
  rt.meshes.face.attributes.color.update()
}

export const show = (rt, name) => {
  rt.meshes[name].visible =
    rt[
      name === 'vertex'
        ? 'showVertices'
        : name === 'edge'
        ? 'showEdges'
        : 'showFaces'
    ]
}

export const plot = (rt, order = null) => {
  if (rt.currentOrder === 0) {
    return
  }
  if (
    (order === null && rt.ranges.length === 0) ||
    (order !== null && order >= rt.ranges.length)
  ) {
    return
  }
  const range =
    order !== null
      ? rt.ranges[order]
      : {
          vertices: [
            rt.ranges[0].vertices[0],
            rt.ranges[rt.currentOrder - 1].vertices[1],
          ],
          edges: [
            rt.ranges[0].edges[0],
            rt.ranges[rt.currentOrder - 1].edges[1],
          ],
          faces: [
            rt.ranges[0].faces[0],
            rt.ranges[rt.currentOrder - 1].faces[1],
          ],
        }
  if (rt.meshes.vertex.visible) {
    rt.gl.useProgram(rt.meshes.vertex.program)
    rt.gl.bindVertexArray(rt.meshes.vertex.vao)
    plotVertices(rt, range.vertices)
  }
  if (rt.meshes.edge.visible) {
    rt.gl.useProgram(rt.meshes.edge.program)
    rt.gl.bindVertexArray(rt.meshes.edge.vao)
    plotEdges(rt, range.edges)
  }
  if (rt.meshes.face.visible) {
    rt.gl.useProgram(rt.meshes.face.program)
    rt.gl.bindVertexArray(rt.meshes.face.vao)
    plotFaces(rt, range.faces)
  }
  document.title = `Coxeter Explorer - ${
    rt.spaceType === 'finite' ? 'S' : rt.spaceType === 'affine' ? 'E' : 'H'
  }^${rt.dimensions} ${
    rt.currentOrder < rt.order ? `(${rt.currentOrder}/${rt.order})…` : ''
  }- ${rt.vertices.length} vertices, ${rt.edges.length} edges, ${
    rt.faces.length
  } faces`
}

export const updateCameraFov = rt => {
  rt.camera.fov = (PI * rt.fov3) / 180
  rt.camera.update()
}

export const changeAmbiance = rt => {
  const ambiance = ambiances[rt.ambiance]
  rt.gl.clearColor(...ambiance.background)
  if (ambiance.glow) {
    rt.passes.bloom.uniforms.exposure.update(ambiance.glow.exposure)
    rt.passes.bloom.uniforms.strength.update(ambiance.glow.strength)
    rt.passes.kawase.down.uniforms.offset.update(ambiance.glow.offset.down)
    rt.passes.kawase.up.uniforms.offset.update(ambiance.glow.offset.up)
  }
}

export const recompilePrograms = rt => {
  Object.values(rt.meshes).forEach(mesh => {
    mesh.recompile(rt)
  })
}

export const updateUniforms = rt => {
  const segments = rt.curve ? rt.segments : 1

  Object.entries(rt.meshes).forEach(([type, mesh]) => {
    mesh.uniforms.curvature.update(rt.curvature)
    if (rt.dimensions < 5) {
      mesh.uniforms.matrix.update(columnMajor(rt.matrix))
    }
    for (let i = 4; i <= rt.dimensions; i++) {
      mesh.uniforms[`fov${i}`].update(tan((PI * rt[`fov${i}`] * 0.5) / 180))
    }
    if (type === 'vertex') {
      mesh.uniforms.thickness.update(rt.vertexThickness)
    } else if (type === 'edge') {
      mesh.uniforms.thickness.update(rt.edgeThickness)
    }
    if (['edge', 'face'].includes(type)) {
      mesh.uniforms.segments.update(segments)
    }
  })
  rt.camera.update()
}

export const render = rt => {
  if (showStats) {
    stats.update()
  }
  const { gl } = rt
  const ambiance = ambiances[rt.ambiance]
  if (resizeCanvasToDisplaySize(gl.canvas)) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    refreshTextures(rt)
    rt.camera.update()
  }

  // OPAQUE
  gl.disable(gl.BLEND)
  gl.enable(gl.DEPTH_TEST)
  gl.depthMask(true)
  gl.depthFunc(gl.LESS)

  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.opaque)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  rt.meshes.vertex.visible && renderMesh(rt, 'vertex')
  rt.meshes.edge.visible && renderMesh(rt, 'edge')

  // TRANSPARENT
  if (rt.meshes.face.visible) {
    gl.enable(gl.BLEND)
    gl.depthMask(false)
    gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.transparent)
    gl.clear(gl.COLOR_BUFFER_BIT)

    renderMesh(rt, 'face')

    // COMPOSITE

    gl.depthMask(true)
    gl.depthFunc(gl.ALWAYS)
    gl.blendFunc(gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.opaque)

    gl.useProgram(rt.passes.oit.program)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.oit.accumTexture.texture)

    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.oit.revealTexture.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  // FINAL
  // Blit msaa to screen
  gl.bindFramebuffer(gl.READ_FRAMEBUFFER, rt.fb.opaque)
  gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, ambiance.glow ? rt.fb.bloom : null)
  gl.blitFramebuffer(
    0,
    0,
    gl.drawingBufferWidth,
    gl.drawingBufferHeight,
    0,
    0,
    gl.drawingBufferWidth,
    gl.drawingBufferHeight,
    gl.COLOR_BUFFER_BIT,
    gl.NEAREST
  )

  if (ambiance.glow) {
    gl.disable(gl.BLEND)
    gl.enable(gl.DEPTH_TEST)
    gl.depthMask(true)
    gl.depthFunc(gl.LESS)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.kawase)

    gl.useProgram(rt.passes.kawase.down.program)
    for (let i = 0; i < ambiance.glow.steps; i++) {
      const inTexture =
        i === 0 ? rt.passes.bloom.texture : rt.passes.kawase.textures[i - 1]
      const outTexture = rt.passes.kawase.textures[i]
      gl.viewport(0, 0, outTexture.width, outTexture.height)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, inTexture.texture)
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        outTexture.texture,
        0
      )
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    gl.useProgram(rt.passes.kawase.up.program)
    for (let i = ambiance.glow.steps - 1; i >= 0; i--) {
      const inTexture = rt.passes.kawase.textures[i]
      const outTexture =
        i === 0 ? rt.passes.kawase.texture : rt.passes.kawase.textures[i - 1]
      gl.viewport(0, 0, outTexture.width, outTexture.height)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, inTexture.texture)
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        outTexture.texture,
        0
      )
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.useProgram(rt.passes.bloom.program)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.bloom.texture.texture)
    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.kawase.texture.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }
}
