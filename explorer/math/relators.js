import { itoa } from '.'
import { isSnub } from '../mirrors'
import { getStellationOppositeAngle } from './hypermath'

const findPaths = (rotations, word = '', chain = []) => {
  const paths = []
  for (let i = 0; i < rotations.length; i++) {
    const [key, rotation] = rotations[i]
    const otherRotations = rotations.filter((_, j) => j !== i)
    if (chain.length) {
      const last = chain[chain.length - 1]

      if (rotation.some(r => r === last)) {
        const reverse = rotation[1] === last
        const char = reverse ? key.toUpperCase() : key
        const rot = reverse ? [...rotation].reverse() : rotation
        if (rot[1] === chain[0]) {
          return [word + char]
        }
        if (otherRotations.length) {
          paths.push(
            ...findPaths(
              otherRotations,
              word + char,
              chain.concat(rot.slice(1))
            )
          )
        }
      }
    } else {
      paths.push(...findPaths(otherRotations, key, rotation))
    }
  }
  return paths
}

export const getGroupParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  space,
  skips = []
) => {
  let gens = ''

  const subgens = mirrors
    .map((m, i) => (skips.includes(i) || m ? '' : itoa(i)))
    .join('')

  const transforms = {}

  const rels = []

  for (let i = 0; i < dimensions; i++) {
    if (skips.includes(i)) {
      continue
    }

    if (!isSnub(mirrors[i])) {
      const c = itoa(i)
      gens += c
      // Case of not snub => Normal reflection
      transforms[c] = [i]
      rels.push(c.repeat(2))
    }

    for (let j = i + 1; j < dimensions; j++) {
      if (skips.includes(j)) {
        continue
      }
      const m = coxeter[i][j]

      if (isSnub(mirrors[i]) && isSnub(mirrors[j])) {
        // Case of snub + snub => rotation
        const c = itoa((i + 1) * dimensions + j)
        gens += c
        transforms[c] = [i, j]
        if (m > 1) {
          rels.push(c.repeat(m))
        }
      } else if (isSnub(mirrors[i]) && !isSnub(mirrors[j])) {
        // Case of snub + not snub => conjugate reflection
        const c = itoa((i + 1) * dimensions + j)
        gens += c
        transforms[c] = [i, j, i]
        rels.push(c.repeat(2))
        if (m > 1) {
          rels.push((c + itoa(j)).repeat(m % 2 === 0 ? m / 2 : m))
        }
      } else if (!isSnub(mirrors[i]) && isSnub(mirrors[j])) {
        // Case of snub + not snub => conjugate reflection
        const c = itoa((i + 1) * dimensions + j)
        gens += c
        transforms[c] = [j, i, j]
        rels.push(c.repeat(2))
        if (m > 1) {
          rels.push((c + itoa(i)).repeat(m % 2 === 0 ? m / 2 : m))
        }
      } else if (m > 1) {
        // Case of not snub + not snub
        rels.push((itoa(i) + itoa(j)).repeat(m))
      }
    }
  }
  const conjugations = Object.entries(transforms).filter(
    ([k, v]) => v.length === 3
  )
  const rotations = Object.entries(transforms).filter(
    ([k, v]) => v.length === 2
  )
  if (rotations.length > 1) {
    // Find closed path in rotations
    const paths = findPaths(rotations)
    // Paths should be reversed for some reason
    rels.push(...paths.map(p => p.split('').reverse().join('')))
  }
  if (conjugations.length > 1) {
    // Find relationsn between conjugate reflections
    for (let i = 0; i < conjugations.length; i++) {
      const [gen1, conjugate1] = conjugations[i]
      for (let j = i + 1; j < conjugations.length; j++) {
        const [gen2, conjugate2] = conjugations[j]
        if (conjugate1[1] === conjugate2[1]) {
          const conjugatesRotation = rotations.find(
            ([_, rotation]) =>
              rotation[0] === conjugate1[0] && rotation[1] === conjugate2[0]
          )
          if (conjugatesRotation) {
            const genRotation = conjugatesRotation[0]
            rels.push(
              gen1.toUpperCase() +
                genRotation.toUpperCase() +
                gen2 +
                genRotation
            )
          }
        } else if (conjugate1[0] === conjugate2[0]) {
          const m = coxeter[conjugate1[1]][conjugate2[1]]
          if (m > 1) {
            rels.push((gen1 + gen2).repeat(m))
          }
        }
      }
    }
  }
  if (
    !mirrors.some(m => isSnub(m)) &&
    !stellation.every(row => row.every(x => x === 1)) &&
    space.curvature > 0
  ) {
    // TODO: Improve generalization
    if (
      dimensions === 4 &&
      stellation[0][1] > 1 !== stellation[2][3] > 1 &&
      coxeter[0][1] > 3 &&
      coxeter[2][3] > 3
    ) {
      /// ?????????
      if (![0, 1, 2, 3].some(i => skips.includes(i))) {
        if (stellation[0][1] > 1) {
          rels.push(
            'abcdcb'.repeat(
              getStellationOppositeAngle(
                coxeter[0][1],
                coxeter[1][2],
                coxeter[0][2],
                stellation[0][1]
              )
            )
          )
        }
        if (stellation[2][3] > 1) {
          rels.push(
            'abcdcb'.repeat(
              getStellationOppositeAngle(
                coxeter[2][3],
                coxeter[1][2],
                coxeter[1][3],
                stellation[2][3]
              )
            )
          )
        }
      }
    } else {
      for (let i = 1; i < dimensions; i++) {
        for (let j = 0; j < i; j++) {
          if (stellation[j][i] > 1) {
            if (j + 2 < dimensions) {
              const angle = getStellationOppositeAngle(
                coxeter[j + 1][i + 1],
                coxeter[j][i],
                coxeter[j][i + 1],
                stellation[j][i]
              )
              if (
                angle &&
                !skips.includes(j) &&
                !skips.includes(i) &&
                !skips.includes(j + 2)
              ) {
                rels.push(
                  (itoa(j) + itoa(i) + itoa(j + 2) + itoa(i)).repeat(angle)
                )
              }
            }
            if (j - 1 >= 0) {
              const angle = getStellationOppositeAngle(
                coxeter[j - 1][i - 1],
                coxeter[j][i],
                coxeter[j - 1][i],
                stellation[j][i]
              )
              if (
                angle &&
                !skips.includes(j) &&
                !skips.includes(i) &&
                !skips.includes(j - 1)
              ) {
                rels.push(
                  (itoa(j) + itoa(i) + itoa(j) + itoa(j - 1)).repeat(angle)
                )
              }
            }
          }
        }
      }
    }
  }
  return { gens, subgens, rels, transforms }
}
