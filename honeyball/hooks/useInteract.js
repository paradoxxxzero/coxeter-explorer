import { useEffect, useRef } from 'react'
import { xtranslate } from '../math/hypermath'
import { multiply, set } from '../math/matrix'
import { plot } from '../render'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { debounce } from '../../utils'
import { abs } from '../math'

const translate = (offset, shift, matrix, dimensions, curvature) => {
  set(
    matrix,
    multiply(matrix, xtranslate(offset[0], shift * 2, dimensions, curvature))
  )
  set(
    matrix,
    multiply(
      matrix,
      xtranslate(offset[1], shift * 2 + 1, dimensions, curvature)
    )
  )
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
export const useInteract = (runtime, updateMatrix_, updateView_) => {
  const updateMatrix = debounce(updateMatrix_, 100)
  const updateView = debounce(updateView_, 1000)
  const controls = useRef()

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
  }, [runtime, runtime.matrix, updateMatrix])

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
  }, [runtime, runtime.matrix, updateMatrix])

  useEffect(() => {
    controls.current = new OrbitControls(
      runtime.camera,
      runtime.composer.renderer.domElement
    )
    controls.current.target.set(0, 0, 0)
    controls.current.position0.set(...runtime.view)
    controls.current.reset()
    controls.current.minDistance = 0
    controls.current.maxDistance = 100

    controls.current.addEventListener('change', () => {
      updateView(runtime.camera.position.toArray())
      runtime.composer.render()
    })
    controls.current.update()

    const handleDblClick = () => {
      const len = runtime.camera.position.length()
      const newLen = len < 0.5 ? 5 : len < 2 ? 0.25 : 1
      const view = [0, 0, -newLen]
      controls.current.position0.set(...view)
      controls.current.reset()
      updateView_(view)
    }
    runtime.composer.renderer.domElement.addEventListener(
      'dblclick',
      handleDblClick
    )
    return () => {
      runtime.composer.renderer.domElement.removeEventListener(
        'dblclick',
        handleDblClick
      )
      controls.current.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.camera, runtime.composer])

  useEffect(() => {
    if (
      runtime.view.find(
        (v, i) => abs(v - controls.current.position0.toArray()[i]) > 1e-4
      )
    ) {
      controls.current.position0.set(...runtime.view)
      controls.current.reset()
      runtime.composer.render()
    }
  }, [runtime.composer, runtime.view])
}
