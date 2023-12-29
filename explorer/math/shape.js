import { getParams, itoa } from '.'
import { range } from '../../utils'
import { isEnabled, isSnub } from '../mirrors'
import { ident, submatrix, subvector } from './matrix'
import { ToddCoxeter } from './toddcoxeter'

export const hasOrder = params => {
  if (params.dimensions === 0) {
    return true
  }

  const seen = new Set()
  for (let i = 0; i < params.lastWord.length; i++) {
    const c = params.lastWord[i]
    if (!c || seen.has(c)) {
      continue
    }
    for (let i = 0; i < params.transforms[c].length; i++) {
      seen.add(itoa(params.transforms[c][i]))
    }
    if (seen.size >= params.dimensions) {
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
  if (mirrors.every(m => !m)) {
    mirrors = mirrors.map(() => 1)
  }
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

    ...getParams(dimensions, coxeter, stellation, mirrors, skips),
    quotient: '',
    facet: [''],

    children: [],
  }
  // Try subgroups by removing a mirror to the coxeter diagram:
  for (let i = 0; i < dimensions; i++) {
    if (skips.includes(i)) {
      // Mirror is already removed
      continue
    }
    const subskips = [...skips, i]
    const actives = range(dimensions).filter(j => !subskips.includes(j))
    const key = subskips.sort().join('-')
    let isnew = false

    if (!solved.has(key)) {
      isnew = true

      const subParams = {
        key,
        dimensions: dimensions - subskips.length,
        coxeter: submatrix(coxeter, subskips),
        stellation: submatrix(stellation, subskips),
        mirrors: subvector(mirrors, subskips),

        skips: subskips,

        ...getParams(
          dimensions,
          coxeter,
          stellation,
          mirrors,
          subskips,
          shape.transforms
        ),
      }
      ToddCoxeter(subParams)
      solved.set(key, subParams)
    }

    const subParams = solved.get(key)
    const facet = Array.from(subParams.words.values())

    // If the coset generate a facet
    if (hasOrder(subParams)) {
      let quotient = ''
      const snub = mirrors.some(m => isSnub(m))
      if (snub) {
        if (subParams.gens.length === 1) {
          const gen = subParams.gens

          const m = coxeter[shape.transforms[gen][0]][shape.transforms[gen][1]]
          if (subParams.dimensions === 1 ? m === 2 : m > 2) {
            quotient += gen
          }
        }
        if (subParams.dimensions === 0) {
          quotient = ''
        }
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
        facet,

        children: [],
      }
      if (subParams.words.size <= subParams.dimensions) {
        subShape.new = false
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

  // Snubs generate one more simplex facet
  if (skips.length === 0 && mirrors.some(m => isSnub(m))) {
    const key = 's'
    const snubCoxeter = ident(dimensions - 1).map((row, i) =>
      row.map((_, j) => (i === j + 1 || i === j - 1 ? 3 : 2))
    )
    const snubStellation = ident(dimensions - 1).map(row => row.map(() => 1))
    const snubMirrors = range(dimensions - 1).map(() => 's')
    const subskips = ['s']
    let subShape = {
      new: true,
      key,
      dimensions: dimensions - 1,
      coxeter: snubCoxeter,
      stellation: snubStellation,
      mirrors: snubMirrors,

      skips: subskips,

      ...getParams(
        dimensions,
        snubCoxeter,
        snubStellation,
        snubMirrors,
        subskips,
        shape.transforms
      ),

      quotient: '',
      facet: ['', 'b', 'c'],

      children: [],
    }

    shape.children.push(subShape)
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
            new: false,
            key: subskips.sort().join('-'),

            dimensions: dimensions - subskips.length,
            coxeter: submatrix(coxeter, subskips),
            stellation: submatrix(stellation, subskips),
            mirrors: subvector(mirrors, subskips),
            quotient: '',
            facet: [''],
            skips: subskips,

            ...getParams(
              dimensions,
              coxeter,
              stellation,
              mirrors,
              subskips,
              shape.transforms
            ),
            children: [],
          },
          solved
        )
      )
    }
  }
  return shape
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
