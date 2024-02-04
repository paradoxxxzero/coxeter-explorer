import { types } from '../../statics'
import { reorder } from '../math/shape'
import { ToddCoxeter, countCosets, wordToCoset } from '../math/toddcoxeter'

const isInvariant = (g, localgens, facet, partial, root) => {
  if (partial || facet.length === 0) {
    // Infinite face, can't determine, include only generating mirrors
    // Ignore commuting gens
    return localgens.includes(g)
  }
  const facetCosets = []
  const facetCosetsAfterG = []
  for (const facetWord of facet) {
    const coset = wordToCoset(root, facetWord)
    if (!coset) {
      // Unfinished
      return null
    }
    const cosetsAfterG = wordToCoset(root, g + facetWord)
    if (!cosetsAfterG) {
      // Unfinished
      return null
    }
    facetCosets.push(coset)
    facetCosetsAfterG.push(cosetsAfterG)
  }
  facetCosets.sort((a, b) => a - b)
  facetCosetsAfterG.sort((a, b) => a - b)
  return facetCosets.every((coset, i) => coset === facetCosetsAfterG[i])
}

const getSubgens = (tcParam, root) => {
  const { gens, localgens, facet, partial, rank } = tcParam
  let subgens = ''
  for (let i = 0; i < gens.length; i++) {
    const invariant = isInvariant(gens[i], localgens, facet, partial, root)
    if (invariant === null) {
      // Root iteration not enough processed, do nothing for now
      return
    } else if (invariant) {
      subgens += gens[i]
    }
  }

  // Handle hosotope edges
  if (root.hosotope) {
    if (rank === 1) {
      subgens = subgens.replace(root.hosotope.gen, '')
    } else if (rank === 2) {
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
      subgens = subgens.replace(gen, root.hosotope.gen)
    }
  }
  return subgens
}

export const getPolytope = (batch, shape, tcParams, section, root) => {
  const infinite = root.space.eigens.values.some(x => x <= 0)

  const polytope = {
    facets: [],
    infinite,
    done: true,
  }
  if (root.compound && root.dual) {
    root.dual = false

    Object.assign(polytope, getPolytope(batch, shape, tcParams, section, root))

    root.dual = true
  }

  const visitShape = subshape => {
    const rank =
      root.dual || root.fundamental
        ? shape.dimensions - subshape.dimensions - 1
        : subshape.dimensions

    subshape.children.forEach(visitShape)

    const key = `${types[rank]}_${
      root.dual ? 'dual_' : root.fundamental ? 'fundamental_' : ''
    }${subshape.key}`

    const compute =
      (rank === shape.dimensions - 1 && (root.dual || root.compound)) ||
      root.fundamental ||
      (!root.fundamental && rank < (section ? 4 : 3))

    if (subshape?.new) {
      if (!polytope.facets[rank]) {
        polytope.facets[rank] = {
          dimensions: rank,
          processing: 0,
          count: 0,
          parts: [],
          compute,
          done: false,
          dual: root.dual,
          fundamental: root.fundamental,
        }
      }
      if (!root.compound || !root.dual) {
        if (!tcParams.has(key)) {
          tcParams.set(key, {})
        }

        const tcParam = tcParams.get(key)
        if (!tcParam.key) {
          Object.assign(tcParam, {
            gens: shape.gens,
            rels: shape.rels,
            transforms: shape.transforms,
            key,
            localgens: subshape.gens,
            facet: subshape.facet,
            partial: !subshape.done,
            rank: rank,
            mirrors: subshape.mirrors,
            compute,
            done: false,
            count: 0,
            dual: root.dual,
            compound: root.compound,

            space: root.space,
            ...(subshape.dimensions === 0 && !root.fundamental
              ? {
                  rootVertex: root.space.rootVertex,
                  rootNormals: root.space.rootNormals,
                  rootVertices: root.space.rootVertices,
                  metric: root.space.metric,
                }
              : {}),
          })
        }
      }

      const subShapeMirrors = root.fundamental
        ? subshape.mirrors.map(() => 0)
        : subshape.mirrors

      polytope.facets[rank].parts.push({
        key,
        coxeter: subshape.coxeter,
        stellation: subshape.stellation,
        mirrors: subShapeMirrors,
        dual: root.dual,
        fundamental: root.fundamental,
        count: 0,
        done: false,
      })
    }
  }

  shape.children.forEach(visitShape)
  addMissingDimensions(polytope, shape, tcParams, root, section)
  return polytope
}

