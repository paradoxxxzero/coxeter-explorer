import { render } from 'react-dom'
import { Vector2 } from 'three'

export const size = gl => {
  const { renderer, camera, composer } = gl
  const subsampling = 1

  const width = window.innerWidth * subsampling
  const height = window.innerHeight * subsampling
  const currentCanvas = renderer.domElement
  if (currentCanvas.width !== width || currentCanvas.height !== height) {
    camera.aspect = width / height
    camera.zoom = Math.min(1, width / height)
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    composer.setSize(width, height)
    const pixelRatio = renderer.getPixelRatio()
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

    if (subsampling !== 1) {
      currentCanvas.style.width = null
      currentCanvas.style.height = null
    } else {
      currentCanvas.style.width = width + 'px'
      currentCanvas.style.height = height + 'px'
    }
  }

  render()
}
