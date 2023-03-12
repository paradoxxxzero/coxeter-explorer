import { C } from '../C.js'
import { abs, acos, cos, max, PI, sin, sqrt } from './index.js'

export const det = gram => {
  if (gram.length === 3) {
    return (
      gram[0][0] * gram[1][1] * gram[2][2] +
      gram[0][1] * gram[1][2] * gram[2][0] +
      gram[0][2] * gram[1][0] * gram[2][1] -
      gram[0][2] * gram[1][1] * gram[2][0] -
      gram[0][1] * gram[1][0] * gram[2][2] -
      gram[0][0] * gram[1][2] * gram[2][1]
    )
  } else if (gram.length === 4) {
    return (
      gram[0][0] *
        (gram[1][1] * gram[2][2] * gram[3][3] +
          gram[1][2] * gram[2][3] * gram[3][1] +
          gram[1][3] * gram[2][1] * gram[3][2] -
          gram[1][3] * gram[2][2] * gram[3][1] -
          gram[1][2] * gram[2][1] * gram[3][3] -
          gram[1][1] * gram[2][3] * gram[3][2]) +
      gram[0][1] *
        (gram[1][0] * gram[2][3] * gram[3][2] +
          gram[1][2] * gram[2][0] * gram[3][3] +
          gram[1][3] * gram[2][2] * gram[3][0] -
          gram[1][3] * gram[2][0] * gram[3][2] -
          gram[1][2] * gram[2][3] * gram[3][0] -
          gram[1][0] * gram[2][2] * gram[3][3]) +
      gram[0][2] *
        (gram[1][0] * gram[2][1] * gram[3][3] +
          gram[1][1] * gram[2][3] * gram[3][0] +
          gram[1][3] * gram[2][0] * gram[3][1] -
          gram[1][3] * gram[2][1] * gram[3][0] -
          gram[1][1] * gram[2][0] * gram[3][3] -
          gram[1][0] * gram[2][3] * gram[3][1]) +
      gram[0][3] *
        (gram[1][0] * gram[2][2] * gram[3][1] +
          gram[1][1] * gram[2][0] * gram[3][2] +
          gram[1][2] * gram[2][1] * gram[3][0] -
          gram[1][2] * gram[2][0] * gram[3][1] -
          gram[1][1] * gram[2][2] * gram[3][0] -
          gram[1][0] * gram[2][1] * gram[3][2])
    )
  }
}

export const getCurvature = gram => {
  const determinant = det(gram)
  return abs(determinant) < 1e-8 ? 0 : Math.sign(determinant)
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
    const s = new Array(C.dimensions)
    for (let j = 0; j < C.dimensions; j++) {
      s[j] = u[j] * a + v[j] * b
    }
    vertices.push(s)
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
  const { dimensions, curvature } = C

  const mirrors = new Array(dimensions)
    .fill()
    .map(() => new Array(dimensions).fill(0))

  mirrors[0][0] = 1
  mirrors[1][0] = C.gram[1][0]
  mirrors[1][1] = sqrt(1 - mirrors[1][0] * mirrors[1][0])
  mirrors[2][0] = C.gram[2][0]
  mirrors[2][1] = (C.gram[2][1] - mirrors[2][0] * mirrors[1][0]) / mirrors[1][1]
  mirrors[2][2] = sqrt(
    abs(1 - mirrors[2][0] * mirrors[2][0] - mirrors[2][1] * mirrors[2][1])
  )
  if (dimensions === 4) {
    mirrors[3][0] = C.gram[3][0]
    mirrors[3][1] =
      (C.gram[3][1] - mirrors[3][0] * mirrors[1][0]) / mirrors[1][1]
    mirrors[3][2] =
      (C.gram[3][2] -
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
