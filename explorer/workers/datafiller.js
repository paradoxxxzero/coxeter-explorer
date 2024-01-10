import { types } from '../../statics'
import { ambiances } from '../ambiances'

export const fillData = (dimensions, objects, ambiance, draw) => {
  const data = []
  const infos = []
  const arity = dimensions > 4 ? 9 : dimensions
  for (let i = 0; i < objects.length; i++) {
    const parts = objects[i]
    if (!parts) {
      data.push(null)
      infos.push(null)
      continue
    }
    const buffers = [new Float32Array(parts.size * 3)]
    for (let j = 0; j < i + 1; j++) {
      buffers.push(new Float32Array(parts.size * arity))
    }
    let idx = 0
    const allObjects = parts.objects.concat(parts.partials)
    for (let j = 0; j < allObjects.length; j++) {
      const objects = allObjects[j]

      for (let k = 0; k < objects.length; k++) {
        const object = objects[k]

        for (let l = 0; l < object.vertices.length; l++) {
          const vertex = object.vertices[l]
          for (let m = 0; m < vertex.length; m++) {
            buffers[l + 1][idx * arity + m] = vertex[m]
          }
        }
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
        })
        buffers[0][idx * 3 + 0] = c[0]
        buffers[0][idx * 3 + 1] = c[1]
        buffers[0][idx * 3 + 2] = c[2]
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
