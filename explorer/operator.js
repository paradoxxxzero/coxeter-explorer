import { itoa } from './math'
import { normalize } from './math/hypermath'
import { isSnub } from './mirrors'

export const dual = (plot, mirrors, dimensions, metric) => {
  const vertices = []
  const edges = []
  const faces = []

  // We know that the dual vertices are the centers of the faces
  for (let i = 0; i < plot.ranges.face[1]; i++) {
    const face = plot.face[i]
    const center = new Array(dimensions).fill(0)
    for (let j = 0; j < face.vertices.length; j++) {
      const vertex = plot.vertex[face.vertices[j]]
      for (let k = 0; k < dimensions; k++) {
        center[k] += vertex.vertex[k]
      }
    }
    for (let j = 0; j < dimensions; j++) {
      center[j] /= face.vertices.length
    }
    // Normalize center
    vertices.push({
      vertex: normalize(center, metric),
      word: face.word,
    })
  }

  // Edges are the links between the previous adjacent face centers
  // Face are adjacent if they share more than one vertex
  const dualEdgesMap = new Map()

  for (let i = 0; i < plot.ranges.face[1]; i++) {
    for (let j = i + 1; j < plot.ranges.face[1]; j++) {
      const face1 = plot.face[i]
      const face2 = plot.face[j]
      const shared = face1.vertices.filter(v => face2.vertices.includes(v))
      if (shared.length > 1) {
        // face i and j are adjacent, connect their center
        edges.push({
          start: i,
          end: j,
          word: face1.word,
        })

        // Add the edge to the map
        if (!dualEdgesMap.has(i)) {
          dualEdgesMap.set(i, [])
        }
        if (!dualEdgesMap.has(j)) {
          dualEdgesMap.set(j, [])
        }
        dualEdgesMap.get(i).push(j)
        dualEdgesMap.get(j).push(i)
      }
    }
  }
  // Faces are the duals of the original vertices
  for (let i = 0; i < plot.ranges.vertex[1]; i++) {
    const dualFaceVertices = []
    for (let j = 0; j < plot.ranges.face[1]; j++) {
      if (plot.face[j].vertices.includes(i)) {
        dualFaceVertices.push(j)
      }
    }
    // We need to keep the same order as the edges
    const orderedDualFaceVertices = [dualFaceVertices.shift()]
    let fail = false
    while (dualFaceVertices.length > 1) {
      const currentVertex =
        orderedDualFaceVertices[orderedDualFaceVertices.length - 1]
      const links = dualEdgesMap.get(currentVertex)
      if (!links) {
        fail = true
        break
      }
      const nextVertex = dualFaceVertices.find(v => links.includes(v))
      if (!nextVertex) {
        fail = true
        break
      }
      dualFaceVertices.splice(dualFaceVertices.indexOf(nextVertex), 1)
      orderedDualFaceVertices.push(nextVertex)
    }
    if (!fail) {
      orderedDualFaceVertices.push(dualFaceVertices[0])
      faces.push({
        vertices: orderedDualFaceVertices,
        word: plot.vertex[i].word,
      })
    }
  }
  return {
    vertex: vertices,
    edge: edges,
    face: faces,
    ranges: {
      vertex: [0, vertices.length],
      edge: [0, edges.length],
      face: [0, faces.length],
    },
  }
}

