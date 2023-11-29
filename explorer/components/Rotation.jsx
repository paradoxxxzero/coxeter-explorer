import { memo } from 'react'
import { spaceLetters } from '../../statics'
import { abs } from '../math'

export default memo(function Rotation({ rotations, spaceType, axis }) {
  if (!spaceType) {
    return null
  }
  const dimensions = spaceType.gram.length
  const index = rotations.shift * 2 + axis
  if (index >= rotations.combinations.length) {
    return null
  }
  let combination = rotations.combinations[index]
  const type = combination.some(v => v < 0)
    ? 'parabolic'
    : combination.some(i => spaceType.eigens.values[i] < 0)
    ? 'hyperbolic'
    : combination.some(i => spaceType.eigens.values[i] === 0)
    ? 'translation'
    : 'spheric'
  const letters = spaceLetters.slice(0, dimensions).split('')
  const rotation =
    type === 'parabolic'
      ? combination.map(i => letters[abs(i)]).join('->')
      : letters.filter((_, i) => !combination.includes(i))

  return (
    <aside className={`${axis ? 'y' : 'x'}-rotation`}>
      {rotation}
      {type === 'parabolic' ? (
        <sup>∞</sup>
      ) : type === 'hyperbolic' ? (
        <sup>†</sup>
      ) : type === 'translation' ? (
        <sup>0</sup>
      ) : (
        ''
      )}
    </aside>
  )
})
