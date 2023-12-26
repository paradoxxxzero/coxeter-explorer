import { types } from '../../statics'
import { arrayEquals, range } from '../../utils'
import { ambiances } from '../ambiances'
import { normalize, reflect } from '../math/hypermath'
import { transpose } from '../math/matrix'
import { getShape } from '../math/shape'
import { ToddCoxeter, countCosets, wordToCoset } from '../math/toddcoxeter'

let cache, lasts, shape

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
  },
}) => {
  try {
    let allDone = true
    if (first) {
      cache = new Map()
      lasts = [0, 0, 0]
      shape = getShape(dimensions, coxeter, stellation, mirrors)
    }

    const visit = new Array(shape.dimensions)
    const fundamental = mirrors.every(m => !m)

    const computeWords = {
      0: true,
      1: draw.edge && !fundamental,
      2: draw.face && !fundamental,
    }

    const visitShape = subshape => {
      subshape.children.forEach(visitShape)
      const compute = computeWords[subshape.dimensions]
      const type = types[subshape.dimensions]

      if (subshape?.new) {
        if (!visit[subshape.dimensions]) {
          visit[subshape.dimensions] = {
            dimensions: subshape.dimensions,
            processing: compute ? 0 : undefined,
            count: 0,
            detail: [],
            aggregated: [],
            done: true,
          }
        }
        const eiqenvalues = space.eigens.values

        if (!cache.has(subshape.key)) {
          const limit = subshape.dimensions === 0 ? 500 : draw[type] ? 250 : 10
          cache.set(subshape.key, {
            ...shape,
            subgens: subshape.quotient,
            space: subshape.space,
            subdimensions: subshape.dimensions,
            mirrors: subshape.mirrors,
            limit,
            ...(subshape.dimensions === 0 && !fundamental
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
          if (compute) {
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
        if (draw[type] && cached.words) {
          visit[subshape.dimensions].processing += cached.words.size
        }
        visit[subshape.dimensions].count += cached.count
        visit[subshape.dimensions].done =
          visit[subshape.dimensions].done && cached.done

        allDone = allDone && cached.done
      }
    }

    shape.children.forEach(visitShape)

    if (
      visit[0].done &&
      (!draw.edge || visit[1]?.done) &&
      (!draw.face || visit[2]?.done)
    ) {
      for (let cached of cache.values()) {
        cached.limit = 200
      }
    }

    const objects = []
    if (fundamental) {
      const fundamentalObjects = getFundamentalObjects(
        cache.get(range(shape.dimensions).join('-')),
        shape,
        space
      )
      for (let i = 0; i < fundamentalObjects.length; i++) {
        if (draw[types[i]]) {
          objects.push({
            start: lasts[i],
            size: fundamentalObjects[i].length,
            objects: [fundamentalObjects[i]],
            partials: [],
          })
          lasts[i] += fundamentalObjects[i].length
        } else {
          objects.push(null)
        }
      }
    } else {
      for (let i = 0; i < visit.length && i < 3; i++) {
        if (!draw[types[i]]) {
          objects.push(null)
          continue
        }
        const parts = {
          start: lasts[i],
          size: 0,
          objects: [],
          partials: [],
        }
        for (let j = 0; j < visit[i].detail.length; j++) {
          const detail = visit[i].detail[j]
          const cached = cache.get(detail.key)

          if (cached.currentWords.size) {
            const { objects, partials } = getObjects(cached, shape, space)
            parts.objects.push(objects)
            parts.size += objects.length + partials.length
            lasts[i] += objects.length
            parts.partials.push(partials)
          }
        }
        objects.push(parts)
      }
    }

    const data = []
    const infos = []
    const arity = shape.dimensions > 4 ? 9 : shape.dimensions
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
            subShape: j,
            index: k,
            len: objects.length,
            dimensions: shape.dimensions,
            draw,
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

    visit.top = fundamental
      ? cache.get(range(shape.dimensions).join('-')).words.size
      : cache.get(range(shape.dimensions).join('-')).vertices.size
    visit.done = allDone

    postMessage(
      { visit, infos, data },
      { options: { transfer: [data.flat(1)] } }
    )
  } catch (e) {
    postMessage({ error: e.message })
  }
}

function getFundamentalObjects(cached, shape, space) {
  const vertices = []
  const edges = []
  const faces = []
  for (const [cosetId, word] of cached.currentWords) {
    if (word === '') {
      // Add all fundamental mirrors
      const rootVerticesT = transpose(space.rootVertices)
      cached.fundamentalVertices = new Map()
      cached.rootVertices = range(shape.dimensions).map(i =>
        normalize(rootVerticesT[i], space.metric)
      )
      for (let i = 0; i < cached.rootVertices.length; i++) {
        const vertex = cached.rootVertices[i]
        vertices.push({
          word,
          cosetId,
          vertices: [vertex],
        })
        // edges.push({
        //   word,
        //   cosetId,
        //   vertices: [
        //     vertex,
        //     cached.rootVertices[(i + 1) % cached.rootVertices.length],
        //   ],
        // })
      }
      // faces.push({
      //   word,
      //   cosetId,
      //   vertices: cached.rootVertices,
      // })
      cached.fundamentalVertices.set('', cached.rootVertices)
    } else {
      const simplex = [...cached.fundamentalVertices.get(word.slice(1))]
      const reflectIndex = cached.gens.indexOf(word[0])

      for (let i = 0; i < simplex.length; i++) {
        simplex[i] = reflect(
          simplex[i],
          space.rootNormals[reflectIndex],
          space.metric
        )
      }
      for (let i = 0; i < simplex.length; i++) {
        vertices.push({
          word,
          cosetId,
          vertices: [simplex[i]],
        })

        for (let j = i + 1; j < simplex.length; j++) {
          edges.push({
            word,
            cosetId,
            vertices: [simplex[i], simplex[j]],
          })

          for (let k = j + 1; k < simplex.length; k++) {
            faces.push({
              word,
              cosetId,
              vertices: [simplex[i], simplex[j], simplex[k]],
            })
          }
        }
      }

      cached.fundamentalVertices.set(word, simplex)
    }
    cached.currentWords.delete(cosetId)
  }
  return [vertices, edges, faces]
}

function getObjects(cached, shape, space) {
  const objects = []
  const partials = []
  if (cached.subdimensions === 0) {
    for (const [cosetId, word] of cached.currentWords) {
      objects.push({
        word,
        cosetId,
        vertices: [cached.vertices.get(cosetId)],
      })
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
      if (vertex.vertices.length < 2) {
        continue
      }
      objects.push(vertex)
      cached.currentWords.delete(cosetId)
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
      if (faceVertices.length < 3) {
        continue
      }
      const partial = faceVertices.length < cached.space.length

      if (faceVertices.length === 3) {
        const vertex = { word, vertices: faceVertices, index: 0, partial }
        if (partial) {
          partials.push(vertex)
        } else {
          objects.push(vertex)
          cached.currentWords.delete(cosetId)
        }
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
          partial,
        }
        if (partial) {
          partials.push(vertex)
        } else {
          objects.push(vertex)
          cached.currentWords.delete(cosetId)
        }
      }
    }
  }
  return { objects, partials }
}