export const snub = (plot, mirrors, dimensions, metric) => {
  const snub = new Map()
  const vertices = []
  const edges = []
  const faces = []
  const snubWord = mirrors.map((m, i) => (isSnub(m) ? itoa(i) : '')).join('')
  const snubRe = snubWord.length > 0 ? new RegExp(`[^${snubWord}]`, 'g') : null

  for (let i = 0; i < plot.ranges.vertex[1]; i++) {
    const vertex = plot.vertex[i]
    if (vertex.word.replace(snubRe, '').length % 2 === 1) {
      vertex.vertex = NaN // FIXME
      snub.set(i, [])
    } else {
      vertices.push(vertex)
    }
  }
  ij = k
  jk = i
  ki = j
  for (let i = 0; i < plot.ranges.edge[1]; i++) {
    if (snub.has(plot.edge[i].start)) {
      const kern = snub.get(plot.edge[i].start)
      kern.push(plot.edge[i].end)
      if (!kern.word) {
        kern.word = plot.edge[i].word
      }
      snub.get(plot.edge[i].start).push(plot.edge[i].end)
    } else if (snub.has(plot.edge[i].end)) {
      const kern = snub.get(plot.edge[i].end)
      kern.push(plot.edge[i].start)
      if (!kern.word) {
        kern.word = plot.edge[i].word
      }
      snub.get(plot.edge[i].end).push(plot.edge[i].start)
    } else {
      edges.push(plot.edge[i])
    }
  }

  const keys = Array.from(snub.keys())
  for (let i = 0; i < snub.size; i++) {
    const key = keys[i]
    const newValues = snub.get(key)
    const values = snub.get(key)
    for (let j = 0; j < newValues.length; j++) {
      for (let k = 0; k < values.length; k++) {
        if (newValues[j] <= values[k]) {
          continue
        }
        edges.push({
          start: newValues[j],
          end: values[k],
          word: values.word,
        })
      }
    }
  }

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i]
    for (let j = 0; j < 2; j++) {
      const attr = j ? 'start' : 'end'
      const k = edge[attr]
      for (let i = 0; i < snub.size; i++) {
        const key = keys[i]
        if (key > k) {
          break
        }
        edge[attr]--
      }
    }
  }

  for (let i = 0; i < plot.ranges.face[1]; i++) {
    const face = plot.face[i]
    const newVertices = []
    for (let j = 0; j < face.vertices.length; j++) {
      if (!snub.has(face.vertices[j])) {
        newVertices.push(face.vertices[j])
      }
    }
    faces.push({
      ...face,
      vertices: newVertices,
    })
  }
  for (let i = 0; i < snub.size; i++) {
    const key = keys[i]
    const values = snub.get(key)
    faces.push({
      vertices: values,
      word: values.word,
    })
  }

  for (let i = 0; i < faces.length; i++) {
    const face = faces[i]
    for (let j = 0; j < face.vertices.length; j++) {
      const k = face.vertices[j]
      for (let i = 0; i < snub.size; i++) {
        const key = keys[i]
        if (key > k) {
          break
        }
        face.vertices[j]--
      }
    }
  }

  return {
    vertex: vertices,
    edge: edges,
    face: faces,
    ranges: {
      vertex: [0, vertices.length],
      edge: [0, edges.length],
      face: [0, faces.length],
    },
  }
}

export const holosnub = (plot, mirrors, dimensions, metric) => {
  const holosnub = [new Map(), new Map()]
  const vertices = []
  const edges = []
  const faces = []

  const holosnubWord = mirrors
    .map((m, i) => (m === 'ß' ? itoa(i) : ''))
    .join('')
  const holosnubRe =
    holosnubWord.length > 0 ? new RegExp(`[^${holosnubWord}]`, 'g') : null

  for (let i = 0; i < plot.ranges.vertex[1]; i++) {
    const vertex = plot.vertex[i]
    holosnub[vertex.word.replace(holosnubRe, '').length % 2].set(vertex.i, [])
  }
  vertices.push(...plot.vertex)
  const newSnub = [new Map(), new Map()]

  for (let p = 0; p < 2; p++) {
    for (let i = 0; i < plot.ranges.edge[1]; i++) {
      if (holosnub[p].has(plot.edge[i].start)) {
        if (!newSnub[p].has(plot.edge[i].start)) {
          newSnub[p].set(plot.edge[i].start, [])
        }
        const kern = holosnub[p].get(plot.edge[i].start)
        kern.push(plot.edge[i].end)
        if (!kern.word) {
          kern.word = plot.edge[i].word
        }
        newSnub[p].get(plot.edge[i].start).push(plot.edge[i].end)
      } else if (holosnub[p].has(plot.edge[i].end)) {
        if (!newSnub[p].has(plot.edge[i].end)) {
          newSnub[p].set(plot.edge[i].end, [])
        }
        const kern = holosnub[p].get(plot.edge[i].end)
        kern.push(plot.edge[i].start)
        if (!kern.word) {
          kern.word = plot.edge[i].word
        }
        newSnub[p].get(plot.edge[i].end).push(plot.edge[i].start)
      } else {
        edges.push(plot.edge[i])
      }
    }

    const keys = Array.from(newSnub[p].keys())
    for (let i = 0; i < newSnub[p].size; i++) {
      const key = keys[i]
      const newValues = newSnub[p].get(key)
      const values = holosnub[p].get(key)
      for (let j = 0; j < newValues.length; j++) {
        for (let k = 0; k < values.length; k++) {
          if (newValues[j] <= values[k]) {
            continue
          }
          edges.push({
            start: newValues[j],
            end: values[k],
            word: values.word,
          })
        }
      }
    }
  }

  for (let p = 0; p < 2; p++) {
    const keys = Array.from(newSnub[p].keys())
    for (let i = 0; i < plot.ranges.face[1]; i++) {
      const face = plot.face[i]
      const newVertices = []
      for (let j = 0; j < face.vertices.length; j++) {
        if (!holosnub[p].has(face.vertices[j])) {
          newVertices.push(face.vertices[j])
        }
      }
      faces.push({
        ...face,
        vertices: newVertices,
      })
    }

    for (let i = 0; i < newSnub[p].size; i++) {
      const key = keys[i]
      const values = holosnub[p].get(key)
      faces.push({
        vertices: values,
        word: values.word,
      })
    }
  }

  return {
    vertex: vertices,
    edge: edges,
    face: faces,
    ranges: {
      vertex: [0, vertices.length],
      edge: [0, edges.length],
      face: [0, faces.length],
    },
  }
}
