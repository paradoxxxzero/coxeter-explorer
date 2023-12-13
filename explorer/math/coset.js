import { getRels, itoa } from '.'
import { range } from '../../utils'
import { isEnabled } from '../mirrors'

export const getGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (!skips.includes(i) ? itoa(i) : '')).join('')

export const getSubGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (skips.includes(i) || m ? '' : itoa(i))).join('')

export const hasOrder = (word, order) => {
  if (order === 0) {
    return true
  }
  const seen = new Set()
  for (let i = 0; i < word.length; i++) {
    const c = word[i]
    if (!c || seen.has(c)) {
      continue
    }
    seen.add(c)
    if (seen.size === order) {
      return true
    }
  }
  return false
}

export const getShape = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  skips = null,
  shape = null,
  solved = new Map()
) => {
  skips =
    skips ||
    mirrors.map((m, i) => (isEnabled(m) ? null : i)).filter(x => x !== null)
  shape = shape || {
    new: true,
    gens: getGens(mirrors, skips),
    subgens: getSubGens(mirrors, skips),
    rels: getRels(dimensions, coxeter, stellation, skips),
    [`${dimensions}-face`]: [''],
    skips,
    children: [],
  }
  for (let i = 0; i < dimensions; i++) {
    if (skips.includes(i)) {
      continue
    }
    const subskips = [...skips, i]
    const actives = range(dimensions).filter(j => !subskips.includes(j))
    const sortedSubskips = subskips.sort().join('-')
    let isnew = false
    if (!solved.has(sortedSubskips)) {
      isnew = true
      solved.set(
        sortedSubskips,
        simpleSolve(dimensions, coxeter, stellation, mirrors, subskips)
      )
    }
    const subwords = solved.get(sortedSubskips)

    // If the coset generate a n-face
    if (hasOrder(subwords[subwords.length - 1], dimensions - subskips.length)) {
      let subgens = ''
      for (let j = 0; j < dimensions; j++) {
        if (
          !subskips.includes(j) ||
          (!mirrors[j] && !actives.some(k => coxeter[k][j] !== 2))
        ) {
          subgens += itoa(j)
        }
      }
      let subShape = {
        new: isnew,
        subgens,
        [`${dimensions - subskips.length}-face`]: subwords,
        // TOREMOVE:
        double: mirrors.filter((m, j) => !subskips.includes(j)).every(m => !!m),
        children: [],
      }
      if (dimensions - subskips.length > 0) {
        subShape = getShape(
          dimensions,
          coxeter,
          stellation,
          mirrors,
          subskips,
          subShape,
          solved
        )
      }
      shape.children.push(subShape)
    } else {
      shape.children.push(
        getShape(
          dimensions,
          coxeter,
          stellation,
          mirrors,
          subskips,
          {
            children: [],
          },
          solved
        )
      )
    }
  }
  return shape
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

export const simpleSolve = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  subskips
) => {
  const rels = getRels(dimensions, coxeter, stellation, subskips)
  const gens = getGens(mirrors, subskips)
  const subgens = getSubGens(mirrors, subskips)
  return solve({
    gens,
    subgens,
    rels,
    cosets: {
      normal: [],
      reverse: [],
    },
    rows: [],
    words: [],
    limit: 1000,
  }).words
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

export const ToddCoxeter = (gens, subgens, rels, limit = 1000) => {
  return solve({
    gens,
    subgens,
    rels,
    cosets: {
      normal: [],
      reverse: [],
    },
    rows: [],
    words: [],
    limit,
  }).words
}

// Cube :
// All vertices (all mirrors):
// ToddCoxeter('abc', '', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 48

// Vertices:
// ToddCoxeter('abc', 'bc', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 8
// Edges:
// ToddCoxeter('abc', 'ac', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 12
// Faces:
// ToddCoxeter('abc', 'ab', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 6

// Tesseract:
// Vertices:
// ToddCoxeter('abcd', 'bcd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 16
// Edges:
// ToddCoxeter('abcd', 'acd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 32
// Faces:
// ToddCoxeter('abcd', 'abd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 24
// Volumes:
// ToddCoxeter('abcd', 'abc', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8

// Rhombicuboctahedron:
// Vertices:
// ToddCoxeter('abc', 'b', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 24
// Edges:
// ToddCoxeter('abc', 'a', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 24
// ToddCoxeter('abc', 'c', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 24
// Faces:
// ToddCoxeter('abc', 'ab', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 6
// ToddCoxeter('abc', 'bc', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 8
// ToddCoxeter('abc', 'ac', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 12

// Cantellated 8-cell:
// Vertices:
// ToddCoxeter('abcd', 'bd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 96
// Edges:
// ToddCoxeter('abcd', 'ad', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 96
// ToddCoxeter('abcd', 'c', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 192
// Faces:
// ToddCoxeter('abcd', 'abd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 24
// ToddCoxeter('abcd', 'bc', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 64
// ToddCoxeter('abcd', 'ac', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 96
// ToddCoxeter('abcd', 'cd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 64
// Volumes:
// ToddCoxeter('abcd', 'abc', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8
// ToddCoxeter('abcd', 'bcd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8
// ToddCoxeter('abcd', 'acd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8
