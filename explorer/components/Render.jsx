import { useRender } from '../hooks/useRender'

export default function Render({ runtime, setRuntime }) {
  useRender(runtime, setRuntime)
  return null
}
