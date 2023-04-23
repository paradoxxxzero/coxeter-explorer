import { abs, acos, acosh, cos, sign, sin, sinh, sqrt } from './index.js'

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

export const getCurvature = gram => {
  const determinant = det(gram)
  return abs(determinant) < 1e-8 ? 0 : sign(determinant)
}
export const xdot = (v1, v2, curvature) => {
  let sum = 0
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i] * (i === v1.length - 1 ? curvature || 1 : 1)
  }
  return sum
}

// Unused
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

export const reflect = (v, n, curvature) => {
  v = v.slice()
  const vn2 = 2 * xdot(v, n, curvature)
  for (let i = 0; i < v.length; i++) {
    v[i] -= vn2 * (curvature || i !== v.length - 1 ? n[i] : 0)
  }
  return v
}

export const normalize = (v, curvature) => {
  v = v.slice()
  // if (v[v.length - 1] < 0) {
  //   for (let i = 0; i < v.length; i++) {
  //     v[i] *= -v[i]
  //   }
  // }
  if (curvature === 0) {
    for (let i = 0; i < v.length; i++) {
      v[i] /= v[v.length - 1]
    }
    return v
  }

  const nr =
    (curvature === -1 ? sign(v[v.length - 1]) || 1 : 1) /
    sqrt(abs(xdot(v, v, curvature)))
  for (let i = 0; i < v.length; i++) {
    v[i] *= nr
  }
  return v
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

export const xrotate = (vertex, theta) => {
  const [x, y] = vertex
  // Rz / Rzw / Rzwv Rotation:
  const cosx = cos(theta)
  const sinx = sin(theta)
  vertex[0] = x * cosx - y * sinx
  vertex[1] = x * sinx + y * cosx
  // vertex[2] = z
  // vertex[3] = w
  // vertex[4] = v
}

export const xscale = (vertex, scale, curvature) => {
  if (curvature !== 0) {
    const nr = scale / sqrt(xdot(vertex, vertex, 1))

    const offset = new Array(vertex.length - 1)
    for (let i = 0; i < vertex.length - 1; i++) {
      offset[i] = vertex[i] * nr
    }
    xtranslate(vertex, offset, curvature)
  } else {
    for (let i = 0; i < vertex.length; i++) {
      vertex[i] *= 1 - scale
    }
  }
}

// cos† means cos in spherical coordinates and cosh in hyperbolic coordinates
// ± means - in spherical coordinates and + in hyperbolic coordinates

// 3D:
// Rx | 1  0         0       |
//    | 0  cos†(x)  ±sin†(x) |
//    | 0  sin†(x)   cos†(x) |

// Ry |  cos†(y)  0  sin†(y) |
//    |  0        1  0       |
//    | ±sin†(y)  0  cos†(y) |

// Rz | cos(z)  -sin(z)  0 |
//    | sin(z)   cos(z)  0 |
//    | 0        0       1 |

// Let't rotate x and y (z is handled in xrotate):
// Rx * Ry:
//   |  cos†(y)   sin†(x) * sin†(y)   cos†(x) * sin†(y) |
//   |  0         cos†(x)            ±sin†(x)           |
//   | ±sin†(y)   sin†(x) * cos†(y)   cos†(x) * cos†(y) |

// Rx * Ry * v:
//   |  cos†(y) * x + sin†(x) * sin†(y) * y + cos†(x) * sin†(y) * z |
//   |  cos†(x) * y                         ± sin†(x)           * z |
//   | ±sin†(y) * x + sin†(x) * cos†(y) * y + cos†(x) * cos†(y) * z |

// 4D:

// Rxy | 1  0  0          0        |
//     | 0  1  0          0        |
//     | 0  0  cos†(xy)  ±sin†(xy) |
//     | 0  0  sin†(xy)   cos†(xy) |

// Rxz | 1  0         0   0        |
//     | 0  cos†(xz)  0  ±sin†(xz) |
//     | 0  0         1   0        |
//     | 0  sin†(xz)  0   cos†(xz) |

// Ryz | cos†(yz)  0  0  ±sin†(yz) |
//     | 0         1  0   0        |
//     | 0         0  1   0        |
//     | sin†(yz)  0  0   cos†(yz) |

// Rxw | 1  0         0        0 |
//     | 0  cos(xw)  -sin(xw)  0 |
//     | 0  sin(xw)   cos(xw)  0 |
//     | 0  0          0       1 |

// Ryw | cos(yw)  0  -sin(yw)  0 |
//     | 0        1   0        0 |
//     | sin(yw)  0   cos(yw)  0 |
//     | 0        0   0        1 |

// Rzw | cos(zw)  -sin(zw)  0  0 |
//     | sin(zw)   cos(zw)  0  0 |
//     | 0         0        1  0 |
//     | 0         0        0  1 |

// So let's rotate either xz and yz or xw and yw:
// Logically xy and xz should be handled in xrotate

// Rxz * Ryz:
//   |  cos†(yz)             0         0  ±sin†(yz)            |
//   | ±sin†(xz) * sin†(yz)  cos†(xz)  0  ±sin†(xz) * cos†(yz) |
//   |  0                    0         1   0                   |
//   |  cos†(xz) * sin†(yz)  sin†(xz)  0   cos†(xz) * cos†(yz) |

// Rxz * Ryz * v:
//   |  cos†(yz)            * x                ± sin†(yz)            * w |
//   | ±sin†(xz) * sin†(yz) * x + cos†(xz) * y ± sin†(xz) * cos†(yz) * w |
//   |  z                                                                |
//   |  cos†(xz) * sin†(yz) * x + sin†(xz) * y + cos†(xz) * cos†(yz) * w |

// Rxw * Ryw:
//   |  cos(yw)            0        -sin(yw)          0 |
//   | -sin(xw) * sin(yw)  cos(xw)  -sin(xw) cos(yw)  0 |
//   |  cos(xw) * sin(yw)  sin(xw)   cos(xw) cos(yw)  0 |
//   |  0                  0         0                1 |

// Rxw * Ryw * v:
//   |  cos(yw)           * x               - sin(yw)           * z |
//   | -sin(xw) * sin(yw) * x + cos(xw) * y - sin(xw) * cos(yw) * z |
//   |  cos(xw) * sin(yw) * x + sin(xw) * y + cos(xw) * cos(yw) * z |
//   |  w                                                           |

// Rxy * Rxz * Ryz:
//   |  cos†(yz)                         0                     0        ±sin†(yz)                       |
//   | ±sin†(yz) * sin†(xz)              cos†(xz)              0        ±sin†(xz) * cos†(yz)            |
//   | ±sin†(yz) * sin†(xy) * cos†(xz)  ±sin†(xz) * sin†(xy)  cos†(xy)  ±sin†(xy) * cos†(xz) * cos†(yz) |
//   |  sin†(yz) * cos†(xy) * cos†(xz)   sin†(xz) * cos†(xy)  sin†(xy)   cos†(xy) * cos†(xz) * cos†(yz) |

// Rxy * Rxz * Ryz * v:
//   |  cos†(yz)                       * x                                          ± sin†(yz)                       * w |
//   | ±sin†(yz) * sin†(xz)            * x + cos†(xz)            * y                ± sin†(xz) * cos†(yz)            * w |
//   | ±sin†(yz) * sin†(xy) * cos†(xz) * x + sin†(xz) * sin†(xy) * y + cos†(xy) * z ± sin†(xy) * cos†(xz) * cos†(yz) * w |
//   |  sin†(yz) * cos†(xy) * cos†(xz) * x + cos†(xy) * cos†(xz) * y + sin†(xy) * z   cos†(xy) * cos†(xz) * cos†(yz) * w |

// 5D:

// Rxyz | 1  0  0  0           0         |
//      | 0  1  0  0           0         |
//      | 0  0  1  0           0         |
//      | 0  0  0  cos†(xyz)  ±sin†(xyz) |
//      | 0  0  0  sin†(xyz)   cos†(xyz) |

// Rxyw | 1  0  0          0   0         |
//      | 0  1  0          0   0         |
//      | 0  0  cos†(xyw)  0  ±sin†(xyw) |
//      | 0  0  0          1   0         |
//      | 0  0  sin†(xyw)  0   cos†(xyw) |

// Rxzw | 1  0          0  0   0         |
//      | 0  cos†(xzw)  0  0  ±sin†(xzw) |
//      | 0  0          1  0   0         |
//      | 0  0          0  1   0         |
//      | 0  sin†(xzw)  0  0   cos†(xzw) |

// Ryzw | cos†(yzw)  0  0  0  ±sin†(yzw) |
//      | 0          1  0  0   0         |
//      | 0          0  1  0   0         |
//      | 0          0  0  1   0         |
//      | sin†(yzw)  0  0  0   cos†(yzw) |

// Rxyv | 1  0  0          0         0 |
//      | 0  1  0          0         0 |
//      | 0  0  cos(xyv)  -sin(xyv)  0 |
//      | 0  0  sin(xyv)   cos(xyv)  0 |
//      | 0  0  0          0         1 |

// Rxzv | 1  0         0   0         0 |
//      | 0  cos(xzv)  0  -sin(xzv)  0 |
//      | 0  0         1   0         0 |
//      | 0  sin(xzv)  0   cos(xzv)  0 |
//      | 0  0         0   0         1 |

// Ryzv | cos(yzv)  0  0  -sin(yzv)  0 |
//      | 0         1  0   0         0 |
//      | 0         0  1   0         0 |
//      | sin(yzv)  0  0   cos(yzv)  0 |
//      | 0         0  0   0         1 |

// Rxwv | 1  0          0         0  0 |
//      | 0  cos(xwv)  -sin(xwv)  0  0 |
//      | 0  sin(xwv)   cos(xwv)  0  0 |
//      | 0  0          0         1  0 |
//      | 0  0          0         0  1 |

// Rywv | cos(ywv)  0  -sin(ywv)  0  0 |
//      | 0         1   0         0  0 |
//      | sin(ywv)  0   cos(ywv)  0  0 |
//      | 0         0   0         1  0 |
//      | 0         0   0         0  1 |

// Rzwv | cos(zwv)  -sin(zwv)  0  0  0 |
//      | sin(zwv)   cos(zwv)  0  0  0 |
//      | 0          0         1  0  0 |
//      | 0          0         0  1  0 |
//      | 0          0         0  0  1 |

const nxrotate = (vertex, offset, curvature) => {
  // For now consider only rotations that change the time-wise dimension
  // So offset is the list of rotation like these:
  // 3D
  // [xt, yt] -> [Ry, Rx] (Rz keeps the z axis fixed)
  // 4D
  // [xt, yt, zt] -> [Ryz, Rxz, Rxy] (Rxw, Ryw, Rzw keep the w axis fixed)
  // 5D
  // [xt, yt, zt, wt] -> [Ryzw, Rxzw, Rxyw, Rxyz] (Rxyv, Rxzv, Ryzv, Rxwv, Rywv, Rzwv keep the v axis fixed)
  const d = vertex.length
  const c = curvature
  for (let i = 0; i < d - 1; i++) {
    const t = offset[i]
    if (t !== 0) {
      // i === 0 => x should rotate so Ry, Ryz, Ryzw, Ryzwv, Ryzwvu...

      // cost is cosh(asinh(t)) if c === -1
      // cost is cos(asin(t)) if c === 1
      const cost = sqrt(1 - c * t * t)
      const sint = t

      let vi = vertex[i]
      let vh = vertex[d - 1]
      vertex[i] = cost * vi + -c * sint * vh
      vertex[d - 1] = sint * vi + cost * vh
    }
  }
}

// prettier-ignore
export const xtranslate = (vertex, offset, curvature) => {
  if (curvature === 0) {
    for (let i = 0; i < offset.length; i++) {
      vertex[i] += offset[i]
    }
  } else {
    nxrotate(vertex, offset, curvature)
  }
}

export const getFundamentalSimplexMirrors = (gram, curvature) => {
  const dimensions = gram[0].length
  const mirrors = new Array(dimensions)
    .fill()
    .map(() => new Array(dimensions).fill(0))

  mirrors[0][0] = 1

  mirrors[1][0] = gram[1][0]
  mirrors[1][1] = sqrt(abs(1 - mirrors[1][0] * mirrors[1][0]))

  mirrors[2][0] = gram[2][0]
  mirrors[2][1] = (gram[2][1] - mirrors[2][0] * mirrors[1][0]) / mirrors[1][1]
  mirrors[2][2] = sqrt(
    abs(1 - mirrors[2][0] * mirrors[2][0] - mirrors[2][1] * mirrors[2][1])
  )
  if (dimensions >= 4) {
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
  if (dimensions >= 5) {
    mirrors[4][0] = gram[4][0]
    mirrors[4][1] = (gram[4][1] - mirrors[4][0] * mirrors[1][0]) / mirrors[1][1]
    mirrors[4][2] =
      (gram[4][2] -
        mirrors[4][0] * mirrors[2][0] -
        mirrors[4][1] * mirrors[2][1]) /
      mirrors[2][2]
    mirrors[4][3] =
      (gram[4][3] -
        mirrors[4][0] * mirrors[3][0] -
        mirrors[4][1] * mirrors[3][1] -
        mirrors[4][2] * mirrors[3][2]) /
      mirrors[3][3]

    mirrors[4][4] = sqrt(
      abs(
        1 -
          mirrors[4][0] * mirrors[4][0] -
          mirrors[4][1] * mirrors[4][1] -
          mirrors[4][2] * mirrors[4][2] -
          mirrors[4][3] * mirrors[4][3]
      )
    )
  }
  mirrors[mirrors.length - 1][mirrors.length - 1] = curvature
    ? mirrors[mirrors.length - 1][mirrors.length - 1] * curvature
    : 1

  return mirrors
}

export const getFundamentalVertex = (mirrors, m, curvature) => {
  // solve mirrors for x,y,z,w,v
  const dimensions = m.length
  const p = new Array(dimensions)
  p[0] = m[0]
  p[1] = (m[1] - mirrors[1][0] * p[0]) / mirrors[1][1]
  p[2] = (m[2] - mirrors[2][0] * p[0] - mirrors[2][1] * p[1]) / mirrors[2][2]

  if (dimensions >= 4) {
    p[3] =
      (m[3] -
        mirrors[3][0] * p[0] -
        mirrors[3][1] * p[1] -
        mirrors[3][2] * p[2]) /
      mirrors[3][3]
  }

  if (dimensions >= 5) {
    p[4] =
      (m[4] -
        mirrors[4][0] * p[0] -
        mirrors[4][1] * p[1] -
        mirrors[4][2] * p[2] -
        mirrors[4][3] * p[3]) /
      mirrors[4][4]
  }
  p[p.length - 1] *= curvature || 1
  return normalize(p, curvature)
}
