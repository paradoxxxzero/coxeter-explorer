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
    extrarels,
  },
}) => {
  try {
    if (first) {
      cache = new Map()
      shape = getShape(
        dimensions,
        coxeter,
        stellation,
        mirrors,
        space,
        extrarels
      )
      // eslint-disable-next-line no-restricted-globals
      self.shape = shape
    }
    const fundamental = mirrors.length && mirrors.every(m => !m)
    const dual = mirrors.some(m => isDual(m))
    const compound = mirrors.some(m => isCompound(m))

    // We always need to compute the vertices
    const computeWords = fundamental
      ? { [dimensions - 1]: true } // Compute vertices (Fundamental is reversed)
      : dual
      ? {
          [dimensions - 1]: true,
          [dimensions - 2]: draw.edge || draw.face,
          [dimensions - 3]: draw.face,
          0: true,
        }
      : {
          0: true,
          1: draw.edge,
          2: draw.face,
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
    polytope.root = {
      gens: shape.gens,
      subgens: shape.subgens,
      rels: shape.rels,
      transforms: shape.transforms,
      extrarels: shape.extrarels,
    }
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
