import { useInteract } from '../hooks/useInteract'

export default function Interact({
  runtime,
  rotations,
  updateRotations,
  updateParams,
}) {
  useInteract(runtime, rotations, updateRotations, updateParams)
  return null
}
