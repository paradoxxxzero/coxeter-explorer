import { useEffect } from 'react'
import { xtranslate } from '../math/hypermath'
import { multiply } from '../math/matrix'
import { plot } from '../render'

const translate = (offset, shift, matrix, dimensions, curvature) => {
  multiply(matrix, xtranslate(offset[0], shift * 2, dimensions, curvature))
  if (shift * 2 + 1 < dimensions) {
    multiply(
      matrix,
      xtranslate(offset[1], shift * 2 + 1, dimensions, curvature)
    )
  }
}

export const dragMove = (e, matrix, dimensions, curvature, shift) => {
  const w2 = window.innerWidth / 2
  const h2 = window.innerHeight / 2

  const xt = -e.movementX / w2
  const yt = -e.movementY / h2

  if (!shift && e.shiftKey) {
    shift = 1
  } else if (!shift && e.altKey) {
    shift = 2
  } else if (!shift && e.ctrKey) {
    shift = 3
  } else if (!shift && e.metaKey) {
    shift = 4
  }

  translate([xt, yt], shift, matrix, dimensions, curvature)
}

export const keydown = (e, matrix, dimensions, curvature) => {
  const { code } = e
  if (e.target !== document.body) {
    return
  }
  const step = 0.01
  if (code === 'ArrowLeft' || code === 'KeyA') {
    translate([-step, 0], 0, matrix, dimensions, curvature)
  } else if (code === 'ArrowRight' || code === 'KeyD') {
    translate([step, 0], 0, matrix, dimensions, curvature)
  } else if (code === 'ArrowUp' || code === 'KeyW') {
    translate([0, -step], 1, matrix, dimensions, curvature)
  } else if (code === 'ArrowDown' || code === 'KeyS') {
    translate([0, step], 1, matrix, dimensions, curvature)
  } else if (code === 'PageUp' || code === 'KeyQ') {
    translate([-step, 0], 2, matrix, dimensions, curvature)
  } else if (code === 'PageDown' || code === 'KeyE') {
    translate([step, 0], 2, matrix, dimensions, curvature)
  } else if (code === 'Digit1') {
    translate([0, -step], 2, matrix, dimensions, curvature)
  } else if (code === 'Digit3') {
    translate([0, step], 2, matrix, dimensions, curvature)
  } else if (code === 'KeyZ') {
    translate([-step, 0], 3, matrix, dimensions, curvature)
  } else if (code === 'KeyC') {
    translate([step, 0], 3, matrix, dimensions, curvature)
  } else {
    return
  }
  return true
}

// export const wheel = (e, matrix, dimensions, curvature, shift) => {
//   const w2 = window.innerWidth / 2
//   const h2 = window.innerHeight / 2
//   const radius = Math.min(w2, h2) * 0.9
//   const deltaY = (10 * (e.deltaMode === 1 ? e.deltaY * 10 : e.deltaY)) / radius
//   const deltaX = (10 * (e.deltaMode === 1 ? e.deltaY * 10 : e.deltaY)) / radius
//   translate(
//     [deltaY / 25, deltaX / 25],
//     shift + 1,
//     matrix,
//     dimensions,
//     curvature
//   )
// }

const debounce = (fn, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)

    return () => clearTimeout(timeout)
  }
}

export const useInteract = (runtime, updateMatrix_) => {
  const updateMatrix = debounce(updateMatrix_, 100)

  useEffect(() => {
    const onMove = e => {
      if (runtime.controls !== 'free') {
        return
      }
      dragMove(
        e,
        runtime.matrix,
        runtime.dimensions,
        runtime.curvature,
        runtime.controlsShift
      )
      plot(runtime)
      updateMatrix(runtime.matrix)
      e.stopImmediatePropagation()
      return false
    }

    const onDown = e => {
      if (runtime.controls !== 'free' || e.button !== 0) {
        return
      }
      const onUp = e => {
        if (runtime.controls !== 'free') {
          return
        }
        document.removeEventListener('pointermove', onMove)
      }
      document.addEventListener('pointermove', onMove)
      document.addEventListener('pointerup', onUp, { once: true })
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [runtime, updateMatrix])

  // useEffect(() => {
  //   const onWheel = e => {
  //     if (
  //       runtime.controls === 'orbit' ||
  //       e.target !== runtime.composer.renderer.domElement
  //     ) {
  //       return false
  //     }
  //     wheel(
  //       e,
  //       runtime.matrix,
  //       runtime.dimensions,
  //       runtime.curvature,
  //       runtime.controlsShift
  //     )
  //     plot(runtime)
  //     updateMatrix(runtime.matrix)
  //     return false
  //   }

  //   document.addEventListener('wheel', onWheel, { passive: false })
  //   return () => document.removeEventListener('wheel', onWheel)
  // }, [runtime, updateMatrix])

  useEffect(() => {
    const onKeyDown = e => {
      if (
        keydown(
          e,
          runtime.matrix,
          runtime.dimensions,
          runtime.curvature,
          runtime.controlsShift
        )
      ) {
        plot(runtime)
        updateMatrix(runtime.matrix)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [runtime, updateMatrix])
}
