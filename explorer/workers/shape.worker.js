import { getShape } from '../math/shape'
import { isCompound, isDual } from '../mirrors'
import { crossSection } from './crossSection'
import { fillColor, fillGeometry } from './datafiller'
import { faceToFrag, getObjects } from './objects'
import { getPolytope } from './polytope'

let cache, shape, fullObjects, fullObjectsUnsectioned

onmessage = ({
  data: {
    type,
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
    section,
  },
}) => {
  try {
    if (type === 'first') {
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
      fullObjects = []
      fullObjectsUnsectioned = []
    }
    // Shortcuts
    if (type === 'paint') {
      console.log(ambiance)
      const color = fillColor(shape.dimensions, fullObjects, ambiance, draw)

      postMessage(
        {
          type,
          color,
        },
        color.data.filter(a => a).map(a => a.buffer)
      )
      return
    }
    const fundamental = mirrors.length && mirrors.every(m => !m)
    const dual = mirrors.some(m => isDual(m))
    const compound = mirrors.some(m => isCompound(m))

    // We always need to compute the vertices
    const computeWords = fundamental
      ? { [dimensions - 1]: true } // Compute vertices (Fundamental is reversed)
      : dual
      ? {
          0: true,
          1: draw.edge || draw.face,
          2: draw.face,
          [dimensions - 1]: true,
        }
      : section !== null
      ? {
          0: true,
          1: true,
          2: draw.edge || draw.face,
          3: draw.face,
        }
      : {
          0: true,
          1: draw.edge,
          2: draw.face,
        }
    const polytope = getPolytope(
      type === 'first',
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
        type === 'first',
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

    let objects = getObjects(
      shape,
      cache,
      space,
      draw,
      fundamental,
      dual,
      polytope,
      hidden,
      reciprocation,
      section
    )

    if (section !== null) {
      objects = crossSection(polytope, objects, section, draw)
    }
    if (objects[2] && !fundamental) {
      // Fundamental is only triangles
      faceToFrag(objects[2], polytope.root)
    }

    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i]
      if (!obj) {
        continue
      }
      if (!fullObjects[i]) {
        fullObjects[i] = {
          objects: [],
          partials: [],
          start: 0,
          size: 0,
        }
      }
      fullObjects[i].objects.push(...obj.objects)
      fullObjects[i].partials = obj.partials
      fullObjects[i].size += obj.size

      polytope.root.lasts[i] += obj.objects.reduce(
        (acc, o) => acc + (o ? o.length : 0),
        0
      )
    }
    const geometry = fillGeometry(shape.dimensions, objects, ambiance, draw)
    const color = fillColor(shape.dimensions, objects, ambiance, draw)
    const poly = [...polytope]
    poly.done = polytope.done
    poly.size = polytope.size
    poly.root = {
      gens: shape.gens,
      subgens: shape.subgens,
      rels: shape.rels,
      transforms: shape.transforms,
      extrarels: shape.extrarels,
    }
    postMessage(
      {
        type,
        polytope: poly,
        geometry,
        color,
      },
      geometry.data
        .flat(1)
        .concat(color.data)
        .filter(a => a)
        .map(a => a.buffer)
    )
  } catch (e) {
    postMessage({ error: e.message })
  }
}
