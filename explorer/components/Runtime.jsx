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
    error => {
      setRuntime(runtime => ({
        ...runtime,
        renderError: error.message,
      }))
    },
    [setRuntime]
  )

  useEffect(() => {
    return () => {
      if (runtime.spaceType && runtime.spaceType.curvature !== null) {
        const matrix = ident(runtime.dimensions)
        matrix._reset = true
        updateParams({
          matrix,
        })
      }
    }
  }, [runtime.spaceType?.curvature])

  return (
    <>
      <ErrorBoundary error={runtime.renderError} onError={handleError}>
        <Process runtime={runtime} setRuntime={setRuntime} />
        {runtime.spaceType ? (
          <>
            <Render runtime={runtime} setRuntime={setRuntime} />
            <Interact
              runtime={runtime}
              rotations={rotations}
              updateRotations={updateRotations}
              updateParams={updateParams}
            />
          </>
        ) : null}
      </ErrorBoundary>
    </>
  )
}
