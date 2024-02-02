import { types } from '../../statics'
import { ambiances } from '../ambiances'
import { getArity } from '../utils'

export const fillGeometry = (dimensions, objects, draw, hidden) => {
  const data = []
  const infos = []
  const arity = getArity(dimensions)
  for (let i = 0; i < objects.length; i++) {
    const parts = objects[i]
    const buffers = []
    for (let j = 0; j < i + 1; j++) {
      buffers.push(new Float32Array(parts.size * arity))
    }
    let idx = 0
    const allObjects = parts.objects.concat(parts.partials)

    for (let j = 0; j < allObjects.length; j++) {
      const objects = allObjects[j]
      if (!objects) {
        continue
      }
      for (let k = 0; k < objects.length; k++) {
        const object = objects[k]

        for (let l = 0; l < object.vertices.length; l++) {
          const vertex = object.vertices[l]
          for (let m = 0; m < vertex.length; m++) {
            buffers[l][idx * arity + m] = vertex[m]
          }
        }
        idx++
      }
    }
    data.push(buffers)
    infos.push({
      start: parts.start,
      size: parts.size,
    })
  }
  return { infos, data }
}

export const fillColor = (dimensions, objects, ambiance, draw, hidden) => {
  const data = []
  const infos = []
  for (let i = 0; i < objects.length; i++) {
    const parts = objects[i]
    const buffer = new Float32Array(parts.size * 3)

    let idx = 0
    const allObjects = parts.objects.concat(parts.partials)

    for (let j = 0; j < allObjects.length; j++) {
      const objects = allObjects[j]
      if (!objects) {
        continue
      }
      for (let k = 0; k < objects.length; k++) {
        const object = objects[k]

        const c = ambiances[ambiance].color({
          word: object.word,
          key: object.key,
          subShape: j % parts.objects.length, // For partials
          faceIndex: object.faceIndex,
          faceSize: object.faceSize,
          dimensions: dimensions,
          draw,
          idx,
          size: parts.size,
          type: types[i],
          dual: !!object.dual,
        })
        buffer[idx * 3 + 0] = c[0]
        buffer[idx * 3 + 1] = c[1]
        buffer[idx * 3 + 2] = c[2]
        idx++
      }
    }
    data.push(buffer)
    infos.push({
      start: parts.start,
      size: parts.size,
    })
  }
  return { infos, data }
}
