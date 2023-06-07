import { useProcess } from '../hooks/useProcess'

export default function Process({ runtime, setRuntime }) {
  useProcess(runtime, setRuntime)
  return null
}
