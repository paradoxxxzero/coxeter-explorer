import { avg, max, min, sqrt } from '../math'
import { normalize } from '../math/hypermath'
import { addV, dot, mulV, multiplyVector } from '../math/matrix'
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

const getMidradius = (reciprocation, shape, key, root) => {
  const dists = []
  const facet = shape.children.find(c => c.key === key.replace('d', ''))
  const facets = []
  const visitShape = subshape => {
    if (subshape.dimensions === reciprocation) {
      facets.push(subshape.facet)
    }
    subshape.children.forEach(visitShape)
  }
  visitShape(facet)
  // In case of snub add all facets (links are not clear)
  shape.children.filter(c => c.key.includes('s')).forEach(visitShape)

  for (let i = 0; i < facets.length; i++) {
    const facet = facets[i]
    if (facet.length < 2) {
      continue
    }
    const vertices = []
    for (let j = 0; j < facet.length; j++) {
      const vertexId = wordToCoset(root, facet[j])
      if (vertexId && root.vertices.has(vertexId)) {
        vertices.push(root.vertices.get(vertexId))
      }
    }

    // Compute centroid
    let centroid = new Array(vertices[0].length).fill(0)
    for (let j = 0; j < vertices.length; j++) {
      const vertex = vertices[j]
      centroid = addV(centroid, vertex)
    }
    centroid = mulV(centroid, 1 / vertices.length)
    dists.push(dot(centroid, centroid))
  }
  return avg(...dists) // Squared midradius
}

export const getDualObjects = (
  rank,
  cached,
  shape,
  polytope,
  reciprocation,
  key
) => {
  const { space } = polytope.root
  const objects = []
  const partials = []
  if (rank === 0) {
    // root word -> { vertex: centroid, facets: [facet vertex ids] }
    polytope.root.dualVertices = polytope.root.dualVertices || []

    for (const [cosetId, word] of cached.currentWords) {
      const vertexIds = []

      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(polytope.root, word + cached.facet[i])
        if (vertexId && polytope.root.vertices.has(vertexId)) {
          vertexIds.push(vertexId)
        }
      }

      if (vertexIds.length < cached.facet.length) {
        // Facet is not complete
        continue
      }

      // The facet dual of rank 0 is a scaled up centroid of the facet
      let normal = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < vertexIds.length; j++) {
        const vertex = polytope.root.vertices.get(vertexIds[j])
        normal = addV(normal, vertex)
      }

      normal = normalize(normal, space.metric)

      // Compute the polar reciprocation of the facet
      if (space.curvature) {
        let weights = 0
        if (reciprocation >= 0) {
          let radius = 1

          if (reciprocation > 0 && reciprocation < shape.dimensions - 1) {
            if (!cached.midradius) {
              cached.midradius = getMidradius(
                reciprocation,
                shape,
                key,
                polytope.root
              )
            }
            radius = cached.midradius
          }
          const normalWithMetric = multiplyVector(space.metric, normal)
          for (let j = 0; j < vertexIds.length; j++) {
            const vertex = polytope.root.vertices.get(vertexIds[j])
            weights += dot(normalWithMetric, vertex)
          }
          weights /= radius * vertexIds.length

          if (reciprocation === shape.dimensions - 1) {
            weights = 1 / weights
          }
        } else {
          weights = 1
        }

        normal = mulV(normal, space.curvature / weights)
      }

      objects.push({ word, vertices: [normal], dual: true })

      polytope.root.dualVertices.push({
        vertex: normal,
        facet: vertexIds,
      })

      // We also need to store the adjacency
      cached.currentWords.delete(cosetId)
    }
  } else if (rank === 1) {
    polytope.root.dualEdges = polytope.root.dualEdges || []

    for (const [cosetId, word] of cached.currentWords) {
      const vertexIds = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(polytope.root, word + cached.facet[i])
        // Need the vertex?
        if (vertexId && polytope.root.vertices.has(vertexId)) {
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
      for (let i = 0; i < polytope.root.dualVertices.length; i++) {
        const { vertex, facet } = polytope.root.dualVertices[i]
        if (vertexIds.every(vertexId => facet.includes(vertexId))) {
          dualVertices.push(vertex)
          dualVerticesId.push(i)
        }
      }
      if (dualVertices.length === 2) {
        const vertex = { word, vertices: dualVertices, dual: true }
        objects.push(vertex)
        polytope.root.dualEdges.push(dualVerticesId)
        cached.currentWords.delete(cosetId)
      }
    }
  } else if (rank === 2) {
    for (const [cosetId, word] of cached.currentWords) {
      const vertexIds = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(polytope.root, word + cached.facet[i])
        // Need the vertex?
        if (vertexId && polytope.root.vertices.has(vertexId)) {
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
      for (let i = 0; i < polytope.root.dualVertices.length; i++) {
        const { vertex, facet } = polytope.root.dualVertices[i]
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
      for (let i = 0; i < polytope.root.dualEdges.length; i++) {
        const [a, b] = polytope.root.dualEdges[i]
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
        const vertex = { word, vertices: dualVertices, dual: true }
        objects.push(vertex)
        cached.currentWords.delete(cosetId)
        continue
      }

      const parity = word.length % 2 ? 0 : 1
      let center = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < dualVertices.length; j++) {
        const vertices = dualVertices[j]
        center = addV(center, vertices)
      }
      center = mulV(center, 1 / dualVertices.length)

      for (let j = 0; j < dualVertices.length; j++) {
        const vertex = {
          word,
          vertices: [
            dualVertices[(j + parity) % dualVertices.length],
            dualVertices[(j + (1 - parity)) % dualVertices.length],
            center,
          ],
          dual: true,
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
