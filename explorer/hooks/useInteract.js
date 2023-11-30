import { useCallback, useEffect, useRef } from 'react'
import { PI, abs, hypot, log, pow } from '../math'
import { xtranslate } from '../math/hypermath'
import { columnMajor, multiply, set } from '../math/matrix'
import { render, updateCamera } from '../render'
// import { hyperMaterials } from '../shader/hyperMaterial'

const zoomSpeed = 0.95
const dampSpeed = 0.95
const autoSpeed = 25

const translate = (x, y, shift, rotations, matrix, dimensions, metric) => {
  const rotate = (o, level) => {
    set(
      matrix,
      multiply(
        xtranslate(o, level, rotations.combinations, dimensions, metric),
        matrix
      )
    )
  }
  if (2 * shift + 1 > rotations.combinations.length - 1) {
    rotate(x, shift * 2)
  } else {
    rotate(x, shift * 2 + 1)
    rotate(y, shift * 2)
  }
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
  if (code === 'ArrowLeft' || code === 'KeyA') {
    translate(-step, 0, 0, rotations, matrix, dimensions, metric)
  } else if (code === 'ArrowRight' || code === 'KeyD') {
    translate(step, 0, 0, rotations, matrix, dimensions, metric)
  } else if (code === 'ArrowUp' || code === 'KeyW') {
    translate(0, -step, 0, rotations, matrix, dimensions, metric)
  } else if (code === 'ArrowDown' || code === 'KeyS') {
    translate(0, step, 0, rotations, matrix, dimensions, metric)
  } else if (code === 'PageUp' || code === 'KeyQ') {
    translate(-step, 0, 1, rotations, matrix, dimensions, metric)
  } else if (code === 'PageDown' || code === 'KeyE') {
    translate(step, 0, 1, rotations, matrix, dimensions, metric)
  } else if (code === 'Digit1') {
    translate(0, -step, 1, rotations, matrix, dimensions, metric)
  } else if (code === 'Digit3') {
    translate(0, step, 1, rotations, matrix, dimensions, metric)
  } else if (code === 'KeyZ') {
    translate(-step, 0, 2, rotations, matrix, dimensions, metric)
  } else if (code === 'KeyC') {
    translate(step, 0, 2, rotations, matrix, dimensions, metric)
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
  })

  const local = useRef({
    matrix: runtime.matrix.map(x => x.slice()),
    zoom: runtime.zoom,
  })

  useEffect(() => {
    local.current.matrix = runtime.matrix.map(x => x.slice())
  }, [runtime.matrix])

  useEffect(() => {
    local.current.zoom = runtime.zoom
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
    // runtime.matrix,
    // runtime.meshes,
    // runtime.mirrors,
    // runtime.rootNormals,
    runtime.msaa,
    runtime.msaaSamples,
    // runtime.order,
    // runtime.passes,
    // runtime.processing,
    runtime.projection,
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
    // runtime.matrix,
    // runtime.meshes,
    // runtime.mirrors,
    // runtime.rootNormals,
    runtime.msaa,
    runtime.msaaSamples,
    // runtime.order,
    // runtime.passes,
    // runtime.processing,
    runtime.projection,
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
    let changed = false
    for (let i = 0; i < speed.length; i++) {
      if (speed[i] === 0) {
        continue
      }
      changed = true

      if (rotations.auto === 'damp') {
        speed[i] *= dampSpeed
        if (abs(speed[i]) < 1e-4) {
          speed[i] = 0
        }
      }
      if (rotations.auto !== 'damp' || !pause.has(i)) {
        set(
          local.current.matrix,
          multiply(
            xtranslate(
              speed[i],
              i,
              rotations.combinations,
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

      local.current.zoom *= pow(zoomSpeed, (target - current) * 0.05)

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
      return
    }
    if (changed) {
      render(runtime)
    }
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
        if (!loop.current) {
          loop.current = requestAnimationFrame(animate)
        }
      }

      pointers.set(e.pointerId, [e.clientX, e.clientY])

      if (pointers.size === 2) {
        if (distance === null) {
          distance = getDistance()
          return
        }
        const newDistance = getDistance()
        runtime.zoom *= distance / newDistance
        distance = newDistance
        updateCamera(runtime)
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
        local.current.matrix,
        runtime.dimensions,
        runtime.spaceType.metric
      )
      quickUpdateMatrix()
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

      if (loop.current) {
        cancelAnimationFrame(loop.current)
        loop.current = null
      }
    }
  }, [
    rotations.auto,
    rotations.combinations,
    rotations.shift,
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
