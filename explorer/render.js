import Stats from 'stats.js'
import { ambiances } from '../statics'
import { resizeCanvasToDisplaySize } from './helpers'
import { PI, min } from './math'
import { columnMajor, lookAt, multiply, perspective } from './math/matrix'
import getMeshes from './meshes'
import getPasses from './passes'
import refreshTextures from './textures'

const showStats = window.location.search.includes('stats')
let stats
if (showStats) {
  stats = new Stats()
  stats.dom.id = 'stats'
  document.body.appendChild(stats.dom)
}

export const initializeGl = rt => {
  const canvas = document.createElement('canvas')
  canvas.id = 'webgl2'
  document.body.appendChild(canvas)

  const gl = canvas.getContext('webgl2', {
    alpha: true,
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

  const camera = {
    zoom: 1,
    fov: PI / 3,
    position: [0, 0, -rt.zoom],
    update() {
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight
      this.zoom = min(gl.canvas.clientWidth / gl.canvas.clientHeight, 1)
      this.eye = [0, 0, this.position[2]]
      const viewMatrix = lookAt(this.eye, [0, 0, 0], [0, 1, 0])
      const projectionMatrix = perspective(
        this.fov,
        aspect,
        0.01,
        1000,
        this.zoom
      )
      this.viewProjection = columnMajor(multiply(projectionMatrix, viewMatrix))
    },
  }
  camera.update()

  const passes = getPasses(rt)
  const meshes = getMeshes(rt)

  const rb = {
    base: gl.createRenderbuffer(),
    depth: gl.createRenderbuffer(),
  }

  const fb = {
    base: gl.createFramebuffer(),
  }

  const textures = {}

  return {
    ...rt,
    gl,
    camera,
    meshes,
    passes,
    rb,
    fb,
    textures,
  }
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
  const ranges =
    order !== null
      ? rt.ranges[order]
      : {
          vertex: [
            rt.ranges[0].vertex[0],
            rt.ranges[rt.currentOrder - 1].vertex[1],
          ],
          edge: [rt.ranges[0].edge[0], rt.ranges[rt.currentOrder - 1].edge[1]],
          face: [rt.ranges[0].face[0], rt.ranges[rt.currentOrder - 1].face[1]],
        }

  rt.meshes.plot(rt, ranges)

  document.title = `Coxeter Explorer - ${
    rt.spaceType.type === 'finite'
      ? 'S'
      : rt.spaceType.type === 'affine'
      ? 'E'
      : 'H'
  }^${rt.dimensions} ${
    rt.currentOrder < rt.order ? `(${rt.currentOrder}/${rt.order})…` : ''
  }- ${rt.vertex.length} vertices, ${rt.edge.length} edges, ${
    rt.face.length
  } faces`
}

export const updateCameraFov = rt => {
  rt.camera.fov = (PI * rt.fov3) / 180
  rt.camera.update()
  rt.meshes.updateUniforms(rt, true)
}

export const changeAmbiance = rt => {
  const ambiance = ambiances[rt.ambiance]
  rt.gl.clearColor(...ambiance.background)
  if (ambiance.glow) {
    rt.passes.bloom.uniforms.exposure.update(ambiance.glow.exposure)
    rt.passes.bloom.uniforms.strength.update(ambiance.glow.strength)
    rt.passes.down.uniforms.offset.update(ambiance.glow.offset.down)
    rt.passes.up.uniforms.offset.update(ambiance.glow.offset.up)
  }
  if (ambiance.afterImage) {
    rt.passes.afterImage.uniforms.strength.update(ambiance.afterImage)
  }
}

export const render = rt => {
  if (showStats) {
    stats.update()
  }

  const { gl } = rt
  const msaa = rt.msaa
    ? min(rt.msaaSamples, rt.gl.getParameter(rt.gl.MAX_SAMPLES))
    : 0

  const ambiance = ambiances[rt.ambiance]
  if (resizeCanvasToDisplaySize(gl.canvas, rt.subsampling)) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    refreshTextures(rt)
    rt.camera.update()
    rt.meshes.updateUniforms(rt, true)
  }

  // OPAQUE
  gl.disable(gl.BLEND)
  gl.enable(gl.DEPTH_TEST)
  // gl.enable(gl.CULL_FACE)
  gl.depthMask(true)
  gl.depthFunc(gl.LESS)

  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.base)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  rt.meshes.vertex.render(rt)
  rt.meshes.edge.render(rt)

  // TRANSPARENT
  if (
    rt.meshes.face.visible &&
    ambiance.opacity < 1 &&
    ambiance.transparency === 'oit'
  ) {
    if (msaa) {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, rt.fb.base)
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, rt.fb.oit)
      gl.blitFramebuffer(
        0,
        0,
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        0,
        0,
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        gl.DEPTH_BUFFER_BIT,
        gl.NEAREST
      )
    }

    gl.enable(gl.BLEND)
    // gl.disable(gl.CULL_FACE)
    gl.depthMask(false)
    gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA)
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.oit)
    gl.clear(gl.COLOR_BUFFER_BIT)

    rt.meshes.face.render(rt)

    // COMPOSITE

    gl.depthMask(true)
    gl.depthFunc(gl.ALWAYS)
    gl.blendFunc(gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.base)

    gl.useProgram(rt.passes.oit.program)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, rt.textures.oitAccum.texture)

    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.textures.oitReveal.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  } else {
    if (ambiance.opacity < 1 && ambiance.transparency === 'blend') {
      gl.enable(gl.BLEND)
      // gl.disable(gl.CULL_FACE)
      gl.depthMask(false)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    }
    rt.meshes.face.render(rt)
  }

  const out = ambiance.afterImage
    ? rt.fb.afterImage
    : ambiance.glow
    ? rt.fb.bloom
    : null
  // FINAL
  // Blit msaa to screen
  gl.bindFramebuffer(gl.READ_FRAMEBUFFER, rt.fb.base)
  gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, out)
  if (ambiance.afterImage) {
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.textures.afterImageScreen.texture,
      0
    )
  }
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

  let bloomIn = rt.textures.bloom

  if (ambiance.afterImage) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.afterImage)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.textures.afterImageOutScreen.texture,
      0
    )
    gl.useProgram(rt.passes.afterImage.program)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, rt.textures.afterImageScreen.texture)
    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.textures.afterImageLastScreen.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    if (ambiance.glow) {
      bloomIn = rt.textures.afterImageOutScreen
    } else {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, rt.fb.afterImage)
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        rt.textures.afterImageOutScreen.texture,
        0
      )
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null)
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
    }
    ;[rt.textures.afterImageOutScreen, rt.textures.afterImageLastScreen] = [
      rt.textures.afterImageLastScreen,
      rt.textures.afterImageOutScreen,
    ]
  }

  if (ambiance.glow) {
    gl.disable(gl.BLEND)
    // gl.enable(gl.CULL_FACE)
    gl.enable(gl.DEPTH_TEST)
    gl.depthMask(true)
    gl.depthFunc(gl.LESS)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.kawase)

    gl.useProgram(rt.passes.down.program)
    for (let i = 0; i < ambiance.glow.steps; i++) {
      const inTexture = i === 0 ? bloomIn : rt.textures.kawase[i - 1]
      const outTexture = rt.textures.kawase[i]
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

    gl.useProgram(rt.passes.up.program)
    for (let i = ambiance.glow.steps - 1; i >= 0; i--) {
      const inTexture = rt.textures.kawase[i]
      const outTexture = i === 0 ? rt.textures.blur : rt.textures.kawase[i - 1]
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
    gl.bindTexture(gl.TEXTURE_2D, bloomIn.texture)
    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.textures.blur.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }
}

window.render = render

if (import.meta.hot) {
  const updateMeshShader = (mesh, type) => module => {
    const rt = window.rt
    console.debug('Accepting the new shader!')
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
