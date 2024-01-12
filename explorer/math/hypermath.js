import { range } from '../../utils.js'
import {
  PI,
  abs,
  acos,
  ceil,
  combinations,
  cos,
  cosh,
  min,
  round,
  sign,
  sin,
  sinh,
  sqrt,
} from './index.js'
import {
  diag,
  dot,
  eigen,
  epsize,
  ident,
  inverse,
  ldl,
  mulV,
  multiply,
  multiplyVector,
  subV,
  transpose,
} from './matrix.js'

export const reflect = (v, n, metric) => {
  return subV(
    v,
    mulV(
      multiplyVector(nonnegative(metric), n),
      2 * dot(multiplyVector(nonzero(metric), v), n)
    )
  )
}

export const normalize = (v, metric) => {
  if (metric.some((row, i) => row.some((v, j) => i === j && v === 0))) {
    return mulV(v, 1 / v[v.length - 1])
  }
  // We use -1 to orient the hyperboloids in front of camera
  let nr = dot(multiplyVector(metric, v), v)
  if (nr === 0) {
    // Cheat a bit here to avoid Infinity
    // It works great for centered 4-∞ for instance
    nr = 1e-16
  }
  return mulV(v, -1 / sqrt(abs(nr)))
}

export const coxeterToGram = (coxeter, stellation) =>
  epsize(
    coxeter.map((row, i) =>
      row.map((column, j) => {
        if (column < 0) {
          // Imaginary
          return -cosh(-column / 10)
        }
        if (column === 0) {
          // Infinity
          return -1
        }
        return -cos((stellation[i][j] * PI) / column)
      })
    )
  )

export const getSignature = gram => {
  const eigens = eigen(gram)
  return {
    '+': eigens.values.filter(v => v > 0).length,
    '-': eigens.values.filter(v => v < 0).length,
    0: eigens.values.filter(v => v === 0).length,
    eigens,
  }
}
export const getSubSignatures = (gram, sub = [], level = 0, maxLevel = 10) => {
  sub[level] = sub[level] || []
  for (let i = 0; i < gram.length; i++) {
    const subgram = gram
      .filter((_, j) => j !== i)
      .map(row => row.filter((_, j) => j !== i))
    sub[level].push(getSignature(subgram))
    if (subgram.length > 1 && level + 1 < maxLevel) {
      getSubSignatures(subgram, sub, level + 1, maxLevel)
    }
  }
  return sub
}

export const getSpace = gram => {
  const signature = getSignature(gram)
  // Eigenvalues/eigenvectors of gram matrix
  const eigens = signature.eigens
  // Lorentzian metric tensor
  const metric = diag(eigens.values.map(v => sign(v)))

  const common = {
    eigens,
    gram,
    metric,
  }

  if (signature['-'] === 0 && signature['0'] === 0) {
    return { ...common, type: 'finite', curvature: 1 }
  }
  if (signature['-'] === 0 && signature['0'] > 0) {
    return { ...common, type: 'affine', curvature: 0 }
  }
  if (signature['-'] > 1) {
    return {
      ...common,
      type: 'hyperbolic',
      subtype: 'superhyperbolic',
      level: signature['-'],
      curvature: -1,
    }
  }
  // Indefinite, check subgroups
  const subSignatures = getSubSignatures(gram, [], 0, 3)

  const subSignature = subSignatures[0]

  if (subSignature.every(s => s['-'] === 0 && s['0'] === 0)) {
    return {
      ...common,
      type: 'hyperbolic',
      subtype: 'compact',
      curvature: -1,
    }
  }
  if (subSignature.every(s => s['-'] === 0)) {
    return {
      ...common,
      type: 'hyperbolic',
      subtype: 'paracompact',
      curvature: -1,
    }
  }
  for (let i = 1; i < subSignatures.length; i++) {
    const subSignature = subSignatures[i]
    if (subSignature.every(s => s['-'] === 0)) {
      return {
        ...common,
        type: 'hyperbolic',
        subtype: 'lorentzian',
        curvature: -1,
        level: i + 1,
      }
    }
  }
  console.info('indefinite', subSignatures)
  return { ...common, type: 'indefinite', curvature: -1 }
}

