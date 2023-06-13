import { useEffect, useRef } from 'react'
import { debounce } from '../../utils'
import { PI, abs, hypot } from '../math'
import { xtranslate } from '../math/hypermath'
import { columnMajor, multiply, set } from '../math/matrix'
import { plot } from '../render'
import { hyperMaterials } from '../shader/hyperMaterial'

const zoomSpeed = 0.95
const autoSpeed = 10

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

const quickUpdateMatrix = runtime => {
  if (runtime.dimensions > 4) {
    plot(runtime)
  } else {
    const it = hyperMaterials.values()
    for (let i = 0; i < hyperMaterials.size; i++) {
      const material = it.next().value
      material.uniforms.rotationMatrix.value = columnMajor(runtime.matrix)
    }
    runtime.render()
  }
}

export const useInteract = (runtime, rotations, updateParams) => {
  const updateMatrix = debounce(matrix => updateParams({ matrix }), 100)
  const updateZoom = debounce(zoom => updateParams({ zoom }), 100)
  const loop = useRef(null)
  const animation = useRef({
    pause: new Set(),
    speed: null,
  })

  useEffect(() => {
    animation.current.speed = new Array(rotations.combinations.length).fill(0)
  }, [rotations.combinations, rotations.auto])

  useEffect(() => {
    const animate = () => {
      const { pause, speed } = animation.current
      for (let i = 0; i < speed.length; i++) {
        if (speed[i] === 0 || (rotations.auto === 'damp' && pause.has(i))) {
          continue
        }
        if (rotations.auto === 'damp') {
          speed[i] *= 0.96
          if (abs(speed[i]) < 1e-5) {
            speed[i] = 0
          }
        }
        set(
          runtime.matrix,
          multiply(
            xtranslate(
              speed[i],
              i,
              rotations.combinations,
              runtime.dimensions,
              runtime.curvature
            ),
            runtime.matrix
          )
        )
      }
      quickUpdateMatrix(runtime)
      if (loop.current !== null) {
        loop.current = requestAnimationFrame(animate)
      }
    }

    if (rotations.auto) {
      loop.current = requestAnimationFrame(animate)
    }
    return () => {
      if (loop.current) {
        updateMatrix(runtime.matrix)
        cancelAnimationFrame(loop.current)
        loop.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotations.auto])

  useEffect(() => {
    runtime.camera.position.z = -runtime.zoom
  }, [runtime.camera, runtime.zoom])

  useEffect(() => {
    const pointers = new Map()
    let distance = null
    let time = null

    const getDistance = () => {
      const vals = pointers.values()
      const p1 = vals.next().value
      const p2 = vals.next().value

      return hypot(p1[0] - p2[0], p1[1] - p2[1])
    }

    const onMove = e => {
      if (!pointers.has(e.pointerId)) {
        return
      }
      let last = pointers.get(e.pointerId)
      const delta = [
        (e.clientX - last[0]) / window.innerHeight, // height is intentional
        -(e.clientY - last[1]) / window.innerHeight,
      ]
      // Compute moving average of the delta
      if (rotations.auto) {
        const newTime = performance.now()
        const dt = newTime - time
        time = newTime
        const k = autoSpeed * (rotations.auto === 'damp' ? 2 : 1)
        const speed = [(k * delta[0]) / dt, (k * delta[1]) / dt]
        animation.current.speed[rotations.shift * 2] = speed[0]
        animation.current.speed[rotations.shift * 2 + 1] = speed[1]
      }

      pointers.set(e.pointerId, [e.clientX, e.clientY])

      if (pointers.size === 2) {
        if (distance === null) {
          distance = getDistance()
          return
        }
        const newDistance = getDistance()
        runtime.camera.position.z *= distance / newDistance
        distance = newDistance
        runtime.render()
        updateZoom(-runtime.camera.position.z)
        return
      }
      let shift = rotations.shift
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
      if (rotations.auto !== 'free') {
        translate(
          PI * delta[0],
          PI * delta[1],
          shift,
          rotations,
          runtime.matrix,
          runtime.dimensions,
          runtime.curvature
        )
        quickUpdateMatrix(runtime)
        updateMatrix(runtime.matrix)
      }
    }

    const onDown = e => {
      if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
        return
      }
      if (rotations.auto) {
        time = performance.now()
        animation.current.pause.add(rotations.shift * 2)
        animation.current.pause.add(rotations.shift * 2 + 1)
        animation.current.speed[rotations.shift * 2] = 0
        animation.current.speed[rotations.shift * 2 + 1] = 0
      }

      pointers.set(e.pointerId, [e.clientX, e.clientY])
      const onUp = e => {
        if (rotations.auto) {
          animation.current.pause.delete(rotations.shift * 2)
          animation.current.pause.delete(rotations.shift * 2 + 1)
        }
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
      if (e.target !== document.body) {
        return
      }
      if (
        keydown(
          e,
          rotations,
          runtime.matrix,
          runtime.dimensions,
          runtime.curvature
        )
      ) {
        quickUpdateMatrix(runtime)
        updateMatrix(runtime.matrix)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [rotations, runtime, updateMatrix])

  useEffect(() => {
    const handleWheel = e => {
      if (e.target.tagName !== 'CANVAS') {
        return
      }
      runtime.camera.position.z *= e.deltaY < 0 ? zoomSpeed : 1 / zoomSpeed
      runtime.render()
      updateZoom(-runtime.camera.position.z)
    }
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.camera, runtime.composer, updateZoom])

  useEffect(() => {
    const handleDblClick = e => {
      if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
        return
      }
      const zoom = -runtime.camera.position.z
      const newZoom = zoom < 0.5 ? 5 : zoom < 2 ? 0.25 : 1

      runtime.camera.position.z = -newZoom
      runtime.render()
      updateZoom(newZoom)
    }

    document.addEventListener('dblclick', handleDblClick)
    return () => {
      document.removeEventListener('dblclick', handleDblClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.camera, runtime.composer, updateZoom])
}
