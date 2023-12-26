import { getRels, itoa, itor } from '.'
import { range } from '../../utils'
import { isEnabled, isSnub } from '../mirrors'
import { submatrix, subvector } from './matrix'
import { ToddCoxeter } from './toddcoxeter'

export const getGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (!skips.includes(i) ? itoa(i) : '')).join('')

export const getSubGens = (mirrors, skips = []) =>
  mirrors.map((m, i) => (skips.includes(i) || m ? '' : itoa(i))).join('')

export const hasOrder = params => {
  if (params.dimensions === 0) {
    return true
  }
  // if (replacements) {
  //   word = Object.entries(replacements).reduce(
  //     (acc, [key, value]) => acc.replace(new RegExp(key, 'g'), value),
  //     word
  //   )
  // }
  const seen = new Set()
  for (let i = 0; i < params.lastWord.length; i++) {
    const c = params.lastWord[i]
    if (!c || seen.has(c)) {
      continue
    }
    seen.add(c)
    if (seen.size === params.dimensions) {
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

        gens: getGens(mirrors, subskips),
        subgens: getSubGens(mirrors, subskips),
        rels: getRels(dimensions, coxeter, stellation, subskips),
        snub: subvector(mirrors, subskips).some(isSnub),
      }
      ToddCoxeter(subParams)
      solved.set(key, subParams)
    }

    const subParams = solved.get(key)
    const space = Array.from(subParams.words.values())

    // If the coset generate a space
    if (hasOrder(subParams)) {
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
