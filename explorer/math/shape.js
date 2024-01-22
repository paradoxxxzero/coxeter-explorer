import { itoa } from '.'
import { range } from '../../utils'
import { isSnub } from '../mirrors'
import { ident, submatrix, subvector } from './matrix'
import { expand, factor, getExtraRelators, getRelators } from './relators'
import { ToddCoxeter } from './toddcoxeter'

export const reorder = (i, n, double) => {
  if (double) {
    if (n % 2) {
      n--
    }
    const parity = i > 0 ? 1 - (i % 2) : 0
    if (i >= n / 2 + parity) {
      return 2 * (n - i) - 1 + parity
    }
    return 2 * i - parity
  }

  if (i >= n / 2) {
    return 2 * (n - i) - 1
  }
  return 2 * i
}

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
  extrarels,
  shape = null,
  root = null
) => {
  if (!shape) {
    // Handle fundamental domain
    if (mirrors.every(m => !m)) {
      mirrors = mirrors.map(() => 1)
    }

    let gens = ''
    let gi = 0
    const transforms = {}

    for (let i = 0; i < dimensions; i++) {
      if (!isSnub(mirrors[i])) {
        const c = itoa(gi++)
        gens += c
        // Case of not snub => Normal reflection
        transforms[c] = [i]
      }

      for (let j = i + 1; j < dimensions; j++) {
        if (isSnub(mirrors[i]) && isSnub(mirrors[j])) {
          // Case of snub + snub => rotation
          const c = itoa(gi++)
          gens += c
          transforms[c] = [i, j]
        } else if (isSnub(mirrors[i]) && !isSnub(mirrors[j])) {
          // Case of snub + not snub => conjugate reflection
          const c = itoa(gi++)
          gens += c
          transforms[c] = [i, j, i]
        } else if (!isSnub(mirrors[i]) && isSnub(mirrors[j])) {
          // Case of snub + not snub => conjugate reflection
          const c = itoa(gi++)
          gens += c
          transforms[c] = [j, i, j]
        }
      }
    }
    const subgens = Object.entries(transforms)
      .filter(([gen, transform]) => transform.every(t => !mirrors[t]))
      // Quotiented for reflection if mirror is not active
      // Quotiented for rotation if both mirrors are not active (that can't happen in snub)
      // Quotiented for conjugate reflection if all mirrors are not active (same)
      .map(([gen]) => gen)
      .join('')
    const rels = getRelators(transforms, coxeter)
    if (extrarels) {
      const extrarelsRaw = extrarels.split(',')
      for (let i = 0; i < extrarelsRaw.length; i++) {
        let rel = extrarelsRaw[i]
        rel = rel.replace(/\s/g, '')
        if (!rel) {
          continue
        }

        rel = expand(rel)

        if (rel.split('').every(g => gens.includes(g.toLowerCase()))) {
          rels.push(rel)
        }
      }
    } else {
      const newRels = getExtraRelators(transforms, coxeter, stellation)
      rels.push(...newRels)
      extrarels = newRels.map(r => factor(r)).join(', ')
    }

    shape = {
      new: true,
      key: '',
      dimensions,
      coxeter,
      stellation,
      mirrors,
      gens,
      subgens,
      transforms,
      rels,
      extrarels,
      facet: [''],
      removed: [],
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

  const emptySubshapes = []
  // Try subgroups by removing a root reflection
  for (let i = 0; i < dimensions; i++) {
    if (shape.removed.includes(i)) {
      continue
    }
    let gens = shape.gens
      .split('')
      .filter(g => !shape.transforms[g].includes(i))
      .join('')
    const removed = [...shape.removed, i]
    const key = removed.sort().join('-')

    let isnew = false
    if (!root.solved.has(key)) {
      isnew = true
      // const removedGen = shape.gens[i]
      // const removedTransform = shape.transforms[removedGen]
      // const subTransforms = gens.split('').map(g => shape.transforms[g])
      // // We need to determine if the removed generator lower the dimension
      // // We say we remove a dimension if we remove a generator that was not
      // // present in any of the other transform
      // const removedRootReflections = removedTransform.filter(t =>
      //   subTransforms.every(s => !s.includes(t))
      // )
      // const lowering =
      //   removedTransform.length === 2 &&
      //   (!removedRootReflections.length || removedRootReflections.length === 2)
      //     ? 1
      //     : removedRootReflections.length
      const subshape = {
        dimensions: shape.dimensions - 1,
        coxeter: submatrix(root.coxeter, removed),
        stellation: submatrix(root.stellation, removed),
        mirrors: subvector(root.mirrors, removed),
        gens,
        subgens: root.subgens
          .split('')
          .filter(g => gens.includes(g))
          .join(''),
        rels: root.rels.filter(rel =>
          rel
            .toLowerCase()
            .split('')
            .every(g => gens.includes(g))
        ),
        transforms: Object.fromEntries(
          Object.entries(shape.transforms).filter(([g]) => gens.includes(g))
        ),
        removed,
        key,
        limit: space.curvature > 0 ? 2500 : 1000,
      }
      ToddCoxeter(subshape)
      subshape.facet = Array.from(subshape.words.values())

      if (subshape.dimensions === 1) {
        // Digon
        subshape.coxeter = [
          [1, 2],
          [2, 1],
        ]
        subshape.stellation = [
          [1, 1],
          [1, 1],
        ]
        subshape.mirrors = [1, 0]
      }
      if (subshape.dimensions === 0) {
        // Monogon (henegon)
        subshape.coxeter = [
          [1, 2],
          [2, 1],
        ]
        subshape.stellation = [
          [1, 1],
          [1, 1],
        ]
        subshape.mirrors = ['s', 0]
      }
      root.solved.set(key, subshape)
    }

    const subshape = root.solved.get(key)

    const hosotopeFacet =
      root.hosotope &&
      subshape.removed.length &&
      subshape.removed[0] === root.hosotope.index &&
      subshape.removed.every(
        (s, l) => l === 0 || s === (subshape.removed[l - 1] + 1) % dimensions
      )

    // If the coset generate a facet
    if (
      isFacet(subshape.facet, subshape.dimensions, root.transforms) ||
      hosotopeFacet
    ) {
      if (isnew && subshape.dimensions === 2) {
        const unorderedFacet = [...subshape.facet]
        const double = subshape.gens
          .split('')
          .every(g => root.mirrors[root.transforms[g][0]])
        const rotation = subshape.gens
          .split('')
          .every(g => root.transforms[g].length === 2)

        for (let i = 0; i < unorderedFacet.length; i++) {
          subshape.facet[i] =
            unorderedFacet[
              rotation ? i : reorder(i, subshape.facet.length, double)
            ]
        }
      }
      const subShape = {
        new: isnew,
        children: [],
        ...subshape,
      }
      if (subShape.removed.length < dimensions) {
        shape.children.push(
          getShape(
            dimensions,
            coxeter,
            stellation,
            mirrors,
            space,
            extrarels,
            subShape,
            root
          )
        )
      } else {
        shape.children.push(subShape)
      }
    } else {
      emptySubshapes.push(subshape)
    }
  }

  if (shape.children.length === 0 && shape.dimensions > 0) {
    // If no facet found, try them all for subdimension
    // Used for diagram like 5-2-2
    console.debug('No leaf found, digging deeper', shape.gens)
    for (let i = 0; i < emptySubshapes.length; i++) {
      const subshape = emptySubshapes[i]

      const subShape = {
        new: false,
        children: [],
        ...subshape,
      }
      if (subShape.removed.length < dimensions) {
        shape.children.push(
          getShape(
            dimensions,
            coxeter,
            stellation,
            mirrors,
            space,
            extrarels,
            subShape,
            root
          )
        )
      } else {
        shape.children.push(subShape)
      }
    }
  }

  if (shape === root && mirrors.some(m => isSnub(m))) {
    // Snubs generate one more simplex facet
    // Add missing part at the end
    let snubgens = ''
    let snubshape = []

    for (let i = 1; i < dimensions; i++) {
      if (i === 1) {
        // We need to check if every generator has an edge
        // Extract all edges
        const edges = []
        const visitShape = subshape => {
          if (subshape.dimensions === 1) {
            if (subshape.new) {
              edges.push(subshape)
            }
          } else {
            subshape.children.forEach(visitShape)
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
          if (missingEdges.includes(edge.gens)) {
            missingEdges.splice(missingEdges.indexOf(edge.gens), 1)
          }
        }
        const children = snubshape
        snubshape = []
        const snubCoxeter = ident(1).map((row, i) =>
          row.map((_, j) => (i === j ? 1 : i === j + 1 || i === j - 1 ? 4 : 2))
        )

        const snubStellation = ident(1).map(row => row.map(() => 1))
        const snubMirrors = range(1).map(() => 's')

        for (let j = 0; j < missingEdges.length; j++) {
          const gen = missingEdges[j]

          const subParams = {
            dimensions: 1,
            coxeter: snubCoxeter,
            stellation: snubStellation,
            mirrors: snubMirrors,
          }
          subParams.gens = gen

          const subShape = {
            new: true,
            done: true,
            key: `se-${gen}`,

            ...subParams,

            facet: ['', gen],
            children: j === 0 ? children : [],
          }

          snubshape.push(subShape)
        }
      } else if (i === 2) {
        // We add the missing faces
        const coxeter2 = m =>
          ident(2).map((row, i) =>
            row.map((_, j) =>
              i === j ? 1 : i === j + 1 || i === j - 1 ? m : 2
            )
          )
        const stellation2 = s => ident(2).map(row => row.map(() => s))

        const extra = {}
        // Extra faces are transforms that end on same generator
        const rotations = Object.entries(root.transforms).filter(
          ([edge, transform]) => transform.length === 2
        )
        const conjugations = Object.entries(root.transforms).filter(
          ([edge, transform]) => transform.length === 3
        )
        let rotationSnubgens = ''

        const visitShape = subshape => {
          if (subshape.dimensions === 2) {
            if (subshape.new && subshape.gens.length === 1) {
              rotationSnubgens += subshape.gens
            }
          } else {
            subshape.children.forEach(visitShape)
          }
        }
        visitShape(shape)
        snubgens += rotationSnubgens
        // Rotation -> Rotation
        for (let i = 0; i < rotations.length; i++) {
          const [gen1, transform1] = rotations[i]
          for (let j = i + 1; j < rotations.length; j++) {
            const [gen2, transform2] = rotations[j]
            if (
              transform1[transform1.length - 1] ===
              transform2[transform2.length - 1]
            ) {
              extra[gen1 + gen2] = { facet: ['', gen1, gen2] }
              snubgens += gen1 + gen2
            }
          }
        }

        for (let i = 0; i < conjugations.length; i++) {
          const [gen1, transform1] = conjugations[i]

          // Conjugation -> Conjugation
          for (let j = i + 1; j < conjugations.length; j++) {
            const [gen2, transform2] = conjugations[j]
            if (transform1[0] === transform2[0]) {
              if (
                coxeter[transform1[1]][transform2[1]] !== 2 &&
                (coxeter[transform1[1]][transform1[0]] !== 2 ||
                  coxeter[transform1[0]][transform2[1]] !== 2)
              ) {
                const m = coxeter[transform1[1]][transform2[1]]
                const double =
                  mirrors[transform2[1]] ||
                  coxeter[transform1[0]][transform2[1]] !== 2

                const facet = []
                for (let k = 0; k < m; k++) {
                  if (double) {
                    facet.push(gen1 + (gen2 + gen1).repeat(m - k))
                  }
                  facet.push((gen2 + gen1).repeat(k))
                }
                extra[gen1 + gen2] = {
                  facet,
                  snubCoxeter: coxeter2(facet.length),
                  snubMirrors: ['s', double ? 1 : 0],
                }
                snubgens += gen1 + gen2
              }
            }
          }

          // Conjugation -> Rotation
          for (let j = 0; j < rotations.length; j++) {
            const [gen2, transform2] = rotations[j]
            if (transform1[0] === transform2[1]) {
              if (
                coxeter[transform1[1]][transform2[0]] !== 2 ||
                coxeter[transform1[1]][transform2[1]] !== 2 ||
                mirrors[transform1[1]]
              ) {
                if (
                  mirrors[transform1[1]] ||
                  (coxeter[transform1[1]][transform2[0]] !== 2 &&
                    coxeter[transform1[1]][transform2[1]] !== 2)
                ) {
                  extra[gen1 + gen2] = {
                    facet: ['', gen1, gen1 + gen2, gen2],
                    snubCoxeter: coxeter2(4),
                  }
                } else {
                  if (coxeter[transform1[1]][transform2[0]] !== 2) {
                    extra[gen1 + gen2] = { facet: ['', gen2, gen1 + gen2] }
                  } else {
                    extra[gen1 + gen2] = { facet: ['', gen1, gen2] }
                  }
                }
                snubgens += gen1 + gen2
              }
            }
          }
        }
        const children = snubshape
        snubshape = []

        if (!Object.keys(extra).length) {
          extra[''] = { facet: [''] }
        }
        const extraFaces = Object.entries(extra)
        for (let j = 0; j < extraFaces.length; j++) {
          const [gens, { facet, snubCoxeter, snubStellation, snubMirrors }] =
            extraFaces[j]
          const subParams = {
            dimensions: 2,
            coxeter: snubCoxeter || coxeter2(3),
            stellation: snubStellation || stellation2(1),
            mirrors: snubMirrors || ['s', 's'],
          }
          subParams.gens = gens

          const subShape = {
            new: facet.length !== 1,
            done: true,

            key: `sf-${gens}`,
            ...subParams,

            facet,
            children: j === 0 ? children : [],
          }

          snubshape.push(subShape)
        }
      } else {
        // We add the missing cells (no idea on facet shape though)
        const snubCoxeter = ident(i).map((row, i) =>
          row.map((_, j) => (i === j ? 1 : 2))
        )
        const snubStellation = ident(i).map(row => row.map(() => 1))
        const snubMirrors = range(i).map(() => 's')
        const children = snubshape
        snubshape = []
        let snubgens_ = snubgens
        const subShape = {
          new: true,
          done: true,
          key: `s${i}`,
          gens: shape.gens
            .split('')
            .filter(g => !snubgens_.includes(g))
            .join(''),
          dimensions: i,
          coxeter: snubCoxeter,
          stellation: snubStellation,
          mirrors: snubMirrors,

          facet: [], // ?

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
