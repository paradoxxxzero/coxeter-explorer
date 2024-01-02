import { getParams, itoa } from '.'
import { range } from '../../utils'
import { isEnabled, isSnub } from '../mirrors'
import { ident, submatrix, subvector } from './matrix'
import { ToddCoxeter } from './toddcoxeter'

export const isFacet = (facet, dimensions, transforms) => {
  if (dimensions === 0) {
    return true
  }
  if (facet.length <= dimensions) {
    return false
  }

  const seen = new Set()
  for (let i = 0; i < facet.length; i++) {
    const word = facet[i]
    if (!word) {
      continue
    }
    for (let j = 0; j < word.length; j++) {
      const c = word[j]
      for (let i = 0; i < transforms[c].length; i++) {
        const gen = itoa(transforms[c][i])
        if (!seen.has(gen)) {
          seen.add(gen)
        }
      }
      if (seen.size >= dimensions) {
        return true
      }
    }
  }
  return false
}

export const getQuotient = (
  mirrors,
  subParams,
  coxeter,
  shape,
  dimensions,
  subskips
) => {
  const actives = range(dimensions).filter(j => !subskips.includes(j))
  let quotient = ''
  const snub = mirrors.some(m => isSnub(m))
  if (snub && subParams.gens.length) {
    for (let j = 0; j < subParams.gens.length; j++) {
      const gen = subParams.gens[j]

      const m = coxeter[shape.transforms[gen][0]][shape.transforms[gen][1]]
      if (
        (subParams.dimensions === 1 ? m === 2 : m > 2) ||
        shape.transforms[gen].some(x => !mirrors[x])
      ) {
        quotient += gen
      }
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
  return quotient
}

export const getShape = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  space,
  skips = null,
  shape = null,
  solved = new Map()
) => {
  const root = !shape

  if (mirrors.every(m => !m)) {
    mirrors = mirrors.map(() => 1)
  }
  skips =
    skips ||
    mirrors.map((m, i) => (isEnabled(m) ? null : i)).filter(x => x !== null)
  shape = shape || {
    new: true,
    key: '',
    dimensions,
    coxeter,
    stellation,
    mirrors,

    skips,

    ...getParams(dimensions, coxeter, stellation, mirrors, space, skips),
    quotient: '',
    facet: [''],

    children: [],
  }
  // Try subgroups by removing a mirror to the coxeter diagram:
  for (let i = 0; i < dimensions; i++) {
    if (skips.includes(i) || skips.includes('s')) {
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
          space,
          subskips,
          shape.transforms
        ),
      }
      if (subParams.gens === null) {
        continue
      }
      ToddCoxeter(subParams)
      solved.set(key, subParams)
    }

    const subParams = solved.get(key)
    const facet = Array.from(subParams.words.values())
    // If the coset generate a facet
    if (isFacet(facet, subParams.dimensions, subParams.transforms)) {
      let quotient = getQuotient(
        mirrors,
        subParams,
        coxeter,
        shape,
        dimensions,
        subskips,
        actives
      )
      let subShape = {
        new: isnew,
        ...subParams,

        quotient,
        facet,

        children: [],
      }
      if (subParams.dimensions > 0) {
        subShape = getShape(
          dimensions,
          coxeter,
          stellation,
          mirrors,
          space,
          subskips,
          subShape,
          solved
        )
      }
      shape.children.push(subShape)
    }
  }

  if (shape.children.length === 0 && dimensions - skips.length > 1) {
    // If no facet found, try them all for subdimension
    // Used for diagram like 5-2-2
    console.info('No leaf found, digging deeper', skips)
    for (let i = 0; i < dimensions; i++) {
      if (skips.includes(i)) {
        continue
      }
      const subskips = [...skips, i]
      const key = subskips.sort().join('-')
      const subParams = solved.get(key)
      let subShape = {
        new: false,
        ...subParams,

        quotient: '',
        facet: [''],

        children: [],
      }
      subShape = getShape(
        dimensions,
        coxeter,
        stellation,
        mirrors,
        space,
        subskips,
        subShape,
        solved
      )
      shape.children.push(subShape)
    }
  }

  if (root && mirrors.some(m => isSnub(m))) {
    // Snubs generate one more simplex facet
    // Add missing part at the end

    let snubshape = []

    for (let i = 1; i < dimensions; i++) {
      const subskips = [...skips, ...range(dimensions - i).map(() => '0s')]
      const subdimensions = dimensions - subskips.length

      if (i === 1) {
        // We need to check if every generator has an edge
        // Extract all edges
        const edges = []
        const visitShape = subshape => {
          subshape.children.forEach(visitShape)
          if (subshape.dimensions === 1 && subshape.new) {
            edges.push(subshape)
          }
        }
        visitShape(shape)

        const missingEdges = Object.entries(shape.transforms)
          .filter(([edge, transform]) => transform.every(t => mirrors[t]))
          .map(([edge]) => edge)
        for (let i = 0; i < edges.length; i++) {
          const edge = edges[i]
          if (missingEdges.includes(edge.gens)) {
            missingEdges.splice(missingEdges.indexOf(edge.gens), 1)
          }
        }
        const children = snubshape
        snubshape = []
        const snubCoxeter = ident(subdimensions).map((row, i) =>
          row.map((_, j) => (i === j ? 1 : i === j + 1 || i === j - 1 ? 4 : 2))
        )

        const snubStellation = ident(subdimensions).map(row => row.map(() => 1))
        const snubMirrors = range(subdimensions).map(() => 's')

        for (let j = 0; j < missingEdges.length; j++) {
          const gen = missingEdges[j]
          subskips[subskips.length - 1] = j + 's'

          const subParams = {
            key: subskips.join('-'),
            dimensions: subdimensions,
            coxeter: snubCoxeter,
            stellation: snubStellation,
            mirrors: snubMirrors,

            skips: subskips,

            ...getParams(
              subdimensions,
              snubCoxeter,
              snubStellation,
              snubMirrors,
              space,
              subskips,
              shape.transforms
            ),
          }

          subParams.gens = gen

          const subShape = {
            new: true,
            key: subskips.join('-'),
            dimensions: subdimensions,
            coxeter: snubCoxeter,
            stellation: snubStellation,
            mirrors: snubMirrors,

            skips: subskips,

            ...subParams,

            quotient: getQuotient(
              mirrors,
              subParams,
              coxeter,
              shape,
              dimensions,
              subskips
            ),

            facet: ['', gen],
            children: j === 0 ? children : [],
          }

          snubshape.push(subShape)
        }
      } else if (i === 2) {
        // We add the missing faces
        const snubCoxeter = ident(subdimensions).map((row, i) =>
          row.map((_, j) => (i === j ? 1 : i === j + 1 || i === j - 1 ? 3 : 2))
        )
        const snubStellation = ident(subdimensions).map(row => row.map(() => 1))
        const snubMirrors = range(subdimensions).map(() => 's')

        const extra = []
        let k = 0
        for (let i = 0; i < dimensions; i++) {
          for (let j = i + 1; j < dimensions; j++) {
            const c = itoa(k)
            for (let l = 0; l < j; l++) {
              const pair = [i, j]
                .map(x =>
                  Object.entries(shape.transforms).find(
                    ([_, v]) => v[0] === l && v[1] === x
                  )
                )
                .filter(x => x)
              if (pair.length === 2) {
                extra.push(['', pair[1][0], c])
              }
            }
            k++
          }
        }
        const children = snubshape
        snubshape = []

        for (let j = 0; j < extra.length; j++) {
          subskips[subskips.length - 1] = j + 's'
          const subShape = {
            new: true,
            key: subskips.join('-'),
            dimensions: subdimensions,
            coxeter: snubCoxeter,
            stellation: snubStellation,
            mirrors: snubMirrors,

            skips: subskips,

            ...getParams(
              subdimensions,
              snubCoxeter,
              snubStellation,
              snubMirrors,
              space,
              subskips,
              shape.transforms
            ),

            quotient: '',

            facet: extra[j],
            children: j === 0 ? children : [],
          }

          snubshape.push(subShape)
        }
      } else {
        // We add the missing cells (no idea on facet shape though)
        const snubCoxeter = ident(subdimensions).map((row, i) =>
          row.map((_, j) => (i === j ? 1 : 2))
        )
        const snubStellation = ident(subdimensions).map(row => row.map(() => 1))
        const snubMirrors = range(subdimensions).map(() => 's')
        const children = snubshape
        snubshape = []
        const subShape = {
          new: true,
          key: subskips.join('-'),
          dimensions: subdimensions,
          coxeter: snubCoxeter,
          stellation: snubStellation,
          mirrors: snubMirrors,

          skips: subskips,

          ...getParams(
            subdimensions,
            snubCoxeter,
            snubStellation,
            snubMirrors,
            space,
            subskips,
            shape.transforms
          ),

          facet: [''], // ?
          quotient: '',

          children,
        }
        snubshape.push(subShape)
      }
    }
    shape.children.push(...snubshape)
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
