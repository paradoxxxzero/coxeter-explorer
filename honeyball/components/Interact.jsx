import { useInteract } from '../hooks/useInteract'

export default function Interact({ runtime, rotations, updateParams }) {
  useInteract(runtime, rotations, updateParams)
  return null
}
