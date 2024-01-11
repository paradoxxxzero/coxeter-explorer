import { useCallback, useEffect } from 'react'
import { useAdaptative } from '../hooks/useAdaptative'
import { ErrorBoundary } from './ErrorBoundary'
import Interact from './Interact'
import Process from './Process'
import Render from './Render'

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

  useAdaptative(runtime, setRuntime)

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
