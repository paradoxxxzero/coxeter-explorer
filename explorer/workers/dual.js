import { normalize } from '../math/hypermath'
import { wordToCoset } from '../math/toddcoxeter'

const getChain = (edges, chain = null) => {
  if (!edges.length) {
    return chain || []
  }
  if (!chain) {
    chain = edges[0]
    return getChain(edges.slice(1), chain)
  }
  const last = chain[chain.length - 1]
  const next = edges.find(edge => edge[0] === last || edge[1] === last)
  if (!next) {
    return chain
  }
  const index = edges.indexOf(next)
  edges.splice(index, 1)
  if (next[0] === last) {
    chain.push(next[1])
  } else {
    chain.push(next[0])
  }
  return getChain(edges, chain)
}

export const getDualObjects = (rank, cached, shape, rootCached) => {
  const objects = []
  const partials = []
  if (rank === 0) {
    // root word -> { vertex: centroid, facets: [facet vertex ids] }
    rootCached.dualVertices = rootCached.dualVertices || []

    for (const [cosetId, word] of cached.currentWords) {
      const vertexIds = []

      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(rootCached, word + cached.facet[i])
        if (vertexId && rootCached.vertices.has(vertexId)) {
          vertexIds.push(vertexId)
        }
      }

      if (vertexIds.length < cached.facet.length) {
        // Facet is not complete
        continue
      }
      // The facet dual of rank 0 is the centroid of the facet
      let centroid = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < vertexIds.length; j++) {
        const vertex = rootCached.vertices.get(vertexIds[j])
        for (let k = 0; k < vertex.length; k++) {
          centroid[k] += vertex[k]
        }
      }
      // We directly raise the vertex on the n-sphere (no need to divide by len)
      centroid = normalize(centroid, rootCached.space.metric, 1)
      objects.push({ word, vertices: [centroid] })

      rootCached.dualVertices.push({
        vertex: centroid,
        facet: vertexIds,
      })

      // We also need to store the adjacency

      cached.currentWords.delete(cosetId)
    }
  } else if (rank === 1) {
    rootCached.dualEdges = rootCached.dualEdges || []

    for (const [cosetId, word] of cached.currentWords) {
      const vertexIds = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(rootCached, word + cached.facet[i])
        // Need the vertex?
        if (vertexId && rootCached.vertices.has(vertexId)) {
          vertexIds.push(vertexId)
        }
      }
      if (vertexIds.length < cached.facet.length) {
        // Facet is not complete
        continue
      }

      // We need to find in the dual root facet which ones have this n-1 facet
      // as a common "edge", there should be exactly two

      const dualVertices = []
      const dualVerticesId = []
      for (let i = 0; i < rootCached.dualVertices.length; i++) {
        const { vertex, facet } = rootCached.dualVertices[i]
        if (vertexIds.every(vertexId => facet.includes(vertexId))) {
          dualVertices.push(vertex)
          dualVerticesId.push(i)
        }
      }
      if (dualVertices.length === 2) {
        const vertex = { word, vertices: dualVertices }
        objects.push(vertex)
        rootCached.dualEdges.push(dualVerticesId)
        cached.currentWords.delete(cosetId)
      }
    }
  } else if (rank === 2) {
    for (const [cosetId, word] of cached.currentWords) {
      const vertexIds = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(rootCached, word + cached.facet[i])
        // Need the vertex?
        if (vertexId && rootCached.vertices.has(vertexId)) {
          vertexIds.push(vertexId)
        }
      }
      if (vertexIds.length < cached.facet.length) {
        // Facet is not complete
        continue
      }

      // We need to find in the dual root facet which ones have this n-1 facet
      // as a common "edge", there should be exactly two
      const dualVerticesIndexed = {}
      for (let i = 0; i < rootCached.dualVertices.length; i++) {
        const { vertex, facet } = rootCached.dualVertices[i]
        if (vertexIds.every(vertexId => facet.includes(vertexId))) {
          dualVerticesIndexed[i] = vertex
        }
      }
      const dualVerticesId = Object.keys(dualVerticesIndexed).map(Number)

      if (dualVerticesId.length < 3) {
        continue
      }

      // Find the edges that compose this face
      const edges = []
      for (let i = 0; i < rootCached.dualEdges.length; i++) {
        const [a, b] = rootCached.dualEdges[i]
        if (dualVerticesId.includes(a) && dualVerticesId.includes(b)) {
          edges.push([a, b])
        }
      }
      const dualVertices = []

      const chain = getChain(edges)
      if (chain.length < 4) {
        continue
      }
      let partial = true
      if (chain[0] === chain[chain.length - 1]) {
        chain.pop()
        partial = false
      }

      for (let i = 0; i < chain.length; i++) {
        const index = chain[i]
        dualVertices.push(dualVerticesIndexed[index])
      }

      if (dualVertices.length === 3) {
        const vertex = { word, vertices: dualVertices }
        objects.push(vertex)
        cached.currentWords.delete(cosetId)
        continue
      }

      const parity = word.length % 2 ? 0 : 1
      const center = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < dualVertices.length; j++) {
        const vertices = dualVertices[j]
        for (let k = 0; k < vertices.length; k++) {
          center[k] += vertices[k]
        }
      }
      for (let j = 0; j < shape.dimensions; j++) {
        center[j] /= dualVertices.length
      }

      for (let j = 0; j < dualVertices.length; j++) {
        const vertex = {
          word,
          vertices: [
            dualVertices[(j + parity) % dualVertices.length],
            dualVertices[(j + (1 - parity)) % dualVertices.length],
            center,
          ],
          faceIndex: j,
          faceSize: dualVertices.length,
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
