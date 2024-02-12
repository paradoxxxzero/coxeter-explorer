import { avg } from '../math'
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
  // TODO: fixthis
  const facet = shape.children.find(c => c.key === key.split('_').slice(-1)[0])
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
  reciprocation,
  key,
  root
) => {
  const { space } = root
  const objects = []
  const partials = []
  if (!cached.dualCurrentWords) {
    return { objects, partials }
  }
  if (rank === 0) {
    // root word -> { vertex: centroid, facets: [facet vertex ids] }
    root.dualVertices = root.dualVertices || new Map()

    for (const [cosetId, word] of cached.dualCurrentWords) {
      const vertexIds = []

      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(root, word + cached.facet[i])
        if (vertexId && root.vertices.has(vertexId)) {
          vertexIds.push(vertexId)
        }
      }
      if (vertexIds.length < 2) {
        continue
      }
      const partial = vertexIds.length < cached.facet.length

      // The facet dual of rank 0 is a scaled up centroid of the facet
      let normal = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < vertexIds.length; j++) {
        const vertex = root.vertices.get(vertexIds[j])
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
              cached.midradius = getMidradius(reciprocation, shape, key, root)
            }
            radius = cached.midradius
          }
          const normalWithMetric = multiplyVector(space.metric, normal)
          for (let j = 0; j < vertexIds.length; j++) {
            const vertex = root.vertices.get(vertexIds[j])
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

      const vertex = {
        key: cached.compound ? cached.key.replace(/_/, 'dual_') : cached.key,
        word,
        vertices: [normal],
        dual: true,
        partial,
      }

      const id = `${key}#${word}`
      // We also need to store the adjacency
      root.dualVertices.set(id, {
        vertex: normal,
        facet: vertexIds,
        partial,
      })
      if (partial) {
        partials.push(vertex)
      } else {
        objects.push(vertex)
        cached.dualCurrentWords.delete(cosetId)
      }
    }
  } else if (rank === 1) {
    if (!root.dualVertices?.size) {
      return { objects, partials }
    }

    root.dualEdges = root.dualEdges || new Map()

    for (const [cosetId, word] of cached.dualCurrentWords) {
      const vertexIds = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(root, word + cached.facet[i])
        // Need the vertex?
        if (vertexId && root.vertices.has(vertexId)) {
          vertexIds.push(vertexId)
        }
      }
      if (!vertexIds.length) {
        continue
      }
      let partial = vertexIds.length < cached.facet.length

      // We need to find in the dual root facet which ones have this n-1 facet
      // as a common "edge", there should be exactly two

      const dualVertices = []
      const dualVerticesId = []
      for (const [
        id,
        { vertex, facet, partial: vertexPartial },
      ] of root.dualVertices.entries()) {
        if (vertexIds.every(vertexId => facet.includes(vertexId))) {
          dualVertices.push(vertex)
          dualVerticesId.push(id)
        }
        partial = partial || vertexPartial
        if (dualVertices.length === 2) {
          // Stop looking for more vertices
          break
        }
      }
      if (dualVertices.length !== 2) {
        continue
      }
      const vertex = {
        key: cached.compound ? cached.key.replace(/_/, 'dual_') : cached.key,
        word,
        vertices: dualVertices,
        dual: true,
        partial,
      }
      root.dualEdges.set(`${key}#${word}`, {
        edge: dualVerticesId,
        partial,
      })
      if (partial) {
        partials.push(vertex)
      } else {
        objects.push(vertex)
        cached.dualCurrentWords.delete(cosetId)
      }
    }
  } else if (rank === 2) {
    if (!root.dualVertices?.size || !root.dualEdges?.size) {
      return { objects, partials }
    }
    for (const [cosetId, word] of cached.dualCurrentWords) {
      const vertexIds = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(root, word + cached.facet[i])
        // Need the vertex?
        if (vertexId && root.vertices.has(vertexId)) {
          vertexIds.push(vertexId)
        }
      }
      if (vertexIds.length < cached.facet.length) {
        // Facet is not complete
        continue
      }
      let partial = false
      const dualVerticesIndexed = {}
      const dualVerticesId = []
      for (const [
        vkey,
        { vertex, facet, partial: vertexPartial },
      ] of root.dualVertices.entries()) {
        if (
          vertexIds.every(vertexId => facet.includes(vertexId)) ||
          shape.dimensions === 2 // Hack to draw fake face
        ) {
          dualVerticesIndexed[vkey] = vertex
          dualVerticesId.push(vkey)
          partial = partial || vertexPartial
        }
      }

      if (dualVerticesId.length < 3) {
        continue
      }

      // Find the edges that compose this face
      const edges = []
      for (const { edge, partial: edgePartial } of root.dualEdges.values()) {
        if (
          dualVerticesId.includes(edge[0]) &&
          dualVerticesId.includes(edge[1])
        ) {
          partial = partial || edgePartial
          edges.push([...edge])
        }
      }
      if (edges.length < 3) {
        continue
      }
      const dualVertices = []

      const chain = getChain(edges)
      if (chain.length < 4) {
        continue
      }
      if (chain[0] === chain[chain.length - 1]) {
        chain.pop()
      }

      for (let i = 0; i < chain.length; i++) {
        const index = chain[i]
        dualVertices.push(dualVerticesIndexed[index])
      }
      const vertex = {
        key: cached.compound ? cached.key.replace(/_/, 'dual_') : cached.key,
        word,
        vertices: dualVertices,
        dual: true,
        faceSize: dualVertices.length,
        parity: 0,
        partial,
      }
      if (partial) {
        partials.push(vertex)
      } else {
        objects.push(vertex)
        cached.dualCurrentWords.delete(cosetId)
      }
    }
  }
  return { objects, partials }
}
