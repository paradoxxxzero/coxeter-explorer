import { types } from '../../statics'
import { getBaseObjects } from './base'
import { getDualObjects } from './dual'
import { getFundamentalObjects } from './fundamental'

export const getObjects = (
  shape,
  cache,
  space,
  draw,
  fundamental,
  dual,
  polytope,
  hidden,
  reciprocation
) => {
  if (!polytope.root.lasts) {
    polytope.root.lasts = new Array(3).fill(0)
  }
  const objects = []
  if (fundamental) {
    const fundamentalObjects = getFundamentalObjects(
      polytope.root,
      shape,
      space
    )
    for (let i = 0; i < fundamentalObjects.length; i++) {
      if (draw[types[i]]) {
        objects.push({
          start: polytope.root.lasts[i],
          size: fundamentalObjects[i].length,
          objects: [fundamentalObjects[i]],
          partials: [],
        })
        polytope.root.lasts[i] += fundamentalObjects[i].length
      } else {
        objects.push(null)
      }
    }
  } else {
    for (let i = 0; i < 3; i++) {
      if (!polytope[i] || (!dual && !draw[types[i]])) {
        objects.push(null)
        continue
      }
      const parts = {
        start: polytope.root.lasts[i],
        size: 0,
        objects: [],
        partials: [],
      }
      for (let j = 0; j < polytope[i].detail.length; j++) {
        const detail = polytope[i].detail[j]
        const cached = cache.get(detail.key)

        if (
          (!detail.dual && hidden.includes(detail.key)) ||
          !cached.compute ||
          !cached.currentWords.size
        ) {
          // Keep index for subshape
          parts.objects.push(null)
          parts.partials.push(null)
          continue
        }

        const { objects, partials } = detail.dual
          ? getDualObjects(
              i,
              cached,
              shape,
              polytope,
              reciprocation,
              detail.key
            )
          : getBaseObjects(i, cached, shape, polytope)
        if (!draw[types[i]] || hidden.includes(detail.key)) {
          continue
        }
        parts.objects.push(objects)
        parts.size += objects.length + partials.length
        polytope.root.lasts[i] += objects.length
        parts.partials.push(partials)
      }
      objects.push(parts)
    }
  }
  return objects
}
