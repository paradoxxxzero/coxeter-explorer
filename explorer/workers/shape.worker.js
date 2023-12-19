import { arrayEquals } from '../../utils'
import { countCosets } from '../math/coset'

onmessage = ({ data: { shape, spaceType, limit } }) => {
  try {
    // TODO: reuse already computed cosets
    const visit = {}

    const visitShape = subshape => {
      if (subshape?.new) {
        if (!visit[subshape.dimensions]) {
          visit[subshape.dimensions] = {
            dimensions: subshape.dimensions,
            count: 0,
            detail: [],
          }
        }
        const eiqenvalues = spaceType.eigens.values
        const params = {
          ...shape,
          subgens: subshape.quotient,
          limit: 2 ** limit,
        }
        let count = eiqenvalues.some(x => x <= 0)
          ? Infinity
          : shape.dimensions === subshape.dimensions
          ? 1
          : isNaN(visit[subshape.dimensions].count)
          ? NaN
          : countCosets(params)

        const existing = visit[subshape.dimensions].detail.find(
          ({ coxeter, stellation, mirrors }) =>
            arrayEquals(coxeter, subshape.coxeter) &&
            arrayEquals(stellation, subshape.stellation) &&
            arrayEquals(mirrors, subshape.mirrors)
        )
        if (existing) {
          existing.count += count
        } else {
          visit[subshape.dimensions].detail.push({
            count,
            ...subshape,
          })
        }
        visit[subshape.dimensions].count += count
      }
      subshape.children.forEach(visitShape)
    }

    shape.children.forEach(visitShape)
    postMessage(visit)
  } catch (e) {
    postMessage({ error: e.message })
  }
}
