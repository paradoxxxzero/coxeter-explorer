import { interactions } from './interact'
import { camera, initialize3d, render, renderer, set } from './render'
import './style.css'

Object.assign(window, initialize3d())
set({
  p: 3,
  q: 3,
  r: 2,
  s: 2,
  t: 6,
  u: 2,
  activeMirrors: [0],
})

const size = () => {
  const subsampling = 1
  const width = window.innerWidth * subsampling
  const height = window.innerHeight * subsampling
  const currentCanvas = renderer.domElement
  if (currentCanvas.width !== width || currentCanvas.height !== height) {
    camera.aspect = width / height
    camera.zoom = Math.min(1, width / height)
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
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

window.ondeviceorientation = window.onresize = size
// size()

interactions()
