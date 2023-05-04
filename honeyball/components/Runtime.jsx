import { useInteract } from '../hooks/useInteract'
import { useProcess } from '../hooks/useProcess'
import { useRender } from '../hooks/useRender'

export default function Runtime({ runtime, setRuntime }) {
  window.rt = runtime
  useProcess(runtime, setRuntime)
  useRender(runtime)
  useInteract(runtime)
  return null
}
