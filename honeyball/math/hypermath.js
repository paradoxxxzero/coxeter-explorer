import {
  PI,
  abs,
  acos,
  binomial,
  combinations,
  cos,
  round,
  sign,
  sin,
  sqrt,
} from './index.js'
import { eigen } from './jacobi.js'
import { ident } from './matrix.js'

export const coxeterToGram = (coxter, stellation) =>
  coxter.map((row, i) =>
    row.map((column, j) => -cos((stellation[i][j] * PI) / column))
  )

export const getSpaceType = gram => {
  const eigenValues = eigen(gram).values
  if (eigenValues.every(v => v > 0)) {
    return 'finite'
  }
  if (eigenValues.every(v => v >= 0)) {
    return 'affine'
  }
  // Indefinite, check subgroups
  const subSpaceType = []
  for (let i = 0; i < eigenValues.length; i++) {
    subSpaceType.push(
      getSpaceType(
        gram.filter((_, j) => j !== i).map(row => row.filter((_, j) => j !== i))
      )
    )
  }
  if (subSpaceType.every(t => t === 'finite')) {
    return 'hyperbolic-compact'
  }
  if (subSpaceType.every(t => t === 'finite' || t === 'affine')) {
    return 'hyperbolic-paracompact'
  }
  return 'indefinite'
}

export const xdot = (v1, v2, curvature) => {
  let sum = 0
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i] * (i === v1.length - 1 ? curvature || 1 : 1)
  }
  return sum
}

export const xdot2 = (x, curvature) => xdot(x, x, curvature)

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
  if (curvature === 0) {
    for (let i = 0; i < v.length; i++) {
      v[i] /= v[v.length - 1]
    }
    return v
  }

  const nr =
    (curvature === -1 ? sign(v[v.length - 1]) || 1 : 1) /
    sqrt(abs(xdot2(v, curvature)))
  for (let i = 0; i < v.length; i++) {
    v[i] *= nr
  }
  return v
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

// ...

export const xtranslate = (offset, level, dimensions, curvature) => {
  level = level % binomial(dimensions, 2)
  const matrix = ident(dimensions)
  const [i, j] = combinations(
    new Array(dimensions)
      .fill()
      .map((_, i) => i)
      .reverse()
  )[level]
  const c = i === dimensions - 1 ? curvature : 1

  const cost = sqrt(1 - c * offset * offset)
  const sint = offset

  matrix[i][i] = cost
  matrix[j][j] = cost

  matrix[i][j] = -c * sint
  matrix[j][i] = sint

  return matrix
}

export const getFundamentalSimplexMirrors = (gram, curvature) => {
  const dimensions = gram[0].length
  const mirrorsPlanes = new Array(dimensions)
    .fill()
    .map(() => new Array(dimensions).fill(0))
  mirrorsPlanes[0][0] = 1
  for (let i = 1; i < dimensions; i++) {
    for (let j = 0; j < i; j++) {
      mirrorsPlanes[i][j] =
        (gram[i][j] -
          xdot(mirrorsPlanes[i].slice(0, j), mirrorsPlanes[j].slice(0, j))) /
        mirrorsPlanes[j][j]
    }
    mirrorsPlanes[i][i] = sqrt(abs(1 - xdot2(mirrorsPlanes[i].slice(0, i))))
    if (i === dimensions - 1) {
      if (curvature === 0) {
        mirrorsPlanes[i][i] = 0.5
      } else {
        mirrorsPlanes[i][i] *= curvature
      }
    }
  }

  return mirrorsPlanes
}

export const getFundamentalVertex = (mirrors, mirrorsPlanes, curvature) => {
  // solve linear system for mirrors
  const dimensions = mirrors.length
  const p = new Array(dimensions)
  for (let i = 0; i < dimensions; i++) {
    p[i] =
      ((isNaN(mirrors[i]) ? 1 : +mirrors[i]) -
        xdot(mirrorsPlanes[i].slice(0, i), p.slice(0, i))) /
      mirrorsPlanes[i][i]
  }

  p[p.length - 1] *= curvature || 1
  return normalize(p, curvature)
}

export const getStellationSphericalOppositeAngle = (a, b, c, stellation) => {
  const A = PI / a
  const B = PI / b
  const C = PI / c
  return round(
    PI /
      acos(
        -cos(A) * cos(C) +
          sin(A) *
            sin(C) *
            ((cos(B) - cos(stellation * A) * cos(C)) /
              (sin(stellation * A) * sin(C)))
      )
  )
}
