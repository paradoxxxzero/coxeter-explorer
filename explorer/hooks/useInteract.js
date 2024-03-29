import { useCallback, useEffect, useRef } from 'react'
import { PI, abs, hypot, log, max, min, pow, sqrt } from '../math'
import { rotate, rotate4 } from '../math/hypermath'
import { columnMajor, multiply, set } from '../math/matrix'
import { render, updateCamera } from '../render'
// import { hyperMaterials } from '../shader/hyperMaterial'

const zoomSpeed = 0.9
const dampSpeed = 0.95
const speedSamples = 10

const translate = (
  offset,
  shift,
  rotations,
  matrix,
  dimensions,
  metric,
  zoom,
  camera
) => {
  if (dimensions < 2) {
    return [[], []]
  }
  if (rotations.camera) {
    set(
      camera.rotation,
      multiply(camera.rotation, rotate4(offset[1], offset[0]))
    )
    return [
      [rotations.combinations.length + 1],
      [rotations.combinations.length],
    ]
  }
  const { combinations } = rotations
  const couples = [[], []]

  const rotateInPlace = (o, pair) => {
    set(
      matrix,
      multiply(rotate(o, pair, dimensions, metric, sqrt(zoom)), matrix)
    )
  }
  const pairs =
    2 * shift + 1 > combinations.length - 1
      ? [shift * 2]
      : [shift * 2 + 1, shift * 2]

  for (let j = 0; j < pairs.length; j++) {
    const pair = pairs[j]
    couples[j].push(pair)

    if (
      rotations.lock &&
      combinations[pair][0] >= 0 &&
      combinations[pair][1] >= 0
    ) {
      for (let i = 0; i < combinations.length; i++) {
        if (combinations[i][0] < 0 || combinations[i][1] < 0) {
          // Skip parabolic rotations
          continue
        }
        if (
          !combinations[pair].some(v => combinations[i].includes(v)) &&
          (j > 0 ? i !== pairs[1 - j] : true)
        ) {
          couples[j].push(i)
        }
      }
    }
  }
  for (let j = 0; j < couples.length; j++) {
    const couple = couples[j]
    for (let i = 0; i < couple.length; i++) {
      const pair = couple[i]
      rotateInPlace(offset[j], combinations[pair])
    }
  }
  return couples
}

export const keydown = (
  e,
  rotations,
  matrix,
  dimensions,
  metric,
  updateRotations,
  zoom,
  camera
) => {
  const { code } = e
  const step = 0.1
  if (e.altKey || e.ctrlKey || e.metaKey) {
    return
  }
  const rotateStep = (x, y, shift) =>
    translate(
      [x, y],
      dimensions < 3 ? 0 : shift,
      rotations,
      matrix,
      dimensions,
      metric,
      zoom,
      camera
    )

  if (code === 'ArrowLeft' || code === 'KeyA') {
    rotateStep(step, 0, 0)
  } else if (code === 'ArrowRight' || code === 'KeyD') {
    rotateStep(-step, 0, 0)
  } else if (code === 'ArrowUp' || code === 'KeyW') {
    rotateStep(0, step, 0)
  } else if (code === 'ArrowDown' || code === 'KeyS') {
    rotateStep(0, -step, 0)
  } else if (code === 'PageUp' || code === 'KeyQ') {
    rotateStep(step, 0, 1)
  } else if (code === 'PageDown' || code === 'KeyE') {
    rotateStep(-step, 0, 1)
  } else if (code === 'Digit1') {
    rotateStep(0, step, 1)
  } else if (code === 'Digit3') {
    rotateStep(0, -step, 1)
  } else if (code === 'KeyZ') {
    rotateStep(step, 0, 2)
  } else if (code === 'KeyC') {
    rotateStep(-step, 0, 2)
  } else if (code === 'ControlLeft') {
    updateRotations('shift', (rotations.shift + 1) % rotations.maxShift)
  } else {
    return
  }
  return true
}

