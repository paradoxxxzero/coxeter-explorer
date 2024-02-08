import { types } from '../../statics'
import { ambiances } from '../ambiances'
import { getArity } from '../utils'

const serialize = (parts, hidden) => {
  const allObjects = []
  let nonpartial = 0
  for (let p = 0; p < 2; p++) {
    const base = p === 1 ? parts.partials : parts.objects
    for (let j = 0; j < base.length; j++) {
      const objects = base[j]
      for (let k = 0; k < objects.length; k++) {
        const object = objects[k]
        if (
          hidden.includes(object.key) ||
          hidden.includes(object.key.split('_')[0])
        ) {
          continue
        }
        if (p === 0) {
          nonpartial++
        }
        object.subShape = j
        allObjects.push(object)
      }
    }
  }
  return { allObjects, nonpartial }
}

export const fillGeometry = (dimensions, objects, hidden, lasts) => {
  const data = []
  const infos = []
  const arity = getArity(dimensions)
  for (let i = 0; i < objects.length; i++) {
    const parts = objects[i]
    const { allObjects, nonpartial } = serialize(parts, hidden)

    const buffers = []
    for (let j = 0; j < i + 1; j++) {
      buffers.push(new Float32Array(allObjects.length * arity))
    }

    for (let j = 0; j < allObjects.length; j++) {
      const object = allObjects[j]

      for (let l = 0; l < object.vertices.length; l++) {
        const vertex = object.vertices[l]
        for (let m = 0; m < vertex.length; m++) {
          buffers[l][j * arity + m] = vertex[m]
        }
      }
    }
    data.push(buffers)
    infos.push({
      start: lasts ? lasts[i] : 0,
      size: allObjects.length,
      nonpartial,
      arity,
    })
  }
  return { infos, data }
}

export const fillColor = (dimensions, objects, ambiance, hidden, lasts) => {
  const data = []
  const infos = []
  const arity = getArity(dimensions)
  for (let i = 0; i < objects.length; i++) {
    const parts = objects[i]
    const { allObjects } = serialize(parts, hidden)

    const buffer = new Float32Array(allObjects.length * 3)

    for (let j = 0; j < allObjects.length; j++) {
      const object = allObjects[j]

      const c = ambiances[ambiance].color({
        word: object.word,
        key: object.key,
        subShape: object.subShape,
        faceIndex: object.faceIndex,
        faceSize: object.faceSize,
        dimensions: dimensions,
        hidden,
        idx: j,
        size: allObjects.length,
        type: types[i],
        dual: !!object.dual,
      })
      buffer[j * 3 + 0] = c[0]
      buffer[j * 3 + 1] = c[1]
      buffer[j * 3 + 2] = c[2]
    }
    data.push(buffer)
    infos.push({
      start: lasts ? lasts[i] : 0,
      size: allObjects.length,
      arity,
    })
  }
  return { infos, data }
}
