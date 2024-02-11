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

      const vertices = [...object.vertices]
      if (object.reverse) {
        ;[vertices[0], vertices[1]] = [vertices[1], vertices[0]]
      }
      for (let l = 0; l < vertices.length; l++) {
        const vertex = vertices[l]
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

    const tribuffer = i === 2 ? new Float32Array(allObjects.length * 2) : null

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

      if (tribuffer) {
        if (object.faceSize === 3) {
          tribuffer[j * 2 + 0] = 0
          tribuffer[j * 2 + 1] = 1 / 6
        } else {
          const shift = object.reverse ? [1, 0] : [0, 1]
          tribuffer[j * 2 + 0] = (object.faceIndex + shift[0]) / object.faceSize
          tribuffer[j * 2 + 1] = (object.faceIndex + shift[1]) / object.faceSize
        }
      }
    }
    data.push(buffer)
    if (tribuffer) {
      data.push(tribuffer)
    }
    infos.push({
      start: lasts ? lasts[i] : 0,
      size: allObjects.length,
      arity,
      nextIsTri: !!tribuffer,
    })
  }
  return { infos, data }
}
