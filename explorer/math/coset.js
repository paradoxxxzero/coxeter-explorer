import { getRels, itoa } from '.'
import { MAX_UINT_32, range } from '../../utils'
import { isEnabled } from '../mirrors'
import { submatrix, subvector } from './matrix'

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
    dimensions,
    gens: getGens(mirrors, skips),
    subgens: getSubGens(mirrors, skips),
    rels: getRels(dimensions, coxeter, stellation, skips),
    [`${dimensions}-face`]: [''],
    coxeter,
    stellation,
    mirrors,
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
        dimensions: dimensions - subskips.length,
        subgens,
        [`${dimensions - subskips.length}-face`]: subwords,
        coxeter: submatrix(coxeter, subskips),
        stellation: submatrix(stellation, subskips),
        mirrors: subvector(mirrors, subskips),
        skips: subskips,
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
    }
  }
  if (shape.children.length === 0) {
    console.info('No leaf found, digging deeper', skips)
    for (let i = 0; i < dimensions; i++) {
      if (skips.includes(i)) {
        continue
      }
      const subskips = [...skips, i]
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
    if (left_target === MAX_UINT_32) {
      break
    }

    row.left++
    row.left_coset = left_target
  }

  while (row.left !== row.right) {
    const right_coset = cosets.reverse[row.right_target][row.rel[row.right]]
    if (right_coset === MAX_UINT_32) {
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
  }).words
}

function fillCosets(params) {
  if (!params.cosets) {
    params.cosets = {
      normal: [],
      reverse: [],
    }
  }
  if (!params.rows) {
    params.rows = []
  }

  if (!params.limit) {
    params.limit = 1000
  }

  if (!params.done) {
    params.done = false
  }
  const {
    gens,
    subgens: strSubgens,
    rels: strRels,
    cosets,
    rows,
    limit,
  } = params
  const dimensions = gens.length
  const rels = strRels.map(rel => [...rel].map(g => gens.indexOf(g)))
  const subgens = strSubgens.split('').map(g => gens.indexOf(g))

  if (cosets.normal.length === 0) {
    cosets.normal.push(new Uint32Array(dimensions).fill(MAX_UINT_32))
    cosets.reverse.push(new Uint32Array(dimensions).fill(MAX_UINT_32))

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
          rows[i] = rows[rows.length - 1]
          rows.pop()
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
        if (target === MAX_UINT_32) {
          target = cosets.normal.length
          cosets.normal.push(new Uint32Array(dimensions).fill(MAX_UINT_32))
          cosets.reverse.push(new Uint32Array(dimensions).fill(MAX_UINT_32))

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
  params.done = !rows.length
}

const remaining = (length, words) => {
  for (let i = 0; i < length; i++) {
    if (words[i] === undefined) {
      return true
    }
  }
  return false
}

function wordify(params) {
  if (!params.words) {
    params.words = []
  }
  const {
    gens,
    cosets: { normal: cosets },
    words,
  } = params

  if (words.length === 0) {
    words[0] = ''
  }
  let change = true,
    max = cosets.length
  while (remaining(cosets.length, words) && change && --max) {
    change = false
    for (let i = 0; i < words.length; i++) {
      if (words[i] === undefined) {
        continue
      }

      const coset = cosets[i]
      for (let gen = 0; gen < coset.length; gen++) {
        const target = coset[gen]

        if (target === MAX_UINT_32 || words[target] !== undefined) {
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
}

export const solve = params => {
  fillCosets(params)
  wordify(params)
  return params
}

export const countCosets = (gens, subgens, rels, limit = 1000) => {
  const params = {
    gens,
    subgens,
    rels,
    limit,
  }
  fillCosets(params)
  return params.done ? params.cosets.normal.length : NaN
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

typeof window !== 'undefined' &&
  (window.bench = () => {
    const start = performance.now()
    const res = countCosets(
      'abcdefgh',
      'abdefgh',
      [
        'aa',
        'bb',
        'cc',
        'dd',
        'ee',
        'ff',
        'gg',
        'hh',
        'ababab',
        'acac',
        'bcbcbc',
        'adad',
        'bdbd',
        'cdcdcd',
        'aeae',
        'bebe',
        'cecece',
        'dede',
        'afaf',
        'bfbf',
        'cfcf',
        'dfdf',
        'efefef',
        'agag',
        'bgbg',
        'cgcg',
        'dgdg',
        'egeg',
        'fgfgfg',
        'ahah',
        'bhbh',
        'chch',
        'dhdh',
        'eheh',
        'fhfh',
        'ghghgh',
      ],
      5000
    )
    console.info(res, performance.now() - start)
  })
