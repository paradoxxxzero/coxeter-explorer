import { useCallback, useEffect, useRef, useState } from 'react'
import { details } from '../statics'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { getRotations } from './math/hypermath'
import { filterParams } from './params'
import { initializeGl } from './render'
import { max } from './math'

export default function App({ params, updateParams }) {
  const [runtime, setRuntime] = useState({
    ...params,

    space: null,
    shape: null,
    processing: true,

    iteration: 0,
    polytope: [],
    shaper: null,
    paused: false,
    error: null,
  })

  useEffect(() => {
    setRuntime(rt => {
      try {
        if (!rt.gl) {
          return initializeGl(rt)
        }
        return rt
      } catch (e) {
        console.error(e)
        return {
          ...rt,
          error: e.message,
        }
      }
    })
  }, [runtime.gl])

  const [rotations, setRotations] = useState({
    shift: 0,
    maxShift: 0,
    combinations: [],
    auto: 'damp',
    lock: false,
  })

  useEffect(() => {
    setRuntime(rt => ({
      ...rt,
      ...filterParams(params).params,
    }))
  }, [params])

  useEffect(() => {
    if (runtime.space) {
      setRotations(rotations => ({
        ...rotations,
        shift: 0,
        ...getRotations(params.dimensions, runtime.space),
      }))
    }
  }, [params.dimensions, runtime.space])

  const updateRotations = useCallback(
    (key, value) => {
      setRotations(rotations => ({
        ...rotations,
        [key]: value,
      }))
    },
    [setRotations]
  )

  const adaptative = useRef({
    previous: null,
    anteprevious: null,
    start: null,
    stable: false,
  })

  useEffect(() => {
    adaptative.current = {
      previous: null,
      anteprevious: null,
      stable: false,
      start: null,
    }
  }, [runtime.space, runtime.shaper, params.ambiance])

  useEffect(() => {
    const rate = 1000 / 60 // Base computations on a 60Hz screen

    if (params.adaptative) {
      let raf = null
      let frame = null
      let lasts = []
      const upsampling = 20
      const downsampling = 10
      const loop = now => {
        if (frame === null) {
          if (adaptative.current.start === null) {
            adaptative.current.start = now
          }
          frame = now
          raf = requestAnimationFrame(loop)
          return
        }
        lasts.push(now - frame)
        frame = now
        if (lasts.length > max(upsampling, downsampling)) {
          lasts.shift()
        }
        if (lasts.length >= downsampling) {
          const downavg =
            lasts.slice(-downsampling).reduce((a, b) => a + b, 0) / downsampling
          if (downavg > (adaptative.current.stable ? 2.01 : 1.51) * rate) {
            lasts = []
            adaptative.current.stable = false
            const currentDetail = details.indexOf(params.detail)
            if (currentDetail > 1) {
              // console.debug('Lowering details')
              adaptative.current.anteprevious = adaptative.current.previous
              adaptative.current.previous = params.detail
              updateParams({ detail: details[currentDetail - 1] })
            }
          }
        }

        if (lasts.length >= upsampling) {
          const upavg =
            lasts.slice(-upsampling).reduce((a, b) => a + b, 0) / upsampling
          if (upavg < (adaptative.current.stable ? 1.001 : 1.01) * rate) {
            lasts = []
            adaptative.current.stable = false
            const currentDetail = details.indexOf(params.detail)
            // Don't go ultra
            if (currentDetail < details.length - 2) {
              // console.debug('Increasing details')
              const nextDetail = details[currentDetail + 1]
              if (
                nextDetail === adaptative.current.previous &&
                params.detail === adaptative.current.anteprevious &&
                now - adaptative.current.start > 1000
              ) {
                // console.debug('Stabilized, not increasing details')
                adaptative.current.stable = true
              } else {
                adaptative.current.anteprevious = adaptative.current.previous
                adaptative.current.previous = params.detail
                updateParams({ detail: nextDetail })
              }
            }
          }
        }
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      return () => cancelAnimationFrame(raf)
    }
  }, [
    params.detail,
    params.adaptative,
    params.ambiance,
    runtime.space,
    updateParams,
  ])

  return runtime.gl ? (
    <>
      <UI
        runtime={runtime}
        params={params}
        rotations={rotations}
        setRuntime={setRuntime}
        updateRotations={updateRotations}
        updateParams={updateParams}
      />
      <Runtime
        runtime={runtime}
        rotations={rotations}
        setRuntime={setRuntime}
        updateRotations={updateRotations}
        updateParams={updateParams}
      />
    </>
  ) : null
}

if (import.meta.hot) {
  import.meta.hot.accept('./render.js', module => {})
}