const euclidean_scaling = 1

export const nonzero = m =>
  m.map((row, i) =>
    row.map((v, j) => (i === j && v === 0 ? euclidean_scaling : v))
  )
export const nonnegative = m => m.map(row => row.map(v => abs(v)))

export const getGeometry = (space, centered) => {
  const eigens = space.eigens
  const metric = space.metric

  if (centered) {
    // Use cholesky LDL decomposition
    // J = Curvature tensor metric
    // G = L D L^T
    // G = L sqrt(J D) sqrt(D J) L^T
    // W = L sqrt(J D)
    const { L, D } = ldl(space.gram)

    let normals
    if (!D.some((_, i) => isNaN(D[i][i]))) {
      const sqrtJD = multiply(metric, D).map((row, i) =>
        row.map((v, j) => (i === j ? sqrt(v) : 0))
      )
      metric.forEach((row, i) => {
        if (row[i] === 0) {
          sqrtJD[i][i] = euclidean_scaling
        }
      })
      normals = multiply(L, sqrtJD)
    } else {
      console.warn('Can’t cholesky')
      normals = analyticGeometry(space, centered)
    }

    if (normals) {
      const metricNormals = multiply(normals, nonzero(metric))
      const vertices = inverse(metricNormals)
      if (!vertices.some(row => row.some(v => isNaN(v)))) {
        return {
          normals,
          vertices,
        }
      }
    }
    console.warn('Can’t center')
  }
  // More details on this in https://researchers.ms.unimelb.edu.au/~snap/DHeard-PhD.pdf
  // G = Gram matrix
  // V = Vertex matrix
  // W = Normal matrix
  // J = Curvature matrix
  // Spectral decomposition:
  // G = Q L Q^-1
  // G = Q L Q^T // Q orthogonal
  // Q = eigenvectors of G
  // L = eigenvalues of G (diagonal matrix)
  // G. = V^T J V // Vertex Gram matrix
  // G = W^T J W // Normal Gram matrix
  // G = Q L Q^T
  // G = Q sqrt(J L) sqrt(L J) Q^T
  // W^T = Q sqrt(J L)

  // Q^-1 = Q^T
  // W^-1 = (Q sqrt(J L))^-1
  // W^-1 = sqrt(J L)^-1 Q^-1
  // W^-1 = sqrt(J L)^-1 Q^T
  // (JW)^-1 = J^-1 sqrt(L J)^-1 Q^T
  // J^-1 = J
  // (JW)^-1 = J sqrt(L J)^-1 Q^T

  // Choose:
  // W^T J V = I

  // V = (W^T J)^-1
  // (W^T J)^-1 = (Q sqrt(J L) J)^-1
  // (W^T J)^-1 = J sqrt(L J)^-1 Q^T
  // V = J sqrt(L J)^-1 Q^T

  // We have a choice here,
  // we can order eigenvalues by their size
  // we will have a random rotation
  // or we can start with the biggest eigenvalue
  // then the smallest positive eigenvalue
  // by doing so we will be aligned with the coxeter plane
  const eigenValues = eigens.values.slice()
  const eigenVectors = eigens.vectors.slice()

  // We want to align with the coxeter plane
  // so we put the biggest eigenvalue first
  // then the smallest positive eigenvalue
  // then the rest as previously ordered
  // The biggest is alread first
  const smallest = min(...eigenValues.filter(v => v > 0))
  const smallestIndex = eigenValues.indexOf(smallest)

  ;[metric[smallestIndex][smallestIndex], metric[1][1]] = [
    metric[1][1],
    metric[smallestIndex][smallestIndex],
  ]

  eigenVectors.splice(1, 0, eigenVectors.splice(smallestIndex, 1)[0])

  eigenValues.splice(smallestIndex, 1)
  eigenValues.splice(1, 0, smallest)

  eigenValues.forEach((v, i) => {
    // For euclidean space, replace null eigenvalues with a zoom
    if (v === 0) {
      eigenValues[i] = 0.05 // ??
    }
  })

  const Q = transpose(eigenVectors)

  // Sort values biggest first - negative will be last
  const L = diag(eigenValues)
  const sqrtJL = multiply(metric, L).map((row, i) =>
    row.map((v, j) => (i === j ? sqrt(v) : 0))
  )
  metric.forEach((row, i) => {
    if (row[i] === 0) {
      sqrtJL[i][i] = euclidean_scaling
    }
  })
  const invsqrtJL = sqrtJL.map((row, i) =>
    row.map((v, j) => (i === j ? (v !== 0 ? 1 / v : 1) : 0))
  )
  const normals = multiply(Q, sqrtJL)
  const vertices = multiply(multiply(nonzero(metric), invsqrtJL), transpose(Q))
  return { normals, vertices }
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

export const getRotations = (dimensions, space) => {
  const rotations = sortRotations(combinations(range(dimensions), 2))
  if (
    space.metric.filter((_, i) => space.metric[i][i] < 0).length === 1 // TODO: Ultrahyperbolic parabolic?
  ) {
    // Add parabolic rotations
    const parabolicRotations = [
      ...combinations(range(dimensions - 1), 2),
      ...combinations(range(dimensions - 1), 2).map(([i, j]) => [j, i]),
    ]
      .sort((a, b) => a[0] - b[0] || (a[0] < a[1] ? a[1] - b[1] : b[1] - a[1]))
      .map(([i, j]) => [-i, -j]) // Encode parabolic
    if (rotations.length % 2) {
      const odd = rotations.pop()
      rotations.push(...parabolicRotations, odd)
    } else {
      rotations.push(...parabolicRotations)
    }
  }
  return {
    combinations: rotations,
    maxShift: ~~ceil(rotations.length / 2),
  }
}

export const rotate = (offset, [i, j], dimensions, metric) => {
  const matrix = ident(dimensions)

  if (i < 0 || j < 0) {
    // Parabolic
    const k = -i
    i = -j
    j = range(dimensions).find(v => metric[v][v] < 0)
    const o2 = 0.5 * offset * offset
    matrix[k][k] = 1 - o2
    matrix[j][j] = 1 + o2

    matrix[k][i] = offset
    matrix[i][k] = -offset
    matrix[i][j] = offset
    matrix[j][i] = offset

    matrix[k][j] = o2
    matrix[j][k] = -o2

    return matrix
  }
  if (metric[i][i] * metric[j][j] === 0) {
    if (metric[i][i] === 0) {
      matrix[j][i] = offset
    }
    if (metric[j][j] === 0) {
      matrix[i][j] = offset
    }
    return matrix
  }

  // The rotation is i if metric elements have same sign
  // j instead
  // i^2 = -1, j^2 = 1
  // exp(i * o) = cos(o) + i * sin(o)
  // exp(j * o) = cosh(o) + j * sinh(j * o)
  const c = metric[i][i] * metric[j][j]

  // Handle hyperbolic rotation -> cosh, sinh
  const sinx = c > 0 ? sin : sinh

  const sint = sinx(offset) // ~offset
  const cost = sqrt(1 - c * sint * sint)

  matrix[i][i] = cost
  matrix[j][j] = cost

  matrix[i][j] = -c * sint
  matrix[j][i] = sint

  // const L = logm(matrix)
  // ==> This should be null
  // console.info(
  //   epsize(add(multiply(transpose(L), metric), multiply(metric, L)))
  //     .map(row => row.join(' '))
  //     .join('\n')
  // )

  return matrix
}

export const getStellationOppositeAngle = (a, b, c, stellation) => {
  const A = PI / a
  const B = PI / b
  const C = PI / c
  // Spherical triangle rules
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

const analyticGeometry = (space, centered) => {
  const gram = space.gram
  const dimensions = gram.length
  const curvature = space.curvature

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
  let normals = null
  const hyperideal = gram.every((row, i) =>
    row.every((x, j) => i === j || x <= -1)
  )
  if (centered || hyperideal) {
    normals = new Array(dimensions)
      .fill(0)
      .map(() => new Array(dimensions).fill(0))

    if (dimensions === 2) {
      const alpha = (gram[0][1] + 1) / 2
      normals[0][0] = sqrt(alpha - gram[0][1])
      normals[1][0] = -sqrt(alpha - gram[0][1])
      normals[0][1] = normals[1][1] = sqrt((curvature || 1) * alpha)
      // FIXME:
      if (curvature === 0) {
        normals[1][1] = 0.5
      }
      return normals
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
      normals[0][2] = normals[1][2] = normals[2][2] = sqrt(curvature * alpha)
      // y2 = -sqrt(1 - α)
      normals[2][1] = -sqrt(1 - alpha)
      // y1 = (χ - α) / y2
      normals[1][1] = (q - alpha) / normals[2][1]
      // y0 = (ρ - α) / y2
      normals[0][1] = (r - alpha) / normals[2][1]
      // x1 = -sqrt(1 - y1^2 - α)
      normals[1][0] = -sqrt(1 - normals[1][1] ** 2 - alpha)
      // x0 = sqrt(1 - y0^2 - α)
      normals[0][0] = sqrt(1 - normals[0][1] ** 2 - alpha)
      // check(normals, gram, curvature)
      // FIXME:
      if (curvature === 0) {
        normals[2][2] = 0.5
      }
      return normals
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
      normals[0][3] =
        normals[1][3] =
        normals[2][3] =
        normals[3][3] =
          sqrt(curvature * alpha)
      // z3 = -sqrt(1 - α)
      normals[3][2] = -sqrt(1 - alpha)
      // z2 = (r - α) / z3
      normals[2][2] = (r - alpha) / normals[3][2]
      // z1 = (t - α) / z3
      normals[1][2] = (t - alpha) / normals[3][2]
      // z0 = (u - α) / z3
      normals[0][2] = (u - alpha) / normals[3][2]

      // y2 = -sqrt(1 - α - z2^2)
      normals[2][1] = -sqrt(1 - alpha - normals[2][2] ** 2)
      // y1 = (q - α - z1 * z2) / y2
      normals[1][1] =
        (q - alpha - normals[1][2] * normals[2][2]) / normals[2][1]
      // y0 = (s - α - z0 * z2) / y2
      normals[0][1] =
        (s - alpha - normals[0][2] * normals[2][2]) / normals[2][1]

      // x1 = -sqrt(1 - α - y1^2 - z1^2)
      normals[1][0] = -sqrt(1 - alpha - normals[1][1] ** 2 - normals[1][2] ** 2)
      // x0 = sqrt(1 - α - y0^2 - z0^2)
      normals[0][0] = sqrt(1 - alpha - normals[0][1] ** 2 - normals[0][2] ** 2)

      // check(normals, gram, curvature)
      // FIXME:
      if (curvature === 0) {
        normals[3][3] = 0.5
      }

      return normals
    }
    // TODO: general case for higher dimensions

    // Other dimensions case, perfect hyperideal only:
    if (gram.every((row, i) => row.every((x, j) => i === j || x === -1))) {
      const alphas = [0]
      for (let i = 1; i < dimensions; i++) {
        alphas[i] = (alphas[i - 1] + 1) / (3 - alphas[i - 1])
      }

      normals[0][0] = 1
      normals[1][0] = -1
      normals[0][1] = sqrt(alphas[1])
      normals[1][1] = sqrt(alphas[1])

      for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
          if (i < 2 && j < 2) {
            continue
          }
          normals[i][j] =
            j < i - 1
              ? 0
              : j === i - 1
              ? i * sqrt(alphas[j] - alphas[j - 1])
              : j < dimensions - 1
              ? sqrt(alphas[j] - alphas[j - 1])
              : sqrt(alphas[j - 1])
        }
      }

      return normals
    }
  }
}
