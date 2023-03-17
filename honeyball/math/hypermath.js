import { C } from '../C.js'
import { abs, acos, acosh, cos, sign, sin, sinh, sqrt } from './index.js'
import { R } from '../R'

export const det = m => {
  if (m.length === 3) {
    return (
      m[0][0] * m[1][1] * m[2][2] +
      m[0][1] * m[1][2] * m[2][0] +
      m[0][2] * m[1][0] * m[2][1] -
      m[0][2] * m[1][1] * m[2][0] -
      m[0][1] * m[1][0] * m[2][2] -
      m[0][0] * m[1][2] * m[2][1]
    )
  } else if (m.length === 4) {
    return (
      m[0][0] *
        (m[1][1] * m[2][2] * m[3][3] +
          m[1][2] * m[2][3] * m[3][1] +
          m[1][3] * m[2][1] * m[3][2] -
          m[1][3] * m[2][2] * m[3][1] -
          m[1][2] * m[2][1] * m[3][3] -
          m[1][1] * m[2][3] * m[3][2]) +
      m[0][1] *
        (m[1][0] * m[2][3] * m[3][2] +
          m[1][2] * m[2][0] * m[3][3] +
          m[1][3] * m[2][2] * m[3][0] -
          m[1][3] * m[2][0] * m[3][2] -
          m[1][2] * m[2][3] * m[3][0] -
          m[1][0] * m[2][2] * m[3][3]) +
      m[0][2] *
        (m[1][0] * m[2][1] * m[3][3] +
          m[1][1] * m[2][3] * m[3][0] +
          m[1][3] * m[2][0] * m[3][1] -
          m[1][3] * m[2][1] * m[3][0] -
          m[1][1] * m[2][0] * m[3][3] -
          m[1][0] * m[2][3] * m[3][1]) +
      m[0][3] *
        (m[1][0] * m[2][2] * m[3][1] +
          m[1][1] * m[2][0] * m[3][2] +
          m[1][2] * m[2][1] * m[3][0] -
          m[1][2] * m[2][0] * m[3][1] -
          m[1][1] * m[2][2] * m[3][0] -
          m[1][0] * m[2][1] * m[3][2])
    )
  }
}

export const getCurvature = gram => {
  const determinant = det(gram)
  return abs(determinant) < 1e-8 ? 0 : sign(determinant)
}

export const xdot = (v1, v2, forceCurvature = null) => {
  const c = forceCurvature === null ? R.curvature : forceCurvature
  let sum = 0
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i] * (i === v1.length - 1 ? c || 1 : 1)
  }
  return sum
}

export const xdistance = (v1, v2) => {
  if (R.curvature > 0) {
    return acos(xdot(v1, v2))
  }
  if (R.curvature < 0) {
    return acosh(-xdot(v1, v2))
  }
  return sqrt(xdot(v1, v2))
}

