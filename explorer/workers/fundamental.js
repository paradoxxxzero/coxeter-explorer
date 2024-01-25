import { hash } from '../math'
import { normalize, reflect } from '../math/hypermath'
import { mulV, transpose } from '../math/matrix'

export const getFundamentalObjects = (cached, shape, space) => {
  const vertices = []
  const edges = []
  const faces = []
  for (const [cosetId, word] of cached.currentWords) {
    let simplex
    if (word === '') {
      // Add all fundamental mirrors
      const rootVerticesT = transpose(space.rootVertices)
      cached.fundamentalVertices = new Map()
      simplex = rootVerticesT.map(v => normalize(v, space.metric))
      cached.hashes = {
        vertex: new Set(),
        edge: new Set(),
        face: new Set(),
      }
      cached.fundamentalVertices.set('', simplex)
    } else {
      simplex = [...cached.fundamentalVertices.get(word.slice(1))]
      const reflectIndex = cached.gens.indexOf(word[0])

      for (let i = 0; i < simplex.length; i++) {
        simplex[i] = reflect(
          simplex[i],
          space.rootNormals[reflectIndex],
          space.metric
        )
      }
    }

    for (let i = 0; i < simplex.length; i++) {
      if (shape.dimensions < 3) {
        const smallInfinity = 1000
        const zero = new Array(shape.dimensions).fill(0)
        vertices.push({
          word,
          cosetId,
          vertices: zero,
        })
        if (shape.dimensions === 2) {
          for (let i = 0; i < simplex.length; i++) {
            edges.push({
              word,
              cosetId,
              vertices: [zero, mulV(simplex[i], smallInfinity)],
            })
          }
          faces.push({
            word,
            cosetId,
            vertices: [
              zero,
              mulV(simplex[i], smallInfinity),
              mulV(simplex[(i + 1) % simplex.length], smallInfinity),
            ],
          })
        }
      } else {
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
