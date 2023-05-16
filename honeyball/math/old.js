import { xdot } from './hypermath.js'
import { acos, acosh, sin, sinh, sqrt } from './index.js'

export const det = m => {
  if (m.length === 1) {
    return m[0][0]
  }
  let sum = 0
  for (let i = 0; i < m.length; i++) {
    const cofactor = new Array(m.length - 1)
      .fill()
      .map(() => new Array(m.length - 1).fill(0))
    // Compute the cofactor of m[0][i]:
    for (let j = 1; j < m.length; j++) {
      for (let k = 0; k < m.length; k++) {
        if (k < i) {
          cofactor[j - 1][k] = m[j][k]
        } else if (k > i) {
          cofactor[j - 1][k - 1] = m[j][k]
        }
      }
    }

    const sign = i % 2 === 0 ? 1 : -1
    sum += m[0][i] * sign * det(cofactor)
  }
  return sum
}
export const xcross = (v1, v2, v3, curvature) => {
  if (typeof v3 === 'number') {
    curvature = v3
    v3 = null
  }
  if (!v3) {
    const [x1, y1, z1] = v1
    const [x2, y2, z2] = v2
    return [
      y1 * z2 - y2 * z1,
      z1 * x2 - z2 * x1,
      (curvature || 1) * (x1 * y2 - x2 * y1),
    ]
  }
  const [x1, y1, z1, w1] = v1
  const [x2, y2, z2, w2] = v2
  const [x3, y3, z3, w3] = v3
  return [
    +y2 * z3 * w1 -
      y3 * z2 * w1 -
      y1 * z3 * w2 +
      y3 * z1 * w2 +
      w3 * y1 * z2 -
      w3 * y2 * z1,
    -x2 * z3 * w1 +
      x3 * z2 * w1 +
      x1 * z3 * w2 -
      x3 * z1 * w2 -
      w3 * x1 * z2 +
      w3 * x2 * z1,
    +x2 * y3 * w1 -
      x3 * y2 * w1 -
      x1 * y3 * w2 +
      x3 * y1 * w2 +
      w3 * x1 * y2 -
      w3 * x2 * y1,
    (curvature || 1) *
      (-x1 * y2 * z3 +
        x1 * y3 * z2 +
        x2 * y1 * z3 -
        x2 * y3 * z1 -
        x3 * y1 * z2 +
        x3 * y2 * z1),
  ]
}

export const xdistance = (v1, v2, curvature) => {
  if (curvature > 0) {
    return acos(xdot(v1, v2, curvature))
  }
  if (curvature < 0) {
    return acosh(-xdot(v1, v2, curvature))
  }
  return sqrt(xdot(v1, v2, curvature))
}
export const xproject = (v, projection, curvature) => {
  if (v.length === 3 && projection === 'stereographic') {
    return v
  }
  v = v.slice()
  if (projection === 'orthographic') {
    v[v.length - 1] = 0
    return v
  }

  const k =
    -curvature *
      {
        stereographic: 1,
        klein: 0,
        inverted: -1,
      }[projection] || 0

  const nr = 1 / (k + v[v.length - 1])
  for (let i = 0; i < v.length - 1; i++) {
    v[i] *= nr
  }
  v[v.length - 1] = ['jemisphere', 'upperhalf'].includes(projection)
    ? 1 / (1 + v[v.length - 1])
    : 0

  if (projection === 'upperhalf') {
    const nr2 = 2 / (1 + v[0])
    for (let i = 1; i < v.length; i++) {
      v[i - 1] = v[i] * nr2
    }
    if (v.length === 4) {
      v[2] *= -1
    }
    v[v.length - 1] = 0
  }

  return v
}

export const slerp = (u, v, step) => {
  const o = acos(xdot(u, v, 1))
  const n = sin(o)
  if (n === 0) {
    return []
  }

  const vertices = []
  for (let i = step; i < 1; i += step) {
    const a = sin((1 - i) * o) / n
    const b = sin(i * o) / n
    const s = new Array(u.length)
    for (let j = 0; j < u.length; j++) {
      s[j] = u[j] * a + v[j] * b
    }
    vertices.push(s)
  }
  return vertices
}

export const hlerp = (u, v, step) => {
  const o = acosh(-xdot(u, v, -1))
  const n = sinh(o)
  if (n === 0) {
    return []
  }
  const vertices = []
  for (let i = step; i < 1; i += step) {
    const a = sinh((1 - i) * o) / n
    const b = sinh(i * o) / n
    const s = new Array(u.length)
    for (let j = 0; j < u.length; j++) {
      s[j] = u[j] * a + v[j] * b
    }
    vertices.push(s)
  }
  return vertices
}
export const xlerp = (u, v, segments, curvature) => {
  const curveStep = 1 / segments
  if (curvature > 0) {
    return slerp(u, v, curveStep)
  } else if (curvature < 0) {
    return hlerp(u, v, curveStep)
  } else {
    return []
  }
}