export const reflect = (v, n) => {
  v = v.slice()
  const vn2 = 2 * xdot(v, n)
  for (let i = 0; i < v.length; i++) {
    v[i] -= vn2 * (R.curvature || i !== v.length - 1 ? n[i] : 0)
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
  if (R.curvature === 0) {
    for (let i = 0; i < v.length; i++) {
      v[i] /= v[v.length - 1]
    }
    return v
  }

  const nr =
    (R.curvature === -1 ? sign(v[v.length - 1]) || 1 : 1) /
    sqrt(abs(xdot(v, v)))
  for (let i = 0; i < v.length; i++) {
    v[i] *= nr
  }
  return v
}

export const poincare = v => {
  v = v.slice()
  const nr = 1 / (1 - R.curvature * v[v.length - 1])
  for (let i = 0; i < v.length - 1; i++) {
    v[i] *= nr
  }
  v.length--
  return v
}

export const slerp = (u, v, step) => {
  const o = acos(xdot(u, v))
  const n = sin(o)
  if (n === 0) {
    return []
  }

  const vertices = []
  for (let i = step; i < 1; i += step) {
    const a = sin((1 - i) * o) / n
    const b = sin(i * o) / n
    const s = new Array(C.dimensions)
    for (let j = 0; j < C.dimensions; j++) {
      s[j] = u[j] * a + v[j] * b
    }
    vertices.push(s)
  }
  return vertices
}

export const hlerp = (u, v, step) => {
  const o = acosh(-xdot(u, v))
  const n = sinh(o)
  if (n === 0) {
    return []
  }
  const vertices = []
  for (let i = step; i < 1; i += step) {
    const a = sinh((1 - i) * o) / n
    const b = sinh(i * o) / n
    const s = new Array(C.dimensions)
    for (let j = 0; j < C.dimensions; j++) {
      s[j] = u[j] * a + v[j] * b
    }
    vertices.push(s)
  }
  return vertices
}
export const xlerp = (u, v) => {
  if (C.segments === 0 || !C.curve) {
    return []
  }
  const curveStep = 1 / C.segments
  if (R.curvature > 0) {
    return slerp(u, v, curveStep)
  } else if (R.curvature < 0) {
    return hlerp(u, v, curveStep)
  } else {
    return []
  }
}

export const xrotate = (vertex, theta) => {
  // Rotation is the same as in euclidean space
  const [x, y] = vertex
  const c = cos(theta)
  const s = sin(theta)
  vertex[0] = x * c - y * s
  vertex[1] = x * s + y * c
}

export const xscale = (vertex, scale) => {
  const [xe, ye, ze] = vertex
  const nr = scale / sqrt(xe * xe + ye * ye + ze * ze)
  if (R.curvature !== 0) {
    const offset = [vertex[0] * nr, -vertex[1] * nr, vertex[2] * nr]
    xtranslate(vertex, offset)
  } else {
    vertex[0] = xe * (1 - scale)
    vertex[1] = ye * (1 - scale)
    vertex[2] = ze * (1 - scale)
  }
}

// 3D:
// Rx | 1  0       0       |
//    | 0  cos(o)  -sin(o) |
//    | 0  sin(o)  cos(o)  |
//
// Ry | cos(p)  0  sin(p)  |
//    | 0       1  0       |
//    | -sin(p) 0  cos(p)  |

// Rx * Ry | cos(p)   sin(o) * sin(p)  cos(o) * sin(p) |
//         | 0        cos(o)           -sin(o)         |
//         | -sin(p)  sin(o) * cos(p)  cos(o) * cos(p) |

// Rx * Ry * v = | cos(p) * x + sin(o) * sin(p) * y + cos(o) * sin(p) * z  |
//               | cos(o) * y - sin(o) * z                                 |
//               | -sin(p) * x + sin(o) * cos(p) * y + cos(o) * cos(p) * z |

export const xtranslate = (vertex, offset) => {
  const [x, y, z] = vertex
  const [xt, yt, zt] = offset

  const cosp = sqrt(1 - R.curvature * xt * xt) // cosh?(asinh?(xt))
  const coso = sqrt(1 - R.curvature * yt * yt) // cosh?(asinh?(yt))
  const cosi = sqrt(1 - R.curvature * zt * zt) // cosh?(asinh?(yt))
  const sinp = xt // sinh?(asinh?(xt))
  const sino = yt // sinh?(asinh?(yt))
  const sini = zt // sinh?(asinh?(yt))

  if (R.curvature !== 0) {
    const b = y * sino + z * coso
    vertex[0] = cosp * x + R.curvature * b * sinp
    vertex[1] = y * coso - R.curvature * z * sino
    vertex[2] = -sinp * x + b * cosp
    if (C.dimensions === 4) {
      vertex[3] = z - zt
    }
  } else {
    vertex[0] = x - xt
    vertex[1] = y + yt
    if (C.dimensions === 4) {
      vertex[2] = z - zt
    }
  }
}

export const getFundamentalSimplexMirrors = gram => {
  const mirrors = new Array(C.dimensions)
    .fill()
    .map(() => new Array(C.dimensions).fill(0))

  mirrors[0][0] = 1
  mirrors[1][0] = gram[1][0]
  mirrors[1][1] = sqrt(1 - mirrors[1][0] * mirrors[1][0])
  mirrors[2][0] = gram[2][0]
  mirrors[2][1] = (gram[2][1] - mirrors[2][0] * mirrors[1][0]) / mirrors[1][1]
  mirrors[2][2] = sqrt(
    abs(1 - mirrors[2][0] * mirrors[2][0] - mirrors[2][1] * mirrors[2][1])
  )
  if (C.dimensions === 4) {
    mirrors[3][0] = gram[3][0]
    mirrors[3][1] = (gram[3][1] - mirrors[3][0] * mirrors[1][0]) / mirrors[1][1]
    mirrors[3][2] =
      (gram[3][2] -
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
  mirrors[mirrors.length - 1][mirrors.length - 1] = R.curvature
    ? mirrors[mirrors.length - 1][mirrors.length - 1] * R.curvature
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
  p[p.length - 1] *= R.curvature || 1
  return normalize(p)
}
