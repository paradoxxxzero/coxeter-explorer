import { render, plot } from './render'
import interact from 'interactjs'
import { R } from './R'
import { xtranslate, xrotate, xscale, xlerp } from './math/hypermath'
import { C } from './C'
import { PI } from './math'

const translate = offset => {
  for (let i = 0; i < R.vertices.length; i++) {
    const { vertex } = R.vertices[i]
    xtranslate(vertex, offset)
  }
  for (let i = 0; i < R.edges.length; i++) {
    const { start, end } = R.edges[i]
    xtranslate(start, offset)
    xtranslate(end, offset)
    // R.edges[i].segments = xlerp(start, end)
  }
}

const rotate = theta => {
  for (let i = 0; i < R.vertices.length; i++) {
    const { vertex } = R.vertices[i]
    xrotate(vertex, theta)
  }
  for (let i = 0; i < R.edges.length; i++) {
    const { start, end } = R.edges[i]
    xrotate(start, theta)
    xrotate(end, theta)
    // R.edges[i].segments = xlerp(start, end)
  }
}

const scale = factor => {
  for (let i = 0; i < R.vertices.length; i++) {
    const { vertex } = R.vertices[i]
    xscale(vertex, factor)
  }
  for (let i = 0; i < R.edges.length; i++) {
    const { start, end } = R.edges[i]
    xscale(start, factor)
    xscale(end, factor)
    // R.edges[i].segments = xlerp(start, end)
  }
}

export const interactions = () => {
  const pointers = []
  document.querySelector('canvas').addEventListener('pointerdown', e => {
    pointers.push(e.pointerId)
  })
  document.querySelector('canvas').addEventListener('pointerup', e => {
    const index = pointers.indexOf(e.pointerId)
    if (index > -1) {
      pointers.splice(index, 1)
    }
  })

  interact('canvas')
    .draggable({
      listeners: {
        move: e => {
          if (C.controls !== 'free') {
            return
          }
          const w2 = window.innerWidth / 2
          const h2 = window.innerHeight / 2
          const radius = Math.min(w2, h2) * 0.9
          if (e.ctrlKey) {
            rotate(-e.dx / (2 * radius))
            scale(-e.dy / (2 * radius))
          } else {
            const xt = -e.dx / w2
            const yt = -e.dy / h2
            if (e.shiftKey || pointers.length > 2) {
              translate([0, 0, yt])
            } else {
              translate([xt, yt, 0])
            }
          }
          plot(true)
          render()
        },
      },
    })
    .gesturable({
      onmove: e => {
        if (C.controls !== 'free' || pointers.length > 2) {
          return
        }
        rotate((PI * e.da) / 180)
        scale(e.ds)
        plot(true)
        render()
      },
    })
  document.addEventListener('wheel', e => {
    if (C.controls !== 'free') {
      return
    }
    const w2 = window.innerWidth / 2
    const h2 = window.innerHeight / 2
    const radius = Math.min(w2, h2) * 0.9
    const delta = (10 * (e.deltaMode === 1 ? e.deltaY * 10 : e.deltaY)) / radius
    if (e.ctrlKey) {
      rotate((PI * delta) / 180)
    } else {
      scale(-delta / 100)
    }
    plot(true)
    render()
  })
  document.addEventListener('keydown', e => {
    if (C.controls !== 'free') {
      return
    }
    const { code } = e
    const step = 0.01
    if (code === 'ArrowLeft' || code === 'KeyA') {
      translate([-step, 0, 0])
    } else if (code === 'ArrowRight' || code === 'KeyD') {
      translate([step, 0, 0])
    } else if (code === 'ArrowUp' || code === 'KeyW') {
      translate([0, 0, -step])
    } else if (code === 'ArrowDown' || code === 'KeyS') {
      translate([0, 0, step])
    } else if (code === 'PageUp' || code === 'KeyQ') {
      translate([0, -step, 0])
    } else if (code === 'PageDown' || code === 'KeyE') {
      translate([0, step, 0])
    } else if (code === 'Digit1') {
      rotate(-(PI * 5) / 180)
    } else if (code === 'Digit3') {
      rotate((PI * 5) / 180)
    } else if (code === 'KeyZ') {
      scale(-step)
    } else if (code === 'KeyC') {
      scale(step)
    }
    plot(true)
    render()
  })
}
