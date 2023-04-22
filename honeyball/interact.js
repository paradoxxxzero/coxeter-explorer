import interact from 'interactjs'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { PI } from './math'
import { xrotate, xscale, xtranslate } from './math/hypermath'
import { plot } from './render'

const translate = (offset, vertices, edges) => {
  for (let i = 0; i < vertices.length; i++) {
    const { vertex } = vertices[i]
    xtranslate(vertex, offset)
  }
  for (let i = 0; i < edges.length; i++) {
    const { start, end } = edges[i]
    xtranslate(start, offset)
    xtranslate(end, offset)
    // edges[i].segments = xlerp(start, end)
  }
}

const rotate = (theta, vertices, edges) => {
  for (let i = 0; i < vertices.length; i++) {
    const { vertex } = vertices[i]
    xrotate(vertex, theta)
  }
  for (let i = 0; i < edges.length; i++) {
    const { start, end } = edges[i]
    xrotate(start, theta)
    xrotate(end, theta)
    // edges[i].segments = xlerp(start, end)
  }
}

const scale = (factor, vertices, edges) => {
  for (let i = 0; i < vertices.length; i++) {
    const { vertex } = vertices[i]
    xscale(vertex, factor)
  }
  for (let i = 0; i < edges.length; i++) {
    const { start, end } = edges[i]
    xscale(start, factor)
    xscale(end, factor)
    // edges[i].segments = xlerp(start, end)
  }
}

export const dragMove = (e, pointers, vertices, edges) => {
  const w2 = window.innerWidth / 2
  const h2 = window.innerHeight / 2
  const radius = Math.min(w2, h2) * 0.9
  if (e.ctrlKey) {
    rotate(-e.dx / (2 * radius), vertices, edges)
    scale(-e.dy / (2 * radius), vertices, edges)
  } else {
    const xt = -e.dx / w2
    const yt = -e.dy / h2
    if (e.shiftKey || pointers.length > 2) {
      translate([0, 0, yt], vertices, edges)
    } else {
      translate([xt, yt, 0], vertices, edges)
    }
  }
}

export const gestureMove = (e, pointers, vertices, edges) => {
  if (pointers.length > 2) {
    return
  }
  rotate((PI * e.da) / 180, vertices, edges)
  scale(e.ds, vertices, edges)
}

export const keydown = (e, vertices, edges) => {
  const { code } = e
  const step = 0.01
  if (code === 'ArrowLeft' || code === 'KeyA') {
    translate([-step, 0, 0], vertices, edges)
  } else if (code === 'ArrowRight' || code === 'KeyD') {
    translate([step, 0, 0], vertices, edges)
  } else if (code === 'ArrowUp' || code === 'KeyW') {
    translate([0, 0, -step], vertices, edges)
  } else if (code === 'ArrowDown' || code === 'KeyS') {
    translate([0, 0, step], vertices, edges)
  } else if (code === 'PageUp' || code === 'KeyQ') {
    translate([0, -step, 0], vertices, edges)
  } else if (code === 'PageDown' || code === 'KeyE') {
    translate([0, step, 0], vertices, edges)
  } else if (code === 'Digit1') {
    rotate(-(PI * 5) / 180, vertices, edges)
  } else if (code === 'Digit3') {
    rotate((PI * 5) / 180, vertices, edges)
  } else if (code === 'KeyZ') {
    scale(-step, vertices, edges)
  } else if (code === 'KeyC') {
    scale(step, vertices, edges)
  } else {
    return
  }
  return true
}

export const wheel = (e, vertices, edges) => {
  const w2 = window.innerWidth / 2
  const h2 = window.innerHeight / 2
  const radius = Math.min(w2, h2) * 0.9
  const delta = (10 * (e.deltaMode === 1 ? e.deltaY * 10 : e.deltaY)) / radius
  if (e.ctrlKey) {
    rotate((PI * delta) / 180, vertices, edges)
  } else {
    scale(-delta / 100, vertices, edges)
  }
  plot()
}

export const useInteractions = runtime => {
  const pointers = useRef([])

  useLayoutEffect(() => {
    const pointerdown = e => {
      pointers.current.push(e.pointerId)
    }
    const pointerup = e => {
      pointers.current = pointers.current.filter(id => id !== e.pointerId)
    }

    runtime.composer.renderer.domElement.addEventListener(
      'pointerdown',
      pointerdown
    )
    runtime.composer.renderer.domElement.addEventListener(
      'pointerup',
      pointerup
    )
    const handle = interact(runtime.composer.renderer.domElement)
      .draggable({
        listeners: {
          move: e => {
            if (runtime.controls !== 'free') {
              return
            }
            dragMove(e, pointers.current, runtime.vertices, runtime.edges)
            plot(runtime)
          },
        },
      })
      .gesturable({
        onmove: e => {
          if (runtime.controls !== 'free') {
            return
          }
          gestureMove(e, pointers.current, runtime.vertices, runtime.edges)
          plot(runtime)
        },
      })

    return () => {
      runtime.composer.renderer.domElement.removeEventListener(
        'pointerdown',
        pointerdown
      )
      runtime.composer.renderer.domElement.removeEventListener(
        'pointerup',
        pointerup
      )
      handle.unset()
    }
  }, [runtime])

  useEffect(() => {
    const onWheel = e => {
      if (runtime.controls === 'orbit') {
        return
      }
      wheel(e, runtime.vertices, runtime.edges)
    }

    document.addEventListener('wheel', onWheel, { passive: false })
    return () => document.removeEventListener('wheel', onWheel)
  }, [runtime])

  useEffect(() => {
    const onKeyDown = e => {
      keydown(e, runtime.vertices, runtime.edges) && plot(runtime)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [runtime])
}
