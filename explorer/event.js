import { Vector2 } from 'three'

export const size = (rt, width = null, height = null, pixelRatio = 1) => {
  const { camera, composer } = rt

  width = width || window.innerWidth
  height = height || window.innerHeight
  const currentCanvas = composer.renderer.domElement
  if (currentCanvas.width !== width || currentCanvas.height !== height) {
    camera.aspect = width / height
    camera.zoom = Math.min(1, width / height)
    camera.updateProjectionMatrix()
    composer.renderer.setSize(width, height)
    composer.setSize(width, height)
    pixelRatio = pixelRatio || composer.renderer.getPixelRatio()
    composer.setPixelRatio(pixelRatio)

    const w = width * pixelRatio
    const h = height * pixelRatio
    composer.passes.forEach(pass => {
      if (pass.material?.uniforms?.['resolution']) {
        let cw = w
        let ch = h
        if (pass.material.uniforms['resolution'].value.x <= 1) {
          cw = 1 / cw
          ch = 1 / ch
        }
        pass.material.uniforms['resolution'].value.x = cw
        pass.material.uniforms['resolution'].value.y = ch
      }
      if (pass.resolution) {
        pass.resolution = new Vector2(width, height)
      }
    })

    if (width !== window.innerWidth || height !== window.innerHeight) {
      currentCanvas.style.width = null
      currentCanvas.style.height = null
    } else {
      currentCanvas.style.width = width + 'px'
      currentCanvas.style.height = height + 'px'
    }
  }

  rt.render()
}
