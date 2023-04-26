import interact from 'interactjs'
import { useEffect, useLayoutEffect } from 'react'
import { PI } from '../math'
import { xrotate, xscale, xtranslate } from '../math/hypermath'
import { plot } from '../render'

const translate = (offset, vertices, edges, curvature) => {
  for (let i = 0; i < vertices.length; i++) {
    const { vertex } = vertices[i]
    xtranslate(vertex, offset, curvature)
  }
  for (let i = 0; i < edges.length; i++) {
    const { start, end } = edges[i]
    xtranslate(start, offset, curvature)
    xtranslate(end, offset, curvature)
  }
}

const rotate = (theta, vertices, edges, curvature) => {
  for (let i = 0; i < vertices.length; i++) {
    const { vertex } = vertices[i]
    xrotate(vertex, theta, curvature)
  }
  for (let i = 0; i < edges.length; i++) {
    const { start, end } = edges[i]
    xrotate(start, theta, curvature)
    xrotate(end, theta, curvature)
  }
}

const scale = (factor, vertices, edges, curvature) => {
  for (let i = 0; i < vertices.length; i++) {
    const { vertex } = vertices[i]
    xscale(vertex, factor, curvature)
  }
  for (let i = 0; i < edges.length; i++) {
    const { start, end } = edges[i]
    xscale(start, factor, curvature)
    xscale(end, factor, curvature)
  }
}

export const dragMove = (e, dimensions, vertices, edges, curvature, shift) => {
  const w2 = window.innerWidth / 2
  const h2 = window.innerHeight / 2
  const radius = Math.min(w2, h2) * 0.9
  if (e.ctrlKey) {
    rotate(-e.dx / (2 * radius), vertices, edges, curvature)
    scale(-e.dy / (2 * radius), vertices, edges, curvature)
  } else {
    const xt = -e.dx / w2
    const yt = -e.dy / h2
    const offset = new Array(dimensions).fill(0)
    if (!shift && e.shiftKey) {
      shift = 1
    } else if (!shift && e.altKey) {
      shift = 2
    } else if (!shift && e.ctrKey) {
      shift = 3
    } else if (!shift && e.metaKey) {
      shift = 4
    }

    offset[shift * 2] = xt
    offset[shift * 2 + 1] = yt

    translate(offset, vertices, edges, curvature)
  }
}

export const gestureMove = (e, vertices, edges, curvature, shift) => {
  rotate((PI * e.da) / 180, vertices, edges, curvature)
  scale(e.ds, vertices, edges, curvature)
}

export const keydown = (e, vertices, edges, curvature) => {
  const { code } = e
  if (e.target !== document.body) {
    return
  }
  const step = 0.01
  if (code === 'ArrowLeft' || code === 'KeyA') {
    translate([-step, 0, 0, 0], vertices, edges, curvature)
  } else if (code === 'ArrowRight' || code === 'KeyD') {
    translate([step, 0, 0, 0], vertices, edges, curvature)
  } else if (code === 'ArrowUp' || code === 'KeyW') {
    translate([0, 0, -step, 0], vertices, edges, curvature)
  } else if (code === 'ArrowDown' || code === 'KeyS') {
    translate([0, 0, step, 0], vertices, edges, curvature)
  } else if (code === 'PageUp' || code === 'KeyQ') {
    translate([0, -step, 0, 0], vertices, edges, curvature)
  } else if (code === 'PageDown' || code === 'KeyE') {
    translate([0, step, 0, 0], vertices, edges, curvature)
  } else if (code === 'Digit1') {
    rotate(-(PI * 5) / 180, vertices, edges, curvature)
  } else if (code === 'Digit3') {
    rotate((PI * 5) / 180, vertices, edges, curvature)
  } else if (code === 'KeyZ') {
    scale(-step, vertices, edges, curvature)
  } else if (code === 'KeyC') {
    scale(step, vertices, edges, curvature)
  } else {
    return
  }
  return true
}

export const wheel = (e, vertices, edges, curvature, shift) => {
  const w2 = window.innerWidth / 2
  const h2 = window.innerHeight / 2
  const radius = Math.min(w2, h2) * 0.9
  const delta = (10 * (e.deltaMode === 1 ? e.deltaY * 10 : e.deltaY)) / radius
  if (e.shiftKey === !!shift) {
    rotate((PI * delta) / 180, vertices, edges, curvature)
  } else {
    scale(-delta / 100, vertices, edges, curvature)
  }
}

export const useInteract = runtime => {
  useLayoutEffect(() => {
    const handle = interact(runtime.composer.renderer.domElement)
      .draggable({
        listeners: {
          move: e => {
            if (runtime.controls !== 'free') {
              return
            }
            dragMove(
              e,
              runtime.dimensions,
              runtime.vertices,
              runtime.edges,
              runtime.curvature,
              runtime.controlsShift
            )
            plot(runtime)
          },
        },
      })
      .gesturable({
        onmove: e => {
          if (runtime.controls !== 'free') {
            return
          }
          gestureMove(
            e,
            runtime.vertices,
            runtime.edges,
            runtime.curvature,
            runtime.controlsShift
          )
          plot(runtime)
        },
      })

    return () => {
      handle.unset()
    }
  }, [runtime])

  useEffect(() => {
    const onWheel = e => {
      if (runtime.controls === 'orbit') {
        return
      }
      wheel(
        e,
        runtime.vertices,
        runtime.edges,
        runtime.curvature,
        runtime.controlsShift
      )
      plot(runtime)
    }

    document.addEventListener('wheel', onWheel, { passive: false })
    return () => document.removeEventListener('wheel', onWheel)
  }, [runtime])

  useEffect(() => {
    const onKeyDown = e => {
      keydown(
        e,
        runtime.vertices,
        runtime.edges,
        runtime.curvature,
        runtime.controlsShift
      ) && plot(runtime)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [runtime])
}
