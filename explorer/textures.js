import { ambiances } from '../statics'
import { storage, texture } from './helpers'

export default function refreshTextures(rt) {
  const { gl } = rt
  const ambiance = ambiances[rt.ambiance]
  storage(rt, rt.rb.depth, gl.DEPTH_COMPONENT24)

  // OPAQUE
  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.opaque)
  storage(rt, rt.rb.opaque, gl.RGBA8)
  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.RENDERBUFFER,
    rt.rb.opaque
  )

  gl.framebufferRenderbuffer(
    gl.FRAMEBUFFER,
    gl.DEPTH_ATTACHMENT,
    gl.RENDERBUFFER,
    rt.rb.depth
  )

  // TRANSPARENT
  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.transparent)

  gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1])

  if (rt.passes.oit.accumTexture) {
    gl.deleteTexture(rt.passes.oit.accumTexture.texture)
  }
  rt.passes.oit.accumTexture = texture(rt, gl.RGBA16F)
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    rt.passes.oit.accumTexture.texture,
    0
  )

  if (rt.passes.oit.revealTexture) {
    gl.deleteTexture(rt.passes.oit.revealTexture.texture)
  }
  rt.passes.oit.revealTexture = texture(rt, gl.R16F)
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT1,
    gl.TEXTURE_2D,
    rt.passes.oit.revealTexture.texture,
    0
  )

  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.kawase)
  if (rt.passes.kawase.textures) {
    for (let i = 0; i < rt.passes.kawase.textures.length; i++) {
      gl.deleteTexture(rt.passes.kawase.textures[i].texture)
    }
  }
  rt.passes.kawase.textures = []
  for (let i = 0; i < ambiance.glow.steps; i++) {
    rt.passes.kawase.textures[i] = texture(
      rt,
      gl.RGBA8,
      ambiance.glow.pow ** -i
    )
  }
  if (rt.passes.kawase.texture) {
    gl.deleteTexture(rt.passes.kawase.texture.texture)
  }
  rt.passes.kawase.texture = texture(rt, gl.RGBA8)
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    rt.passes.kawase.texture.texture,
    0
  )

  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.bloom)
  if (rt.passes.bloom.texture) {
    gl.deleteTexture(rt.passes.bloom.texture.texture)
  }
  rt.passes.bloom.texture = texture(rt, gl.RGBA8)
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    rt.passes.bloom.texture.texture,
    0
  )
  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
}
