import { types } from '../../statics'
import { arrayEquals } from '../../utils'
import { ToddCoxeter, countCosets } from '../math/toddcoxeter'

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
        const cached = {
          ...shape,
          key,
          subgens: subshape.quotient,
          facet: subshape.facet,
          subdimensions: rank,
          mirrors: subshape.mirrors,
          compute,
          space,
          ...(subshape.dimensions === 0 && !fundamental
            ? {
                rootVertex: space.rootVertex,
                rootNormals: space.rootNormals,
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
          key: key,
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

  // Used for limiting
  polytope.size = fundamental
    ? polytope.root.words.size
    : polytope.root.vertices.size

  return polytope
}
