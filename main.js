import { interactions } from './interact'
import { camera, initialize3d, render, renderer, set } from './render'
import './style.css'

Object.assign(window, initialize3d())

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
// PQR 3 5 3
// PQR 4 3 5
// PQR 5 3 5

// // One ideal point
// PQR 3 4 4
// PQR 3 3 6
// PQR 4 3 6
// PQR 5 3 6

// // Two ideal points
// PQR 6 3 6
// PQR 4 4 4
// PQR 3 6 3

// // Various non-regular angles
// PQR 5 3 7
// PQR 6 3 11
// PQR 2 3 7
// PQR 3 3 7
// PQR 5 5 5

const update = () => {
  set({
    p: +document.querySelector('#p').value,
    q: +document.querySelector('#q').value,
    r: +document.querySelector('#r').value,
    activeMirrors: Array.from(
      document.querySelectorAll('input[type=checkbox][id^=mirror]')
    )
      .map((checkbox, i) => (checkbox.checked ? i : null))
      .filter(x => x !== null),
    order: +document.querySelector('#order').value,
    subOrder: +document.querySelector('#sub-order').value,
    simplex: document.querySelector('#shifted').checked
      ? 'shifted'
      : 'centered',
    DEBUG: document.querySelector('#debug').checked,
  })
  render()
}
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', update)
})

update()

interactions()
