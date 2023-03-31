import {
  Mesh,
  MeshDepthMaterial,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  UniformsUtils,
  Vector3,
  Vector4,
  WebGLRenderTarget,
} from 'three'
import {
  GodRaysCombineShader,
  GodRaysDepthMaskShader,
  GodRaysFakeSunShader,
  GodRaysGenerateShader,
} from 'three/examples/jsm/shaders/GodRaysShader.js'

import { Pass } from 'three/examples/jsm/postprocessing/Pass'

export class GodRayPass extends Pass {
  constructor(scene, camera, params = {}) {
    super()

    this.scene = scene
    this.camera = camera

    this.orthoScene = new Scene()
    this.orthoCamera = new OrthographicCamera(
      -0.5,
      0.5,
      0.5,
      -0.5,
      -10000,
      10000
    )
    this.orthoCamera.position.z = 100
    this.orthoScene.add(this.orthoCamera)

    this.background = params.background || 0x000511
    this.sunColor = params.sunColor || 0xffff00
    this.multiplier = params.multiplier || 0.25
    this.clipPosition = new Vector4()
    this.sunPosition = params.sunPosition || new Vector3(0, 1000, 1000)
    this.screenSpacePosition = new Vector3()

    this.rtTextureDepth = new WebGLRenderTarget(1, 1)
    this.rtTextureDepthMask = new WebGLRenderTarget(1, 1)
    this.rtTextureGodRays1 = new WebGLRenderTarget(1, 1)
    this.rtTextureGodRays2 = new WebGLRenderTarget(1, 1)

    this.materialDepth = new MeshDepthMaterial()

    const godraysMaskShader = GodRaysDepthMaskShader
    this.godrayMaskUniforms = UniformsUtils.clone(godraysMaskShader.uniforms)
    this.materialGodraysDepthMask = new ShaderMaterial({
      uniforms: this.godrayMaskUniforms,
      vertexShader: godraysMaskShader.vertexShader,
      fragmentShader: godraysMaskShader.fragmentShader,
    })

    const godraysGenShader = GodRaysGenerateShader
    this.godrayGenUniforms = UniformsUtils.clone(godraysGenShader.uniforms)
    this.materialGodraysGenerate = new ShaderMaterial({
      uniforms: this.godrayGenUniforms,
      vertexShader: godraysGenShader.vertexShader,
      fragmentShader: godraysGenShader.fragmentShader,
    })

    const godraysCombineShader = GodRaysCombineShader
    this.godrayCombineUniforms = UniformsUtils.clone(
      godraysCombineShader.uniforms
    )
    this.materialGodraysCombine = new ShaderMaterial({
      uniforms: this.godrayCombineUniforms,
      vertexShader: godraysCombineShader.vertexShader,
      fragmentShader: godraysCombineShader.fragmentShader,
    })

    const godraysFakeSunShader = GodRaysFakeSunShader
    this.godraysFakeSunUniforms = UniformsUtils.clone(
      godraysFakeSunShader.uniforms
    )
    this.materialGodraysFakeSun = new ShaderMaterial({
      uniforms: this.godraysFakeSunUniforms,
      vertexShader: godraysFakeSunShader.vertexShader,
      fragmentShader: godraysFakeSunShader.fragmentShader,
    })

    this.godraysFakeSunUniforms.bgColor.value.setHex(this.background)
    this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor)