export const iterate = (polytope, tcParams, batch, root) => {
  const facets =
    (root.dual && !root.compound) || root.fundamental
      ? [...polytope.facets].reverse()
      : polytope.facets
  if (root.dual && !root.compound && root.metric.length === 2) {
    // Keep face at the end since there's no face
    facets.push(facets.shift())
  }

  const isComputeDone = facets.filter(f => f.compute).every(f => f.done)

  polytope.done = true
  for (let i = 0; i < facets.length; i++) {
    const facet = facets[i]
    facet.done = true
    facet.count = 0
    facet.processing = 0
    for (let j = 0; j < facet.parts.length; j++) {
      const part = facet.parts[j]
      const key = part.key
      const tcParam = tcParams.get(key)
      if (root.compound && !tcParam) {
        continue
      }
      if (typeof tcParam.facet === 'function') {
        tcParam.facet = tcParam.facet(root)
      }

      if (tcParam.subgens === undefined) {
        tcParam.subgens = getSubgens(tcParam, root)
      }
      if (
        !tcParam.done &&
        (isComputeDone || tcParam.compute) &&
        // Root iteration not enough processed, do nothing for now
        tcParam.subgens !== undefined
      ) {
        tcParam.limit = tcParam.compute ? batch : 2000
        if (i === 1 && polytope.infinite) {
          tcParam.limit *= 1.75
        }
        if (tcParam.compute) {
          // Also extract words to generate the shape
          ToddCoxeter(tcParam)
          part.count = tcParam.cosets.size
          part.processing = tcParam.words.size
        } else {
          part.count = countCosets(tcParam)
        }
        part.done = tcParam.done
      }
      facet.done = facet.done && part.done
      facet.count += part.count
      facet.processing += part.processing
    }
    polytope.done = polytope.done && facet.done
  }

  // Fix compound counts
  if (root.compound) {
    for (let i = 0; i < facets.length; i++) {
      const facet = facets[i]
      for (let j = 0; j < facet.parts.length; j++) {
        const part = facet.parts[j]
        const key = part.key
        if (tcParams.get(key)) {
          continue
        }
        const compoundKey = key.replace(/dual_/g, '')
        const tcParam = tcParams.get(compoundKey)
        if (!tcParam) {
          continue
        }
        if (tcParam.compute) {
          part.count = tcParam.cosets.size
          part.processing = tcParam.words.size
        } else {
          part.count = tcParam.count
        }
        part.done = tcParam.done

        facet.count += part.count
        facet.processing += part.processing
      }
    }
  }
}

const addMissingDimensions = (polytope, shape, tcParams, root, section) => {
  const makeFace = cached => ({
    dimensions: cached.rank,
    processing: 1,
    count: 0,
    parts: [
      {
        key: cached.key,
        coxeter: cached.coxeter,
        stellation: cached.stellation,
        mirrors: cached.mirrors,
        dual: root.dual,
        fundamental: root.fundamental,

        count: 0,
        done: true,
      },
    ],
    done: true,
  })

  // Low dimensional fixes
  if (shape.dimensions === 0) {
    // Handle displaying the 1D shape egde
    const cached = {
      ...shape,
      key: 'vertex',
      currentWords: shape.currentWords || new Map([[1, '']]),
      dualCurrentWords: shape.dualCurrentWords || new Map([[1, '']]),
      subgens: shape.subgens,
      facet: [''],
      rank: shape.dimensions,
      mirrors: shape.mirrors,
      compute: true,
      done: true,
      vertices: new Map([[1, [0]]]),
    }
    Object.assign(root, cached)
    tcParams.set(cached.key, cached)
    polytope.facets[0] = makeFace(cached)
  } else if (shape.dimensions === 1) {
    // Handle displaying the 1D shape egde

    const cached = {
      ...shape,
      key: 'edge',
      currentWords: shape.currentWords || new Map([[1, '']]),
      subgens: shape.subgens,
      facet: root => (root.words ? Array.from(root.words.values()) : ['']),
      rank: shape.dimensions,
      mirrors: shape.mirrors,
      compute: true,
      done: true,
    }

    tcParams.set(cached.key, cached)
    polytope.facets[1] = makeFace(cached)
  } else if (shape.dimensions === 2) {
    // Handle displaying the 2D shape face
    const orderRootFacet = root => {
      if (root.fundamental) {
        return []
      }
      const double = shape.gens
        .split('')
        .every(g => shape.mirrors[shape.transforms[g][0]])
      const rotation = shape.gens
        .split('')
        .every(g => shape.transforms[g].length === 2)

      const unorderedFacet = Array.from(root.words.values())
      const facet = new Array(unorderedFacet.length)
      for (let i = 0; i < unorderedFacet.length; i++) {
        facet[i] =
          unorderedFacet[rotation ? i : reorder(i, facet.length, double)]
      }
      return facet
    }

    const cached = {
      ...shape,
      key: 'face',
      currentWords: shape.currentWords || new Map([[1, '']]),
      dualCurrentWords: shape.dualCurrentWords || new Map([[1, '']]),
      subgens: shape.subgens,
      facet: orderRootFacet,
      rank: shape.dimensions,
      mirrors: shape.mirrors,
      compute: true,
      done: true,
    }

    tcParams.set(cached.key, cached)
    polytope.facets[2] = makeFace(cached)
  } else if (shape.dimensions === 3 && section !== null) {
    // Add the 3D shape cell

    const cached = {
      ...shape,
      key: 'cell',
      currentWords: shape.currentWords || new Map([[1, '']]),
      dualCurrentWords: shape.dualCurrentWords || new Map([[1, '']]),
      subgens: shape.subgens,
      facet: root => Array.from(root.words.values()),
      rank: shape.dimensions,
      mirrors: shape.mirrors,
      compute: true,
      done: true,
    }

    tcParams.set(cached.key, cached)
    polytope.facets[3] = makeFace(cached)
  }
}