export const useInteract = (
  runtime,
  rotations,
  updateRotations,
  updateParams
) => {
  const loop = useRef(null)
  const animation = useRef({
    pause: new Set(),
    speed: null,
    zoom: null,
    t: null,
  })

  const local = useRef({
    matrix: runtime.matrix,
    zoom: runtime.zoom,
    pointers: new Map(),
  })

  useEffect(() => {
    local.current.matrix = runtime.matrix
  }, [runtime.matrix])

  useEffect(() => {
    local.current.zoom = runtime.zoom
    animation.current.zoom = null
  }, [runtime.zoom])

  const quickUpdate = useCallback(
    ({ matrix, zoom, camera } = { matrix: true, zoom: true, camera: true }) => {
      for (let i = 0; i < runtime.meshes.meshes.length; i++) {
        runtime.meshes[runtime.meshes.meshes[i]].uniforms.time.update(
          performance.now() / 1000
        )
      }
      if (runtime.matrix._reset) {
        return
      }
      if (matrix) {
        for (let i = 0; i < runtime.meshes.meshes.length; i++) {
          runtime.meshes[runtime.meshes.meshes[i]].uniforms.matrix.update(
            columnMajor(local.current.matrix)
          )
        }
      }
      if (zoom || camera) {
        updateCamera(runtime, local.current.zoom)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // Stop rendering when these change
      runtime.ambiance,
      runtime.camera,
      runtime.centered,
      runtime.coxeter,
      runtime.curve,
      runtime.crosssection,
      runtime.dimensions,
      runtime.error,
      runtime.fov3,
      runtime.fov4,
      runtime.fov5,
      runtime.fov6,
      runtime.fov7,
      runtime.fov8,
      runtime.fov9,
      runtime.hidden,
      runtime.msaa,
      runtime.msaaSamples,
      runtime.projection3,
      runtime.projection4,
      runtime.projection5,
      runtime.projection6,
      runtime.projection7,
      runtime.projection8,
      runtime.projection9,
      runtime.section,
      runtime.space,
      runtime.stellation,
      runtime.subsampling,
      runtime.zoom,
      rotations.camera,
    ]
  )

  useEffect(() => {
    animation.current.speed = new Array(rotations.combinations.length + 2).fill(
      0
    )
  }, [rotations.combinations.length])

  useEffect(() => {
    if (runtime.matrix._reset) {
      delete runtime.matrix._reset
      animation.current.speed = new Array(
        rotations.combinations.length + 2
      ).fill(0)
    }
  }, [rotations.combinations.length, runtime.matrix])

  const animate = useCallback(() => {
    const { pause, speed, zoom } = animation.current
    if (!animation.current.t) {
      animation.current.t = performance.now()
    }

    const dt = performance.now() - animation.current.t

    let matrixChanged = false
    let cameraChanged = false
    let zoomChanged = false
    for (let i = 0; i < speed.length; i++) {
      if (speed[i] === 0) {
        continue
      }

      if (rotations.auto === 'damp') {
        speed[i] *= dampSpeed
        if (abs(speed[i]) < 1e-6) {
          speed[i] = 0
        }
      }
      if (i >= rotations.combinations.length) {
        cameraChanged = true
      } else {
        matrixChanged = true
      }

      if (!pause.has(i)) {
        const currentSpeed = max(min(speed[i] * dt, 0.5), -0.5)
        if (i >= rotations.combinations.length) {
          const offset = [0, 0]
          offset[i - rotations.combinations.length] = currentSpeed
          set(
            runtime.camera.rotation,
            multiply(runtime.camera.rotation, rotate4(...offset))
          )
        } else {
          set(
            local.current.matrix,
            multiply(
              rotate(
                currentSpeed,
                rotations.combinations[i],
                runtime.dimensions,
                runtime.space.metric,
                animation.current.zoom || local.current.zoom
              ),
              local.current.matrix
            )
          )
        }
      }
    }

    if (zoom) {
      const current = log(local.current.zoom) / log(zoomSpeed)
      const target = log(zoom) / log(zoomSpeed)

      local.current.zoom *= pow(
        zoomSpeed,
        (target - current) * min(1, dt * 0.001 * 2)
      )

      // Scale epsilon
      if (abs(zoom - local.current.zoom) < zoom * 1e-3) {
        local.current.zoom = zoom
        animation.current.zoom = null
      }
      zoomChanged = true
    }

    quickUpdate({
      matrix: matrixChanged,
      camera: cameraChanged,
      zoom: zoomChanged,
    })

    if (
      speed.reduce((a, b) => abs(a) + abs(b), 0) === 0 &&
      animation.current.zoom === null &&
      !runtime.matrix._reset
    ) {
      updateParams({ matrix: local.current.matrix, zoom: local.current.zoom })
      loop.current = null
      animation.current.t = null
      return
    }
    if (matrixChanged || cameraChanged || zoomChanged) {
      render(runtime)
    }
    animation.current.t = performance.now()
    loop.current = requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    quickUpdate,
    rotations.auto,
    rotations.combinations,
    runtime.dimensions,
    runtime.camera,
    runtime.space,
  ])

  useEffect(() => {
    if (animation.current.speed.reduce((a, b) => abs(a) + abs(b), 0) > 0) {
      loop.current = requestAnimationFrame(animate)
    }

    let distance = null
    let t = null
    const speeds = []

    const getDistance = () => {
      const vals = local.current.pointers.values()
      const p1 = vals.next().value
      const p2 = vals.next().value

      return hypot(p1[0] - p2[0], p1[1] - p2[1])
    }

    const onDown = e => {
      if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
        return
      }
      if (rotations.auto) {
        t = performance.now()
        if (local.current.pointers.size === 1) {
          animation.current.pause.delete(rotations.shift * 2)
          animation.current.pause.delete(rotations.shift * 2 + 1)
        } else {
          animation.current.pause.add(rotations.shift * 2)
          animation.current.pause.add(rotations.shift * 2 + 1)
        }
      }
      local.current.pointers.set(e.pointerId, [e.clientX, e.clientY])
    }

    const onMove = e => {
      if (!local.current.pointers.has(e.pointerId)) {
        return
      }
      if (!rotations.combinations.length) {
        return
      }
      const last = local.current.pointers.get(e.pointerId)
      const delta = [
        (e.clientX - last[0]) / window.innerHeight, // height is intentional
        -(e.clientY - last[1]) / window.innerHeight,
      ]
      if (!rotations.camera) {
        delta[0] *= -1
      }
      local.current.pointers.set(e.pointerId, [e.clientX, e.clientY])
      if (local.current.pointers.size > 1) {
        if (distance === null) {
          distance = getDistance()
          animation.current.zoom = local.current.zoom
          return
        }
        const newDistance = getDistance()
        local.current.zoom *= distance / newDistance
        distance = newDistance
        updateCamera(runtime, local.current.zoom)
        animation.current.zoom = null
        render(runtime)
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

      const couples = translate(
        [PI * delta[0], PI * delta[1]],
        shift,
        rotations,
        local.current.matrix,
        runtime.dimensions,
        runtime.space.metric,
        animation.current.zoom || local.current.zoom,
        runtime.camera
      )
      if (rotations.auto) {
        const dt = min(50, performance.now() - t)

        t = performance.now()
        speeds.push([(delta[0] * 1.5) / dt, (delta[1] * 1.5) / dt])

        if (speeds.length > speedSamples) {
          speeds.shift()
        }

        const sums = speeds.reduce((a, b) => [a[0] + b[0], a[1] + b[1]], [0, 0])
        for (let k = 0; k < 2; k++) {
          for (let i = 0; i < couples[k].length; i++) {
            animation.current.speed[couples[k][i]] = sums[k] / speeds.length
          }
        }
        if (!loop.current) {
          loop.current = requestAnimationFrame(animate)
        }
      }
      quickUpdate({ matrix: true })
    }

    const onUp = e => {
      local.current.pointers.clear()

      if (rotations.auto) {
        speeds.length = 0
        t = null
        animation.current.pause.delete(rotations.shift * 2)
        animation.current.pause.delete(rotations.shift * 2 + 1)
      }
      distance = null
    }

    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', onUp)

    const currentAnimation = animation.current
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', onUp)

      if (loop.current) {
        cancelAnimationFrame(loop.current)
        loop.current = null
        currentAnimation.t = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    rotations,
    runtime.dimensions,
    runtime.space,
    runtime.camera,

    animate,
    quickUpdate,
  ])

  useEffect(() => {
    const onKeyDown = e => {
      if (e.target !== document.body) {
        return
      }
      if (
        keydown(
          e,
          rotations,
          local.current.matrix,
          runtime.dimensions,
          runtime.space.metric,
          updateRotations,
          animation.current.zoom || local.current.zoom,
          runtime.camera
        )
      ) {
        quickUpdate({ matrix: true })
        render(runtime)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    quickUpdate,
    rotations,
    runtime.space,
    runtime.dimensions,
    runtime.camera,
    updateRotations,
  ])

  useEffect(() => {
    const handleWheel = e => {
      if (e.target.tagName !== 'CANVAS') {
        return
      }
      const zoom =
        animation.current.zoom === null
          ? local.current.zoom
          : animation.current.zoom
      animation.current.zoom = zoom * (e.deltaY < 0 ? zoomSpeed : 1 / zoomSpeed)
      if (!loop.current) {
        loop.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('wheel', handleWheel)
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [animate])

  useEffect(() => {
    const handleDblClick = e => {
      if (e.button !== 0 || e.target.tagName !== 'CANVAS') {
        return
      }
      const zoom =
        animation.current.zoom === null
          ? local.current.zoom
          : animation.current.zoom
      const newZoom = zoom < 0.5 ? 5 : zoom < 2 ? 0.25 : 1
      animation.current.zoom = newZoom
      if (!loop.current) {
        loop.current = requestAnimationFrame(animate)
      }
    }

    document.addEventListener('dblclick', handleDblClick)
    return () => {
      document.removeEventListener('dblclick', handleDblClick)
    }
  }, [animate])
}
