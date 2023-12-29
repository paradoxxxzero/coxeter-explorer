import { useCallback, useEffect, useState } from 'react'
import { filterParams } from './params'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { getRotations } from './math/hypermath'
import { initializeGl } from './render'

export default function App({ params, updateParams }) {
  const [runtime, setRuntime] = useState({
    ...params,

    space: null,
    shape: null,
    processing: true,

    iteration: 0,
    visit: [],
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
