import { useEffect } from 'react'
import { xtranslate } from '../math/hypermath'
import { multiply, set } from '../math/matrix'
import { plot } from '../render'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const translate = (offset, shift, matrix, dimensions, curvature) => {
  set(
    matrix,
    multiply(matrix, xtranslate(offset[0], shift * 2, dimensions, curvature))
  )
  if (shift * 2 + 1 < dimensions) {
    set(
      matrix,
      multiply(
        matrix,
        xtranslate(offset[1], shift * 2 + 1, dimensions, curvature)
      )
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
    }

    const onDown = e => {
      if (
        runtime.controls !== 'free' ||
        e.button !== 0 ||
        e.target.tagName !== 'CANVAS'
      ) {
        return
      }
      const onUp = e => {
        if (runtime.controls !== 'free') {
          return
        }
        document.removeEventListener('pointermove', onMove, true)
      }
      document.addEventListener('pointermove', onMove, true)
      document.addEventListener('pointerup', onUp, { once: true })
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [runtime, updateMatrix])

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

  useEffect(() => {
    const orbitControls = new OrbitControls(
      runtime.camera,
      runtime.composer.renderer.domElement
    )
    orbitControls.target.set(0, 0, 0)
    orbitControls.minDistance = 0
    orbitControls.maxDistance = 100
    orbitControls.addEventListener('change', () => runtime.composer.render())
    orbitControls.update()

    runtime.composer.renderer.domElement.addEventListener('dblclick', () => {
      orbitControls.position0.set(
        0,
        0,
        orbitControls.position0.z === -1
          ? -0.25
          : orbitControls.position0.z === -0.25
          ? -10
          : -1,
        0,
        0
      )
      orbitControls.reset()
    })
    return () => {
      orbitControls.dispose()
    }
  }, [runtime.camera, runtime.composer])
}
