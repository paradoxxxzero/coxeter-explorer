import { hash, hashV } from '../math'
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
          vertices: zero,
        })
        if (shape.dimensions === 2) {
          for (let i = 0; i < simplex.length; i++) {
            edges.push({
              word,
              vertices: [zero, mulV(simplex[i], smallInfinity)],
            })
          }
          faces.push({
            word,
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
            vertices: [simplex[i]],
          })
          cached.hashes.vertex.add(vertexHash)
        }
        for (let j = i + 1; j < simplex.length; j++) {
          const edgeHash = hashV([simplex[i], simplex[j]])
          if (!cached.hashes.edge.has(edgeHash)) {
            edges.push({
              word,
              vertices: [simplex[i], simplex[j]],
            })
            cached.hashes.edge.add(edgeHash)
          }

          for (let k = j + 1; k < simplex.length; k++) {
            const faceHash = hashV([simplex[i], simplex[j], simplex[k]])
            if (!cached.hashes.face.has(faceHash)) {
              faces.push({
                word,
                faceSize: 3,
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
