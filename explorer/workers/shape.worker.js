import { getShape } from '../math/shape'
import { isCompound, isDual } from '../mirrors'
import { crossSection } from './crossSection'
import { fillColor, fillGeometry } from './datafiller'
import { faceToFrag, getObjects } from './objects'
import { getPolytope } from './polytope'

let cache, root, shape, fullObjects, fullRawObjects

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
      shape = getShape(
        dimensions,
        coxeter,
        stellation,
        mirrors,
        space,
        extrarels
      )
      root = {
        fundamental: mirrors.length && mirrors.every(m => !m),
        dual: mirrors.some(m => isDual(m)),
        compound: mirrors.some(m => isCompound(m)),
        lasts: new Array(3).fill(0),
      }
      const getRoot = shape => {
        let root
        const visitShape = subshape => {
          if (subshape.dimensions === 0) {
            root = subshape
          }
          if (!root) {
            subshape.children.forEach(visitShape)
          }
        }
        shape.children.forEach(visitShape)
        return root
      }
      cache = new Map([
        [
          `${root.dual ? 'd' : root.fundamental ? 'f' : ''}${
            getRoot(shape).key
          }`,
          root,
        ],
      ])
      // eslint-disable-next-line no-restricted-globals
      self.shape = shape
      fullObjects = []
      fullRawObjects = []
    }
    // Shortcuts
    if (type === 'paint') {
      const color = fillColor(shape.dimensions, fullObjects, ambiance, draw)

      postMessage(
        {
          color,
        },
        color.data.filter(a => a).map(a => a.buffer)
      )
      return
    }
    if (type === 'section') {
      if (!fullRawObjects.length) {
        return
      }
      let objects = fullRawObjects
      for (let i = 0; i < objects.length; i++) {
        root.lasts[i] = 0
      }
      if (section !== null) {
        objects = crossSection(objects, section, draw, root)
      }
      if (!root.fundamental) {
        // Fundamental is only triangles
        objects[2] = faceToFrag(objects[2], root)
      }
      fullObjects = objects
      for (let i = 0; i < objects.length; i++) {
        root.lasts[i] = objects[i].size
      }
      const geometry = fillGeometry(shape.dimensions, objects, ambiance, draw)
      const color = fillColor(shape.dimensions, objects, ambiance, draw)
      postMessage(
        {
          geometry,
          color,
        },
        geometry.data
          .flat(1)
          .concat(color.data)
          .filter(a => a)
          .map(a => a.buffer)
      )
      return
    }
    if (type === 'display') {
      return
    }

    const polytope = getPolytope(
      batch,
      shape,
      cache,
      space,
      root.dual && !root.compound,
      section,
      root
    )
    if (root.compound) {
      getPolytope(
        batch,
        shape,
        cache,
        space,
        root.dual,
        section,
        root,
        polytope
      )
    }

    let objects = getObjects(
      shape,
      cache,
      draw,
      polytope,
      hidden,
      reciprocation,
      section,
      root
    )
    if (section) {
      for (let i = 0; i < objects.length; i++) {
        const obj = objects[i]
        if (!fullRawObjects[i]) {
          fullRawObjects[i] = {
            objects: [],
            partials: [],
            start: 0,
            size: 0,
          }
        }
        fullRawObjects[i].objects.push(...obj.objects)
        fullRawObjects[i].partials = obj.partials
        fullRawObjects[i].size += obj.size
      }
    }
    if (section !== null) {
      objects = crossSection(objects, section, draw, root)
    }

    if (!root.fundamental) {
      // Fundamental is only triangles
      objects[2] = faceToFrag(objects[2], root)
    }

    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i]
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

      root.lasts[i] += obj.objects.reduce(
        (acc, o) => acc + (o ? o.length : 0),
        0
      )
    }
    const geometry = fillGeometry(shape.dimensions, objects, ambiance, draw)
    const color = fillColor(shape.dimensions, objects, ambiance, draw)

    polytope.gens = shape.gens
    polytope.subgens = shape.subgens
    polytope.rels = shape.rels
    polytope.transforms = shape.transforms
    polytope.extrarels = shape.extrarels

    postMessage(
      {
        polytope,
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
