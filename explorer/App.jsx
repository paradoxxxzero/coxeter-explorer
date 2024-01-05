import { useCallback, useEffect, useState } from 'react'
import { details } from '../statics'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { getRotations } from './math/hypermath'
import { filterParams } from './params'
import { initializeGl } from './render'

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
    if (params.adaptative) {
      let raf = null
      let frame = performance.now()
      let lasts = []
      const sampling = 10
      const loop = () => {
        const now = performance.now()
        lasts.push(now - frame)
        frame = now
        if (lasts.length > sampling) {
          lasts.shift()
        } else {
          raf = requestAnimationFrame(loop)
          return
        }
        const avg = lasts.reduce((a, b) => a + b, 0) / sampling
        if (avg > 40) {
          lasts = []
          const currentDetail = details.indexOf(params.detail)
          if (currentDetail > 0) {
            console.debug('Lowering details')
            updateParams({ detail: details[currentDetail - 1] })
          }
        } else if (avg < 17) {
          lasts = []
          const currentDetail = details.indexOf(params.detail)
          if (currentDetail < details.length - 2) {
            // Don't go ultra
            console.debug('Increasing details')
            updateParams({ detail: details[currentDetail + 1] })
          }
        }
        raf = requestAnimationFrame(loop)
      }
      loop()
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
