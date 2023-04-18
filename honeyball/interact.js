import { R } from './R'
import { PI } from './math'
import { xrotate, xscale, xtranslate } from './math/hypermath'
import { plot, render } from './render'

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

export const dragMove = (e, pointers) => {
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
}

export const gestureMove = (e, pointers) => {
  if (pointers.length > 2) {
    return
  }
  rotate((PI * e.da) / 180)
  scale(e.ds)
  plot(true)
  render()
}

export const keydown = e => {
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
  } else {
    return
  }
  plot(true)
  render()
}

export const wheel = e => {
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
}
