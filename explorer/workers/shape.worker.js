import { arrayEquals, range } from '../../utils'
import { ToddCoxeter, countCosets, wordToCoset } from '../math/toddcoxeter'

let cache

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

onmessage = ({ data: { shape, space, first } }) => {
  try {
    const visit = new Array(shape.dimensions)
    let allDone = true
    if (first) {
      cache = new Map()
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
            limit: 100,
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
            cached.objects = []
            if (subshape.dimensions === 0) {
              for (const [vertexId, vertex] of cached.vertices) {
                cached.objects.push({
                  word: cached.words.get(vertexId),
                  vertexId,
                  vertices: [vertex],
                })
              }
            } else if (subshape.dimensions === 1) {
              const verticeCached = cache.get(range(shape.dimensions).join('-'))

              for (const [, word] of cached.words) {
                const vertex = { word, vertices: [] }
                for (let i = 0; i < subshape.space.length; i++) {
                  const vertexId = wordToCoset(
                    verticeCached,
                    word + subshape.space[i]
                  )
                  if (!vertexId || !verticeCached.vertices.has(vertexId)) {
                    break
                  }
                  vertex.vertices.push(verticeCached.vertices.get(vertexId))
                }
                cached.objects.push(vertex)
              }
            } else if (subshape.dimensions === 2) {
              const verticeCached = cache.get(range(shape.dimensions).join('-'))

              for (const [, word] of cached.words) {
                const faceVertices = []
                for (let h = 0; h < subshape.space.length; h++) {
                  const i = reorder(h, subshape.space.length, subshape.double)
                  const vertexId = wordToCoset(
                    verticeCached,
                    word + subshape.space[i]
                  )
                  if (!vertexId || !verticeCached.vertices.has(vertexId)) {
                    break
                  }
                  faceVertices.push(verticeCached.vertices.get(vertexId))
                }
                if (faceVertices.length < 3) {
                  continue
                }
                if (faceVertices.length === 3) {
                  const vertex = { word, vertices: faceVertices }
                  cached.objects.push(vertex)
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
                  cached.objects.push(vertex)
                }
              }
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

    visit.done = allDone

    postMessage(visit)
  } catch (e) {
    postMessage({ error: e.message })
  }
}
