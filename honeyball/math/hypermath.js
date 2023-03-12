import { C } from '../C.js'
import { abs, acos, cos, max, PI, sin, sqrt } from './index.js'

export const setCurvature = () => {
  if (C.dimensions === 3) {
    const anglesSum = 1 / C.p + 1 / C.q + 1 / C.r
    if (Math.abs(anglesSum - 1) < 1e-5) {
      C.curvature = 0
    } else if (anglesSum - 1 < 1e-5) {
      C.curvature = -1
    } else {
      C.curvature = 1
    }
  } else {
    C.curvature = -1
  }
}

export const dot = (v1, v2, forceCurvature = null) => {
  const c = forceCurvature === null ? C.curvature : forceCurvature
  let sum = 0
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i] * (i === v1.length - 1 ? c || 1 : 1)
  }
  return sum
}
export const reflect = (v, n) => {
  v = v.slice()
  const vn2 = 2 * dot(v, n)
  for (let i = 0; i < v.length; i++) {
    v[i] -= vn2 * (C.curvature || i !== v.length - 1 ? n[i] : 0)
  }
  return v
}

export const normalize = v => {
  v = v.slice()
  // if (v[v.length - 1] < 0) {
  //   for (let i = 0; i < v.length; i++) {
  //     v[i] *= -v[i]
  //   }
  // }
  if (C.curvature === 0) {
    for (let i = 0; i < v.length; i++) {
      v[i] /= v[v.length - 1]
    }
    return v
  }

  const nr =
    (C.curvature === -1 ? Math.sign(v[v.length - 1]) || 1 : 1) /
    sqrt(abs(dot(v, v)))
  for (let i = 0; i < v.length; i++) {
    v[i] *= nr
  }
  return v
}

export const poincare = v => {
  v = v.slice()
  const nr = 1 / (1 - C.curvature * v[v.length - 1])
  for (let i = 0; i < v.length - 1; i++) {
    v[i] *= nr
  }
  v.length--
  return v
}

export const slerp = (u, v, step) => {
  const o = Math.acos(dot(u, v))
  const n = Math.sin(o)
  if (n === 0) {
    return [u, v]
  }
  const vertices = [u]
  for (let i = step; i < 1; i += step) {
    const a = Math.sin((1 - i) * o) / n
    const b = Math.sin(i * o) / n
    vertices.push([
      u[0] * a + v[0] * b,
      u[1] * a + v[1] * b,
      u[2] * a + v[2] * b,
    ])
  }
  vertices.push(v)
  return vertices
}

export const hlerp = (u, v, step) => {
  const o = Math.acosh(-dot(u, v))
  const n = Math.sinh(o)
  if (n === 0) {
    return [u, v]
  }
  const vertices = [u]
  for (let i = step; i < 1; i += step) {
    const a = Math.sinh((1 - i) * o) / n
    const b = Math.sinh(i * o) / n
    const s = new Array(C.dimensions)
    for (let j = 0; j < C.dimensions; j++) {
      s[j] = u[j] * a + v[j] * b
    }
    vertices.push(s)
  }
  vertices.push(v)
  return vertices
}
export const xlerp = (u, v, curveStep) => {
  if (C.curvature > 0) {
    return slerp(u, v, curveStep)
  } else if (C.curvature < 0) {
    return hlerp(u, v, curveStep)
  } else {
    return [u, v]
  }
}

export const getFundamentalSimplexMirrors = () => {
  const { dimensions, p, q, r, s, t, u, curvature } = C
  const coxeter_matrix =
    dimensions === 3
      ? [
          [1, p, q],
          [p, 1, r],
          [q, r, 1],
        ]
      : dimensions === 4
      ? [
          [1, p, q, r],
          [p, 1, s, t],
          [q, s, 1, u],
          [r, t, u, 1],
        ]
      : null

  if (!coxeter_matrix) {
    throw new Error('Invalid dimension ' + dimensions)
  }

  const gram_matrix = coxeter_matrix.map(row =>
    row.map(column => -cos(PI / column))
  )

  const mirrors = new Array(dimensions)
    .fill()
    .map(() => new Array(dimensions).fill(0))

  mirrors[0][0] = 1
  mirrors[1][0] = gram_matrix[1][0]
  mirrors[1][1] = sqrt(1 - mirrors[1][0] * mirrors[1][0])
  mirrors[2][0] = gram_matrix[2][0]
  mirrors[2][1] =
    (gram_matrix[2][1] - mirrors[2][0] * mirrors[1][0]) / mirrors[1][1]
  mirrors[2][2] = sqrt(
    abs(1 - mirrors[2][0] * mirrors[2][0] - mirrors[2][1] * mirrors[2][1])
  )
  if (dimensions === 4) {
    mirrors[3][0] = gram_matrix[3][0]
    mirrors[3][1] =
      (gram_matrix[3][1] - mirrors[3][0] * mirrors[1][0]) / mirrors[1][1]
    mirrors[3][2] =
      (gram_matrix[3][2] -
        mirrors[3][0] * mirrors[2][0] -
        mirrors[3][1] * mirrors[2][1]) /
      mirrors[2][2]
    mirrors[3][3] = sqrt(
      abs(
        1 -
          mirrors[3][0] * mirrors[3][0] -
          mirrors[3][1] * mirrors[3][1] -
          mirrors[3][2] * mirrors[3][2]
      )
    )
  }
  mirrors[mirrors.length - 1][mirrors.length - 1] = curvature
    ? mirrors[mirrors.length - 1][mirrors.length - 1] * curvature
    : 1

  return mirrors
}

export const getFundamentalVertex = (mirrors, [x, y, z, w]) => {
  // solve mirrors for x,y,z,w
  const p = new Array(C.dimensions)
  p[0] = x
  p[1] = (y - mirrors[1][0] * p[0]) / mirrors[1][1]
  p[2] = (z - mirrors[2][0] * p[0] - mirrors[2][1] * p[1]) / mirrors[2][2]

  if (C.dimensions === 4) {
    p[3] =
      (w - mirrors[3][0] * p[0] - mirrors[3][1] * p[1] - mirrors[3][2] * p[2]) /
      mirrors[3][3]
  }
  p[p.length - 1] *= C.curvature || 1
  return normalize(p)
}
