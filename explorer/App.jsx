import { useCallback, useEffect, useState } from 'react'
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
    detail: 'medium',
    iteration: 0,
    polytope: null,
    shaper: null,
    paused: false,
    error: null,
  })
  const [displayStack, setDisplayStack] = useState(false)

  useEffect(() => {
    if (!runtime.gl && runtime.error) {
      return
    }
    const onContextLost = e => {
      console.error('WebGL context lost', e)
      setRuntime(rt => ({
        ...rt,
        gl: null,
        error: new Error('WebGL context lost'),
      }))

      e.preventDefault()
    }
    const onContextRestored = () => {
      console.warn('WebGL context restored')
      setRuntime(rt => ({
        ...rt,
        ...initializeGl(rt, onContextLost, onContextRestored),
        error: null,
      }))
    }

    setRuntime(rt => {
      try {
        if (!rt.gl) {
          return initializeGl(rt, onContextLost, onContextRestored)
        }
        return rt
      } catch (e) {
        console.error(e)
        return {
          ...rt,
          error: e,
        }
      }
    })
  }, [runtime.gl, runtime.error])

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

  return (
    <>
      {runtime.error ? (
        <aside className="global-error">
          <div>
            {runtime.error.toString()}{' '}
            <button
              onClick={() => setDisplayStack(displayStack => !displayStack)}
            >
              {displayStack ? 'Hide' : 'Show'} stack
            </button>
          </div>
          {runtime.error.stack && displayStack ? (
            <pre>{runtime.error.stack}</pre>
          ) : null}
        </aside>
      ) : null}
      {runtime.gl ? (
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
      ) : null}
    </>
  )
}

if (import.meta.hot) {
  import.meta.hot.accept('./render.js', module => {})
}
