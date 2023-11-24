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
  const combination = rotations.combinations[index]
  return (
    <aside className={`${axis ? 'y' : 'x'}-rotation`}>
      {spaceLetters
        .slice(0, dimensions)
        .split('')
        .filter((_, i) => !combination.includes(i))}
      {combination.some(i => spaceType.eigens.values[i] < 0) ? (
        <sup>†</sup>
      ) : combination.some(i => spaceType.eigens.values[i] === 0) ? (
        <sup>0</sup>
      ) : (
        ''
      )}
    </aside>
  )
}
