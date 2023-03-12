import { C, getC, setC } from './honeyball/C'
import { interactions } from './honeyball/interact'
import {
  camera,
  clear,
  composer,
  initialize3d,
  render,
  renderer,
  generate,
} from './honeyball/render'
import './style.css'
import { getCurvature } from './honeyball/math/hypermath'
import { cos, PI } from './honeyball/math'

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
    composer.setSize(width, height)
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

const restore = () => {
  document.querySelector('#d4').checked = C.dimensions === 4
  document.querySelectorAll('.d4').forEach(el => {
    el.style.display = C.dimensions === 4 ? 'block' : 'none'
  })
  'pqrstu'.split('').forEach(d => {
    document.querySelector(`#${d}`).value = C[d]
  })
  'xyzw'.split('').forEach(d => {
    document.querySelector(`#mirror-${d}`).checked = !!C[d]
  })
  document.querySelector('#order').value = C.order
  document.querySelector('#segments').value = C.segments
  document.querySelector('#debug').checked = C.DEBUG
  document.querySelector('#vertices').checked = C.vertices
  document.querySelector('#edges').checked = C.edges
}

const update = () => {
  const newC = {}
  newC.dimensions = document.querySelector('#d4').checked ? 4 : 3

  document.querySelectorAll('.d4').forEach(el => {
    el.style.display = newC.dimensions === 4 ? 'block' : 'none'
  })
  'pqrstu'.split('').forEach(d => {
    newC[d] = +document.querySelector(`#${d}`).value
  })
  'xyzw'.split('').forEach(d => {
    newC[d] = document.querySelector(`#mirror-${d}`).checked
  })
  if (
    (C.dimensions === 4 && newC.dimensions === 3) ||
    (C.dimensions === 3 && newC.dimensions === 4)
  ) {
    ;[newC.q, newC.s] = [newC.s, newC.q]
    ;[newC.r, newC.u] = [newC.u, newC.r]
    'pqrstu'.split('').forEach(d => {
      document.querySelector(`#${d}`).value = newC[d]
    })
  }
  newC.order = +document.querySelector('#order').value
  newC.segments = +document.querySelector('#segments').value
  newC.DEBUG = document.querySelector('#debug').checked
  newC.vertices = document.querySelector('#vertices').checked
  newC.edges = document.querySelector('#edges').checked

  newC.coxeter =
    newC.dimensions === 3
      ? [
          [-1, newC.p, newC.q],
          [newC.p, -1, newC.r],
          [newC.q, newC.r, -1],
        ]
      : newC.dimensions === 4
      ? [
          [-1, newC.p, newC.q, newC.r],
          [newC.p, -1, newC.s, newC.t],
          [newC.q, newC.s, -1, newC.u],
          [newC.r, newC.t, newC.u, -1],
        ]
      : null

  newC.gram = newC.coxeter.map(row => row.map(column => -cos(PI / column)))

  newC.curvature = getCurvature(newC.gram)
  document.querySelector('#space').innerHTML = `${
    newC.curvature === 0
      ? '&#x1D53C'
      : newC.curvature > 0
      ? '&#x1D54A'
      : '&#x210D'
  }<sup>${newC.dimensions - 1}</sup>`

  setC(newC)
  clear()
  generate()
  render()
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', update)
})

getC()
restore()
update()

interactions()
