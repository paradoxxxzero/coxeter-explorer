import { Vector2 } from 'three'
import { C, getC, setC } from './honeyball/C'
import { interactions } from './honeyball/interact'
import { max } from './honeyball/math'
import {
  camera,
  clear,
  composer,
  initialize3d,
  plot,
  render,
  renderer,
} from './honeyball/render'
import Tiling from './honeyball/tiling.worker?worker'
import { setProcess, worker } from './honeyball/utlis'
import { setR, R } from './honeyball/R'

const tiling = new Tiling()
window.C = C
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
    window.bloomPass.resolution = new Vector2(width, height)
    window.fxaaPass.material.uniforms['resolution'].value.x =
      1 / (width * renderer.getPixelRatio())
    window.fxaaPass.material.uniforms['resolution'].value.y =
      1 / (height * renderer.getPixelRatio())
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

setProcess(level => {
  if (level) {
    document.getElementById('space').classList.add('processing')
  } else {
    document.getElementById('space').classList.remove('processing')
  }
})

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
  document.querySelector('#vertices').checked = C.vertices
  document.querySelector('#edges').checked = C.edges
}

const update = async event => {
  if (document.getElementById('space').classList.contains('processing')) {
    restore()
    return
  }
  const target = event?.target.id
  const newC = {}
  newC.dimensions = document.querySelector('#d4').checked ? 4 : 3

  if (target === 'd4') {
    const setK = (d, v) => {
      document.querySelector(`#${d}`).value = v
    }
    const getK = d => +document.querySelector(`#${d}`).value

    document.querySelectorAll('.d4').forEach(el => {
      el.style.display = newC.dimensions === 4 ? 'block' : 'none'
    })
    if (newC.dimensions === 4) {
      setK('s', getK('q'))
      setK('u', getK('r'))
      setK('q', 2)
      setK('r', 2)
      setK('t', 2)
    } else if (newC.dimensions === 3) {
      setK('q', max(getK('s'), getK('q')))
      setK('r', max(getK('r'), getK('t'), getK('u')))
      setK('s', 2)
      setK('u', 2)
      setK('t', 2)
      document.querySelector('#mirror-w').checked = false
    }
  }
  if (target?.startsWith('mirror-')) {
    if (
      'xyzw'
        .split('')
        .every(d => !document.querySelector(`#mirror-${d}`).checked)
    ) {
      document.querySelector('#mirror-x').checked = true
    }
  }

  'pqrstu'.split('').forEach(d => {
    newC[d] = +document.querySelector(`#${d}`).value
  })
  'xyzw'.split('').forEach(d => {
    newC[d] = document.querySelector(`#mirror-${d}`).checked
  })

  newC.order = +document.querySelector('#order').value
  newC.segments = +document.querySelector('#segments').value
  newC.vertices = document.querySelector('#vertices').checked
  newC.edges = document.querySelector('#edges').checked

  const changed = Object.keys(newC).filter(key => newC[key] !== C[key])

  const lastOrder = C.order

  let mustRedraw = !target
  if (
    mustRedraw ||
    ['p', 'q', 'r', 's', 't', 'u', 'dimensions'].some(key =>
      changed.includes(key)
    )
  ) {
    mustRedraw = true
  }

  setC(newC, true)

  if (
    mustRedraw ||
    ['x', 'y', 'z', 'w', 'order'].some(key => changed.includes(key))
  ) {
    if (target === 'order' && R.orders[C.order - 1]) {
      clear()
      plot(R.orders[C.order - 1])
      render()
    } else {
      const startOrder = target === 'order' ? lastOrder : 0

      for (let i = startOrder; i < C.order; i++) {
        const {
          R: newR,
          vertices,
          edges,
        } = await worker(tiling, {
          C,
          order: i,
        })

        if (i === 0) {
          setR({ ...newR, orders: {} })
          document.querySelector('#space').innerHTML = `${
            R.curvature === 0
              ? '&#x1D53C'
              : R.curvature > 0
              ? '&#x1D54A'
              : '&#x210D'
          }<sup>${C.dimensions - 1}</sup>`
        }

        if (vertices.length || edges.length) {
          // TODO: Do no reconstruct
          clear()

          R.vertices = R.vertices.concat(vertices)
          R.edges = R.edges.concat(edges)
          R.orders[i] = {
            verticesIndex: R.vertices.length,
            edgesIndex: R.edges.length,
          }
          const t = performance.now()
          plot(R.orders[i])
          render()
        } else {
          R.orders[i] = {
            verticesIndex: R.vertices.length,
            edgesIndex: R.edges.length,
          }
        }
      }
    }
  } else {
    if (['edges', 'vertices', 'segments'].some(key => changed.includes(key))) {
      clear()
      plot(R.orders[C.order - 1])
    }
    render()
  }
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', update)
})

document.getElementById('space').addEventListener('click', () => {
  document.body.classList.toggle('real-estate')
})

getC()
restore()
update()

interactions()
