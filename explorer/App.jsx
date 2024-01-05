import { useCallback, useEffect, useState } from 'react'
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
  useEffect(() => {
    const rate = 1000 / 60 // Base computations on a 60Hz screen

    if (params.adaptative) {
      let raf = null
      let frame = performance.now()
      let lasts = []
      const upsampling = 20
      const downsampling = 5
      const loop = () => {
        const now = performance.now()
        lasts.push(now - frame)
        frame = now
        if (lasts.length > max(upsampling, downsampling)) {
          lasts.shift()
        }
        if (lasts.length >= downsampling) {
          const downavg =
            lasts.slice(-downsampling).reduce((a, b) => a + b, 0) / downsampling
          if (downavg > 2.5 * rate) {
            const currentDetail = details.indexOf(params.detail)
            if (currentDetail > 1) {
              console.debug('Lowering details')
              updateParams({ detail: details[currentDetail - 1] })
            }
          }
        }

        if (lasts.length >= upsampling) {
          const upavg =
            lasts.slice(-upsampling).reduce((a, b) => a + b, 0) / upsampling
          if (upavg < rate) {
            const currentDetail = details.indexOf(params.detail)
            // Don't go ultra
            if (currentDetail < details.length - 2) {
              console.debug('Increasing details')
              updateParams({ detail: details[currentDetail + 1] })
            }
          }
        }
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      return () => cancelAnimationFrame(raf)
    }
  }, [params.detail, params.adaptative, updateParams])

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
