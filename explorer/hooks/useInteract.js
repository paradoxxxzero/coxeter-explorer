import { useCallback, useEffect, useRef } from 'react'
import { debounce } from '../../utils'
import { PI, abs, hypot } from '../math'
import { xtranslate } from '../math/hypermath'
import { columnMajor, diagonal, multiply, set } from '../math/matrix'
import { plot, render } from '../render'
// import { hyperMaterials } from '../shader/hyperMaterial'

const zoomSpeed = 0.95
const autoSpeed = 25

const translate = (x, y, shift, rotations, matrix, dimensions, curvature) => {
  set(
    matrix,
    multiply(
      xtranslate(
        x,
        shift * 2 + 1,
        rotations.combinations,
        dimensions,
        curvature
      ),
      matrix
    )
  )
  set(
    matrix,
    multiply(
      xtranslate(y, shift * 2, rotations.combinations, dimensions, curvature),
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

export const useInteract = (runtime, rotations, updateParams) => {
  const updateMatrix = useCallback(
    debounce(matrix => updateParams({ matrix }), 100),
    []
  )
  const updateZoom = useCallback(
    debounce(zoom => updateParams({ zoom }), 100),
    []
  )

  const loop = useRef(null)
  const animation = useRef({
    pause: new Set(),
    speed: null,
  })

  const localMatrix = useRef(runtime.matrix.map(x => x.slice()))

  useEffect(() => {
    localMatrix.current = runtime.matrix.map(x => x.slice())
  }, [runtime.matrix])

  const quickUpdateMatrix = useCallback(() => {
    if (runtime.dimensions > 4) {
      plot({
        currentOrder: runtime.currentOrder,
        dimensions: runtime.dimensions,
        curvature: runtime.curvature,
        ranges: runtime.ranges,
        matrix: localMatrix.current,
        spaceType: runtime.spaceType,
        vertices: runtime.vertices,
        edges: runtime.edges,
        faces: runtime.faces,
        ambiance: runtime.ambiance,
      })
    } else {
      Object.values(runtime.meshes).forEach(mesh => {
        mesh.uniforms.matrix.update(columnMajor(localMatrix.current))
      })
      render(runtime)
    }
  }, [
    runtime.dimensions,
    runtime.curvature,
    runtime.ranges,
    runtime.meshes,
    runtime.currentOrder,
    runtime.spaceType,
    runtime.vertices,
    runtime.edges,
    runtime.faces,
    runtime.ambiance,
  ])

  useEffect(() => {
    animation.current.speed = new Array(rotations.combinations.length).fill(0)
  }, [rotations.combinations])

  useEffect(() => {
    if (diagonal(runtime.matrix)) {
      animation.current.speed = new Array(rotations.combinations.length).fill(0)
    }
  }, [rotations.combinations.length, runtime.matrix])

  useEffect(() => {
    const animate = () => {
      const { pause, speed } = animation.current
      let changed = false
      for (let i = 0; i < speed.length; i++) {
        if (speed[i] === 0 || (rotations.auto === 'damp' && pause.has(i))) {
          continue
        }
        changed = true

        if (rotations.auto === 'damp') {
          speed[i] *= 0.96
          if (abs(speed[i]) < 1e-4) {
            speed[i] = 0
            updateMatrix(localMatrix.current)
          }
        }
        set(
          localMatrix.current,
          multiply(
            xtranslate(
              speed[i],
              i,
              rotations.combinations,
              runtime.dimensions,
              runtime.curvature
            ),
            localMatrix.current
          )
        )
      }
      if (changed) {
        quickUpdateMatrix()
      }
      if (loop.current !== null) {
        loop.current = requestAnimationFrame(animate)
      }
    }

    if (rotations.auto) {
      loop.current = requestAnimationFrame(animate)
    }
    return () => {
      if (loop.current) {
        cancelAnimationFrame(loop.current)
        loop.current = null
      }
      updateMatrix(localMatrix.current)
    }
  }, [
    rotations.auto,
    rotations.combinations,
    runtime.dimensions,
    runtime.curvature,
    updateMatrix,
    quickUpdateMatrix,
  ])

  useEffect(() => {
    runtime.camera.position.z = -runtime.zoom
    runtime.camera.update()
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
    }

    const onMove = e => {
      if (!pointers.has(e.pointerId)) {
        return
      }
      let last = pointers.get(e.pointerId)
      const delta = [
        -(e.clientX - last[0]) / window.innerHeight, // height is intentional
        -(e.clientY - last[1]) / window.innerHeight,
      ]
      if (rotations.auto) {
        const newTime = performance.now()
        const dt = newTime - time
        time = newTime
        const speed = [(autoSpeed * delta[0]) / dt, (autoSpeed * delta[1]) / dt]
        animation.current.speed[rotations.shift * 2] = speed[1]
        animation.current.speed[rotations.shift * 2 + 1] = speed[0]
      }

      pointers.set(e.pointerId, [e.clientX, e.clientY])

      if (pointers.size === 2) {
        if (distance === null) {
          distance = getDistance()
          return
        }
        const newDistance = getDistance()
        runtime.camera.position.z *= distance / newDistance
        runtime.camera.update()
        distance = newDistance
        render(runtime)
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
      translate(
        PI * delta[0],
        PI * delta[1],
        shift,
        {
          combinations: rotations.combinations,
          auto: rotations.auto,
          shift: rotations.shift,
        },
        localMatrix.current,
        runtime.dimensions,
        runtime.curvature
      )
      quickUpdateMatrix()
      updateMatrix(localMatrix.current)
    }

    const onUp = e => {
      if (!pointers.has(e.pointerId)) {
        return
      }
      if (rotations.auto) {
        const newTime = performance.now()
        const dt = newTime - time
        if (dt > 100) {
          animation.current.speed[rotations.shift * 2] = 0
          animation.current.speed[rotations.shift * 2 + 1] = 0
        } else if (rotations.auto === 'free') {
          animation.current.speed[rotations.shift * 2] *= 0.5
          animation.current.speed[rotations.shift * 2 + 1] *= 0.5
        }
        animation.current.pause.delete(rotations.shift * 2)
        animation.current.pause.delete(rotations.shift * 2 + 1)
      }
      distance = null
      pointers.delete(e.pointerId)
    }

    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', onUp)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', onUp)
    }
  }, [
    rotations.auto,
    rotations.combinations,
    rotations.shift,
    runtime.dimensions,
    runtime.curvature,
    runtime.camera,

    quickUpdateMatrix,
    updateMatrix,
    updateZoom,
  ])

  useEffect(() => {
    const onKeyDown = e => {
      if (e.target !== document.body) {
        return
      }
      if (
        keydown(
          e,
          {
            combinations: rotations.combinations,
            auto: rotations.auto,
            shift: rotations.shift,
          },
          localMatrix.current,
          runtime.dimensions,
          runtime.curvature
        )
      ) {
        quickUpdateMatrix()
        updateMatrix(localMatrix.current)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [
    quickUpdateMatrix,
    rotations.auto,
    rotations.combinations,
    rotations.shift,
    runtime.curvature,
    runtime.dimensions,
    updateMatrix,
  ])

  useEffect(() => {
    const handleWheel = e => {
      if (e.target.tagName !== 'CANVAS') {
        return
      }
      runtime.camera.position.z *= e.deltaY < 0 ? zoomSpeed : 1 / zoomSpeed
      runtime.camera.update()
      render(runtime)
      updateZoom(-runtime.camera.position.z)
    }
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [runtime, updateZoom])

  useEffect(() => {
    const handleDblClick = e => {
      if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
        return
      }
      const zoom = -runtime.camera.position.z
      const newZoom = zoom < 0.5 ? 5 : zoom < 2 ? 0.25 : 1

      runtime.camera.position.z = -newZoom
      runtime.camera.update()
      render(runtime)
      updateZoom(newZoom)
    }

    document.addEventListener('dblclick', handleDblClick)
    return () => {
      document.removeEventListener('dblclick', handleDblClick)
    }
  }, [runtime, updateZoom])
}
