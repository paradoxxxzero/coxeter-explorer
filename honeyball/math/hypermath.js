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

export const xproject = v => {
  if (C.dimensions === 3 && C.projection === 'stereographic') {
    return v
  }
  v = v.slice()
  if (C.projection === 'orthographic') {
    v[v.length - 1] = 0
    return v
  }

  const k =
    -R.curvature *
      {
        stereographic: 1,
        klein: 0,
        inverted: -1,
      }[C.projection] || 0

  const nr = 1 / (k + v[v.length - 1])
  for (let i = 0; i < v.length - 1; i++) {
    v[i] *= nr
  }
  v[v.length - 1] = ['jemisphere', 'upperhalf'].includes(C.projection)
    ? 1 / (1 + v[v.length - 1])
    : 0

  if (C.projection === 'upperhalf') {
    const nr2 = 2 / (1 + v[0])
    for (let i = 1; i < v.length; i++) {
      v[i - 1] = v[i] * nr2
    }
    if (C.dimensions === 4) {
      v[2] *= -1
    }
    v[v.length - 1] = 0
  }

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
  const [x, y] = vertex
  // Rz / Rzw Rotation:
  const cosx = cos(theta)
  const sinx = sin(theta)
  vertex[0] = x * cosx - y * sinx
  vertex[1] = x * sinx + y * cosx
  // vertex[2] = z
  // vertex[3] = w
}

export const xscale = (vertex, scale) => {
  if (R.curvature !== 0) {
    const nr = scale / sqrt(xdot(vertex, vertex, 1))

    const offset = new Array(C.dimensions - 1)
    for (let i = 0; i < C.dimensions - 1; i++) {
      offset[i] = vertex[i] * nr
    }
    xtranslate(vertex, offset)
  } else {
    for (let i = 0; i < C.dimensions; i++) {
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
//   | cos†(y)   sin†(x) * sin†(y)   cos†(x) * sin†(y) |
//   | 0         cos†(x)            ±sin†(x)           |
//   | ±sin†(y)  sin†(x) * cos†(y)   cos†(x) * cos†(y) |

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

// prettier-ignore
export const xtranslate = (vertex, offset) => {
  const [x, y, z, w] = vertex
  const [xt, yt, zt] = offset
  const c = R.curvature
  
  const cosx = sqrt(1 - c * xt * xt) // cos†(asin†(xt))
  const cosy = sqrt(1 - c * yt * yt) // cos†(asin†(yt))
  const sinx = xt
  const siny = yt

  if (c !== 0) {
    if (C.dimensions === 3) {
      vertex[0] =      x * cosx + y * sinx * siny +     z * sinx * cosy                       
      vertex[1] =               + y * cosy        - c * z * siny       
      vertex[2] = -c * x * sinx + y * cosx * siny +     z * cosx * cosy
    } else {
      if (zt) {
        const cosz = sqrt(1 - c * zt * zt) // cos†(asin†(zt))
        const sinz = zt
              
        vertex[0] =       x * cosx                                                - c * w * sinx
        vertex[1] = - c * x * sinx * siny        +     y * cosy                   - c * w * cosx * siny 
        vertex[2] = - c * x * cosy * sinx * sinz - c * y * siny * sinz + z * cosz - c * w * cosx * cosy * sinz  
        vertex[3] =       x * cosy * cosz * sinx +     y * cosz * siny + z * sinz +     w * cosx * cosy * cosz
      } else {
        vertex[0] =       x * cosx                                                - c * w * sinx
        vertex[1] = - c * x * sinx * siny        +     y * cosy                   - c * w * cosx * siny 
        // vertex[2] = z                                                          
        vertex[3] =       x * cosy * sinx +     y * siny                          +     w * cosx * cosy
      }
    }
  } else {
    vertex[0] = x + xt
    vertex[1] = y + yt
    if (zt) {
      vertex[2] = z + zt
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
