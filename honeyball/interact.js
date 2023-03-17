import { render, plot } from './render'
import interact from 'interactjs'
import { R } from './R'
import { xtranslate, xrotate, xscale, xlerp } from './math/hypermath'

const translate = offset => {
  for (let i = 0; i < R.vertices.length; i++) {
    const { vertex } = R.vertices[i]
    xtranslate(vertex, offset)
  }
  for (let i = 0; i < R.edges.length; i++) {
    const { start, end } = R.edges[i]
    xtranslate(start, offset)
    xtranslate(end, offset)
    R.edges[i].segments = xlerp(start, end)
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
    R.edges[i].segments = xlerp(start, end)
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
    R.edges[i].segments = xlerp(start, end)
  }
}

export const interactions = () => {
  interact('canvas').draggable({
    listeners: {
      move: e => {
        const w2 = window.innerWidth / 2
        const h2 = window.innerHeight / 2
        const radius = Math.min(w2, h2) * 0.9
        if (e.ctrlKey) {
          rotate(-e.dx / (2 * radius))
          scale(-e.dy / (2 * radius))
        } else {
          const xt = e.shiftKey ? 0 : e.dx / w2
          const yt = e.shiftKey ? 0 : -e.dy / h2
          const zt = e.shiftKey ? e.dy / h2 : 0
          translate([xt, yt, zt])
        }
        // controls.enabled = false
        plot(true)
        render()
      },
      end: () => {
        // controls.enabled = true
      },
    },
  })
  // .gesturable({
  //   onmove: e => {
  //     if (backend !== '3d') {
  //       rotate(-(Math.PI * e.da) / 180)
  //       scale(-e.ds)
  //       render()
  //     }
  //   },
  // })
}
