import { useEffect } from 'react'
import { debounce } from '../../utils'
import { xtranslate } from '../math/hypermath'
import { multiply, set } from '../math/matrix'
import { plot } from '../render'
import { hypot } from '../math'

const zoomSpeed = 0.975
const translate = (x, y, shift, rotations, matrix, dimensions, curvature) => {
  set(
    matrix,
    multiply(
      xtranslate(x, shift * 2, rotations.combinations, dimensions, curvature),
      matrix
    )
  )
  set(
    matrix,
    multiply(
      xtranslate(
        y,
        shift * 2 + 1,
        rotations.combinations,
        dimensions,
        curvature
      ),
      matrix
    )
  )
}

export const keydown = (e, rotations, matrix, dimensions, curvature) => {
  const { code } = e
  if (e.target !== document.body) {
    return
  }
  const step = 0.01
  if (code === 'ArrowLeft' || code === 'KeyA') {
    translate(-step, 0, 0, rotations, matrix, dimensions, curvature)
  } else if (code === 'ArrowRight' || code === 'KeyD') {
    translate(step, 0, 0, rotations, matrix, dimensions, curvature)
  } else if (code === 'ArrowUp' || code === 'KeyW') {
    translate(0, -step, 1, rotations, matrix, dimensions, curvature)
  } else if (code === 'ArrowDown' || code === 'KeyS') {
    translate(0, step, 1, rotations, matrix, dimensions, curvature)
  } else if (code === 'PageUp' || code === 'KeyQ') {
    translate(-step, 0, 2, rotations, matrix, dimensions, curvature)
  } else if (code === 'PageDown' || code === 'KeyE') {
    translate(step, 0, 2, rotations, matrix, dimensions, curvature)
  } else if (code === 'Digit1') {
    translate(0, -step, 2, rotations, matrix, dimensions, curvature)
  } else if (code === 'Digit3') {
    translate(0, step, 2, rotations, matrix, dimensions, curvature)
  } else if (code === 'KeyZ') {
    translate(-step, 0, 3, rotations, matrix, dimensions, curvature)
  } else if (code === 'KeyC') {
    translate(step, 0, 3, rotations, matrix, dimensions, curvature)
  } else {
    return
  }
  return true
}
export const useInteract = (runtime, rotations, updateParams) => {
  const updateMatrix = debounce(matrix => updateParams({ matrix }), 100)
  const updateZoom = debounce(zoom => updateParams({ zoom }), 100)

  useEffect(() => {
    runtime.camera.position.z = -runtime.zoom
  }, [runtime.camera, runtime.zoom])

  useEffect(() => {
    const pointers = new Map()
    let distance = null
    const getDistance = () =>
      hypot(
        ...[...pointers.values()]
          .slice(0, 2)
          .reduce((a, b) => b.map((v, i) => v - a[i]))
      )

    const onMove = e => {
      if (!pointers.has(e.pointerId)) {
        return
      }
      let last = pointers.get(e.pointerId)
      const delta = [
        (e.clientX - last[0]) / window.innerWidth,
        (e.clientY - last[1]) / window.innerHeight,
      ]
      pointers.set(e.pointerId, [e.clientX, e.clientY])

      if (pointers.size === 2) {
        if (distance === null) {
          distance = getDistance()
          return
        }
        const newDistance = getDistance()
        runtime.camera.position.z *= distance / newDistance
        distance = newDistance
        runtime.composer.render()
        updateZoom(-runtime.camera.position.z)
        return
      }
      let shift = runtime.controlsShift
      if (!shift && e.shiftKey) {
        shift = 1
      } else if (!shift && e.altKey) {
        shift = 2
      } else if (!shift && e.ctrKey) {
        shift = 3
      } else if (!shift && e.metaKey) {
        shift = 4
      }

      if (pointers.size > 2) {
        shift += pointers.size - 2
      }
      translate(
        2 * delta[0],
        -2 * delta[1],
        shift,
        rotations,
        runtime.matrix,
        runtime.dimensions,
        runtime.curvature
      )
      plot(runtime)
      updateMatrix(runtime.matrix)
    }

    const onDown = e => {
      if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
        return
      }
      pointers.set(e.pointerId, [e.clientX, e.clientY])
      const onUp = e => {
        distance = null
        pointers.delete(e.pointerId)
        document.removeEventListener('pointermove', onMove)
      }
      document.addEventListener('pointermove', onMove)
      document.addEventListener('pointerup', onUp, { once: true })
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [rotations, runtime, runtime.matrix, updateMatrix, updateZoom])

  useEffect(() => {
    const onKeyDown = e => {
      if (
        keydown(
          e,
          rotations,
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
  }, [rotations, runtime, updateMatrix])

  useEffect(() => {
    const handleWheel = e => {
      runtime.camera.position.z *= e.deltaY < 0 ? zoomSpeed : 1 / zoomSpeed
      runtime.composer.render()
      updateZoom(-runtime.camera.position.z)
    }
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [runtime.camera.position, runtime.composer, updateZoom])

  useEffect(() => {
    const handleDblClick = () => {
      const zoom = -runtime.camera.position.z
      const newZoom = zoom < 0.5 ? 5 : zoom < 2 ? 0.25 : 1

      runtime.camera.position.z = -newZoom
      runtime.composer.render()
      updateZoom(newZoom)
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
    }
  }, [runtime.camera, runtime.composer, updateZoom])
}
