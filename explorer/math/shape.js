import { itoa } from '.'
import { range } from '../../utils'
import { isEnabled, isSnub } from '../mirrors'
import { ident, submatrix, subvector } from './matrix'
import { getGroupParams } from './relators'
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

      ...getGroupParams(dimensions, coxeter, stellation, mirrors, space, skips),
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

        ...getGroupParams(
          dimensions,
          coxeter,
          stellation,
          mirrors,
          space,
          subskips
        ),
        limit: space.curvature > 0 ? 5000 : 1000,
      }
      if (subParams.gens === null) {
        continue
      }
      ToddCoxeter(subParams)
      if (!subParams.done) {
        console.log('infinite', subParams.gens)
      }
      subParams.words.size > 100 &&
        console.log('solved', subParams.gens, subParams.words.size)
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
      let subShape = {
        new: isnew,
        ...subParams,

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
  if (shape === root && mirrors.some(m => isSnub(m))) {
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
              coxeter[transform[0]][transform[1]] !== 2 //||
            // (mirrors[transform[0]] && mirrors[transform[1]])
          )
          .map(([edge]) => edge)

        for (let i = 0; i < edges.length; i++) {
          const edge = edges[i]
          if (missingEdges[edge.gens]) {
            delete missingEdges[edge.gens]
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

            ...getGroupParams(
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
            done: true,

            ...subParams,

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

        const extra = {}
        // Extra faces are transforms that end on same generator
        // const reflections = Object.entries(root.transforms).filter(
        //   ([edge, transform]) => transform.length === 1
        // )
        const rotations = Object.entries(root.transforms).filter(
          ([edge, transform]) => transform.length === 2
        )
        const conjugations = Object.entries(root.transforms).filter(
          ([edge, transform]) =>
            transform.length === 3 && coxeter[transform[0]][transform[1]] !== 2
          // ||
          // mirrors[transform[1]]
        )

        for (let i = 0; i < rotations.length; i++) {
          const [gen1, transforms1] = rotations[i]
          for (let j = i + 1; j < rotations.length; j++) {
            const [gen2, transforms2] = rotations[j]
            if (
              transforms1[transforms1.length - 1] ===
              transforms2[transforms2.length - 1]
            ) {
              extra[gen1 + gen2] = ['', gen1, gen2]
            }
            //   if (transforms1.length !== transforms2.length) {
            //     // Also check reverse rotations for conjugate reflections
            //     if (
            //       (transforms1.length === 2 &&
            //         transforms1[0] === transforms2[2]) ||
            //       (transforms1.length === 3 && transforms1[2] === transforms2[0])
            //     ) {
            //       extra.push(['', gen1.toUpperCase(), gen2.toUpperCase()])
            //     }
            //   }
            // }
            // if (transforms1.length === 3) {
            //   // Check conjugate reflections -> reflections
            //   for (let j = 0; j < reflections.length; j++) {
            //     const [gen2, reflection] = reflections[j]
            //     if (transforms1.every(t => t !== reflection[0])) {
            //       extra.push(['', gen1, gen2 + gen1])
            //     }
            //   }
          }
        }
        for (let i = 0; i < conjugations.length; i++) {
          const [gen1] = conjugations[i]
          for (let j = i + 1; j < conjugations.length; j++) {
            const [gen2] = conjugations[j]
            extra[gen1 + gen2] = ['', gen1, gen2]
          }
        }

        const children = snubshape
        snubshape = []

        if (!extra.length) {
          extra[''] = ['']
        }
        const extraFaces = Object.entries(extra)
        for (let j = 0; j < extraFaces.length; j++) {
          const [gens, facet] = extraFaces[j]
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

            ...getGroupParams(
              subdimensions,
              snubCoxeter,
              snubStellation,
              snubMirrors,
              space,
              subskips
            ),
          }
          subParams.gens = gens

          const subShape = {
            new: facet.length !== 1,
            done: true,

            ...subParams,

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
          done: true,
          key: subskips.join('-'),
          dimensions: subdimensions,
          coxeter: snubCoxeter,
          stellation: snubStellation,
          mirrors: snubMirrors,

          skips: subskips,

          ...getGroupParams(
            subdimensions,
            snubCoxeter,
            snubStellation,
            snubMirrors,
            space,
            subskips
          ),

          facet: [''], // ?

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