    this.godrayCombineUniforms.fGodRayIntensity.value = 0.75
    this.fsQuad = new Mesh(
      new PlaneGeometry(1.0, 1.0),
      this.materialGodraysGenerate
    )
    this.fsQuad.position.z = -9900
    this.orthoScene.add(this.fsQuad)
    this.needsSwap = false
  }

  filterGodRays(renderer, inputTex, renderTarget, stepSize) {
    this.orthoScene.overrideMaterial = this.materialGodraysGenerate

    this.godrayGenUniforms['fStepSize'].value = stepSize
    this.godrayGenUniforms['tInput'].value = inputTex

    renderer.setRenderTarget(renderTarget)
    renderer.render(this.orthoScene, this.orthoCamera)
    this.orthoScene.overrideMaterial = null
  }

  render(renderer, writeBuffer, readBuffer) {
    this.clipPosition.x = this.sunPosition.x
    this.clipPosition.y = this.sunPosition.y
    this.clipPosition.z = this.sunPosition.z
    this.clipPosition.w = 1

    this.clipPosition
      .applyMatrix4(this.camera.matrixWorldInverse)
      .applyMatrix4(this.camera.projectionMatrix)

    this.clipPosition.x /= this.clipPosition.w
    this.clipPosition.y /= this.clipPosition.w

    this.screenSpacePosition.x = (this.clipPosition.x + 1) / 2
    this.screenSpacePosition.y = (this.clipPosition.y + 1) / 2
    this.screenSpacePosition.z = this.clipPosition.z

    this.godrayGenUniforms['vSunPositionScreenSpace'].value.copy(
      this.screenSpacePosition
    )
    this.godraysFakeSunUniforms['vSunPositionScreenSpace'].value.copy(
      this.screenSpacePosition
    )

    const sunsqH = 0.74 * window.innerHeight
    const sunsqW = 0.74 * window.innerHeight

    this.screenSpacePosition.x *= window.innerWidth
    this.screenSpacePosition.y *= window.innerHeight

    renderer.setScissor(
      this.screenSpacePosition.x - sunsqW / 2,
      this.screenSpacePosition.y - sunsqH / 2,
      sunsqW,
      sunsqH
    )
    renderer.setScissorTest(true)

    this.godraysFakeSunUniforms['fAspect'].value = this.camera.aspect

    this.orthoScene.overrideMaterial = this.materialGodraysFakeSun
    renderer.setRenderTarget(readBuffer)
    renderer.render(this.orthoScene, this.orthoCamera)

    renderer.setScissorTest(false)

    this.scene.overrideMaterial = this.materialDepth
    renderer.setRenderTarget(this.rtTextureDepth)
    renderer.clear()
    renderer.render(this.scene, this.camera)
    this.scene.overrideMaterial = null

    this.godrayMaskUniforms['tInput'].value = this.rtTextureDepth.texture
    this.orthoScene.overrideMaterial = this.materialGodraysDepthMask
    renderer.setRenderTarget(this.rtTextureDepthMask)
    renderer.render(this.orthoScene, this.orthoCamera)

    this.filterGodRays(
      renderer,
      this.rtTextureDepthMask.texture,
      this.rtTextureGodRays2,
      1 / 6
    )
    this.filterGodRays(
      renderer,
      this.rtTextureGodRays2.texture,
      this.rtTextureGodRays1,
      1 / (6 * 6)
    )
    this.filterGodRays(
      renderer,
      this.rtTextureGodRays1.texture,
      this.rtTextureGodRays2,
      1 / (6 * 6 * 6)
    )

    this.godrayCombineUniforms['tColors'].value = readBuffer.texture
    this.godrayCombineUniforms['tGodRays'].value =
      this.rtTextureGodRays2.texture

    this.orthoScene.overrideMaterial = this.materialGodraysCombine
    if (this.renderToScreen) {
      renderer.setRenderTarget(null)
      renderer.render(this.orthoScene, this.orthoCamera)
    } else {
      renderer.setRenderTarget(writeBuffer)
      renderer.clear()
      renderer.render(this.orthoScene, this.orthoCamera)
    }
    this.orthoScene.overrideMaterial = null
  }

  setSize(width, height) {
    this.rtTextureDepth.setSize(width, height)
    this.rtTextureDepthMask.setSize(width, height)

    const adjustedWidth = width * this.multiplier
    const adjustedHeight = height * this.multiplier
    this.rtTextureGodRays1.setSize(adjustedWidth, adjustedHeight)
    this.rtTextureGodRays2.setSize(adjustedWidth, adjustedHeight)
  }

  dispose() {
    this.orthoScene.remove(this.orthoCamera)
    this.orthoScene.remove(this.fsQuad)

    this.rtTextureDepth.dispose()
    this.rtTextureDepthMask.dispose()
    this.rtTextureGodRays1.dispose()
    this.rtTextureGodRays2.dispose()

    this.materialDepth.dispose()
    this.materialGodraysDepthMask.dispose()
    this.materialGodraysFakeSun.dispose()
    this.materialGodraysCombine.dispose()
    this.materialGodraysGenerate.dispose()
  }
}
