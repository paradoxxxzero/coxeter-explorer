import { combinations, getRels, itoa } from '.'
import { range } from '../../utils'
import { isEnabled } from '../mirrors'

export const getGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (!skips.includes(i) ? itoa(i) : '')).join('')

export const getSubGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (skips.includes(i) || m ? '' : itoa(i))).join('')

export const getVerticesCosetsParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  curvature
) => {
  const skips = mirrors.map((m, i) => (isEnabled(m) ? null : i)).filter(x => x)
  const rels = getRels(
    dimensions,
    coxeter,
    stellation,
    mirrors,
    curvature,
    skips
  )

  const gens = getGens(mirrors, skips)
  const subgens = getSubGens(mirrors, skips)
  return { gens, subgens, rels }
}

export const getEdgesCosetsParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  curvature
) => {
  const skips = mirrors.map((m, i) => (isEnabled(m) ? null : i)).filter(x => x)
  const rels = getRels(
    dimensions,
    coxeter,
    stellation,
    mirrors,
    curvature,
    skips
  )
  const gens = getGens(mirrors, skips)
  const params = []

  for (let i = 0; i < mirrors.length; i++) {
    if (mirrors[i]) {
      let subgens = itoa(i)

      // Add commuting with inactive:
      for (let j = 0; j < dimensions; j++) {
        if (coxeter[i][j] === 2 && !mirrors[j]) {
          subgens += itoa(j)
        }
      }

      params.push({
        gens,
        subgens,
        rels,
        target: itoa(i),
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
  const skips = mirrors.map((m, i) => (isEnabled(m) ? null : i)).filter(x => x)
  const rels = getRels(
    dimensions,
    coxeter,
    stellation,
    mirrors,
    curvature,
    skips
  )
  const gens = getGens(mirrors, skips)
  const params = []

  const faceSkips = combinations(range(dimensions), dimensions - 2)

  for (let i = 0; i < faceSkips.length; i++) {
    const subskips = Array.from(new Set(faceSkips[i].concat(skips)))
    const subRels = getRels(
      dimensions,
      coxeter,
      stellation,
      mirrors,
      curvature,
      subskips
    )
    let subGens = getGens(mirrors, subskips)
    const subSubgens = getSubGens(mirrors, subskips)

    const subwords = solve({
      gens: subGens,
      subgens: subSubgens,
      rels: subRels,
      cosets: {
        normal: [],
        reverse: [],
      },
      rows: [],
      words: [],
      limit: 1000,
    }).words
    if (subwords.length > 2) {
      let subsubsubgens = ''
      for (let j = 0; j < dimensions; j++) {
        if (!subskips.includes(j)) {
          subsubsubgens += itoa(j)
        }
      }
      for (let j = 0; j < dimensions; j++) {
        if (!mirrors[j]) {
          let alltwo = true
          for (let k = 0; k < dimensions; k++) {
            if (!subskips.includes(k) && coxeter[k][j] !== 2) {
              alltwo = false
              break
            }
          }
          if (alltwo) {
            subsubsubgens += itoa(j)
          }
        }
      }
      params.push({
        gens,
        subgens: subsubsubgens,
        rels,
        face: subwords,
        double: mirrors.filter((m, j) => !subskips.includes(j)).every(m => !!m),
      })
    }
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

        words[target] = words[i] + gens[gen]

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
