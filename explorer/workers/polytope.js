import { types } from '../../statics'
import { arrayEquals } from '../../utils'
import { reorder } from '../math/shape'
import { ToddCoxeter, countCosets, wordToCoset } from '../math/toddcoxeter'

export const getPolytope = (
  batch,
  shape,
  cache,
  space,
  draw,
  fundamental,
  dual,
  computeWords,
  polytope = []
) => {
  polytope.done = true

  let isComputeDone = true
  for (const cached of cache.values()) {
    if (cached.compute && !cached.done) {
      isComputeDone = false
      break
    }
  }

  const isInvariant = (g, subshape, root) => {
    if (subshape.done === false || subshape.facet.length === 0) {
      // Infinite face, can't determine, include only generating mirrors
      // Ignore commuting gens
      return subshape.gens.includes(g)
    }
    const facetCosets = []
    const facetCosetsAfterG = []
    for (const facet of subshape.facet) {
      const coset = wordToCoset(root, facet)
      if (!coset) {
        // Unfinished
        return null
      }
      const cosetsAfterG = wordToCoset(root, g + facet)
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

  const visitShape = subshape => {
    const rank =
      dual || fundamental
        ? shape.dimensions - subshape.dimensions - 1
        : subshape.dimensions

    subshape.children.forEach(visitShape)

    const compute = computeWords[rank]
    const type = types[rank]
    const key = `${dual ? 'd' : fundamental ? 'f' : ''}${subshape.key}`

    if (subshape?.new) {
      if (!polytope[rank]) {
        polytope[rank] = {
          dimensions: rank,
          processing: draw[type] ? 0 : undefined,
          count: 0,
          detail: [],
          aggregated: [],
          done: true,
        }
      }
      const eigenvalues = space.eigens.values

      if (!cache.has(key)) {
        let subgens = ''
        if (subshape.dimensions === 0) {
          subgens = shape.subgens
        } else {
          for (let i = 0; i < shape.gens.length; i++) {
            const invariant = isInvariant(
              shape.gens[i],
              subshape,
              polytope.root
            )
            if (invariant === null) {
              // Root iteration not enough processed, do nothing for now
              return
            } else if (invariant) {
              subgens += shape.gens[i]
            }
          }
        }

        // Handle hosotope edges
        if (polytope.root?.hosotope) {
          if (subshape.dimensions === 1) {
            subgens = subgens.replace(polytope.root.hosotope.gen, '')
          } else if (subshape.dimensions === 2) {
            let index = polytope.root.coxeter[
              polytope.root.hosotope.index
            ].findIndex((m, l) => l !== polytope.root.hosotope.index && m !== 2)
            if (index < 0) {
              index =
                polytope.root.hosotope.index < polytope.root.dimensions - 1
                  ? polytope.root.hosotope.index + 1
                  : 0
            }
            const gen = Object.entries(polytope.root.transforms).find(
              ([k, v]) => v.includes(index)
            )[0]
            subgens = subgens.replace(gen, polytope.root.hosotope.gen)
          }
        }

        const cached = {
          ...shape,
          key,
          subgens,
          facet: subshape.facet,
          subdimensions: rank,
          mirrors: subshape.mirrors,
          compute,
          space,
          ...(subshape.dimensions === 0 && !fundamental
            ? {
                rootVertex: space.rootVertex,
                rootNormals: space.rootNormals,
                rootVertices: space.rootVertices,
                metric: space.metric,
              }
            : {}),
        }
        cache.set(key, cached)
      }

      const cached = cache.get(key)
      if (subshape.dimensions === 0) {
        polytope.root = cached
      }

      if (!cached.done) {
        cached.limit = compute ? batch : isComputeDone ? 1000 : 1
        if (type === 'edge' && space.curvature <= 0) {
          cached.limit *= 1.75
        }
        if (compute) {
          // Also extract words to generate the shape
          ToddCoxeter(cached)
          if (eigenvalues.some(x => x <= 0)) {
            cached.count = Infinity
          } else {
            cached.count = cached.cosets.size
          }
        } else {
          if (eigenvalues.some(x => x <= 0)) {
            cached.count = Infinity
            cached.done = true
          } else if (cached.limit) {
            cached.count = countCosets(cached)
          }
        }
      }
      const subShapeMirrors = fundamental
        ? subshape.mirrors.map(() => 0)
        : subshape.mirrors

      polytope[rank].detail.push({
        key: key,
        coxeter: subshape.coxeter,
        stellation: subshape.stellation,
        mirrors: subShapeMirrors,
        dual,
        fundamental,
        count: cached.count,
        done: cached.done,
      })

      const aggregated = polytope[rank].aggregated.find(
        ({ coxeter, stellation, mirrors }) =>
          arrayEquals(coxeter, subshape.coxeter) &&
          arrayEquals(stellation, subshape.stellation) &&
          arrayEquals(mirrors, subShapeMirrors)
      )
      if (aggregated) {
        aggregated.done = aggregated.done && cached.done
        aggregated.count += cached.count
        aggregated.key += ',' + key
      } else {
        polytope[rank].aggregated.push({
          key,
          coxeter: subshape.coxeter,
          stellation: subshape.stellation,
          mirrors: subShapeMirrors,

          count: cached.count,
          done: cached.done,
        })
      }
      if (draw[type] && cached.words) {
        polytope[rank].processing += cached.words.size
      }
      polytope[rank].count += cached.count
      polytope[rank].done = polytope[rank].done && cached.done
      polytope[rank].dual = dual
      polytope[rank].fundamental = fundamental
      polytope.done = polytope.done && cached.done
    }
  }

  shape.children.forEach(visitShape)

  // Low dimensional fixes

  if (shape.dimensions === 0) {
    // Handle displaying the 1D shape egde
    shape.currentWords = new Map([[1, '']])
    shape.facet = ['']
    shape.done = true
    const vertices = new Map([[1, [0]]])
    cache.set('v', {
      ...shape,
      subgens: shape.subgens,
      facet: shape.facet,
      subdimensions: shape.dimensions,
      mirrors: shape.mirrors,
      compute: true,
      vertices,
    })
    polytope.root = polytope[0] = {
      dimensions: 0,
      processing: 1,
      count: 0,
      detail: [
        {
          key: 'v',
          coxeter: shape.coxeter,
          stellation: shape.stellation,
          mirrors: shape.mirrors,
          dual,

          count: 0,
          done: true,
        },
      ],
      aggregated: [
        {
          key: 'v',
          coxeter: shape.coxeter,
          stellation: shape.stellation,
          mirrors: shape.mirrors,
          dual,

          count: 0,
          done: true,
        },
      ],
      vertices,
      done: true,
    }
  } else if (shape.dimensions === 1) {
    // Handle displaying the 1D shape egde
    shape.currentWords = new Map([[1, '']])
    shape.facet = Array.from(polytope.root.words.values())
    shape.done = true
    cache.set('e', {
      ...shape,
      subgens: shape.subgens,
      facet: shape.facet,
      subdimensions: shape.dimensions,
      mirrors: shape.mirrors,
      compute: true,
    })
    polytope[1] = {
      dimensions: 1,
      processing: 1,
      count: 0,
      detail: [
        {
          key: 'e',
          coxeter: shape.coxeter,
          stellation: shape.stellation,
          mirrors: shape.mirrors,
          dual,

          count: 0,
          done: true,
        },
      ],
      aggregated: [
        {
          key: 'e',
          coxeter: shape.coxeter,
          stellation: shape.stellation,
          mirrors: shape.mirrors,
          dual,

          count: 0,
          done: true,
        },
      ],
      done: true,
    }
  }
  // Handle displaying the 2D shape face
  else if (shape.dimensions === 2) {
    shape.currentWords = new Map([[1, '']])

    const double = shape.gens
      .split('')
      .every(g => shape.mirrors[shape.transforms[g][0]])
    const rotation = shape.gens
      .split('')
      .every(g => shape.transforms[g].length === 2)

    const unorderedFacet = Array.from(polytope.root.words.values())
    shape.facet = new Array(unorderedFacet.length)
    for (let i = 0; i < unorderedFacet.length; i++) {
      shape.facet[i] =
        unorderedFacet[rotation ? i : reorder(i, shape.facet.length, double)]
    }
    shape.done = true
    cache.set('f', {
      ...shape,
      subgens: shape.subgens,
      facet: shape.facet,
      subdimensions: shape.dimensions,
      mirrors: shape.mirrors,
      compute: true,
    })
    polytope[2] = {
      dimensions: 2,
      processing: 1,
      count: 0,
      detail: [
        {
          key: 'f',
          coxeter: shape.coxeter,
          stellation: shape.stellation,
          mirrors: shape.mirrors,
          dual,

          count: 0,
          done: true,
        },
      ],
      aggregated: [
        {
          key: 'f',
          coxeter: shape.coxeter,
          stellation: shape.stellation,
          mirrors: shape.mirrors,
          dual,

          count: 0,
          done: true,
        },
      ],
      done: true,
    }
  }

  // Used for limiting
  polytope.size = fundamental
    ? polytope.root.words.size
    : polytope.root.vertices.size

  return polytope
}
