import { combinations, getRels, itoa } from '.'
import { enabled } from '../mirrors'

export const getGens = mirrors =>
  mirrors.map((m, i) => (enabled(m) ? itoa(i) : '')).join('')

export const getVerticesCosetsParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  curvature
) => {
  const rels = getRels(dimensions, coxeter, stellation, mirrors, curvature)

  const gens = getGens(mirrors)
  const subgens = mirrors
    .map((m, i) => (m || !enabled(m) ? '' : itoa(i)))
    .join('')
  return { gens, subgens, rels }
}

export const getEdgesCosetsParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  curvature
) => {
  const rels = getRels(dimensions, coxeter, stellation, mirrors, curvature)
  const gens = getGens(mirrors)
  const params = []

  for (let i = 0; i < mirrors.length; i++) {
    if (mirrors[i]) {
      let subgens = itoa(i)
      for (let j = 0; j < dimensions; j++) {
        if (coxeter[i][j] === 2) {
          if (!mirrors[j]) {
            subgens += itoa(j)
          }
        }
      }
      params.push({
        gens,
        subgens,
        rels,
        pair: [0, itoa(i)],
      })
    }
  }

  return params
}
export const getFacesCosetsParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  curvature
) => {
  const rels = getRels(dimensions, coxeter, stellation, mirrors, curvature)
  const gens = getGens(mirrors)
  const params = []

  const mirrorsPairs = combinations([...Array(dimensions).keys()])
  for (let i = 0; i < mirrorsPairs.length; i++) {
    const pair = mirrorsPairs[i]
    const multiplier = coxeter[pair[0]][pair[1]]
    const face = []
    // If both active
    if (mirrors[pair[0]] && mirrors[pair[1]] && isFinite(multiplier)) {
      for (let j = 0; j < multiplier; j++) {
        const chain = pair
          .map(i => itoa(i))
          .join('')
          .repeat(j)
        face.push(chain)
        face.push(itoa(pair[1]) + chain)
      }
    } else if (
      (mirrors[pair[0]] || mirrors[pair[1]]) &&
      isFinite(multiplier) &&
      multiplier > 2
    ) {
      for (let j = 0; j < multiplier; j++) {
        const chain = pair
          .map(i => itoa(i))
          .join('')
          .repeat(j)
        face.push(chain)
      }
    } else {
      continue
    }

    let subgens = itoa(pair[0]) + itoa(pair[1])

    for (let j = 0; j < dimensions; j++) {
      if (coxeter[pair[0]][j] === 2 && coxeter[pair[1]][j] === 2) {
        if (!mirrors[j]) {
          subgens += itoa(j)
        }
      }
    }
    params.push({ gens, subgens, rels, face })
  }

  return params
}

const learn = (cosets, row) => {
  if (row.left === row.right) {
    return false
  }

  while (row.left !== row.right) {
    const left_target = cosets.normal[row.left_coset][row.rel[row.left]]
    if (left_target === undefined) {
      break
    }

    row.left++
    row.left_coset = left_target
  }

  while (row.left !== row.right) {
    const right_coset = cosets.reverse[row.right_target][row.rel[row.right]]
    if (right_coset === undefined) {
      break
    }

    row.right--
    row.right_target = right_coset
  }
  if (row.left === row.right) {
    cosets.normal[row.left_coset][row.rel[row.right]] = row.right_target
    cosets.reverse[row.right_target][row.rel[row.right]] = row.left_coset
    return true
  }

  return false
}

export const solve = params => {
  const {
    gens,
    subgens: strSubgens,
    rels: strRels,
    cosets,
    rows,
    words,
    limit,
  } = params

  const dimensions = gens.length
  const rels = strRels.map(rel => [...rel].map(g => gens.indexOf(g)))
  const subgens = strSubgens.split('').map(g => gens.indexOf(g))

  if (cosets.normal.length === 0) {
    cosets.normal.push(new Array(dimensions).fill())
    cosets.reverse.push(new Array(dimensions).fill())

    for (let i = 0; i < subgens.length; i++) {
      cosets.normal[0][subgens[i]] = 0
      cosets.reverse[0][subgens[i]] = 0
    }
  }
  if (rows.length === 0) {
    rows.push(
      ...rels.map(rel => ({
        rel,
        left: 0,
        right: rel.length - 1,
        left_coset: 0,
        right_target: 0,
      }))
    )
  }

  while (rows.length && cosets.normal.length < limit) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let learned = false
      for (let i = rows.length - 1; i >= 0; i--) {
        if (learn(cosets, rows[i])) {
          learned = true
          rows.splice(i, 1)
        }
      }
      if (!learned) {
        break
      }
    }

    const initialLength = cosets.normal.length
    let found = false
    for (let i = 0; i < cosets.normal.length; i++) {
      const coset = cosets.normal[i]
      for (let gen = 0; gen < coset.length; gen++) {
        let target = coset[gen]
        if (target === undefined) {
          target = cosets.normal.length
          cosets.normal.push(new Array(dimensions).fill())
          cosets.reverse.push(new Array(dimensions).fill())

          cosets.normal[i][gen] = target
          cosets.reverse[target][gen] = i
          rows.push(
            ...rels.map(rel => ({
              rel,
              left: 0,
              right: rel.length - 1,
              left_coset: initialLength,
              right_target: initialLength,
            }))
          )
          found = true
          break
        }
      }
      if (found) {
        break
      }
    }
  }
  if (!rows.length) {
    params.done = true
  }
  if (words.length === 0) {
    words[0] = ''
  }
  let change = true,
    max = cosets.normal.length
  while (remaining(cosets.normal.length, words) && change && --max) {
    change = false
    for (let i = 0; i < words.length; i++) {
      if (words[i] === undefined) {
        continue
      }

      const coset = cosets.normal[i]
      for (let gen = 0; gen < coset.length; gen++) {
        const target = coset[gen]

        if (target === undefined || words[target] !== undefined) {
          continue
        }

        words[target] = words[i] + itoa(gen)

        change = true
      }
    }
  }
  if (!change) {
    console.warn('Hole in the cosets')
  }
  if (max === 0) {
    console.warn('Max iterations reached')
  }
  // TODO:Clean snub
  return { cosets, rows, words }
}

const remaining = (length, words) => {
  for (let i = 0; i < length; i++) {
    if (words[i] === undefined) {
      return true
    }
  }
  return false
}

export const toddCoxeter = (dimensions, coxeter, stellation, mirrors) => {
  return solve({
    ...getVerticesCosetsParams(dimensions, coxeter, stellation, mirrors),
    cosets: {
      normal: [],
      reverse: [],
    },
    rows: [],
    words: [],
    limit: 10000,
  }).words
}
