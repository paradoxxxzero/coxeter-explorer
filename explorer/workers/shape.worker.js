import { arrayEquals } from '../../utils'
import { countCosets } from '../math/toddcoxeter'

let cache

onmessage = ({ data: { shape, space, first } }) => {
  try {
    // TODO: share these enumeration with the toddcoxeter-tiling worker
    const visit = {}
    let allDone = true
    if (first) {
      cache = new Map()
    }

    const visitShape = subshape => {
      if (subshape?.new) {
        if (!visit[subshape.dimensions]) {
          visit[subshape.dimensions] = {
            dimensions: subshape.dimensions,
            count: 0,
            detail: [],
            done: true,
          }
        }
        const eiqenvalues = space.eigens.values

        let count
        let done = true

        if (eiqenvalues.some(x => x <= 0)) {
          count = Infinity
        } else if (shape.dimensions === subshape.dimensions) {
          count = 1
        } else {
          if (!cache.has(subshape.key)) {
            cache.set(subshape.key, {
              ...shape,
              subgens: subshape.quotient,
              limit: 100,
            })
          }
          const cached = cache.get(subshape.key)
          if (!cached.done) {
            cached.count = countCosets(cached)
            done = cached.done
          }
          count = cached.count
        }

        const existing = visit[subshape.dimensions].detail.find(
          ({ coxeter, stellation, mirrors }) =>
            arrayEquals(coxeter, subshape.coxeter) &&
            arrayEquals(stellation, subshape.stellation) &&
            arrayEquals(mirrors, subshape.mirrors)
        )
        if (existing) {
          existing.done = existing.done && done
          existing.count += count
        } else {
          visit[subshape.dimensions].detail.push({
            ...subshape,
            count,
            done,
          })
        }
        visit[subshape.dimensions].count += count
        visit[subshape.dimensions].done =
          visit[subshape.dimensions].done && done

        allDone = allDone && done
      }
      subshape.children.forEach(visitShape)
    }

    shape.children.forEach(visitShape)
    postMessage({ visit, done: allDone })
  } catch (e) {
    postMessage({ error: e.message })
  }
}
