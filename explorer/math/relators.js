import { invertCase, itoa } from '.'
import { isSnub } from '../mirrors'
import {
  getCGroup,
  getGroupType,
  getStellationOppositeAngle,
} from './hypermath'

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

export const getRelators = (transforms, coxeter, stellation) => {
  const rels = []
  const transformsEntries = Object.entries(transforms)
  const reflectionsEntries = transformsEntries.filter(
    ([_, transform]) => transform.length === 1
  )
  const rotationsEntries = transformsEntries.filter(([_, transform]) => {
    return transform.length === 2
  })
  const conjugationsEntries = transformsEntries.filter(([_, transform]) => {
    return transform.length === 3
  })
  const reflectionsGens = Object.fromEntries(
    reflectionsEntries.map(([k, v]) => [v[0], k])
  )

  for (let i = 0; i < transformsEntries.length; i++) {
    const [gen1, transform1] = transformsEntries[i]

    // Reflection or conjugate reflection gen1^2 = 1
    if ([1, 3].includes(transform1.length)) {
      rels.push(gen1.repeat(2))
    }
    // Rotation gen12^m12 = 1
    if (transform1.length === 2) {
      const m = coxeter[transform1[0]][transform1[1]]
      if (m > 1) {
        rels.push(gen1.repeat(m))
      }
    }

    // Reflection are related to reflections: (gen1 gen2)^m12
    if (transform1.length === 1) {
      const reflection1 = transform1[0]
      for (let j = 0; j < reflectionsEntries.length; j++) {
        const [gen2, reflection2] = reflectionsEntries[j]
        // Only add once
        if (reflection2 > reflection1) {
          const m = coxeter[reflection1][reflection2]
          if (m > 1) {
            rels.push((gen1 + gen2).repeat(m))
          }
        }
      }
    }

    // Conjugate reflection is related to reflection: (gen121 gen2)^m12/2
    if (transform1.length === 3) {
      const m = coxeter[transform1[0]][transform1[1]]
      if (m > 1) {
        const gen2 = reflectionsGens[transform1[1]]
        if (gen2) {
          rels.push((gen1 + gen2).repeat(m % 2 === 0 ? m / 2 : m))
        } else {
          console.warn('No conjugate conjugate reflection', gen1, transform1)
        }
      }
      for (let j = 0; j < conjugationsEntries.length; j++) {
        const [gen2, transform2] = conjugationsEntries[j]

        // Link conjugate reflections to linking rotations (gen01 gen121 gen01^-1 gen020)
        // Find conjugate reflections of the same reflection
        if (transform2[1] === transform1[1]) {
          // Only add once
          if (transform2[0] > transform1[0]) {
            // Find linking rotation
            let gen3 = rotationsEntries.find(
              ([_, rotation]) =>
                rotation[0] === transform1[0] && rotation[1] === transform2[0]
            )?.[0]

            // Or reverse linking rotation
            if (!gen3) {
              gen3 = invertCase(
                rotationsEntries.find(
                  ([_, rotation]) =>
                    rotation[1] === transform1[0] &&
                    rotation[0] === transform2[0]
                )?.[0]
              )
            }

            if (gen3) {
              rels.push(invertCase(gen1) + invertCase(gen3) + gen2 + gen3)
            }
          }
        }

        // Conjugate reflections conjugated with same reflection have same order
        // as their conjugate (gen010 gen121)^m12
        if (transform2[0] === transform1[0]) {
          // Only add once
          if (transform2[1] > transform1[1]) {
            const m = coxeter[transform1[1]][transform2[1]]
            if (m > 1) {
              rels.push((gen1 + gen2).repeat(m))
            }
          }
        }
      }
    }
  }
  // Link rotations that close a path (gen01 gen12 gen02^-1)
  if (rotationsEntries.length > 1) {
    const paths = findPaths(rotationsEntries)
    // Paths should be reversed for some reason
    rels.push(...paths.map(p => p.split('').reverse().join('')))
  }

  // Finally add extra relations generated from stellations
  // https://www.cambridge.org/core/services/aop-cambridge-core/content/view/\
  // 54D0A3028E232240C35FE036D5C32BA7/S0008414X00019386a.pdf

  if (
    coxeter.length > 2 &&
    coxeter.length < 6 &&
    stellation.some((row, i) => row.some((s, j) => s > 1 && coxeter[i][j] > 1))
  ) {
    const groupType = getGroupType(coxeter)
    if (groupType.type === 'c') {
      // C-string groups with stellation i.e. 5/2 3 3 5
      addSteallationRelationsForFiveHalf(
        rels,
        transforms,
        coxeter,
        stellation,
        groupType.group,
        groupType.pairs
      )
    }
    if (groupType.type === 'star') {
      addSteallationRelationsForStarFiveThrees(
        rels,
        transforms,
        coxeter,
        stellation,
        groupType.group,
        groupType.pairs
      )
    }
  }
  console.log(...rels)

  return rels
}

