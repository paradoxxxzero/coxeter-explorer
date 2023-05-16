import { useInteract } from '../hooks/useInteract'

export default function Interact({ runtime, updateMatrix }) {
  useInteract(runtime, updateMatrix)
  return null
}
