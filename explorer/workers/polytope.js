import { types } from '../../statics'
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
            done: !compute && infinite,
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

  // // Low dimensional fixes
  // if (shape.dimensions === 0) {
  //   // Handle displaying the 1D shape egde
  //   shape.currentWords = shape.currentWords || new Map([[1, '']])
  //   shape.facet = ['']
  //   shape.done = true
  //   const vertices = new Map([[1, [0]]])
  //   tcParams.set('v', {
  //     ...shape,
  //     subgens: shape.subgens,
  //     facet: shape.facet,
  //     rank: shape.dimensions,
  //     mirrors: shape.mirrors,
  //     compute: true,
  //     vertices,
  //   })
  //   polytope[0] = {
  //     dimensions: 0,
  //     processing: 1,
  //     count: 0,
  //     parts: [
  //       {
  //         key: 'v',
  //         coxeter: shape.coxeter,
  //         stellation: shape.stellation,
  //         mirrors: shape.mirrors,
  //         dual: root.dual,

  //         count: 0,
  //         done: true,
  //       },
  //     ],
  //     vertices,
  //     done: true,
  //   }
  // } else if (shape.dimensions === 1) {
  //   // Handle displaying the 1D shape egde
  //   shape.currentWords = shape.currentWords || new Map([[1, '']])
  //   shape.facet = Array.from(root.words.values())
  //   shape.done = true
  //   tcParams.set('e', {
  //     ...shape,
  //     subgens: shape.subgens,
  //     facet: shape.facet,
  //     rank: shape.dimensions,
  //     mirrors: shape.mirrors,
  //     compute: true,
  //   })
  //   polytope[1] = {
  //     dimensions: 1,
  //     processing: 1,
  //     count: 0,
  //     parts: [
  //       {
  //         key: 'e',
  //         coxeter: shape.coxeter,
  //         stellation: shape.stellation,
  //         mirrors: shape.mirrors,
  //         dual: root.dual,

  //         count: 0,
  //         done: true,
  //       },
  //     ],
  //     done: true,
  //   }
  // }
  // // Handle displaying the 2D shape face
  // else if (shape.dimensions === 2) {
  //   shape.currentWords = shape.currentWords || new Map([[1, '']])

  //   const double = shape.gens
  //     .split('')
  //     .every(g => shape.mirrors[shape.transforms[g][0]])
  //   const rotation = shape.gens
  //     .split('')
  //     .every(g => shape.transforms[g].length === 2)

  //   const unorderedFacet = Array.from(root.words.values())
  //   shape.facet = new Array(unorderedFacet.length)
  //   for (let i = 0; i < unorderedFacet.length; i++) {
  //     shape.facet[i] =
  //       unorderedFacet[rotation ? i : reorder(i, shape.facet.length, double)]
  //   }
  //   shape.done = true
  //   tcParams.set('f', {
  //     ...shape,
  //     subgens: shape.subgens,
  //     facet: shape.facet,
  //     rank: shape.dimensions,
  //     mirrors: shape.mirrors,
  //     compute: true,
  //     partial: !root.done,
  //   })
  //   polytope[2] = {
  //     dimensions: 2,
  //     processing: 1,
  //     count: 0,
  //     parts: [
  //       {
  //         key: 'f',
  //         coxeter: shape.coxeter,
  //         stellation: shape.stellation,
  //         mirrors: shape.mirrors,
  //         dual: root.dual,

  //         count: 0,
  //         done: true,
  //       },
  //     ],
  //     done: true,
  //   }
  // } else if (shape.dimensions === 3 && section) {
  //   // Add the 3D shape cell
  //   shape.currentWords = new Map([[1, '']])
  //   shape.facet = Array.from(root.words.values())
  //   shape.done = true
  //   tcParams.set('c', {
  //     ...shape,
  //     subgens: shape.subgens,
  //     facet: shape.facet,
  //     rank: shape.dimensions,
  //     mirrors: shape.mirrors,
  //     compute: true,
  //     partial: !root.done,
  //   })
  //   polytope[3] = {
  //     dimensions: 3,
  //     processing: 1,
  //     count: 0,
  //     parts: [
  //       {
  //         key: 'c',
  //         coxeter: shape.coxeter,
  //         stellation: shape.stellation,
  //         mirrors: shape.mirrors,
  //         dual: root.dual,

  //         count: 0,
  //         done: true,
  //       },
  //     ],
  //     done: true,
  //   }
  // }

  return polytope
}

export const iterate = (polytope, tcParams, batch, root) => {
  const facets =
    (root.dual && !root.compound) || root.fundamental
      ? [...polytope.facets].reverse()
      : polytope.facets

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

      if (tcParam.subgens === undefined) {
        tcParam.subgens = getSubgens(tcParam, root)
        if (tcParam.subgens === undefined) {
          // Root iteration not enough processed, do nothing for now
          return
        }
      }
      if (!tcParam.done && (isComputeDone || tcParam.compute)) {
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