const addSteallationRelationsForFiveHalf = (
  rels,
  transforms,
  coxeter,
  stellation,
  group,
  pairs
) => {
  // We handle at least:
  // 3 5/2
  // 5 5/2
  // 3 5 5/2
  // 5 5/2 5
  // 5/2 5 5/2
  // 5 3 5/2
  // x 5 5/2
  // 5/2 3 3 5
  // 5/2 3 5 5/2
  // 5/2 5 5/2 5
  // 3 5/2 5 3
  // x 3 5 5/2
  // x 5 5/2 5
  // x 5 3 5/2
  // 3 5 3 5/2
  // 5 5 5/2 3

  const stellations = pairs.filter(([i, j]) => stellation[i][j] > 1)
  // We handle only 5/2s
  if (!stellations.map(([i, j]) => coxeter[i][j] === 5)) {
    return
  }
  const ms = pairs.map(([i, j]) => coxeter[i][j])
  // We handle only 3s and 5s except on border on dimensions > 3
  if (
    ms.filter(m => m !== 3 && m !== 5).length > (coxeter.length === 3 ? 0 : 1)
  ) {
    return
  }
  if (ms.filter(m => m !== 3 && m !== 5).length === 1) {
    const nonThreeFive = ms.findIndex(m => m !== 3 && m !== 5)
    if (![0, ms.length - 1].includes(nonThreeFive)) {
      return
    }
  }
  const mss = [ms, [...ms].reverse()]
  const sm = pairs.map(([i, j]) => stellation[i][j])
  const sms = [sm, [...sm].reverse()]

  const matchCase = ({ m, s }) => {
    if (m.length !== coxeter.length - 1) {
      return false
    }
    for (let k = 0; k < mss.length; k++) {
      const mm = mss[k]
      const ss = sms[k]
      if (
        mm.every((mmi, i) => mmi === m[i] || m[i] === null) &&
        ss.every((ssi, i) => ssi === s[i] || s[i] === null)
      ) {
        return true
      }
    }
  }

  // Handle some hyperbolic cases
  // x 5 5/2
  if (matchCase({ m: [null, 5, 5], s: [null, 1, 2] })) {
    // Disable relation on null
    ms[sm[0] === 2 ? ms.length - 1 : 0] = 0
  }

  // Cases without extra relations
  if (
    [
      { m: [null, 3, 5, 5], s: [null, 1, 1, 2] },
      { m: [null, 5, 5, 5], s: [null, 1, 2, 1] },
      { m: [null, 5, 3, 5], s: [null, 1, 1, 2] },
    ].some(matchCase)
  ) {
    return
  }

  if (matchCase({ m: [5, 5, 5, 3], s: [1, 1, 2, 1] })) {
    // Disable relation on first five
    ms[sm[1] === 2 ? ms.length - 1 : 0] = 0
  }

  // We handle at most n - 3 3s
  if (ms.filter(m => m === 3).length > coxeter.length - 3) {
    return
  }
  const fivesPairs = []
  let pair = []
  for (let i = 0; i < ms.length; i++) {
    const m = ms[i]
    if (m === 5) {
      if (!pair.length) {
        pair.push(i)
      } else {
        pair.push(i)
        fivesPairs.push(pair)
        pair = [i]
      }
    }
  }
  const reflectionsGens = Object.fromEntries(
    Object.entries(transforms)
      .filter(([_, transform]) => transform.length === 1)
      .map(([k, v]) => [v[0], k])
  )
  for (let i = 0; i < fivesPairs.length; i++) {
    const [a, b] = fivesPairs[i]
    let rel = ''
    for (let j = a; j < b + 2; j++) {
      rel += reflectionsGens[group[j]]
    }
    rel += rel
      .slice(1, rel.length - 1)
      .split('')
      .reverse()
      .join('')
    rels.push(rel.repeat(3))
  }
}

const addSteallationRelationsForStarFiveThrees = (
  rels,
  transforms,
  coxeter,
  stellation,
  group,
  pairs
) => {
  // In dimension 4
  if (coxeter.length !== 4) {
    return
  }
  const stellations = pairs.filter(([i, j]) => stellation[i][j] > 1)
  // We handle only 5/2s
  if (!stellations.map(([i, j]) => coxeter[i][j] === 5)) {
    return
  }
  const ms = pairs.map(([i, j]) => coxeter[i][j])
  // We handle only 3s and 5s
  if (ms.find(m => m !== 3 && m !== 5)) {
    return
  }
  // We handle only one 3
  if (ms.filter(m => m === 3).length !== 1) {
    return
  }
  const reflectionsGens = Object.fromEntries(
    Object.entries(transforms)
      .filter(([_, transform]) => transform.length === 1)
      .map(([k, v]) => [v[0], k])
  )
  const three = pairs[ms.findIndex(m => m === 3)]
  const fives = pairs.filter(([i, j]) => coxeter[i][j] === 5)

  rels.push(
    // 0131
    [...fives[0], ...fives[1]]
      .map(i => reflectionsGens[i])
      .join('')
      .repeat(3)
  )
  rels.push(
    // 123
    (
      [fives[1][0], ...three]
        .reverse()
        .map(i => reflectionsGens[i])
        .join('')
        .repeat(3) +
      // 10
      [...fives[0]]
        .reverse()
        .map(i => reflectionsGens[i])
        .join('')
        .repeat(2)
    ).repeat(2)
  )
}
