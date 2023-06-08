import { PI, abs, acos, cos, round, sign, sin, sqrt } from './index.js'
import { eigen, ident, inverse, multiplyVector } from './matrix.js'

export const coxeterToGram = (coxeter, stellation) =>
  coxeter.map((row, i) =>
    row.map((column, j) => -cos((stellation[i][j] * PI) / column))
  )

export const getSignature = gram => {
  const eigenValues = eigen(gram).values
  return {
    '+': eigenValues.filter(v => v > 0).length,
    '-': eigenValues.filter(v => v < 0).length,
    0: eigenValues.filter(v => v === 0).length,
  }
}
export const getSubSignatures = (gram, sub = [], level = 0, maxLevel = 2) => {
  sub[level] = sub[level] || []
  for (let i = 0; i < gram.length; i++) {
    const subgram = gram
      .filter((_, j) => j !== i)
      .map(row => row.filter((_, j) => j !== i))
    sub[level].push(getSignature(subgram))
    if (subgram.length > 1 && level + 1 < maxLevel) {
      getSubSignatures(subgram, sub, level + 1)
    }
  }
  return sub
}

export const getSpaceType = gram => {
  const signature = getSignature(gram)

  if (signature['-'] === 0 && signature['0'] === 0) {
    return 'finite'
  }
  if (signature['-'] === 0 && signature['0'] === 1) {
    return 'affine'
  }
  // Indefinite, check subgroups
  const subSignatures = getSubSignatures(gram)

  const subSignature = subSignatures[0]

  if (subSignature.every(s => s['-'] === 0 && s['0'] === 0)) {
    return 'hyperbolic-compact'
  }
  if (subSignature.every(s => s['-'] === 0)) {
    return 'hyperbolic-paracompact'
  }
  for (let i = 1; i < subSignatures.length; i++) {
    const subSignature = subSignatures[i]
    if (subSignature.every(s => s['-'] === 0)) {
      return 'hyperbolic-lorentzian-level-' + (i + 1)
    }
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

// We want this order :
// [1, 2], // 0, 3, 4, 5
// [0, 2], // 1, 3, 4, 5
// [1, 3], // 0, 2, 4, 5
// [0, 3], // 1, 2, 4, 5
// [1, 4], // 0, 2, 3, 5
// [0, 4], // 1, 2, 3, 5
// [1, 5], // 0, 2, 3, 4
// [0, 5], // 1, 2, 3, 4

// [4, 5], // 0, 1, 2, 3
// [3, 5], // 0, 1, 2, 4
// [2, 5], // 0, 1, 3, 4
// [3, 4], // 0, 1, 2, 5
// [2, 4], // 0, 1, 3, 5
// [2, 3], // 0, 1, 4, 5
// [0, 1], // 2, 3, 4, 5

export const sortRotations = rotations =>
  rotations.sort((a, b) => {
    const [ai, aj] = a
    const [bi, bj] = b
    // Place [0, 1] at the end
    if (ai === 0 && aj === 1) {
      return 1
    }
    if (bi === 0 && bj === 1) {
      return -1
    }

    // Place [0, n] and [1, n] before others
    if (ai < 2 && bi >= 2) {
      return -1
    }
    if (bi < 2 && ai >= 2) {
      return 1
    }
    if (ai < 2 && bi < 2) {
      // Place [1, n] before [0, n]
      if (aj === bj) {
        return bi - ai
      }
      // Place [1, n] before [1, n+1]
      return aj - bj
    }
    // Rest is reverse order
    return ai === bi ? bj - aj : bi - ai
  })

export const xtranslate = (offset, level, rotations, dimensions, curvature) => {
  const matrix = ident(dimensions)

  if (level > rotations.length - 1 || abs(offset) > 1) {
    return matrix
  }
  const [i, j] = rotations[level]
  // Handle hyperbolic rotation -> cosh, sinh (last coordinate is hyperbolic for now)
  const c = j === dimensions - 1 ? curvature || 1 : 1

  const cost = sqrt(1 - c * offset * offset)
  const sint = offset

  matrix[i][i] = cost
  matrix[j][j] = cost

  matrix[i][j] = -c * sint
  matrix[j][i] = sint

  return matrix
}

export const getFundamentalSimplexMirrorsShifted = (shift, gram, curvature) => {
  const dimensions = gram[0].length
  const mirrorsPlanes = new Array(dimensions)
    .fill()
    .map(() => new Array(dimensions).fill(0))

  mirrorsPlanes[shift][0] = 1
  for (let i_ = 1; i_ < dimensions; i_++) {
    const i = (i_ + shift) % dimensions
    for (let j_ = 0; j_ < i_; j_++) {
      const j = (j_ + shift) % dimensions
      mirrorsPlanes[i][j_] =
        (gram[i][j] -
          xdot(mirrorsPlanes[i].slice(0, j_), mirrorsPlanes[j].slice(0, j_))) /
        mirrorsPlanes[j][j_]
    }
    mirrorsPlanes[i][i_] = sqrt(abs(1 - xdot2(mirrorsPlanes[i].slice(0, i_))))
    if (mirrorsPlanes[i][i_] < 1e-6 && i_ < dimensions - 1) {
      // console.warn(`Parallel mirrors ${i - 1} and ${i} for shifted ${shift}`)
      return null
    }
  }
  const last = (dimensions - 1 + shift) % dimensions
  if (curvature === 0) {
    mirrorsPlanes[last][dimensions - 1] = 0.5
  } else {
    mirrorsPlanes[last][dimensions - 1] *= curvature
  }
  return mirrorsPlanes
}

export const getFundamentalSimplexMirrors = (
  gram,
  curvature,
  centered = false
) => {
  const dimensions = gram[0].length

  // Hyperideal case like
  // o - ∞ - o
  //  \     /
  //   ∞   ∞
  //    \ /
  //     o

  // 3D case vectors:
  // v0 [x0  y0  z0]
  // v1 [x1  y1  z1]
  // v2 [x2  y2  z2]
  // (1) <v0, v0> = 1
  // (2) <v1, v1> = 1
  // (3) <v2, v2> = 1
  // (4) <v0, v1> = -1
  // (5) <v0, v2> = -1
  // (6) <v1, v2> = -1

  // We want to be centered at 0,0,0
  // so z0 = z1 = z2 and we set x2 = 0 to have as many equations as variables
  // v0 [x0  y0  z]
  // v1 [x1  y1  z]
  // v2 [ 0  y2  z]

  // (1) x0^2 + y0^2 - z^2 = 1
  // (2) x1^2 + y1^2 - z^2 = 1
  // (3) y2^2 - z^2 = 1
  // (4) x0 * x1 + y0 * y1 - z^2 = -1
  // (5) y0 * y2 - z^2 = -1
  // (6) y1 * y2 - z^2 = -1

  // (7) : (5) + (6) => y0 = y1
  // (8) : (3) => y2 = -sqrt(1 + z^2) (we take the negative solution)

  // (4) : x0 * x1 + y0^2 - z^2 = -1
  // (1) : x0^2 + y0^2 - z^2 = 1
  // (9) : (1) + (4) => x0^2 + x1 * x0 = 0 => x0 = -x1

  // (5) + (8) => y0 * -sqrt(1 + z^2) - z^2 = -1
  // (10) : y0 = y1 = (1 - z^2) / sqrt(1 + z^2)

  // (1) + (10) => x0^2 + (z^2 - 1)^2 / (1 + z^2) - z^2 = 1
  // x0^2 = 1 + z^2 - (z^2 - 1)^2 / (1 + z^2)
  // x0^2 = ((1 + z^2) * (1 + z^2) - (z^2 - 1)^2) / (1 + z^2)
  // x0^2 = (1 + 2z^2 + z^4 - z^4 + 2z^2 - 1) / (1 + z^2)
  // (11) : x0^2 = (4z^2) / (1 + z^2)
  // (9) + (11) => (4z^2) / (1 + z^2) = 1
  // 4z^2 = 1 + z^2
  // 3z^2 = 1
  // (12) : z = 1 / sqrt(3)
  // (10) + (12) => y0 = y1 = (1  - 1/ 3) / sqrt(1 + 1 / 3) = 1 / sqrt(3)

  // Therefore
  // v0 [ 1   1 / sqrt(3)  1 / sqrt(3)]
  // v1 [-1   1 / sqrt(3)  1 / sqrt(3)]
  // v2 [ 0  -2 / sqrt(3)  1 / sqrt(3)]

  // 4D case
  // v0 [x0  y0  z0  w0]
  // v1 [x1  y1  z1  w1]
  // v2 [x2  y2  z2  w2]
  // v3 [x3  y3  z3  w3]
  // (1) <v0, v0> = 1
  // (2) <v1, v1> = 1
  // (3) <v2, v2> = 1
  // (4) <v3, v3> = 1
  // (5) <v0, v1> = -1
  // (6) <v0, v2> = -1
  // (7) <v0, v3> = -1
  // (8) <v1, v2> = -1
  // (9) <v1, v3> = -1
  // (10) <v2, v3> = -1

  // We want to be centered at 0,0,0,0
  // so w0 = w1 = w2 = w3 and we set x3 = y3 = x2 = 0 to have as many equations as variables:
  // v0 [x0  y0  z0  w]
  // v1 [x1  y1  z1  w]
  // v2 [ 0  y2  z2  w]
  // v3 [ 0   0  z3  w]

  // (1) x0^2 + y0^2 + z0^2 - w^2 = 1
  // (2) x1^2 + y1^2 + z1^2 - w^2 = 1
  // (3) y2^2 + z2^2 - w^2 = 1
  // (4) z3^2 - w^2 = 1
  // (5) x0 * x1 + y0 * y1 + z0 * z1 - w^2 = -1
  // (6) y0 * y2 + z0 * z2 - w^2 = -1
  // (7) z0 * z3 - w^2 = -1
  // (8) y1 * y2 + z1 * z2 - w^2 = -1
  // (9) z1 * z3 - w^2 = -1
  // (10) z2 * z3 - w^2 = -1

  // We can do the same as in 3D case but it's a bit fastidious.
  // We take a shortcut here by reusing the 3D case.
  // We see from (7) + (9) + (10) that z0 = z1 = z2 = z3 = z
  // By posing zt = w^2 - z^2
  // We get the same equations as in 3D case:
  // (1) x0^2 + y0^2 - zt^2 = 1
  // (2) x1^2 + y1^2 - zt^2 = 1
  // (3) y2^2 - zt^2 = 1
  // (5) x0 * x1 + y0 * y1 - zt^2 = -1
  // (6) y0 * y2 - zt^2 = -1
  // (8) y1 * y2 - zt^2 = -1

  // And therefore the same solution:
  // v0 [ 1   1/sqrt(3)  z   w]
  // v1 [-1   1/sqrt(3)  z   w]
  // v2 [ 0  -2/sqrt(3)  z   w]
  // v3 [ 0   0          z3  w]

  // AND zt^2 = 1/3 = w^2 - z^2 (11)
  // So to solve for w and z we have:
  // (11) : w^2 = 1/3 + z^2
  // (4)  : w^2 = z3^2 - 1
  // (7)  : w^2 = z * z3 + 1

  // (11) + (4) => z3^2 - 1 = 1/3 + z^2
  // (12) : z3^2 = 4/3 + z^2
  // (11) + (7) => z * z3 + 1 = 1/3 + z^2
  // (13) : z * z3 = -2/3 + z^2
  // (13') : z^2 * z3^2 = (-2/3 + z^2)^2
  // (12) + (13') : z^2 * (4/3 + z^2) = (-2/3 + z^2)^2
  // z^4 + 4/3 * z^2 = 4/9 - 4/3 * z^2 + z^4
  // 8/3 * z^2 = 4/9
  // z^2 = 1/6
  // (14) : z = 1/sqrt(6)
  // (4) + (14) : w^2 = 1/3 + 1/6 = 1/2
  // (15) : w = 1/sqrt(2)
  // (4) + (15) : z3^2 = 1/2 + 1 = 3/2
  // (16) : z3 = -sqrt(3/2) = -3/sqrt(6)

  // So we have:
  // v0 [ 1   1/sqrt(3)  1/sqrt(6)  1/sqrt(2)]
  // v1 [-1   1/sqrt(3)  1/sqrt(6)  1/sqrt(2)]
  // v2 [ 0  -2/sqrt(3)  1/sqrt(6)  1/sqrt(2)]
  // v3 [ 0   0         -3/sqrt(6)  1/sqrt(2)]

  // 5d case
  // Again we can reuse the last case by posing wt = v^2 - w^2
  // We have:
  // v0 [ 1   1/sqrt(3)  1/sqrt(6)  w  v]
  // v1 [-1   1/sqrt(3)  1/sqrt(6)  w  v]
  // v2 [ 0  -2/sqrt(3)  1/sqrt(6)  w  v]
  // v3 [ 0   0         -3/sqrt(6)  w  v]
  // v4 [ 0   0         0           w4 v]
  // AND wt^2 = 1/2 = v^2 - w^2 (17)
  // v^2 = w^2 + 1/2
  // v^2 = w4^2 - 1
  // v^2 = w * w4 + 1
  // w4^2 - 1 = w^2 + 1/2
  // w4^2 = w^2 + 3/2
  // w * w4 + 1 = w^2 + 1/2
  // w * w4 = w^2 - 1/2
  // w^2 * w4^2 = (w^2 - 1/2)^2
  // w^2 * (w^2 + 3/2) = (w^2 - 1/2)^2
  // w^4 + 3/2 * w^2 = w^4 - w^2 + 1/4
  // 5/2 * w^2 = 1/4
  // w^2 = 1/10
  // (18) : w = 1/sqrt(10)
  // (17) + (18) : v^2 = 1/10 + 1/2 = 3/5
  // (19) : v = sqrt(3/5)
  // (17) + (19) : w4^2 = 3/5 + 1 = 8/5
  // (20) : w4 = sqrt(8/5) = 2/sqrt(5)
  // General case
  // v-1[n-2] -> Last coordinate of the n-1 dimensions vector
  // v[n-1]^2 -> Last coordinate of the n dimensions vector
  // vn[n-2]^2 -> Before last coordinate of the last n dimensions vector
  // vi[n-2]^2 -> Before last coordinate of the except last n dimensions vector

  // v[n-1]^2 = (v-1[n-2] + 1) / (3 - v-1[n-2])) = alpha
  // vn[n-2]^2 = 4 / (3 - v-1[n-2]))
  // vi[n-2]^2 = (v-1[n-2] - 1)^2 / (3 - v-1[n-2])

  // Let's begin again but with the gram coefficients
  // Dimension 2
  // v0 [x0 y0]
  // v1 [x1 y1]
  // We insist on the fact that the vectors have the same n-1 coordinates
  // So y0 = y1 = y = sqrt(±α)
  // In positive curvature α = y^2
  // In negative curvature α = -y^2
  // In null curvature α = 0 (?)

  // We have:
  // (1) : x0^2 + α = 1
  // (2) : x1^2 + α = 1
  // (3) : x0 * x1 + α = g01 = -cos(π/p) = Π
  // => α = (Π + 1) / 2
  // => x0 =  sqrt(2(1 - Π)) / 2
  // => x1 = -sqrt(2(1 - Π)) / 2

  // Dimension 3
  // v0 [x0 y0 z0]
  // v1 [x1 y1 z1]
  // v2 [x2 y2 z2]
  // We insist on the fact that the vectors have the same n-1 coordinates
  // So z0 = z1 = z2 = z = sqrt(±α)
  // In positive curvature α = z^2
  // In negative curvature α = -z^2
  // In null curvature α = 0 (?)
  // We have 6 equations and 7 unknowns so we choose x2 = 0:

  // We have:
  // (1) : x0^2 + y0^2 + α = 1
  // (2) : x1^2 + y1^2 + α = 1
  // (3) : y2^2 + α = 1
  // (4) : x0 * x1 + y0 * y1 + α = g01 = -cos(π/p) = Π
  // (5) : y1 * y2 + α = g12 = -cos(π/q) = χ
  // (6) : y0 * y2 + α = g02 = -cos(π/r) = ρ

  // (3) => y2^2 = 1 - α
  //     => y2 = -sqrt(1 - α)
  // (6) => y0 * y2 = ρ - α
  //     => y0 = -(ρ - α) / sqrt(1 - α)
  //     => y0^2 = (ρ - α)^2 / (1 - α)
  // (5) => y1 * y2 = χ - α
  //     => y1 * -sqrt(1 - α) = χ - α
  //     => y1 = -(χ - α) / sqrt(1 - α)
  //     => y1^2 = (χ - α)^2 / (1 - α)
  //     => y1 = (χ - α) / ((ρ - α) / y0)
  //     => y1 = y0 * (χ - α) / (ρ - α)
  //     => y0^2 = ((ρ - α) / (χ - α))^2 * y1^2
  // (1) => x0^2 = 1 - y0^2 - α
  //     => x0^2 = 1 - (ρ - α)^2 / (1 - α) - α
  //     => x0^2 = (2 * α * ρ - 2 * α - ρ^2 + 1)/(1 - α)
  //     => x0^2 = -((ρ - 1) * (2*α - ρ - 1) / (α - 1))
  // (2) => x1^2 = 1 - y1^2 - α
  //     => x1^2 = 1 - (χ - α)^2 / (1 - α) - α
  //     => x1^2 = (2 * α * χ - 2 * α - χ^2 + 1)/(1 - α)
  //     => x1^2 = -((χ - 1) * (2*α - χ - 1) / (α - 1))

  // (4) => x0 * x1 + y0 * y1 + α = Π
  //     => sqrt(2 * α * ρ - 2 * α - ρ^2 + 1) * sqrt(2 * α * χ - 2 * α - χ^2 + 1) / (1 - α) + y0 * y0 * (χ - α) / (ρ - α) + α = Π
  //     => α = (Π * Π + χ * χ + ρ * ρ - 2 * Π * χ * ρ - 1) / (Π * Π + χ * χ + ρ * ρ - 2 * Π * χ - 2 * Π * ρ - 2 * χ * ρ + 2 * Π + 2 * χ + 2 * ρ - 3)

  // z0 = z1 = z2 = sqrt(curvature * α)

  // Dimension 4
  // v0 [x0 y0 z0 w0]
  // v1 [x1 y1 z1 w1]
  // v2 [x2 y2 z2 w2]
  // v3 [x3 y3 z3 w3]

  // w0 = w1 = w2 = w3 = sqrt(±α)
  // x2 = x3 = y3 = 0

  // (1) :          x0^2 + y0^2 + z0^2 + α = 1
  // (2) :          x1^2 + y1^2 + z1^2 + α = 1
  // (3) :                 y2^2 + z2^2 + α = 1
  // (4) :                        z3^2 + α = 1
  // (5) : x0 * x1 + y0 * y1 + z0 * z1 + α = g01 (p)
  // (6) :           y1 * y2 + z1 * z2 + α = g12 (q)
  // (7) :                     z2 * z3 + α = g23 (r)
  // (8) :           y0 * y2 + z0 * z2 + α = g02 (s)
  // (9) :                     z1 * z3 + α = g13 (t)
  // (10):                     z0 * z3 + α = g03 (u)

  // z3^2 = 1 - α
  // z3 = -sqrt(1 - α)
  // z0 * z3 = u - α
  // z0 = -(u - α) / sqrt(1 - α)
  // z0^2 = (u - α)^2 / (1 - α)
  // z1^2 = (t - α)^2 / (1 - α)
  // z2^2 = (r - α)^2 / (1 - α)
  // y2^2 = 1 - α - z2^2
  // y2^2 = 1 - α - (r - α)^2 / (1 - α)
  // y1 = (q - α - z1 * z2) / y2
  // y1 = (q - α - ((t - α) * (r - α) / (1 - α))) /  sqrt(1 - α - (r - α)^2 / (1 - α))
  // y1^2 = (q - α - ((t - α) * (r - α) / (1 - α)))^2 / (1 - α - (r - α)^2 / (1 - α))
  // y0^2 = (s - α - ((u - α) * (r - α) / (1 - α)))^2 / (1 - α - (r - α)^2 / (1 - α))
  // x0^2 = 1 - α - y0^2 - z0^2
  // x0^2 = 1 - α - (s - α - ((u - α) * (r - α) / (1 - α)))^2 / (1 - α - (r - α)^2 / (1 - α)) - (u - α)^2 / (1 - α)

  // Dimension 5
  // v0 [x0 y0 z0 w0 v]
  // v1 [x1 y1 z1 w1 v]
  // v2 [0  y2 z2 w2 v]
  // v3 [0  0  z3 w3 v]
  // v4 [0  0  0  w4 v]

  // p t w y
  //   q u x
  //     r v
  //       s
  // (01) :             x0^2 + y0^2 + z0^2 + w0^2 + α = 1
  // (02) :             x1^2 + y1^2 + z1^2 + w1^2 + α = 1
  // (03) :                    y2^2 + z2^2 + w2^2 + α = 1
  // (04) :                           z3^2 + w3^2 + α = 1
  // (05) :                                  w4^2 + α = 1
  // (06) : x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1 + α = p
  // (07) :           y1 * y2 + z1 * z2 + w1 * w2 + α = q
  // (08) :                     z2 * z3 + w2 * w3 + α = r
  // (09) :                               w3 * w4 + α = s
  // (10) :           y0 * y2 + z0 * z2 + w0 * w2 + α = t
  // (11) :                     z1 * z3 + w1 * w3 + α = u
  // (12) :                               w2 * w4 + α = v
  // (13) :                     z0 * z3 + w0 * w3 + α = w
  // (14) :                               w1 * w4 + α = x
  // (15) :                               w0 * w4 + α = y
  let mirrorsPlanes = null
  const hyperideal = gram.every((row, i) =>
    row.every((x, j) => x === (i === j ? 1 : -1))
  )
  if (centered || hyperideal) {
    mirrorsPlanes = new Array(dimensions)
      .fill(0)
      .map(() => new Array(dimensions).fill(0))

    if (dimensions === 2) {
      const alpha = (gram[0][1] + 1) / 2
      mirrorsPlanes[0][0] = sqrt(alpha - gram[0][1])
      mirrorsPlanes[1][0] = -sqrt(alpha - gram[0][1])
      mirrorsPlanes[0][1] = mirrorsPlanes[1][1] = sqrt((curvature || 1) * alpha)
      // FIXME:
      if (curvature === 0) {
        mirrorsPlanes[1][1] = 0.5
      }
      return mirrorsPlanes
    } else if (dimensions === 3) {
      const p = gram[0][1]
      const q = gram[1][2]
      const r = gram[0][2]
      // prettier-ignore
      const alpha =
          (p * p + q * q + r * r - 2 * p * q * r - 1) /
          (p * p + q * q + r * r
            - 2 * p * q
            - 2 * p * r
            - 2 * q * r
            + 2 * p
            + 2 * q
            + 2 * r
            - 3)

      // z0 = z1 = z2 = sqrt(curvature * α)
      mirrorsPlanes[0][2] =
        mirrorsPlanes[1][2] =
        mirrorsPlanes[2][2] =
          curvature * sqrt(curvature * alpha)
      // y2 = -sqrt(1 - α)
      mirrorsPlanes[2][1] = -sqrt(1 - alpha)
      // y1 = (χ - α) / y2
      mirrorsPlanes[1][1] = (q - alpha) / mirrorsPlanes[2][1]
      // y0 = (ρ - α) / y2
      mirrorsPlanes[0][1] = (r - alpha) / mirrorsPlanes[2][1]
      // x1 = -sqrt(1 - y1^2 - α)
      mirrorsPlanes[1][0] = -sqrt(1 - mirrorsPlanes[1][1] ** 2 - alpha)
      // x0 = sqrt(1 - y0^2 - α)
      mirrorsPlanes[0][0] = sqrt(1 - mirrorsPlanes[0][1] ** 2 - alpha)
      // check(mirrorsPlanes, gram, curvature)
      // FIXME:
      if (curvature === 0) {
        mirrorsPlanes[2][2] = 0.5
      }
      return mirrorsPlanes
    } else if (dimensions === 4) {
      const p = gram[0][1]
      const q = gram[1][2]
      const r = gram[2][3]
      const s = gram[0][2]
      const t = gram[1][3]
      const u = gram[0][3]
      // prettier-ignore
      const alpha =
          (
              p * p * r * r
            + q * q * u * u
            + s * s * t * t
            - p * p
            - q * q
            - r * r
            - s * s
            - t * t
            - u * u
            + 2 * p * t * u
            + 2 * p * q * s
            + 2 * q * r * t
            + 2 * r * s * u
            - 2 * q * s * t * u
            - 2 * p * q * r * u
            - 2 * p * r * s * t
            + 1) /
          (2 *
            (
                p * p * r
              + q * q * u
              + r * r * p
              + s * s * t
              + t * t * s
              + u * u * q
              - p * p
              - q * q
              - r * r
              - s * s
              - t * t
              - u * u
              - p * q * r
              - p * q * u
              - p * r * s
              - p * r * t
              - p * r * u
              - p * s * t
              - q * r * u
              - q * s * t
              - q * s * u
              - q * t * u
              - r * s * t
              - s * t * u
              + p * q * s
              + p * t * u
              + q * r * t
              + r * s * u
              + p * q
              + p * s
              + p * t
              + p * u
              + q * r
              + q * s
              + q * t
              + r * s
              + r * t
              + r * u
              + s * u
              + t * u
              - p
              - q
              - r
              - s
              - t
              - u
              + 2))

      // w0 = w1 = w2 = w3 = sqrt(curvature * α)
      mirrorsPlanes[0][3] =
        mirrorsPlanes[1][3] =
        mirrorsPlanes[2][3] =
        mirrorsPlanes[3][3] =
          curvature * sqrt(curvature * alpha)
      // z3 = -sqrt(1 - α)
      mirrorsPlanes[3][2] = -sqrt(1 - alpha)
      // z2 = (r - α) / z3
      mirrorsPlanes[2][2] = (r - alpha) / mirrorsPlanes[3][2]
      // z1 = (t - α) / z3
      mirrorsPlanes[1][2] = (t - alpha) / mirrorsPlanes[3][2]
      // z0 = (u - α) / z3
      mirrorsPlanes[0][2] = (u - alpha) / mirrorsPlanes[3][2]

      // y2 = -sqrt(1 - α - z2^2)
      mirrorsPlanes[2][1] = -sqrt(1 - alpha - mirrorsPlanes[2][2] ** 2)
      // y1 = (q - α - z1 * z2) / y2
      mirrorsPlanes[1][1] =
        (q - alpha - mirrorsPlanes[1][2] * mirrorsPlanes[2][2]) /
        mirrorsPlanes[2][1]
      // y0 = (s - α - z0 * z2) / y2
      mirrorsPlanes[0][1] =
        (s - alpha - mirrorsPlanes[0][2] * mirrorsPlanes[2][2]) /
        mirrorsPlanes[2][1]

      // x1 = -sqrt(1 - α - y1^2 - z1^2)
      mirrorsPlanes[1][0] = -sqrt(
        1 - alpha - mirrorsPlanes[1][1] ** 2 - mirrorsPlanes[1][2] ** 2
      )
      // x0 = sqrt(1 - α - y0^2 - z0^2)
      mirrorsPlanes[0][0] = sqrt(
        1 - alpha - mirrorsPlanes[0][1] ** 2 - mirrorsPlanes[0][2] ** 2
      )

      // check(mirrorsPlanes, gram, curvature)
      // FIXME:
      if (curvature === 0) {
        mirrorsPlanes[3][3] = 0.5
      }

      return mirrorsPlanes
    }
    // TODO: general case for higher dimensions

    // Other dimensions case, hyperideal only:
    if (hyperideal) {
      const alphas = [0]
      for (let i = 1; i < dimensions; i++) {
        alphas[i] = (alphas[i - 1] + 1) / (3 - alphas[i - 1])
      }

      mirrorsPlanes[0][0] = 1
      mirrorsPlanes[1][0] = -1
      mirrorsPlanes[0][1] = sqrt(alphas[1])
      mirrorsPlanes[1][1] = sqrt(alphas[1])

      for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
          if (i < 2 && j < 2) {
            continue
          }
          mirrorsPlanes[i][j] =
            j < i - 1
              ? 0
              : j === i - 1
              ? -(i * sqrt(alphas[j] - alphas[j - 1]))
              : j < dimensions - 1
              ? sqrt(alphas[j] - alphas[j - 1])
              : sqrt(alphas[j - 1])
        }
      }

      return mirrorsPlanes
    }
  }

  for (let i = 0; i < dimensions; i++) {
    mirrorsPlanes = getFundamentalSimplexMirrorsShifted(i, gram, curvature)
    if (mirrorsPlanes) {
      break
    }
  }
  if (mirrorsPlanes && centered) {
    const omnipoint = getFundamentalVertex(
      new Array(dimensions).fill(1),
      mirrorsPlanes,
      curvature
    )
    if (curvature === 0) {
      // ?
    } else {
      const mirror = normalize(
        omnipoint.slice().map((x, i) => (i === dimensions - 1 ? x - 1 : x)),
        curvature
      )

      for (let i = 0; i < dimensions; i++) {
        mirrorsPlanes[i] = reflect(mirrorsPlanes[i], mirror, curvature)
      }
    }
  }
  return mirrorsPlanes
}

const check = (m, g, curvature) => {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      const d = xdot(m[i], m[j], curvature)
      console.log(i, j, d, g[i][j], abs(d - g[i][j]) < 1e-10 ? 'OK' : 'FAIL')
    }
  }
}

export const getFundamentalVertex = (mirrors, mirrorsPlanes, curvature) => {
  // solve linear system for mirrors
  let active = mirrors.map(v => (isNaN(v) ? 1 : +v))
  let hyperPlanes = mirrorsPlanes.slice()

  let inv
  for (let i = 0; i < active.length; i++) {
    inv = inverse(hyperPlanes)
    if (inv.some(row => row.some(x => isNaN(x) || abs(x) > 1e8))) {
      console.warn('Non invertible matrix, retrying by shifting mirrors')
      hyperPlanes.push(hyperPlanes.shift())
      active.push(active.shift())
    } else {
      break
    }
    if (i === active.length - 1) {
      console.warn('Non invertible matrix, returning default value')
      return [0, 0, 1]
    }
  }
  const p = multiplyVector(inv, active)

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
