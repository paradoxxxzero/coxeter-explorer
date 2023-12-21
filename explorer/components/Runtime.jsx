import { useCallback, useEffect } from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import Interact from './Interact'
import Render from './Render'
import Process from './Process'
import { ident } from '../math/matrix'

export default function Runtime({
  runtime,
  setRuntime,
  rotations,
  updateRotations,
  updateParams,
}) {
  // Debug
  window.rt = runtime
  window.ro = rotations

  const handleError = useCallback(
    type => error => {
      setRuntime(runtime => ({
        ...runtime,
        error: {
          [type]: error.message,
        },
      }))
    },
    [setRuntime]
  )

  useEffect(() => {
    return () => {
      if (runtime.space && runtime.space.curvature !== null) {
        const matrix = ident(runtime.dimensions)
        matrix._reset = true
        updateParams({
          matrix,
        })
      }
    }
  }, [runtime.space?.curvature])

  return (
    <>
      <ErrorBoundary
        error={runtime.error?.process}
        onError={handleError('process')}
      >
        <Process runtime={runtime} setRuntime={setRuntime} />
      </ErrorBoundary>
      {runtime.space ? (
        <>
          <ErrorBoundary
            error={runtime.error?.render}
            onError={handleError('render')}
          >
            <Render runtime={runtime} setRuntime={setRuntime} />
          </ErrorBoundary>
          <ErrorBoundary
            error={runtime.error?.interact}
            onError={handleError('interact')}
          >
            <Interact
              runtime={runtime}
              rotations={rotations}
              updateRotations={updateRotations}
              updateParams={updateParams}
            />
          </ErrorBoundary>
        </>
      ) : null}
    </>
  )
}
