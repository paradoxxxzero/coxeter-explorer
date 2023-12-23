import { arrayEquals, range } from '../../utils'
import { ambiances } from '../ambiances'
import { ToddCoxeter, countCosets, wordToCoset } from '../math/toddcoxeter'

let cache, lasts

const reorder = (i, n, double = false) => {
  if (double) {
    const parity = i > 0 ? 1 - (i % 2) : 0
    if (i >= n / 2 + parity) {
      return 2 * (n - i) - 1 + parity
    }
    return 2 * i - parity
  }
  if (i >= n / 2) {
    return 2 * (n - i) - 1
  }
  return 2 * i
}

onmessage = ({ data: { shape, space, first, ambiance } }) => {
  try {
    const visit = new Array(shape.dimensions)
    let allDone = true
    if (first) {
      cache = new Map()
      lasts = [0, 0, 0]
    }

    const visitShape = subshape => {
      subshape.children.forEach(visitShape)

      if (subshape?.new) {
        if (!visit[subshape.dimensions]) {
          visit[subshape.dimensions] = {
            dimensions: subshape.dimensions,
            processing: subshape.dimensions < 3 ? 0 : undefined,
            count: 0,
            detail: [],
            aggregated: [],
            done: true,
          }
        }
        const eiqenvalues = space.eigens.values

        if (!cache.has(subshape.key)) {
          cache.set(subshape.key, {
            ...shape,
            subgens: subshape.quotient,
            space: subshape.space,
            subdimensions: subshape.dimensions,
            mirrors: subshape.mirrors,
            limit:
              // Priorize low dimensional facets
              // TODO: increase again when we have a better way to handle
              subshape.dimensions < 3 ? (3 - subshape.dimensions) * 250 : 10,
            ...(subshape.dimensions === 0
              ? {
                  rootVertex: space.rootVertex,
                  rootNormals: space.rootNormals,
                  metric: space.metric,
                }
              : {}),
          })
        }
        const cached = cache.get(subshape.key)
        if (!cached.done) {
          if (subshape.dimensions < 3) {
            // Also extract words to generate the shape
            ToddCoxeter(cached)
            if (eiqenvalues.some(x => x <= 0)) {
              cached.count = Infinity
            } else {
              cached.count = cached.cosets.size
            }
          } else {
            if (eiqenvalues.some(x => x <= 0)) {
              cached.count = Infinity
              cached.done = true
            } else {
              cached.count = countCosets(cached)
            }
          }
        }

        visit[subshape.dimensions].detail.push({
          key: subshape.key,
          coxeter: subshape.coxeter,
          stellation: subshape.stellation,
          mirrors: subshape.mirrors,

          count: cached.count,
          done: cached.done,
          objects: cached.objects,
        })

        const aggregated = visit[subshape.dimensions].aggregated.find(
          ({ coxeter, stellation, mirrors }) =>
            arrayEquals(coxeter, subshape.coxeter) &&
            arrayEquals(stellation, subshape.stellation) &&
            arrayEquals(mirrors, subshape.mirrors)
        )
        if (aggregated) {
          aggregated.done = aggregated.done && cached.done
          aggregated.count += cached.count
          aggregated.key += ',' + subshape.key
        } else {
          visit[subshape.dimensions].aggregated.push({
            key: subshape.key,
            coxeter: subshape.coxeter,
            stellation: subshape.stellation,
            mirrors: subshape.mirrors,

            count: cached.count,
            done: cached.done,
          })
        }
        if (cached.words) {
          visit[subshape.dimensions].processing += cached.words.size
        }
        visit[subshape.dimensions].count += cached.count
        visit[subshape.dimensions].done =
          visit[subshape.dimensions].done && cached.done

        allDone = allDone && cached.done
      }
    }

    shape.children.forEach(visitShape)

    if (visit[0].done && visit[1]?.done && visit[2]?.done) {
      for (let cached of cache.values()) {
        cached.limit = 200
      }
    }

    const objects = []
    for (let i = 0; i < visit.length && i < 3; i++) {
      const parts = {
        start: lasts[i],
        size: 0,
        objects: [],
      }
      for (let j = 0; j < visit[i].detail.length; j++) {
        const detail = visit[i].detail[j]
        const cached = cache.get(detail.key)

        if (cached.currentWords.size) {
          const objects = getObjects(cached, shape, space)
          parts.objects.push(objects)
          parts.size += objects.length
        }
      }
      objects.push(parts)
      lasts[i] += parts.size
    }

    const data = []
    const infos = []
    const arity = shape.dimensions > 4 ? 9 : shape.dimensions
    for (let i = 0; i < objects.length; i++) {
      const parts = objects[i]
      const buffers = [new Float32Array(parts.size * 3)]
      for (let j = 0; j < i + 1; j++) {
        buffers.push(new Float32Array(parts.size * arity))
      }
      let idx = 0
      for (let j = 0; j < parts.objects.length; j++) {
        const objects = parts.objects[j]

        for (let k = 0; k < objects.length; k++) {
          const object = objects[k]

          for (let l = 0; l < object.vertices.length; l++) {
            const vertex = object.vertices[l]
            for (let m = 0; m < vertex.length; m++) {
              buffers[l + 1][idx * arity + m] = vertex[m]
            }
          }
          const c = ambiances[ambiance].color(
            {
              word: object.word,
              key: object.key,
              subShape: j,
            },
            i
          )
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

    visit.top = objects[0].start + objects[0].size
    visit.done = allDone

    postMessage(
      { visit, infos, data },
      { options: { transfer: [data.flat(1)] } }
    )
  } catch (e) {
    postMessage({ error: e.message })
  }
}

function getObjects(cached, shape, space) {
  const objects = []
  if (cached.subdimensions === 0) {
    for (const [cosetId, word] of cached.currentWords) {
      objects.push({
        word,
        cosetId,
        vertices: [cached.vertices.get(cosetId)],
      })
      cached.currentCosetId = cosetId
      cached.currentWords.delete(cosetId)
    }
  } else if (cached.subdimensions === 1) {
    const verticeCached = cache.get(range(shape.dimensions).join('-'))
    for (const [cosetId, word] of cached.currentWords) {
      const vertex = { word, vertices: [] }
      for (let i = 0; i < cached.space.length; i++) {
        const vertexId = wordToCoset(verticeCached, word + cached.space[i])
        if (vertexId && verticeCached.vertices.has(vertexId)) {
          vertex.vertices.push(verticeCached.vertices.get(vertexId))
        }
      }
      if (vertex.vertices.length === 2) {
        objects.push(vertex)
        cached.currentWords.delete(cosetId)
      }
    }
  } else if (cached.subdimensions === 2) {
    const verticeCached = cache.get(range(shape.dimensions).join('-'))

    for (const [cosetId, word] of cached.currentWords) {
      const faceVertices = []
      for (let h = 0; h < cached.space.length; h++) {
        const double = cached.mirrors.every(m => !!m)
        const i = reorder(h, cached.space.length, double)
        const vertexId = wordToCoset(verticeCached, word + cached.space[i])
        if (vertexId && verticeCached.vertices.has(vertexId)) {
          faceVertices.push(verticeCached.vertices.get(vertexId))
        }
      }
      if (faceVertices.length < cached.space.length) {
        continue
      }
      if (faceVertices.length === 3) {
        const vertex = { word, vertices: faceVertices }
        objects.push(vertex)
        cached.currentWords.delete(cosetId)
        continue
      }

      const center = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < faceVertices.length; j++) {
        const vertices = faceVertices[j]
        for (let k = 0; k < vertices.length; k++) {
          center[k] += vertices[k]
        }
      }
      for (let j = 0; j < shape.dimensions; j++) {
        center[j] /= faceVertices.length
      }
      for (let j = 0; j < faceVertices.length; j++) {
        const p = word.length % 2 === space.curvature > 0 ? 0 : 1
        const vertex = {
          word,
          vertices: [
            faceVertices[(j + p) % faceVertices.length],
            faceVertices[(j + (1 - p)) % faceVertices.length],
            center,
          ],
          index: j,
        }
        objects.push(vertex)
        cached.currentWords.delete(cosetId)
      }
    }
  }
  return objects
}
