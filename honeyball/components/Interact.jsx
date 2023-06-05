import { useInteract } from '../hooks/useInteract'

export default function Interact({ runtime, updateMatrix, updateView }) {
  useInteract(runtime, updateMatrix, updateView)
  return null
}
