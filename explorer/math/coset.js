import { getRels, itoa, itor } from '.'
import { MAX_UINT_32, range } from '../../utils'
import { isEnabled, isSnub } from '../mirrors'
import { submatrix, subvector } from './matrix'

export const getGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (!skips.includes(i) ? itoa(i) : '')).join('')

export const getSubGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (skips.includes(i) || m ? '' : itoa(i))).join('')

export const hasOrder = (words, order) => {
  if (order === 0) {
    return true
  }
  let word = words[words.length - 1]
  // if (replacements) {
  //   word = Object.entries(replacements).reduce(
  //     (acc, [key, value]) => acc.replace(new RegExp(key, 'g'), value),
  //     word
  //   )
  // }
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
    coxeter,
    stellation,
    mirrors,

    skips,

    // For convenience:
    gens: getGens(mirrors, skips),
    subgens: getSubGens(mirrors, skips),
    rels: getRels(dimensions, coxeter, stellation, skips),
    quotient: '',
    space: [''],
    snub: mirrors.some(isSnub),

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

      const subParams = {
        dimensions: dimensions - subskips.length,
        coxeter: submatrix(coxeter, subskips),
        stellation: submatrix(stellation, subskips),
        mirrors: subvector(mirrors, subskips),

        skips: subskips,

        gens: getGens(mirrors, subskips),
        subgens: getSubGens(mirrors, subskips),
        rels: getRels(dimensions, coxeter, stellation, subskips),
        snub: subvector(mirrors, subskips).some(isSnub),
      }
      ToddCoxeter(subParams)
      solved.set(sortedSubskips, subParams)
    }

    const subParams = solved.get(sortedSubskips)
    const space = subParams.words

    // If the coset generate a space
    if (hasOrder(space, subParams.dimensions)) {
      let quotient = ''
      if (subParams.snub && space.length <= subParams.dimensions) {
        // New face from both rotation
        console.warn('TODO')
        space.push(...subskips.map(itoa))
      } else {
        for (let j = 0; j < dimensions; j++) {
          if (
            !subskips.includes(j) ||
            (isEnabled(mirrors[j]) &&
              !mirrors[j] &&
              !actives.some(k => coxeter[k][j] !== 2))
          ) {
            quotient += itoa(j)
          }
        }
      }
      let subShape = {
        new: isnew,
        ...subParams,

        quotient,
        space,

        children: [],
      }
      if (subParams.dimensions > 0) {
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

export const snub = params => {
  // console.log(
  //   '>',
  //   params.gens,
  //   params.subgens,
  //   params.replacements,
  //   params.rels
  // )
  if (params.mirrors.some(m => isSnub(m))) {
    params.replacements = {}
    let r = 0
    const size = params.mirrors.length
    const originalSubgens = params.subgens
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < i; j++) {
        if (
          (params.skip &&
            (params.skips.includes(i) || params.skips.includes(j))) ||
          !(params.gens.includes(itoa(i)) && params.gens.includes(itoa(j)))
        ) {
          continue
        }
        if (isSnub(params.mirrors[i]) && isSnub(params.mirrors[j])) {
          const R = itor(r)
          params.replacements[R] = itoa(j) + itoa(i)
          params.gens =
            params.gens
              .split('')
              .filter(g => ![i, j].map(c => itoa(c)).includes(g))
              .join('') + R
          params.subgens = params.subgens
            .replace(new RegExp(itoa(j) + itoa(i), 'g'), '')
            .split('')
            .filter(c => c !== itoa(j) && c !== itoa(i))
            .join('')
          params.rels = params.rels
            .filter(rel => ![i, j].map(c => itoa(c).repeat(2)).includes(rel))
            .map(rel => rel.replace(new RegExp(itoa(j) + itoa(i), 'g'), R))
          r++
        } else if (size < 3 && isSnub(params.mirrors[i])) {
          const R = itor(r)
          params.replacements[R] = itoa(i) + itoa(j) + itoa(i)
          params.gens =
            params.gens
              .split('')
              .filter(g => itoa(j) !== g)
              .join('') + R
          params.subgens = params.subgens
            .replace(new RegExp(itoa(j) + itoa(i), 'g'), '')
            .split('')
            .filter(c => c !== itoa(j) && c !== itoa(i))
            .join('')
          params.rels = params.rels
            .filter(rel => ![i, j].map(c => itoa(c).repeat(2)).includes(rel))
            .map(rel => rel.replace(new RegExp(itoa(j) + itoa(i), 'g'), R))
          r++
        } else if (size < 3 && isSnub(params.mirrors[j])) {
          const R = itor(r)
          params.replacements[R] = itoa(j) + itoa(i) + itoa(j)
          params.gens =
            params.gens
              .split('')
              .filter(g => itoa(i) !== g)
              .join('') + R
          params.subgens = params.subgens
            .replace(new RegExp(itoa(j) + itoa(i), 'g'), '')
            .split('')
            .filter(c => c !== itoa(j) && c !== itoa(i))
            .join('')
          params.rels = params.rels
            .filter(rel => ![i, j].map(c => itoa(c).repeat(2)).includes(rel))
            .map(rel => rel.replace(new RegExp(itoa(j) + itoa(i), 'g'), R))
          r++
        }
      }
    }

    if (params.gens === 'rst') {
      if (originalSubgens === 'c') {
        params.subgens = 's'
      }
      params.rels.push('rst')
    }
    // console.log(
    //   '>S',
    //   params.gens,
    //   params.subgens,
    //   params.replacements,
    //   params.rels
    // )

    // params.subgens = Object.entries(params.replacements).reduce(
    //   (acc, [key, value]) => acc.replace(new RegExp(value, 'g'), key),
    //   params.subgens
    // )

    // if (params.subgens === 'c') {
    //   params.subgens = params.subgens.toUpperCase()
    // }
    // params.rels = params.rels.map(rel =>
    //   Object.entries(params.replacements).reduce(
    //     (acc, [key, value]) => acc.replace(new RegExp(value, 'g'), key),
    //     rel
    //   )
    // )
    // const replaced = [
    //   ...new Set(
    //     Object.values(params.replacements)
    //       .map(w => w.split(''))
    //       .flat()
    //   ),
    // ]
    // params.rels = params.rels.filter(
    //   rel => !replaced.some(c => rel === `${c}${c}`)
    // )
    // if (params.gens === 'ABC') {
    //   params.rels.push('ABC')
    // }
  }
}
export const ToddCoxeter = params => {
  fillCosets(params)
  wordify(params)
  return params.words
}

