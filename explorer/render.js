import Stats from 'stats.js'
import { ambiances } from './ambiances'
import { resizeCanvasToDisplaySize } from './helpers'
import { PI, min, tan } from './math'
import { rotate4, translate4 } from './math/hypermath'
import {
  columnMajor,
  frustum,
  inverse,
  multiply,
  multiplyVector,
} from './math/matrix'
import getMeshes from './meshes'
import getPasses from './passes'
import { refreshTexturesFull } from './textures'

const showStats = window.location.search.includes('stats')
let stats
if (showStats) {
  stats = new Stats()
  stats.dom.id = 'stats'
  document.body.appendChild(stats.dom)
}

export const initializeGl = (rt, onContextLost, onContextRestored) => {
  let canvas = document.getElementById('webgl2')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.id = 'webgl2'
    document.body.insertBefore(canvas, document.body.firstChild)
  }

  const gl = canvas.getContext('webgl2', {
    alpha: true,
    antialias: false,
    depth: true,
    stencil: false,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: false,
  })

  canvas.addEventListener('webglcontextlost', onContextLost, false)
  canvas.addEventListener('webglcontextrestored', onContextRestored, false)

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
    zoom: rt.zoom,
    fov: PI / 3,
    eye: [0, 0, 0],
    rotation: rotate4(0, Math.PI),
    near: 0.01,
    far: 1000,
    update(offset) {
      const position = translate4(0, 0, this.zoom)
      const eye = [0, 0, this.zoom, 0]
      this.eye = multiplyVector(this.rotation, eye).slice(0, 3)
      const viewMatrix = inverse(multiply(this.rotation, position))

      this.aspect = offset
        ? offset.fullWidth / offset.fullHeight
        : gl.canvas.clientWidth / gl.canvas.clientHeight

      const zoom = min(this.aspect, 1)

      const bounds = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        near: this.near,
        far: this.far,
      }

      bounds.top = (this.near * tan(this.fov / 2)) / zoom
      let height = 2 * bounds.top
      let width = this.aspect * height
      bounds.left = -0.5 * width

      if (offset) {
        bounds.left += (offset.x * width) / offset.fullWidth
        bounds.top -= (offset.y * height) / offset.fullHeight
        width *= offset.width / offset.fullWidth
        height *= offset.height / offset.fullHeight
      }

      bounds.bottom = bounds.top - height
      bounds.right = bounds.left + width

      const projectionMatrix = frustum(bounds)
      const viewProjection = multiply(projectionMatrix, viewMatrix)
      this.viewProjection = columnMajor(viewProjection)
      this.viewProjectionInverse = columnMajor(inverse(viewProjection))
    },
    center() {
      this.eye = [0, 0, 0]
      this.rotation = rotate4(0, Math.PI)
      this.update()
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

export const updateCamera = (rt, zoom = null) => {
  rt.camera.fov = rt.fov3 ? (PI * rt.fov3) / 180 : 1
  if (zoom !== null) {
    rt.camera.zoom = zoom === null ? rt.zoom : zoom
  }
  rt.camera.update()
  rt.meshes.updateUniforms(rt, true, zoom)
  rt.passes.updateUniforms(rt)
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

export const render = (rt, forceSize) => {
  if (!rt.gl) {
    // Context lost
    return
  }
  if (showStats) {
    stats.update()
  }

  const { gl } = rt
  const msaa = rt.msaa
    ? min(rt.msaaSamples, rt.gl.getParameter(rt.gl.MAX_SAMPLES))
    : 0

  const ambiance = ambiances[rt.ambiance]
  if (resizeCanvasToDisplaySize(gl.canvas, rt.subsampling, forceSize)) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    refreshTexturesFull(rt)
    rt.camera.update(forceSize)
    rt.meshes.updateUniforms(rt, true, rt.zoom)
    rt.passes.updateUniforms(rt)
  }

  // OPAQUE
  gl.disable(gl.BLEND)
  gl.enable(gl.DEPTH_TEST)
  ambiance.culling && gl.enable(gl.CULL_FACE)
  gl.depthMask(true)
  gl.depthFunc(gl.LESS)

  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.base)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  if (ambiance.skybox) {
    gl.useProgram(rt.passes.skybox.program)
    gl.enable(gl.DEPTH_TEST)
    gl.depthMask(true)
    gl.depthFunc(gl.LEQUAL)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  if (!ambiance.transparent.vertex) {
    rt.meshes.vertex.render(rt)
  }
  if (!ambiance.transparent.edge) {
    rt.meshes.edge.render(rt)
  }
  if (!ambiance.transparent.face) {
    rt.meshes.face.render(rt)
  }

  // TRANSPARENT
  if (
    (!rt.hidden.includes('vertex') && ambiance.transparent.vertex) ||
    (!rt.hidden.includes('edge') && ambiance.transparent.edge) ||
    (!rt.hidden.includes('face') && ambiance.transparent.face)
  ) {
    if (ambiance.transparency === 'oit') {
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
      ambiance.culling && gl.disable(gl.CULL_FACE)
      gl.depthMask(false)
      gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA)
      gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.oit)
      gl.clear(gl.COLOR_BUFFER_BIT)

      if (ambiance.transparent.vertex) {
        rt.meshes.vertex.render(rt)
      }
      if (ambiance.transparent.edge) {
        rt.meshes.edge.render(rt)
      }
      if (ambiance.transparent.face) {
        rt.meshes.face.render(rt)
      }

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
    } else if (ambiance.transparency === 'blend') {
      // Meshes should be sorted back to front
      // for blending to work correctly
      gl.enable(gl.BLEND)
      ambiance.culling && gl.disable(gl.CULL_FACE)
      gl.depthMask(false)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      if (ambiance.transparent.vertex) {
        rt.meshes.vertex.render(rt)
      }
      if (ambiance.transparent.edge) {
        rt.meshes.edge.render(rt)
      }
      if (ambiance.transparent.face) {
        rt.meshes.face.render(rt)
      }
    }
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
    ambiance.culling && gl.enable(gl.CULL_FACE)
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
