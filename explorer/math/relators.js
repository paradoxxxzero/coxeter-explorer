import { invertCase } from '.'
import { getGroupType } from './hypermath'

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

export const getRelators = (transforms, coxeter) => {
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
        const [gen2, [reflection2]] = reflectionsEntries[j]
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
  return rels
}

export const getExtraRelators = (transforms, coxeter, stellation) => {
  // Finally add extra relations generated from stellations
  // https://www.cambridge.org/core/services/aop-cambridge-core/content/view/\
  // 54D0A3028E232240C35FE036D5C32BA7/S0008414X00019386a.pdf
  const stellationsRels = []
  if (
    coxeter.length > 2 &&
    coxeter.length < 6 &&
    stellation.some((row, i) => row.some((s, j) => s > 1 && coxeter[i][j] > 1))
  ) {
    const groupType = getGroupType(coxeter)
    if (groupType.type === 'c') {
      // C-string groups with stellation i.e. 5/2 3 3 5
      stellationsRels.push(
        ...addSteallationRelationsForFiveHalf(
          coxeter,
          stellation,
          groupType.group,
          groupType.pairs
        )
      )
    } else if (groupType.type === 'star') {
      stellationsRels.push(
        ...addSteallationRelationsForStarFiveThrees(
          coxeter,
          stellation,
          groupType.group,
          groupType.pairs
        )
      )
    }
  }

  // Other sporadic finds, not proved
  // 5 5/3 3
  if (
    coxeter.length === 3 &&
    coxeter[0][1] === 5 &&
    coxeter[0][2] === 3 &&
    coxeter[1][2] === 5 &&
    ((stellation[0][1] === 3 &&
      stellation[0][2] === 1 &&
      stellation[1][2] === 1) ||
      (stellation[0][1] === 1 &&
        stellation[0][2] === 1 &&
        stellation[1][2] === 3))
  ) {
    stellationsRels.push(repeat(2, [0, 1, 2, 1]))
  }

  // Adapt transforms to relations
  const reflectionsGens = Object.fromEntries(
    Object.entries(transforms)
      .filter(([_, transform]) => transform.length === 1)
      .map(([k, v]) => [v[0], k])
  )
  const rotationsGens = Object.entries(transforms)
    .filter(([_, transform]) => transform.length === 2)
    .map(([k, v]) => [
      [v, k],
      [[...v].reverse(), invertCase(k)],
    ])
    .flat()

  const rels = []
  for (let i = 0; i < stellationsRels.length; i++) {
    const stellationRel = stellationsRels[i]
    let rel = ''
    let fail = false
    for (let j = 0; j < stellationRel.length; j++) {
      const genIndex = stellationRel[j]
      const gen = reflectionsGens[genIndex]
      if (gen) {
        rel += gen
      } else {
        const rotation = rotationsGens.find(
          ([v, k]) =>
            v[0] === genIndex &&
            j < stellationRel.length - 1 &&
            v[1] === stellationRel[j + 1]
        )
        if (rotation) {
          rel += rotation[1]
          j++
        } else {
          fail = true
          break
        }
      }
    }
    if (!fail) {
      rels.push(rel)
    }
  }

  // Semi Snub sporadic finds, not proved
  if (
    coxeter.length === 3 &&
    transforms['a'].length === 2 &&
    transforms['b'].length === 3 &&
    transforms['c'].length === 3 &&
    coxeter[0][1] !== 2 &&
    coxeter[1][2] === 3
  ) {
    rels.push('abcb'.repeat(2))
  }
  if (
    coxeter.length === 3 &&
    transforms['a'].length === 1 &&
    transforms['b'].length === 3 &&
    transforms['c'].length === 3 &&
    coxeter[1][2] !== 2 &&
    coxeter[0][1] === 3
  ) {
    rels.push('dcbc'.repeat(2))
  }
  return rels
}

