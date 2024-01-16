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
  transforms,
  subskips
) => {
  const actives = range(coxeter.length).filter(j => !subskips.includes(j))
  let quotient = ''
  const transformsEntries = Object.entries(transforms)
  const reflections = transformsEntries.filter(([k, v]) => v.length === 1)
  const conjugations = transformsEntries.filter(([k, v]) => v.length === 3)
  for (let i = 0; i < transformsEntries.length; i++) {
    const [gen, transform] = transformsEntries[i]
    if (transform.length === 1) {
      const genIndex = transform[0]

      if (
        !subskips.includes(genIndex) &&
        !conjugations.some(([k, conj]) => conj[1] === genIndex)
      ) {
        quotient += gen
        continue
      }
      if (!isEnabled(mirrors[genIndex])) {
        continue
      }
      if (
        !mirrors[genIndex] &&
        !actives.some(k => k !== genIndex && coxeter[k][genIndex] !== 2)
      ) {
        quotient += gen
      }
    } else if (transform.length === 2) {
      const genIndex1 = transform[0]
      const genIndex2 = transform[1]
      const m = coxeter[genIndex1][genIndex2]
      // if (!subskips.includes(genIndex1) && !subskips.includes(genIndex2)) {
      if (
        subParams.gens.includes(gen) &&
        (subParams.dimensions === 1 ? m === 2 : m > 2)
      ) {
        quotient += gen
        continue
      }
      // }
      if (!isEnabled(mirrors[genIndex1]) || !isEnabled(mirrors[genIndex2])) {
        continue
      }
      // if (
      //   (!mirrors[genIndex1] &&
      //     !actives.some(k => coxeter[k][genIndex1] !== 2)) ||
      //   (!mirrors[genIndex2] && !actives.some(k => coxeter[k][genIndex2] !== 2))
      // ) {
      //   // ?
      //   quotient += gen
      // }
    } else if (transform.length === 3) {
      if (
        subskips.length &&
        typeof subskips[subskips.length - 1] === 'string' &&
        subskips[subskips.length - 1].includes('s')
      ) {
        const genIndex1 = transform[0]
        const genIndex2 = transform[1]
        const m = coxeter[genIndex1][genIndex2]
        // TODO: factorize this correctly
        const skips = subskips[subskips.length - 1].split('s').filter(c => c)

        for (let i = 0; i < skips.length; i++) {
          const skip = skips[i]

          const currentTransform = transforms[Object.keys(transforms)[skip]]

          if (
            currentTransform.length === 3 &&
            transform[1] === currentTransform[1]
          ) {
            const n = coxeter[currentTransform[0]][currentTransform[1]]
            if (
              subParams.dimensions === 1
                ? ![2, 4].includes(m) || [2, 4].includes(n)
                : m !== 2
            ) {
              quotient += gen
            }
            const opposite = reflections.find(([k, v]) =>
              currentTransform.every(t => t !== v[0])
            )
            if (opposite) {
              const conj = reflections.find(
                ([k, v]) => v[0] === currentTransform[1]
              )
              if (conj) {
                quotient += conj[0]
              }
            }
          }
        }
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
  root = null
) => {
  if (mirrors.every(m => !m)) {
    mirrors = mirrors.map(() => 1)
  }
  skips =
    skips ||
    mirrors.map((m, i) => (isEnabled(m) ? null : i)).filter(x => x !== null)
  if (!shape) {
    shape = {
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
    root = shape
    root.solved = new Map()
    if (mirrors.filter(m => m).length === 1) {
      const mirrorIndex = mirrors.findIndex(m => m)
      if (coxeter[mirrorIndex].every((m, i) => mirrorIndex === i || m === 2)) {
        // Choose a generator to generate the lunes
        const hosotopeIndex =
          mirrorIndex === dimensions - 1 ? dimensions - 2 : mirrorIndex + 1
        const [gen] = Object.entries(shape.transforms).find(([k, v]) =>
          v.includes(hosotopeIndex)
        )
        root.hosotope = {
          gen,
          index: hosotopeIndex,
        }
      }
    }
  }
  // Try subgroups by removing a mirror to the coxeter diagram:
  for (let i = 0; i < dimensions; i++) {
    if (skips.includes(i) || skips.includes('s')) {
      // Mirror is already removed
      continue
    }
    const subskips = [...skips, i]
    const key = [...subskips].sort().join('-')
    let isnew = false
    if (!root.solved.has(key)) {
      isnew = true

      const subParams = {
        key,
        dimensions: dimensions - subskips.length,
        coxeter: submatrix(coxeter, subskips),
        stellation: submatrix(stellation, subskips),
        mirrors: subvector(mirrors, subskips),

        skips: subskips,

        ...getParams(dimensions, coxeter, stellation, mirrors, space, subskips),
      }
      if (subParams.gens === null) {
        continue
      }
      ToddCoxeter(subParams)
      root.solved.set(key, subParams)
    }

    const subParams = root.solved.get(key)
    const facet = Array.from(subParams.words.values())

    const hosotopeFacet =
      root.hosotope &&
      subskips.length &&
      subskips[0] === root.hosotope.index &&
      subskips.every(
        (s, l) => l === 0 || s === (subskips[l - 1] + 1) % dimensions
      )
    // If the coset generate a facet
    if (
      isFacet(facet, subParams.dimensions, subParams.transforms) ||
      hosotopeFacet
    ) {
      let quotient = getQuotient(
        mirrors,
        subParams,
        coxeter,
        root.transforms,
        subskips
      )
      // Handle hosotope edges
      if (root.hosotope) {
        if (subParams.dimensions === 1) {
          quotient = quotient.replace(root.hosotope.gen, '')
        } else if (subParams.dimensions === 2) {
          let index = root.coxeter[root.hosotope.index].findIndex(
            (m, l) => l !== root.hosotope.index && m !== 2
          )
          if (index < 0) {
            index =
              root.hosotope.index < root.dimensions - 1
                ? root.hosotope.index + 1
                : 0
          }
          const gen = Object.entries(root.transforms).find(([k, v]) =>
            v.includes(index)
          )[0]
          quotient = quotient.replace(gen, root.hosotope.gen)
        }
      }
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
          root
        )
      }
      shape.children.push(subShape)
    }
  }

  if (shape.children.length === 0 && dimensions - skips.length > 1) {
    // If no facet found, try them all for subdimension
    // Used for diagram like 5-2-2
    console.debug('No leaf found, digging deeper', skips)
    for (let i = 0; i < dimensions; i++) {
      if (skips.includes(i)) {
        continue
      }
      const subskips = [...skips, i]
      const key = subskips.sort().join('-')
      const subParams = root.solved.get(key)
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
        root
      )
      shape.children.push(subShape)
    }
  }
  if (root && mirrors.some(m => isSnub(m))) {
    // Snubs generate one more simplex facet
    // Add missing part at the end

    let snubshape = []

    for (let i = 1; i < dimensions; i++) {
      const subskips = [...skips, ...range(dimensions - i).map(() => 's')]
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
        const missingEdges = Object.entries(root.transforms)
          .filter(
            // If reflection edge, add only if mirror active
            ([edge, transform]) =>
              transform.length !== 1 || mirrors[transform[0]]
          )
          .filter(
            // If conjugate reflection edge, add only if generators don't commute
            ([edge, transform]) =>
              transform.length !== 3 ||
              coxeter[transform[0]][transform[1]] !== 2
          )
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
          subskips[subskips.length - 1] = shape.gens.indexOf(gen) + 's'

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
              subskips
            ),
          }
          subParams.gens = gen

          const subShape = {
            new: true,

            ...subParams,

            quotient: getQuotient(
              mirrors,
              subParams,
              coxeter,
              root.transforms,
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
        // Extra faces are transforms that end on same generator
        const composition = Object.entries(root.transforms)
          .filter(([edge, transform]) => transform.length >= 2)
          .filter(
            // Filter out conjugate reflections that commute
            ([edge, transform]) =>
              transform.length !== 3 ||
              coxeter[transform[0]][transform[1]] !== 2
          )
        const reflections = Object.entries(root.transforms).filter(
          ([edge, transform]) => transform.length === 1
        )
        for (let i = 0; i < composition.length; i++) {
          const [gen1, transforms1] = composition[i]

          for (let j = i + 1; j < composition.length; j++) {
            const [gen2, transforms2] = composition[j]
            if (
              transforms1[transforms1.length - 1] ===
              transforms2[transforms2.length - 1]
            ) {
              extra.push(['', gen1, gen2])
            }
            if (transforms1.length !== transforms2.length) {
              // Also check reverse rotations for conjugate reflections
              if (
                (transforms1.length === 2 &&
                  transforms1[0] === transforms2[2]) ||
                (transforms1.length === 3 && transforms1[2] === transforms2[0])
              ) {
                extra.push(['', gen1.toUpperCase(), gen2.toUpperCase()])
              }
            }
          }
          if (transforms1.length === 3) {
            // Check conjugate reflections -> reflections
            for (let j = 0; j < reflections.length; j++) {
              const [gen2, reflection] = reflections[j]
              if (transforms1.every(t => t !== reflection[0])) {
                extra.push(['', gen1, gen2 + gen1])
              }
            }
          }
        }

        const children = snubshape
        snubshape = []

        if (!extra.length) {
          extra.push([''])
        }

        for (let j = 0; j < extra.length; j++) {
          const facet = extra[j]
          subskips[subskips.length - 1] =
            facet.length === 1
              ? 's'
              : shape.gens.indexOf(facet[1].toLowerCase()) +
                's' +
                shape.gens.indexOf(facet[2].replace(facet[1], '').toLowerCase())

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
              subskips
            ),
          }

          const subShape = {
            new: true,

            ...subParams,

            quotient: getQuotient(
              mirrors,
              subParams,
              coxeter,
              root.transforms,
              subskips
            ),

            facet,
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
            subskips
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
