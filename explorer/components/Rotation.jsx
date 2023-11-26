import { spaceLetters } from '../../statics'

export default function Rotation({ rotations, spaceType, axis }) {
  if (!spaceType) {
    return null
  }
  const dimensions = spaceType.gram.length
  const index = rotations.shift * 2 + axis
  if (index >= rotations.combinations.length) {
    return null
  }
  let combination = rotations.combinations[index]
  const type = combination.some(i => spaceType.eigens.values[i] < 0)
    ? 'hyperbolic'
    : combination.some(i => spaceType.eigens.values[i] === 0)
    ? 'translation'
    : 'spheric'
  const letters = spaceLetters
    .slice(0, dimensions)
    .split('')
    .filter((_, i) => !combination.includes(i))

  return (
    <aside className={`${axis ? 'y' : 'x'}-rotation`}>
      {letters}
      {type === 'hyperbolic' ? (
        <sup>†</sup>
      ) : type === 'translation' ? (
        <sup>0</sup>
      ) : (
        ''
      )}
    </aside>
  )
}
