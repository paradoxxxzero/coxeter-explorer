import { PI, TAU, cos, sin } from './math'

export const sphere = ({
  radius = 1,
  widthSegments = 16,
  segments = 16,
} = {}) => {
  const indices = []
  const vertices = []
  const normals = []
  const uvs = []

  let index = 0
  const grid = []

  for (let y = 0; y <= segments; y++) {
    const verticesRow = []
    const v = y / segments

    let uOffset = 0

    if (y === 0) {
      uOffset = 0.5 / widthSegments
    } else if (y === segments) {
      uOffset = -0.5 / widthSegments
    }

    for (let x = 0; x <= widthSegments; x++) {
      const u = x / widthSegments

      const vertex = [
        -radius * cos(u * TAU) * sin(v * PI),
        radius * cos(v * PI),
        radius * sin(u * TAU) * sin(v * PI),
      ]
      vertices.push(...vertex)
      const nr = (vertex[0] ** 2 + vertex[1] ** 2 + vertex[2] ** 2) ** -0.5
      normals.push(...vertex.map(v => v * nr))
      uvs.push(u + uOffset, 1 - v)

      verticesRow.push(index++)
    }

    grid.push(verticesRow)
  }

  // indices

  for (let y = 0; y < segments; y++) {
    for (let x = 0; x < widthSegments; x++) {
      const a = grid[y][x + 1]
      const b = grid[y][x]
      const c = grid[y + 1][x]
      const d = grid[y + 1][x + 1]

      if (y !== 0) {
        indices.push(a, b, d)
      }
      if (y !== segments - 1) {
        indices.push(b, c, d)
      }
    }
  }
  return {
    vertices,
    normals,
    uvs,
    indices,
  }
}

export const tube = ({
  radius = null,
  radiusTop = 1,
  radiusBottom = 1,
  height = 1,
  radialSegments = 8,
  segments = 1,
} = {}) => {
  const indices = []
  const vertices = []
  const normals = []
  const uvs = []

  if (radius !== null) {
    radiusTop = radius
    radiusBottom = radius
  }

  let index = 0
  const indexArray = []
  const halfHeight = height / 2
  const slope = (radiusBottom - radiusTop) / height

  for (let y = 0; y <= segments; y++) {
    const indexRow = []

    const v = y / segments
    const radius = v * (radiusBottom - radiusTop) + radiusTop

    for (let x = 0; x <= radialSegments; x++) {
      const u = x / radialSegments

      const theta = u * TAU

      const sinTheta = sin(theta)
      const cosTheta = cos(theta)

      // vertex
      const vertex = [
        radius * sinTheta,
        -v * height + halfHeight,
        radius * cosTheta,
      ]
      vertices.push(...vertex)
      const normal = [sinTheta, slope, cosTheta]

      const nr = (normal[0] ** 2 + normal[1] ** 2 + normal[2] ** 2) ** -0.5
      normals.push(...normal.map(v => v * nr))
      uvs.push(u, 1 - v)
      indexRow.push(index++)
    }

    indexArray.push(indexRow)
  }

  for (let x = 0; x < radialSegments; x++) {
    for (let y = 0; y < segments; y++) {
      const a = indexArray[y][x]
      const b = indexArray[y + 1][x]
      const c = indexArray[y + 1][x + 1]
      const d = indexArray[y][x + 1]

      indices.push(a, b, d)
      indices.push(b, c, d)
    }
  }
  return {
    vertices,
    normals,
    uvs,
    indices,
  }
}

export const tri = ({ segments = 3 } = {}) => {
  const indices = []
  const vertices = []
  const normals = []
  const uvs = []

  //       0
  //       /\          ----> x
  //    1 /__\ 2       |
  //     /\  /\        |
  //  3 /__\/__\ 5      v y
  //   /\  /4  /\
  //  /__\/__\/__\
  // ...   segments

  const part = 1 / segments
  for (let i = 0; i < segments + 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      vertices.push(((2 * j - i) * part) / 2, i * part, 0)
      normals.push(0, 0, 1)
      uvs.push(part * j, 1 - part * i)
    }
  }
  for (let i = 1; i < segments + 1; i++) {
    for (let j = 0; j < i; j++) {
      const k = (i * (i + 1)) / 2 + j

      // Up triangle
      const p = (i * (i - 1)) / 2 + j
      indices.push(k, p, k + 1)
      // Down triangle
      if (i < segments) {
        const n = ((i + 1) * (i + 2)) / 2 + j
        indices.push(n + 1, k, k + 1)
      }
    }
  }

  return {
    vertices,
    normals,
    uvs,
    indices,
  }
}
