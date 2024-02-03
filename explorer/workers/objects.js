import { abs } from '../math'
import { addV, cross, mulV } from '../math/matrix'
import { getBaseObjects } from './base'
import { getDualObjects } from './dual'
import { getFundamentalObjects } from './fundamental'

export const faceToFrag = (faces, root) => {
  const parts = {
    objects: [],
    partials: [],
  }
  for (let p = 0; p < 2; p++) {
    const partial = p === 1
    const objects = partial ? faces.partials : faces.objects
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i]
      const newObjects = []
      for (let j = 0; j < obj.length; j++) {
        const face = obj[j]
        const dimensions = face.vertices[0].length

        const parity = face.word.length % 2 ? 0 : 1

        if (
          face.vertices.length === 3 &&
          !face.vertices
            .reduce((a, b) => addV(a, b), new Array(dimensions).fill(0))
            .every(a => abs(a) < 1e-12)
        ) {
          newObjects.push(face)
          continue
        }

        let centroid = new Array(dimensions).fill(0)
        for (let k = 0; k < face.vertices.length; k++) {
          const vertices = face.vertices[k]
          centroid = addV(centroid, vertices)
        }
        centroid = mulV(centroid, 1 / face.vertices.length)
        const centroids = []
        if (root.hosotope && centroid.every(a => abs(a) < 1e-12)) {
          const normal3 = cross(face.vertices[0], face.vertices[1])
          const base = new Array(dimensions).fill(0)
          normal3.map((a, i) => (base[i] = a))
          centroids.push(base)
          centroids.push(base.map(a => -a))
          for (let j = 3; j < dimensions; j++) {
            const centroid = [...base]
            centroid[2] = 0
            centroid[j] = base[2]
            centroids.push(centroid)
            centroids.push(centroid.map(a => -a))
          }
        } else {
          centroids.push(centroid)
        }
        for (let k = 0; k < face.vertices.length; k++) {
          for (let l = 0; l < centroids.length; l++) {
            const fragment = {
              ...face,
              vertices: [
                face.vertices[(k + parity) % face.vertices.length],
                face.vertices[(k + (1 - parity)) % face.vertices.length],
                centroids[l],
              ],
              faceIndex: k,
            }
            newObjects.push(fragment)
          }
        }
      }
      if (partial) {
        parts.partials.push(newObjects)
      } else {
        parts.objects.push(newObjects)
      }
    }
  }
  return parts
}

export const getObjects = (
  shape,
  cache,
  polytope,
  reciprocation,
  section,
  root
) => {
  const objects = []
  if (root.fundamental) {
    const fundamentalObjects = getFundamentalObjects(shape, root)
    for (let i = 0; i < fundamentalObjects.length; i++) {
      const parts = {
        objects: [],
        partials: [],
      }
      parts.objects.push(fundamentalObjects[i])
      objects.push(parts)
    }
  } else {
    for (let i = 0; i < (section ? 4 : 3); i++) {
      const parts = {
        objects: [],
        partials: [],
      }
      const facet = polytope.facets[i]
      for (let j = 0; j < facet.parts.length; j++) {
        const part = facet.parts[j]
        const cached = cache.get(
          root.compound ? part.key.replace(/^d/g, '') : part.key
        )
        const { objects, partials } = part.dual
          ? getDualObjects(i, cached, shape, reciprocation, part.key, root)
          : getBaseObjects(i, cached, root)

        parts.objects.push(objects)
        parts.partials.push(partials)
      }
      objects.push(parts)
    }
  }
  return objects
}
