import { getShape } from '../math/shape'
import { isCompound, isDual } from '../mirrors'
import { fillData } from './datafiller'
import { getObjects } from './objects'
import { getPolytope } from './polytope'

let cache, shape

onmessage = ({
  data: {
    first,
    space,
    dimensions,
    coxeter,
    stellation,
    mirrors,
    ambiance,
    draw,
    batch,
    hidden,
    reciprocation,
  },
}) => {
  try {
    if (first) {
      cache = new Map()
      shape = getShape(dimensions, coxeter, stellation, mirrors, space)
    }
    const fundamental = mirrors.every(m => !m)
    const dual = mirrors.some(m => isDual(m))
    const compound = mirrors.some(m => isCompound(m))

    const computeWords = {
      // We always need to compute the vertices
      [dimensions - 1]: dual,
      0: true,
      1: dual || (draw.edge && !fundamental),
      2: dual || (draw.face && !fundamental),
    }

    const polytope = getPolytope(
      batch,
      shape,
      cache,
      space,
      draw,
      fundamental,
      dual && !compound,
      computeWords
    )
    if (compound) {
      getPolytope(
        batch,
        shape,
        cache,
        space,
        draw,
        fundamental,
        dual,
        computeWords,
        polytope
      )
    }

    if (shape.dimensions === 2) {
      shape.currentWords = new Map([[1, '']])
      shape.facet = Array.from(polytope.root.words.values())
      shape.done = true
      cache.set('', {
        ...shape,
        subgens: shape.subgens,
        facet: shape.facet,
        subdimensions: shape.dimensions,
        mirrors: shape.mirrors,
      })
      polytope[2] = {
        dimensions: 2,
        processing: 1,
        count: 0,
        detail: [
          {
            key: '',
            coxeter: shape.coxeter,
            stellation: shape.stellation,
            mirrors: shape.mirrors,

            count: 1,
            done: true,
          },
        ],
        aggregated: [],
        done: true,
      }
    }

    const objects = getObjects(
      shape,
      cache,
      space,
      draw,
      fundamental,
      dual,
      polytope,
      hidden,
      reciprocation
    )

    const { infos, data } = fillData(shape.dimensions, objects, ambiance, draw)

    postMessage(
      { polytope, infos, data },
      data
        .flat(1)
        .filter(a => a)
        .map(a => a.buffer)
    )
  } catch (e) {
    postMessage({ error: e.message })
  }
}