export const countCosets = params => {
  fillCosets(params)
  return params.done ? params.cosets.normal.length : NaN
}

function fillCosets(params) {
  if (!params.cosets) {
    params.cosets = {
      normal: [],
      reverse: [],
    }
    // snub(params)
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
  if (strSubgens.split('').some(c => !gens.includes(c))) {
    throw new Error(`Invalid subgens "${strSubgens}" <- "${gens}"`)
  }
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

// Cube :
// All vertices (all mirrors):
// TC('abc', '', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 48

// Vertices:
// TC('abc', 'bc', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 8
// Edges:
// TC('abc', 'ac', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 12
// Faces:
// TC('abc', 'ab', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 6

// Tesseract:
// Vertices:
// TC('abcd', 'bcd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 16
// Edges:
// TC('abcd', 'acd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 32
// Faces:
// TC('abcd', 'abd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 24
// Volumes:
// TC('abcd', 'abc', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8

// Rhombicuboctahedron:
// Vertices:
// TC('abc', 'b', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 24
// Edges:
// TC('abc', 'a', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 24
// TC('abc', 'c', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 24
// Faces:
// TC('abc', 'ab', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 6
// TC('abc', 'bc', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 8
// TC('abc', 'ac', ['aa', 'bb', 'cc', 'abababab', 'bcbcbc', 'acac']) -> 12

// Cantellated 8-cell:
// Vertices:
// TC('abcd', 'bd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 96
// Edges:
// TC('abcd', 'ad', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 96
// TC('abcd', 'c', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 192
// Faces:
// TC('abcd', 'abd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 24
// TC('abcd', 'bc', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 64
// TC('abcd', 'ac', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 96
// TC('abcd', 'cd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 64
// Volumes:
// TC('abcd', 'abc', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8
// TC('abcd', 'bcd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8
// TC('abcd', 'acd', ['aa', 'bb', 'cc', 'dd', 'abababab', 'acac', 'bcbcbc', 'adad', 'bdbd', 'cdcdcd']) -> 8

// SnubCube:
// Vertices:
// TC('ab', '', ['aaaa', 'bbb', 'abab']) -> 24
// TC('AB', '', ['AAAA', 'BBB', 'ABAB']).words.map(w => w.replace(/A/g, 'ab').replace(/B/g, 'bc'))
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
typeof window !== 'undefined' &&
  (window.TC = (gens, subgens, rels) =>
    ToddCoxeter({ gens, subgens, rels, mirrors: [] }))
