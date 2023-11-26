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
      if (runtime.spaceType?.curvature !== null) {
        updateParams({
          matrix: ident(runtime.dimensions),
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
