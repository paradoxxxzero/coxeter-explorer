import { useCallback, useEffect, useRef } from 'react'
import { PI, abs, hypot, log, min, pow } from '../math'
import { rotate } from '../math/hypermath'
import { columnMajor, multiply, set } from '../math/matrix'
import { render, updateCamera } from '../render'
// import { hyperMaterials } from '../shader/hyperMaterial'

const zoomSpeed = 0.9
const dampSpeed = 0.95
const speedSamples = 10

const translate = (offset, shift, rotations, matrix, dimensions, metric) => {
  const { combinations } = rotations
  const couples = [[], []]

  const rotateInPlace = (o, pair) => {
    set(matrix, multiply(rotate(o, pair, dimensions, metric), matrix))
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
  updateRotations
) => {
  const { code } = e
  const step = 0.1
  if (e.altKey || e.ctrlKey || e.metaKey) {
    return
  }
  const rotateStep = (x, y, shift) =>
    translate([x, y], shift, rotations, matrix, dimensions, metric)

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
    matrix: runtime.matrix.map(x => x.slice()),
    zoom: runtime.zoom,
    pointers: new Map(),
  })

  useEffect(() => {
    local.current.matrix = runtime.matrix.map(x => x.slice())
  }, [runtime.matrix])

  useEffect(() => {
    local.current.zoom = runtime.zoom
    animation.current.zoom = null
  }, [runtime.zoom])

  const quickUpdateMatrix = useCallback(() => {
    if (runtime.matrix._reset) {
      return
    }
    const meshes = ['vertex', 'edge', 'face']
    for (let i = 0; i < meshes.length; i++) {
      runtime.meshes[meshes[i]].uniforms.matrix.update(
        columnMajor(local.current.matrix)
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // Stop rendering when these change
    runtime.ambiance,
    // runtime.askedOrder,
    runtime.camera,
    runtime.centered,
    // runtime.controls,
    runtime.coxeter,
    // runtime.currentOrder,
    runtime.curve,
    runtime.dimensions,
    runtime.easing,
    // runtime.edge,
    runtime.edgeThickness,
    runtime.error,
    // runtime.extended,
    // runtime.face,
    // runtime.fb,
    runtime.fov3,
    runtime.fov4,
    runtime.fov5,
    runtime.fov6,
    runtime.fov7,
    runtime.fov8,
    runtime.fov9,
    // runtime.gl,
    runtime.grouper,
    // runtime.detail,
    // runtime.matrix,
    // runtime.meshes,
    // runtime.mirrors,
    // runtime.rootNormals,
    runtime.msaa,
    runtime.msaaSamples,
    // runtime.order,
    // runtime.passes,
    // runtime.processing,
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
    // runtime.ranges,
    // runtime.rb,
    runtime.renderError,
    // runtime.rootVertices,
    runtime.segments,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    runtime.spaceType,
    runtime.stellation,
    runtime.subsampling,
    runtime.vertexThickness,
    // runtime.vertex,
    runtime.zoom,
  ])

  const quickUpdateZoom = useCallback(() => {
    if (runtime.matrix._reset) {
      return
    }
    updateCamera(runtime, local.current.zoom)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // Stop rendering when these change
    runtime.ambiance,
    // runtime.askedOrder,
    runtime.camera,
    runtime.centered,
    // runtime.controls,
    runtime.coxeter,
    // runtime.currentOrder,
    runtime.curve,
    runtime.dimensions,
    runtime.easing,
    // runtime.edge,
    runtime.edgeThickness,
    runtime.error,
    // runtime.extended,
    // runtime.face,
    // runtime.fb,
    runtime.fov3,
    runtime.fov4,
    runtime.fov5,
    runtime.fov6,
    runtime.fov7,
    runtime.fov8,
    runtime.fov9,
    // runtime.gl,
    runtime.grouper,
    // runtime.detail,
    // runtime.matrix,
    // runtime.meshes,
    // runtime.mirrors,
    // runtime.rootNormals,
    runtime.msaa,
    runtime.msaaSamples,
    // runtime.order,
    // runtime.passes,
    // runtime.processing,
    runtime.projection3,
    runtime.projection4,
    runtime.projection5,
    runtime.projection6,
    runtime.projection7,
    runtime.projection8,
    runtime.projection9,
    // runtime.ranges,
    // runtime.rb,
    runtime.renderError,
    // runtime.rootVertices,
    runtime.segments,
    runtime.showEdges,
    runtime.showFaces,
    runtime.showVertices,
    runtime.spaceType,
    runtime.stellation,
    runtime.subsampling,
    runtime.vertexThickness,
    // runtime.vertex,
    runtime.zoom,
  ])

  useEffect(() => {
    animation.current.speed = new Array(rotations.combinations.length).fill(0)
  }, [rotations.combinations.length])

  useEffect(() => {
    if (runtime.matrix._reset) {
      delete runtime.matrix._reset
      animation.current.speed = new Array(rotations.combinations.length).fill(0)
    }
  }, [rotations.combinations.length, runtime.matrix])

  const animate = useCallback(() => {
    const { pause, speed, zoom } = animation.current
    if (!animation.current.t) {
      animation.current.t = performance.now()
    }

    const dt = performance.now() - animation.current.t

    let changed = false
    for (let i = 0; i < speed.length; i++) {
      if (speed[i] === 0) {
        continue
      }
      changed = true

      if (rotations.auto === 'damp') {
        speed[i] *= dampSpeed
        if (abs(speed[i]) < 1e-6) {
          speed[i] = 0
        }
      }
      if (!pause.has(i)) {
        set(
          local.current.matrix,
          multiply(
            rotate(
              speed[i] * dt,
              rotations.combinations[i],
              runtime.dimensions,
              runtime.spaceType.metric
            ),
            local.current.matrix
          )
        )
      }
    }
    if (changed) {
      quickUpdateMatrix()
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
      changed = true
      quickUpdateZoom()
    }
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
    if (changed) {
      render(runtime)
    }
    animation.current.t = performance.now()
    loop.current = requestAnimationFrame(animate)
  }, [
    quickUpdateMatrix,
    rotations.auto,
    rotations.combinations,
    runtime.dimensions,
    runtime.spaceType,
  ])

  useEffect(() => {
    if (animation.current.speed.reduce((a, b) => abs(a) + abs(b), 0) > 0) {
      loop.current = requestAnimationFrame(animate)
    }

    let distance = null
    let t = null
    let speeds = []

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
      let last = local.current.pointers.get(e.pointerId)
      const delta = [
        -(e.clientX - last[0]) / window.innerHeight, // height is intentional
        -(e.clientY - last[1]) / window.innerHeight,
      ]

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
        runtime.spaceType.metric
      )
      if (rotations.auto) {
        const dt = performance.now() - t
        t = performance.now()
        speeds.push([(delta[0] * 1.5) / dt, (delta[1] * 1.5) / dt])

        if (speeds.length > speedSamples) {
          speeds.shift()
        }

        const deltas = speeds.reduce(
          (a, b) => [a[0] + b[0], a[1] + b[1]],
          [0, 0]
        )

        for (let k = 0; k < 2; k++) {
          for (let i = 0; i < couples[k].length; i++) {
            animation.current.speed[couples[k][i]] = deltas[k] / speeds.length
          }
        }
        if (!loop.current) {
          loop.current = requestAnimationFrame(animate)
        }
      }
      quickUpdateMatrix()
    }

    const onUp = e => {
      if (!local.current.pointers.has(e.pointerId)) {
        return
      }
      if (rotations.auto) {
        if (local.current.pointers.size === 1) {
          speeds = []
          t = null
          animation.current.pause.delete(rotations.shift * 2)
          animation.current.pause.delete(rotations.shift * 2 + 1)
        } else {
          animation.current.pause.add(rotations.shift * 2)
          animation.current.pause.add(rotations.shift * 2 + 1)
        }
      }
      distance = null
      local.current.pointers.delete(e.pointerId)
    }

    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', onUp)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', onUp)

      if (loop.current) {
        cancelAnimationFrame(loop.current)
        loop.current = null
        animation.current.t = null
      }
    }
  }, [
    rotations,
    runtime.dimensions,
    runtime.spaceType,
    runtime.camera,

    animate,
    quickUpdateMatrix,
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
          runtime.spaceType.metric,
          updateRotations
        )
      ) {
        quickUpdateMatrix()
        render(runtime)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [
    quickUpdateMatrix,
    rotations,
    runtime.spaceType,
    runtime.dimensions,
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
