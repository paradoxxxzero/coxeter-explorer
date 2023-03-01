import { interactions } from './interact'
import { camera, initialize3d, render, renderer, set } from './render'
import './style.css'

Object.assign(window, initialize3d())
set({
  p: 5,
  q: 3,
  r: 2,
  s: 2,
  t: 4,
  u: 2,
  activeMirrors: [0],
  order: 3,
  subOrder: 12,
  // DEBUG: true,
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

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', e => {
    set({
      p: +document.querySelector('#p').value,
      q: +document.querySelector('#q').value,
      r: +document.querySelector('#r').value,
      s: +document.querySelector('#s').value,
      t: +document.querySelector('#t').value,
      u: +document.querySelector('#u').value,
      activeMirrors: Array.from(
        document.querySelectorAll('input[type=checkbox][id^=mirror]')
      )
        .map((checkbox, i) => (checkbox.checked ? i : null))
        .filter(x => x !== null),
      order: +document.querySelector('#order').value,
      subOrder: +document.querySelector('#sub-order').value,
      DEBUG: document.querySelector('#debug').checked,
    })
    render()
  })
})
