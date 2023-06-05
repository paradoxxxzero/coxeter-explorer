import { useCallback } from 'react'
import { useProcess } from '../hooks/useProcess'
import { ErrorBoundary } from './ErrorBoundary'
import Interact from './Interact'
import Render from './Render'

export default function Runtime({
  runtime,
  setRuntime,
  onUpdateMatrix,
  onUpdateView,
}) {
  window.rt = runtime
  useProcess(runtime, setRuntime)

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
        <Render runtime={runtime} />
        <Interact
          runtime={runtime}
          updateMatrix={onUpdateMatrix}
          updateView={onUpdateView}
        />
      </ErrorBoundary>
    </>
  )
}
