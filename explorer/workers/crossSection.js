export const slice = (start, end, cut) => {
  const idx = start.length - 1
  if ((cut - start[idx]) * (cut - end[idx]) >= 0) {
    return
  }
  const t = (cut - start[idx]) / (end[idx] - start[idx])
  const vertex = []
  for (let i = 0; i < start.length; i++) {
    vertex.push(start[i] + t * (end[i] - start[i]))
  }
  // TODO: normalize
  return vertex
}

export const sliceDimension = (i, obj, cut) => {
  if (i === 0) {
    return sliceEdge(obj, cut)
  } else if (i === 1) {
    return sliceFace(obj, cut)
  }
}

export const sliceEdge = (obj, cut) => {
  const sections = []
  const sectionPartials = []

  for (let k = 0; k < obj.length; k++) {
    const edge = obj[k]
    const vertex = slice(edge.vertices[0], edge.vertices[1], cut)
    if (!vertex) {
      continue
    }
    ;(edge.partial ? sectionPartials : sections).push({
      ...edge,
      vertices: [vertex],
    })
  }
  return { sections, sectionPartials }
}

export const sliceFace = (obj, cut) => {
  const sections = []
  const sectionPartials = []

  for (let k = 0; k < obj.length; k++) {
    const face = obj[k]
    const edges = []
    for (let l = 0; l < face.vertices.length; l++) {
      const vertex = slice(
        face.vertices[l],
        face.vertices[(l + 1) % face.vertices.length],
        cut
      )
      if (!vertex) {
        continue
      }
      edges.push(vertex)
    }
    if (edges.length === 2) {
      ;(face.partial ? sectionPartials : sections).push({
        ...face,
        vertices: edges,
      })
    }
  }
  return { sections, sectionPartials }
}

export const crossSection = (polytope, objects, cut) => {
  if (!polytope.root.lastSections) {
    polytope.root.lastSections = new Array(3).fill(0)
  }
  const crossSection = []
  for (let i = 0; i < 3; i++) {
    const parts = objects[i + 1]
    if (!parts) {
      crossSection.push(null)
      continue
    }

    const crossParts = {
      start: polytope.root.lastSections[i],
      size: 0,
      objects: [],
      partials: [],
    }

    // Transform the edges into vertices
    const allObjects = parts.objects.concat(parts.partials)
    for (let j = 0; j < allObjects.length; j++) {
      const obj = allObjects[j]
      if (!obj) {
        crossParts.objects.push(null)
        crossParts.partials.push(null)
        continue
      }
      const { sections, sectionPartials } = sliceDimension(i, obj, cut)

      crossParts.objects.push(sections)
      crossParts.size += sections.length + sectionPartials.length
      polytope.root.lastSections[i] += sections.length
      crossParts.partials.push(sectionPartials)
    }
    crossSection.push(crossParts)
  }
  return crossSection
}