const repeat = (n, arr) => Array(n).fill(arr).flat()
const addSteallationRelationsForFiveHalf = (
  coxeter,
  stellation,
  group,
  pairs
) => {
  const rels = []
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
    return rels
  }
  const ms = pairs.map(([i, j]) => coxeter[i][j])
  // We handle only 3s and 5s except on border on dimensions > 3
  if (
    ms.filter(m => m !== 3 && m !== 5).length > (coxeter.length === 3 ? 0 : 1)
  ) {
    return rels
  }
  if (ms.filter(m => m !== 3 && m !== 5).length === 1) {
    const nonThreeFive = ms.findIndex(m => m !== 3 && m !== 5)
    if (![0, ms.length - 1].includes(nonThreeFive)) {
      return rels
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
    return rels
  }

  if (matchCase({ m: [5, 5, 5, 3], s: [1, 1, 2, 1] })) {
    // Disable relation on first five
    ms[sm[1] === 2 ? ms.length - 1 : 0] = 0
  }

  // We handle at most n - 3 3s
  if (ms.filter(m => m === 3).length > coxeter.length - 3) {
    return rels
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
  for (let i = 0; i < fivesPairs.length; i++) {
    const [a, b] = fivesPairs[i]
    const rel = []
    for (let j = a; j < b + 2; j++) {
      rel.push(group[j])
    }
    rel.push(...rel.slice(1, rel.length - 1).reverse())
    rels.push(repeat(3, rel))
  }
  return rels
}

const addSteallationRelationsForStarFiveThrees = (
  coxeter,
  stellation,
  group,
  pairs
) => {
  const rels = []
  // In dimension 4
  if (coxeter.length !== 4) {
    return rels
  }
  const stellations = pairs.filter(([i, j]) => stellation[i][j] > 1)
  // We handle only 5/2s
  if (!stellations.map(([i, j]) => coxeter[i][j] === 5)) {
    return rels
  }
  const ms = pairs.map(([i, j]) => coxeter[i][j])
  // We handle only 3s and 5s
  if (ms.find(m => m !== 3 && m !== 5)) {
    return rels
  }
  // We handle only one 3
  if (ms.filter(m => m === 3).length !== 1) {
    return rels
  }

  const three = pairs[ms.findIndex(m => m === 3)]
  const fives = pairs.filter(([i, j]) => coxeter[i][j] === 5)
  rels.push(
    // 0131
    repeat(3, [...fives[0], ...fives[1]])
  )
  rels.push(
    // 123
    repeat(2, [
      ...repeat(3, [fives[1][0], ...three].reverse()),
      // 10
      ...repeat(2, [...fives[0]].reverse()),
    ])
  )
  return rels
}

export const expand = rel => {
  rel = rel.replace(/\s/g, '')
  rel = rel.replace(/(\w)(\^-?\d+)/g, '($1)$2')
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let newRel = rel.replace(/\((\w+)\)\^(-?\d+)/g, (_, g, n) => {
      n = parseInt(n)
      if (n < 0) {
        g = g
          .split('')
          .reverse()
          .map(c => invertCase(c))
          .join('')
        n = -n
      }
      return g.repeat(n)
    })
    if (newRel === rel) {
      break
    }
    rel = newRel
  }
  return rel
}

export const factor = rel => {
  // Inverse operation of previous expand
  // Converts aa into a^2
  // Converts ababab into (ab)^3
  // Converts BABABA into (ab)^-3

  rel = rel.replace(/\s/g, '')
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let newRel = rel.replace(/(\w+)(\1)+/g, (_, g1) => {
      const n = _.length / g1.length
      return `(${g1})^${n}`
    })
    // Fold factorizations like ((ac)^2)^3 into (ac)^6
    newRel = newRel.replace(/\(\((\w+)\)\^(\d+)\)\^(\d+)/g, (_, g, n1, n2) => {
      return `(${g})^${parseInt(n1) * parseInt(n2)}`
    })
    // Also factorize (ac)^2ac into (ac)^3
    newRel = newRel.replace(/\((\w+)\)\^(\d+)(\1)/g, (_, g, n1) => {
      return `(${g})^${parseInt(n1) + 1}`
    })
    // Also factorize ac(ac)^2 into (ac)^3
    newRel = newRel.replace(/(\w+)\(\1\)\^(\d+)/g, (_, g, n1) => {
      return `(${g})^${parseInt(n1) + 1}`
    })

    if (newRel === rel) {
      break
    }
    rel = newRel
  }
  rel = rel.replace(/\(([A-Z]+)\)\^(\d+)/g, (_, g, n) => {
    g = g
      .split('')
      .reverse()
      .map(c => invertCase(c))
      .join('')
    return `(${g})^-${n}`
  })
  rel = rel.replace(/([A-Z]+)/g, (_, g) => {
    g = g
      .split('')
      .reverse()
      .map(c => invertCase(c))
      .join('')
    return `(${g})^-1`
  })

  rel = rel.replace(/\((\w)\)(\^-?\d+)/g, '$1$2')

  return rel
}
typeof window !== 'undefined' && (window.factor = factor)
