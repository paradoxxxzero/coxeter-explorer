import { range } from '../../utils'
import { hash } from '../math'
import { normalize, reflect } from '../math/hypermath'
import { transpose } from '../math/matrix'

export const getFundamentalObjects = (cached, shape, space) => {
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
      cached.hashes = {
        vertex: new Set(),
        edge: new Set(),
        face: new Set(),
      }
      for (let i = 0; i < cached.rootVertices.length; i++) {
        const vertex = cached.rootVertices[i]
        cached.hashes.vertex.add(hash(vertex))
        vertices.push({
          word,
          cosetId,
          vertices: [vertex],
        })
      }
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
        const vertexHash = hash(simplex[i])
        if (!cached.hashes.vertex.has(vertexHash)) {
          vertices.push({
            word,
            cosetId,
            vertices: [simplex[i]],
          })
          cached.hashes.vertex.add(vertexHash)
        }

        for (let j = i + 1; j < simplex.length; j++) {
          const edgeHash = [simplex[i], simplex[j]]
            .sort((a, b) => {
              for (let i = 0; i < a.length; i++) {
                if (a[i] < b[i]) return -1
                if (a[i] > b[i]) return 1
              }
              return 0
            })
            .map(a => hash(a))
            .join('-')
          if (!cached.hashes.edge.has(edgeHash)) {
            edges.push({
              word,
              cosetId,
              vertices: [simplex[i], simplex[j]],
            })
            cached.hashes.edge.add(edgeHash)
          }

          for (let k = j + 1; k < simplex.length; k++) {
            const faceHash = [simplex[i], simplex[j], simplex[k]]
              .sort((a, b) => {
                for (let i = 0; i < a.length; i++) {
                  if (a[i] < b[i]) return -1
                  if (a[i] > b[i]) return 1
                }
                return 0
              })
              .map(a => hash(a))
              .join('-')
            if (!cached.hashes.face.has(faceHash)) {
              faces.push({
                word,
                cosetId,
                vertices: [simplex[i], simplex[j], simplex[k]],
              })
              cached.hashes.face.add(faceHash)
            }
          }
        }
      }

      cached.fundamentalVertices.set(word, simplex)
    }
    cached.currentWords.delete(cosetId)
  }
  return [vertices, edges, faces]
}
