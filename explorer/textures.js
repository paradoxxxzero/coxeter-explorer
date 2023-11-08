import { ambiances } from '../statics'
import { storage, texture } from './helpers'
import { min } from './math'

export default function refreshTextures(rt) {
  const { gl } = rt
  const ambiance = ambiances[rt.ambiance]
  const msaa = rt.msaa
    ? min(rt.msaaSamples, rt.gl.getParameter(rt.gl.MAX_SAMPLES))
    : 0

  // BASE FBO
  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.base)
  storage(rt, rt.rb.base, gl.RGBA8, msaa)
  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.RENDERBUFFER,
    rt.rb.base
  )

  storage(rt, rt.rb.depth, gl.DEPTH_COMPONENT24, msaa)
  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.DEPTH_ATTACHMENT,
    gl.RENDERBUFFER,
    rt.rb.depth
  )

  // OIT
  if (rt.fb.oit) {
    gl.deleteFramebuffer(rt.fb.oit)
    rt.fb.oit = null
  }
  if (rt.passes.oit.accumTexture) {
    gl.deleteTexture(rt.passes.oit.accumTexture.texture)
    rt.passes.oit.accumTexture = null
  }
  if (rt.passes.oit.revealTexture) {
    gl.deleteTexture(rt.passes.oit.revealTexture.texture)
    rt.passes.oit.revealTexture = null
  }
  if (rt.rb.depth_copy) {
    gl.deleteRenderbuffer(rt.rb.depth_copy)
  }
  if (
    rt.meshes.face.visible &&
    ambiance.opacity < 1 &&
    ambiance.transparency === 'oit'
  ) {
    rt.fb.oit = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.oit)

    if (msaa) {
      // Create a normal sized depth buffer
      rt.rb.depth_copy = gl.createRenderbuffer()
      storage(rt, rt.rb.depth_copy, gl.DEPTH_COMPONENT24)
      gl.framebufferRenderbuffer(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.RENDERBUFFER,
        rt.rb.depth_copy
      )
    } else {
      gl.framebufferRenderbuffer(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.RENDERBUFFER,
        rt.rb.depth
      )
    }

    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1])

    rt.passes.oit.accumTexture = texture(rt, gl.RGBA16F)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.passes.oit.accumTexture.texture,
      0
    )

    rt.passes.oit.revealTexture = texture(rt, gl.R16F)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT1,
      gl.TEXTURE_2D,
      rt.passes.oit.revealTexture.texture,
      0
    )
  }

  // AFTERIMAGE
  if (rt.fb.afterimage) {
    gl.deleteFramebuffer(rt.fb.afterimage)
    rt.fb.afterimage = null
  }
  if (rt.passes.afterimage.lastScreen) {
    gl.deleteTexture(rt.passes.afterimage.lastScreen.texture)
    rt.passes.afterimage.lastScreen = null
  }
  if (rt.passes.afterimage.screen) {
    gl.deleteTexture(rt.passes.afterimage.screen.texture)
    rt.passes.afterimage.screen = null
  }
  if (rt.passes.afterimage.outScreen) {
    gl.deleteTexture(rt.passes.afterimage.outScreen.texture)
    rt.passes.afterimage.outScreen = null
  }
  if (ambiance.afterImage) {
    rt.fb.afterimage = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.afterimage)
    rt.passes.afterimage.lastScreen = texture(rt, gl.RGBA8)
    rt.passes.afterimage.screen = texture(rt, gl.RGBA8)
    rt.passes.afterimage.outScreen = texture(rt, gl.RGBA8)
  }

  // BLOOM
  if (rt.fb.kawase) {
    gl.deleteFramebuffer(rt.fb.kawase)
    rt.fb.kawase = null
  }
  if (rt.fb.bloom) {
    gl.deleteFramebuffer(rt.fb.bloom)
    rt.fb.bloom = null
  }
  if (rt.passes.kawase.textures) {
    for (let i = 0; i < rt.passes.kawase.textures.length; i++) {
      gl.deleteTexture(rt.passes.kawase.textures[i].texture)
    }
    rt.passes.kawase.textures = null
  }
  if (rt.passes.kawase.blur) {
    gl.deleteTexture(rt.passes.kawase.blur.texture)
    rt.passes.kawase.blur = null
  }
  if (rt.passes.bloom.screen) {
    gl.deleteTexture(rt.passes.bloom.screen.texture)
    rt.passes.bloom.screen = null
  }

  if (ambiance.glow) {
    rt.fb.kawase = gl.createFramebuffer()
    rt.fb.bloom = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.kawase)
    rt.passes.kawase.textures = []
    for (let i = 0; i < ambiance.glow.steps; i++) {
      rt.passes.kawase.textures[i] = texture(
        rt,
        gl.RGBA8,
        ambiance.glow.pow ** -i
      )
    }
    rt.passes.kawase.blur = texture(rt, gl.RGBA8)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.passes.kawase.blur.texture,
      0
    )

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.bloom)
    rt.passes.bloom.screen = texture(rt, gl.RGBA8)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.passes.bloom.screen.texture,
      0
    )
  }
}
