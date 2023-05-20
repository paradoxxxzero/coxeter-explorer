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

// export const gramSchmidt = (basis, gram, curvature) => {
//   // Compute the Gram-Schmidt process for a basis of vectors and a given Gram matrix
//   // See https://en.wikipedia.org/wiki/Gram%E2%80%93Schmidt_process
//   const dimensions = basis.length
//   const gs = ident(dimensions)
//   for (let i = 0; i < dimensions; i++) {
//     for (let j = 0; j < i; j++) {
//       const dot = xdot(basis[i], basis[j], curvature)
//       for (let k = 0; k < dimensions; k++) {
//         gs[i][k] -= dot * gs[j][k]
//       }
//     }
//     const norm = sqrt(xdot(basis[i], basis[i], curvature))
//     for (let k = 0; k < dimensions; k++) {
//       gs[i][k] /= norm
//     }
//   }
//   return gs
// }

// export const gramSchmidt = (result, innerProductValues, curvature) => {
//   const dimensions = result.length
//   for (let i = 0; i < dimensions; i++) {
//     for (let j = 0; j < i; j++) {
//       let iVec = result[i]
//       const jVec = result[j]
//       const inner = xdot(innerProductValues[i], jVec, curvature)
//       for (let k = 0; k < dimensions; k++) {
//         iVec[k] -= inner * jVec[k]
//       }
//       result[i] = iVec
//     }

//     // Normalize.  We don't use Vector3D normalize because we might have timelike vectors.
//     const mag2 = xdot(innerProductValues[i], result[i], curvature)
//     const abs = mag2 < 0 ? -sqrt(-mag2) : sqrt(mag2)
//     for (let j = 0; j < dimensions; j++) {
//       result[i][j] /= abs
//     }
//   }

//   return result
// }

export const renormalize = (v, u, s, curvature) => {
  // u.v = s
  // u² = 1
  // v² = k²
  // looking for w such that w² = 1 and u.w = s
  // let's pose w = a u + b v
  // u.w = a u² + b u.v = a + b s = s
  // a = s (1 - b)
  // 1 = w² = a² + b² k² + 2 a b u.v = a² + b² k² + 2 a b s
  // 1 = s² (1 - b)² + b² k² + 2 s² (1 - b) b
  // 1 = s² (1 - 2 b + b²) + b² k² + 2 s² (1 - b) b
  // 1 = s² - 2 s² b + s² b² + b² k² + 2 s² b - 2 s² b²
  // 1 = s² - s² b² + b² k²
  // b² (k² - s²) = 1 - s²
  // b = sqrt((1 - s²) / (k² - s²))
  // a = s (1 - b)
  // a = s (1 - sqrt((1 - s²) / (k² - s²)))
  // w = s (1 - sqrt((1 - s²) / (k² - s²))) u + sqrt((1 - s²) / (k² - s²)) v

  const w = new Array(v.length).fill(0)
  const k = sqrt(xdot2(v, curvature))
  const b = -sqrt((1 - s * s) / (k * k - s * s))
  const a = s * (1 - b)
  for (let i = 0; i < v.length; i++) {
    w[i] = a * u[i] + b * v[i]
  }
  console.log('renormalize', v, u, s, w)
  return w
}

