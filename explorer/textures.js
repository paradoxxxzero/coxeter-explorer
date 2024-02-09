import { ambiances } from './ambiances'
import { cubemap, storage, texture } from './helpers'
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
  if (rt.textures.oitAccum) {
    gl.deleteTexture(rt.textures.oitAccum.texture)
    rt.textures.oitAccum = null
  }
  if (rt.textures.oitReveal) {
    gl.deleteTexture(rt.textures.oitReveal.texture)
    rt.textures.oitReveal = null
  }
  if (rt.rb.depth_copy) {
    gl.deleteRenderbuffer(rt.rb.depth_copy)
  }
  if (ambiance.transparency === 'oit') {
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

    rt.textures.oitAccum = texture(rt, gl.RGBA16F)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.textures.oitAccum.texture,
      0
    )

    rt.textures.oitReveal = texture(rt, gl.R16F)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT1,
      gl.TEXTURE_2D,
      rt.textures.oitReveal.texture,
      0
    )
  }

  // AFTERIMAGE
  if (rt.fb.afterImage) {
    gl.deleteFramebuffer(rt.fb.afterImage)
    rt.fb.afterImage = null
  }
  if (rt.textures.afterImageLastScreen) {
    gl.deleteTexture(rt.textures.afterImageLastScreen.texture)
    rt.textures.afterImageLastScreen = null
  }
  if (rt.textures.afterImageScreen) {
    gl.deleteTexture(rt.textures.afterImageScreen.texture)
    rt.textures.afterImageScreen = null
  }
  if (rt.textures.afterImageOutScreen) {
    gl.deleteTexture(rt.textures.afterImageOutScreen.texture)
    rt.textures.afterImageOutScreen = null
  }
  if (ambiance.afterImage) {
    rt.fb.afterImage = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.afterImage)
    rt.textures.afterImageLastScreen = texture(rt, gl.RGBA8)
    rt.textures.afterImageScreen = texture(rt, gl.RGBA8)
    rt.textures.afterImageOutScreen = texture(rt, gl.RGBA8)
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
  if (rt.textures.kawase) {
    for (let i = 0; i < rt.textures.kawase.length; i++) {
      gl.deleteTexture(rt.textures.kawase[i].texture)
    }
    rt.textures.kawase = null
  }
  if (rt.textures.blur) {
    gl.deleteTexture(rt.textures.blur.texture)
    rt.textures.blur = null
  }
  if (rt.textures.bloom) {
    gl.deleteTexture(rt.textures.bloom.texture)
    rt.textures.bloom = null
  }

  if (ambiance.glow) {
    rt.fb.kawase = gl.createFramebuffer()
    rt.fb.bloom = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.kawase)
    rt.textures.kawase = []
    for (let i = 0; i < ambiance.glow.steps; i++) {
      rt.textures.kawase[i] = texture(rt, gl.RGBA8, ambiance.glow.pow ** -i)
    }
    rt.textures.blur = texture(rt, gl.RGBA8)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.textures.blur.texture,
      0
    )

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.bloom)
    rt.textures.bloom = texture(rt, gl.RGBA8)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.textures.bloom.texture,
      0
    )
  }

  // Skybox
  if (rt.textures.skybox) {
    gl.deleteTexture(rt.textures.skybox.texture)
    rt.textures.skybox = null
  }

  if (ambiance.skybox) {
    rt.textures.skybox = cubemap(rt, rt.skybox || ambiance.skybox, 'skybox', 2)
  }
  // Reflections
  if (rt.textures.envmap) {
    gl.deleteTexture(rt.textures.envmap.texture)
    rt.textures.envmap = null
  }

  if (ambiance.envmap) {
    rt.textures.envmap = cubemap(rt, rt.envmap || ambiance.envmap, 'envmap', 3)
  }
}
