import { getShape, reorder } from '../math/shape'
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
      self.shape = shape
    }
    const fundamental = mirrors.every(m => !m)
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

    // Handle displaying the 2D shape face
    if (shape.dimensions === 2) {
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