export const reverseGramSchmidt = (basis, gram, curvature) => {
  // e1 = v1
  // e2 = v2 - <v2, e1> e1
  // e3 = v3 - <v3, e1> e1 - <v3, e2> e2
  // e4 = v4 - <v4, e1> e1 - <v4, e2> e2 - <v4, e3> e3
  // ...
  // So
  // v1 = e1
  // v2 = <v2, e1> e1 + e2
  // v3 = <v3, e1> e1 + <v3, e2> e2 + e3
  // v4 = <v4, e1> e1 + <v4, e2> e2 + <v4, e3> e3 + e4

  // v1 = e1
  // v2 = e2 + <v2, v1> v1
  // v3 = e3 + <v3, v1> v1 + <v3, (v2 - <v2, v1> v1)> (v2 - <v2, v1> v1)
  //    = e3 + <v3, v1> v1 + (<v3, v2> - <v3, v1> <v2, v1>) * (v2 - <v2, v1> v1)
  // v4 = e4 + <v4, e1> e1 + <v4, e2> e2 + <v4, e3> e3
  //    = e4 + <v4, v1> v1 + (<v4, v2> - <v4, v1> <v2, v1>) * (v2 - <v2, v1> v1) + (<v4, v3> - <v4, v1> <v3, v1>) * (v3 - <v3, v1> v1)
  // ...

  // basis represents the vectors ei
  // result represents the vectors vi
  // gram represents the inner products <vi, vj>

  const dimensions = basis.length
  const result = []

  for (let i = 0; i < dimensions; i++) {
    // vn = en
    result.push(basis[i])
    // + <vi, v1> v1
    if (i > 0) {
      for (let k = 0; k < dimensions; k++) {
        result[i][k] += gram[i][0] * result[0][k]
      }
    }
    if (i > 1) {
      // + (<vi, v2> - <vi, v1> <v2, v1>) * (v2 - <v2, v1> v1)
      for (let k = 0; k < dimensions; k++) {
        result[i][k] +=
          (gram[i][1] - gram[i][0] * gram[1][0]) *
          (result[1][k] - gram[1][0] * result[0][k])
      }
    }

    // if (i > 0) {
    //   debugger
    //   result[i] = renormalize(
    //     result[i],
    //     result[i - 1],
    //     gram[i][i - 1],
    //     curvature
    //   )
    // }

    // for (let j = 0; j < i; j++) {

    // }
  }
  // for (let i = 1; i < dimensions; i++) {
  //   result[i] = renormalize(result[i], result[i - 1], gram[i][i - 1], curvature)
  // }
  const verif = []
  for (let i = 0; i < dimensions; i++) {
    const row = []
    for (let j = 0; j < dimensions; j++) {
      row.push(xdot(result[i], result[j], curvature))
    }
    verif.push(row)
  }
  console.log('>', gram, verif)
  return result
}

// export const getFundamentalSimplexMirrors = (gram, curvature) => {
//   const dimensions = gram[0].length
// const mirrorsPlanes = squareRoot(gram)

// We want the incenter of the triangle to be at the pseudo-sphere origin
// Which means that all the bisectors of the simplex should contain the pseudo-sphere origin
// The bisector of two hyperplanes is the hyperplane defined by the sum of the two hyperplanes normals
// It means the sum of all normals pairs form a hyperplane define the normal of a plane containing the pseudo-sphere origin and the origin
// So we have ni[n-1] + nj[n-1] = curvature
// So all ni[n-1] = curvature/2
// We have ni . nj = gram[i][j]
// and |ni| = 1
// so Sum(ni[]²) = 1
// in dimension 3, we have
// ni[2] = curvature/2
// ni[0]² + ni[1]² + ni[2]² = 1
// ni[0]² + ni[1]² + (curvature/2)² = 1
// ni[0]² + ni[1]² = 1 - (curvature/2)²
// and ni[0] * nj[0] + ni[1] * nj[1] = gram[i][j] - (curvature/2)²

// x1 * x2 + y1 * y2 = p - 1/3
// x2 * x3 + y2 * y3 = q - 1/3
// x3 * x1 + y3 * y1 = r - 1/3
// x1² + y1² = 1 - 1/3
// x2² + y2² = 1 - 1/3
// x3² + y3² = 1 - 1/3

// y1² = 2/3 - x1²
// y2² = 2/3 - x2²
// y3² = 2/3 - x3²

// Let's take
// y1 = sqrt(2/3 - x1²)
// y2 = sqrt(2/3 - x2²)
// y3 = sqrt(2/3 - x3²)

// x1 * x2 + sqrt(2/3 - x1²) * sqrt(2/3 - x2²) = p - 1/3
// x2 * x3 + sqrt(2/3 - x2²) * sqrt(2/3 - x3²) = q - 1/3
// x3 * x1 + sqrt(2/3 - x3²) * sqrt(2/3 - x1²) = r - 1/3

// const mirrorsPlanes = new Array(dimensions)
//   .fill()
//   .map(() => new Array(dimensions).fill(0))

// Try a gram schmidt solution like Hyperboli polyhedra: volume and scissors congruence p24
// const W = gramSchmidt(
//   ident(dimensions),
//   // [
//   //   [0, 1, 0],
//   //   [1, 0, 0],
//   //   [0, 0, 1],
//   //   // [0, 0, 0, 1],
//   // ],
//   gram,
//   1
// )
// const N = inverse(W)
// console.log(W, N)
// // N[dimensions - 1][dimensions - 1] *= curvature
// return N
// }
