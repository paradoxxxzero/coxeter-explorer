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
  window.rt = runtime

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
      if (runtime.curvature !== null) {
        updateParams({
          matrix: ident(runtime.dimensions),
        })
      }
    }
  }, [runtime.curvature])

  return (
    <>
      <ErrorBoundary error={runtime.renderError} onError={handleError}>
        <Process runtime={runtime} setRuntime={setRuntime} />
        <Render runtime={runtime} setRuntime={setRuntime} />
        {runtime.curvature !== null ? (
          <Interact
            runtime={runtime}
            rotations={rotations}
            updateRotations={updateRotations}
            updateParams={updateParams}
          />
        ) : null}
      </ErrorBoundary>
    </>
  )
}
