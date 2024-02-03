import { getShape } from '../math/shape'
import { isCompound, isDual } from '../mirrors'
import { crossSection } from './crossSection'
import { fillColor, fillGeometry } from './datafiller'
import { faceToFrag, getObjects } from './objects'
import { getPolytope, iterate } from './polytope'

let tcParams, root, shape, polytope, fullObjects, fullRawObjects

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
    iteration,
  },
}) => {
  try {
    if (iteration < 0) {
      // shape is an tree representation of the polytope
      shape = getShape(
        dimensions,
        coxeter,
        stellation,
        mirrors,
        space,
        extrarels
      )
      root = {
        space,
        fundamental: mirrors.length && mirrors.every(m => !m),
        dual: mirrors.some(m => isDual(m)),
        compound: mirrors.some(m => isCompound(m)),
        lasts: new Array(3).fill(0),
        subgens: shape.subgens,
      }
      // tcParams is a map of keys -> Todd-Coxeter params
      tcParams = new Map([
        [
          `${root.dual && !root.compound ? 'd' : root.fundamental ? 'f' : ''}${
            shape.root.key
          }`,
          root,
        ],
      ])

      // polytope is a list of facets
      polytope = getPolytope(batch, shape, tcParams, section, root)

      fullObjects = []
      fullRawObjects = []

      // Debug access
      // eslint-disable-next-line no-restricted-globals
      Object.assign(self, {
        shape,
        polytope,
        fullObjects,
        fullRawObjects,
        tcParams,
        root,
      })
      if (!hidden.length) {
        if (!draw.vertex) {
          hidden.push(...polytope.facets[0].parts.map(p => p.key).flat())
        }
        if (!draw.edge) {
          hidden.push(...polytope.facets[1].parts.map(p => p.key).flat())
        }
        if (!draw.face) {
          hidden.push(...polytope.facets[2].parts.map(p => p.key).flat())
        }
      }
    }

    // Shortcuts
    if (type === 'paint') {
      const color = fillColor(
        shape.dimensions,
        fullObjects,
        ambiance,
        hidden,
        polytope
      )

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
      if (section !== null) {
        objects = crossSection(objects, section, root)
      }
      if (!root.fundamental) {
        // Fundamental is only triangles
        objects[2] = faceToFrag(objects[2], root)
      }
      fullObjects = objects
      const geometry = fillGeometry(shape.dimensions, objects, hidden)
      const color = fillColor(
        shape.dimensions,
        objects,
        ambiance,
        hidden,
        polytope
      )
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
      const geometry = fillGeometry(shape.dimensions, fullObjects, hidden)
      const color = fillColor(
        shape.dimensions,
        fullObjects,
        ambiance,
        hidden,
        polytope
      )
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

    if (type === 'iterate') {
      iterate(polytope, tcParams, batch, root)
    }

    let objects = getObjects(
      shape,
      tcParams,
      polytope,
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
          }
        }
        fullRawObjects[i].objects.push(...obj.objects)
        fullRawObjects[i].partials = obj.partials
      }
    }
    if (section !== null) {
      objects = crossSection(objects, section, root)
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
        }
      }
      fullObjects[i].objects.push(...obj.objects)
      fullObjects[i].partials = obj.partials
    }

    const geometry = fillGeometry(shape.dimensions, objects, hidden, root.lasts)
    const color = fillColor(
      shape.dimensions,
      objects,
      ambiance,
      hidden,
      polytope,
      root.lasts
    )
    root.lasts = geometry.infos.map(i => i.start + i.nonpartial)

    polytope.gens = shape.gens
    polytope.subgens = shape.subgens
    polytope.rels = shape.rels
    polytope.transforms = shape.transforms
    polytope.extrarels = shape.extrarels
    polytope.fundamental = root.fundamental
    polytope.dual = root.dual
    polytope.compound = root.compound
    // Used for limiting
    polytope.size = root.fundamental ? root.words.size : root.vertices.size
    postMessage(
      {
        polytope,
        geometry,
        color,
        hidden: iteration < 0 ? hidden : undefined,
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
