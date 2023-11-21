import { useCallback } from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import Interact from './Interact'
import Render from './Render'
import Process from './Process'

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
