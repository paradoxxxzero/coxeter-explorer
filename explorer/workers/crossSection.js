import { types } from '../../statics'
import { hashV, sqrt } from '../math'
import { dot, mulV, subV } from '../math/matrix'

export const slice = (start, end, { p, normal }) => {
  // Now find the segment vector
  // segment = start + t * (end - start)
  // segment . normal = d
  // p . normal = d
  // segment . normal = p . normal
  // t = (p - start) . normal / (end - start) . normal
  const t = dot(subV(p, start), normal) / dot(subV(end, start), normal)
  if (t < 0 || t > 1) {
    return
  }
  const vertex = []
  for (let i = 0; i < start.length; i++) {
    vertex.push(start[i] + t * (end[i] - start[i]))
  }
  // TODO: handle normalization?
  return vertex
}

export const getSliceObjects = (rank, cut, obj, polytope) => {
  const sections = []
  const sectionPartials = []

  if (rank === 0) {
    for (let k = 0; k < obj.length; k++) {
      const edge = obj[k]
      const { vertices, partial } = edge
      const vertex = slice(vertices[0], vertices[1], cut)
      if (!vertex) {
        continue
      }

      const object = {
        ...edge,
        vertices: [vertex],
      }

      if (partial) {
        sectionPartials.push(object)
      } else {
        sections.push(object)
      }
    }
  } else if (rank === 1) {
    if (!polytope.root.crossEdges) {
      polytope.root.crossEdges = new Map()
    }

    for (let k = 0; k < obj.length; k++) {
      const face = obj[k]
      const edge = []
      const hashes = []
      for (let l = 0; l < face.vertices.length; l++) {
        const v1 = face.vertices[l]
        const v2 = face.vertices[(l + 1) % face.vertices.length]
        const vertex = slice(v1, v2, cut)
        if (!vertex) {
          continue
        }
        hashes.push(hashV([v1, v2]))
        edge.push(vertex)
      }
      if (edge.length < 2) {
        continue
      }
      if (!face.partial) {
        for (let l = 0; l < 2; l++) {
          if (!polytope.root.crossEdges.has(hashes[l])) {
            polytope.root.crossEdges.set(
              hashes[l],
              new Set([hashes[(l + 1) % 2]])
            )
          } else {
            polytope.root.crossEdges.get(hashes[l]).add(hashes[(l + 1) % 2])
          }
        }
      }

      const object = {
        ...face,
        vertices: edge,
      }

      if (face.partial) {
        sectionPartials.push(object)
      } else {
        sections.push(object)
      }
    }
  } else if (rank === 2) {
    if (!polytope.root.unfinishedCells) {
      polytope.root.unfinishedCells = new Map()
    }
    const allObjects = [
      ...obj,
      ...Array.from(polytope.root.unfinishedCells.values()),
    ]
    for (let k = 0; k < allObjects.length; k++) {
      const cell = allObjects[k]
      const face = []
      const hashes = []
      for (let l = 0; l < cell.vertices.length; l++) {
        for (let m = l + 1; m < cell.vertices.length; m++) {
          const eHash = hashV([cell.vertices[l], cell.vertices[m]])
          if (polytope.root.crossEdges.has(eHash)) {
            const vertex = slice(cell.vertices[l], cell.vertices[m], cut)
            if (!vertex) {
              continue
            }
            hashes.push([eHash, polytope.root.crossEdges.get(eHash)])
            face.push(vertex)
          }
        }
      }

      if (face.length < 3) {
        if (!polytope.root.unfinishedCells.has(cell.word) && !cell.partial) {
          polytope.root.unfinishedCells.set(cell.word, cell)
        }
        continue
      }
      // Reoerder vertices
      const order = [0]
      let nextHashes = hashes[0][1]

      for (let l = 0; l < hashes.length; l++) {
        for (let m = 0; m < hashes.length; m++) {
          if (order.includes(m)) {
            continue
          }
          if (nextHashes.has(hashes[m][0])) {
            order.push(m)
            nextHashes = hashes[m][1]
            break
          }
        }
      }
      let partial = cell.partial
      if (order.length < face.length) {
        partial = true
        if (!polytope.root.unfinishedCells.has(cell.word) && !cell.partial) {
          polytope.root.unfinishedCells.set(cell.word, cell)
        }
      } else {
        polytope.root.unfinishedCells.delete(cell.word)
      }
      const vertices = []
      for (let l = 0; l < order.length; l++) {
        vertices.push(face[order[l]])
      }

      const object = {
        ...cell,
        vertices,
        partial,
      }
      if (partial) {
        sectionPartials.push(object)
      } else {
        sections.push(object)
      }
    }
  }
  return { sections, sectionPartials }
}

export const crossSection = (polytope, objects, section, draw) => {
  // The section is defined by the normal and the distance from the origin
  const vector = section.slice(0, -1)
  const d = section[section.length - 1]

  const normal = mulV(vector, 1 / sqrt(dot(vector, vector)))
  // Let's find the closest point to the origin on the plane
  const p = mulV(normal, d)
  const cut = { p, normal }

  const crossSection = []
  for (let i = 0; i < 3; i++) {
    const parts = objects[i + 1]
    if (!parts) {
      crossSection.push(null)
      continue
    }

    const crossParts = {
      start: polytope.root.lasts[i],
      size: 0,
      objects: [],
      partials: [],
    }

    // Transform the edges into vertices
    const allObjects = parts.objects.concat(parts.partials)
    for (let j = 0; j < allObjects.length; j++) {
      const obj = allObjects[j] || []

      const { sections, sectionPartials } = getSliceObjects(
        i,
        cut,
        obj,
        polytope
      )
      if (draw[types[i]]) {
        crossParts.objects.push(sections)
        crossParts.size += sections.length + sectionPartials.length
        crossParts.partials.push(sectionPartials)
      }
    }
    crossSection.push(crossParts)
  }
  return crossSection
}
