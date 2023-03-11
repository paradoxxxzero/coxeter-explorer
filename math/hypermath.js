import { C } from '../c.js'
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

export const dot = (v1, v2) => {
  let sum = 0
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i] * (i === v1.length - 1 ? C.curvature || 1 : 1)
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

// export const cross = ([x1, y1, z1, w1], [x2, y2, z2, w2], [x3, y3, z3, w3]) => {
//   return [
//     +y2 * z3 * w1 -
//       y3 * z2 * w1 -
//       y1 * z3 * w2 +
//       y3 * z1 * w2 +
//       w3 * y1 * z2 -
//       w3 * y2 * z1,
//     -x2 * z3 * w1 +
//       x3 * z2 * w1 +
//       x1 * z3 * w2 -
//       x3 * z1 * w2 -
//       w3 * x1 * z2 +
//       w3 * x2 * z1,
//     +x2 * y3 * w1 -
//       x3 * y2 * w1 -
//       x1 * y3 * w2 +
//       x3 * y1 * w2 +
//       w3 * x1 * y2 -
//       w3 * x2 * y1,
//     (C.curvature || 1) *
//       (-x1 * y2 * z3 +
//         x1 * y3 * z2 +
//         x2 * y1 * z3 -
//         x2 * y3 * z1 -
//         x3 * y1 * z2 +
//         x3 * y2 * z1),
//   ]
// }

// export const intersect = (v1, v2, v3) => normalize(cross(v1, v2, v3))

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

// export const getGoursatSimplex = coxeter => {
//   if (coxeter.simplex === 'shifted') {
//     return getGoursatSimplexShifted(coxeter)
//   }

//   return getGoursatSimplexCentered(coxeter)
// }

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

  const mirrors =
    dimensions === 3
      ? [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]
      : dimensions === 4
      ? [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ]
      : null

  mirrors[0][0] = 1
  mirrors[1][0] = gram_matrix[1][0]
  mirrors[1][1] = sqrt(1 - mirrors[1][0] * mirrors[1][0])
  mirrors[2][0] = gram_matrix[2][0]
  mirrors[2][1] =
    (gram_matrix[2][1] - mirrors[2][0] * mirrors[1][0]) / mirrors[1][1]
  mirrors[2][2] = curvature
    ? curvature *
      sqrt(
        abs(1 - mirrors[2][0] * mirrors[2][0] - mirrors[2][1] * mirrors[2][1])
      )
    : 1
  if (dimensions === 4) {
    mirrors[3][0] = gram_matrix[3][0]
    mirrors[3][1] =
      (gram_matrix[3][1] - mirrors[3][0] * mirrors[1][0]) / mirrors[1][1]
    mirrors[3][2] =
      (gram_matrix[3][2] -
        mirrors[3][0] * mirrors[2][0] -
        mirrors[3][1] * mirrors[2][1]) /
      mirrors[2][2]
    mirrors[3][3] = curvature
      ? sqrt(
          abs(
            1 -
              mirrors[3][0] * mirrors[3][0] -
              mirrors[3][1] * mirrors[3][1] -
              mirrors[3][2] * mirrors[3][2]
          )
        )
      : 1
  }
  return mirrors
}

export const getFundamentalVertex = (mirrors, [x, y, z, w]) => {
  // solve mirrors for x,y,z,w
  const p = C.dimensions === 3 ? [0, 0, 0] : [0, 0, 0, 0]
  p[0] = x
  p[1] = (y - mirrors[1][0] * p[0]) / mirrors[1][1]
  p[2] =
    ((C.curvature || 1) * (z - mirrors[2][0] * p[0] - mirrors[2][1] * p[1])) /
    mirrors[2][2]

  if (C.dimensions === 4) {
    p[3] =
      (w - mirrors[3][0] * p[0] - mirrors[3][1] * p[1] - mirrors[3][2] * p[2]) /
      mirrors[3][3]
  }
  return normalize(p)
}

export const getGoursatSimplexCentered = ({ p, q, r, s, t, u }) => {
  const c01 = -cos(PI / p) // AB
  const c02 = -cos(PI / q) // AC
  const c03 = -cos(PI / r) // AD
  const c12 = -cos(PI / s) // BC
  const c13 = -cos(PI / t) // BD
  const c23 = -cos(PI / u) // CD

  // Goursat simplex :
  // Mirrors expressed as normal in minkowski space
  const MA = [1, 0, 0, 0]
  const MB = [c01, sqrt(1 - c01 * c01), 0, 0]
  const MC = [c02, 0, 0, 0]
  MC[1] = (c12 - MC[0] * MB[0]) / MB[1]
  MC[2] = sqrt(abs(1 - (MC[0] * MC[0] + MC[1] * MC[1])))

  const MD = [c03, 0, 0, 0]
  MD[1] = (c13 - MD[0] * MB[0]) / MB[1]
  MD[2] = (c23 - (MC[0] * MD[0] + MC[1] * MD[1])) / MC[2]
  MD[3] = -sqrt(abs(MD[0] * MD[0] + MD[1] * MD[1] + MD[2] * MD[2] - 1))
  return {
    faces: [MA, MB, MC, MD],
    word: '',
  }
}

export const getGoursatSimplexShifted = ({ p, q, r, s, t, u }) => {
  const t12 = PI / p
  const t13 = PI / s
  const t14 = PI / t
  const t23 = PI / q
  const t24 = PI / u
  const t34 = PI / r
  // console.log(t12 + t23 + t13 > PI)
  // console.log(t23 + t34 + t24 > PI)
  // console.log(t13 + t34 + t14 > PI)

  const p12_13 = acos((cos(t23) + cos(t12) * cos(t13)) / (sin(t12) * sin(t13)))
  const p12_14 = acos((cos(t24) + cos(t12) * cos(t14)) / (sin(t12) * sin(t14)))
  const p13_14 = acos((cos(t34) + cos(t13) * cos(t14)) / (sin(t13) * sin(t14)))

  // console.log(p12_13 + p12_14 + p13_14 < PI)

  const X =
    (cos(p13_14) + cos(p12_13) * cos(p12_14)) / (sin(p12_13) * sin(p12_14))
  const Y = sqrt(X * X - 1)
  // Goursat simplex :
  // Mirrors expressed as normal in minkowski space
  const N1 = [0, 0, 1, 0]
  const N2 = [0, sin(t12), -cos(t12), 0]
  const N3 = [sin(t13) * sin(p12_13), -sin(t13) * cos(p12_13), -cos(t13), 0]
  const N4 = [
    -sin(t14) * sin(p12_14) * X,
    -sin(t14) * cos(p12_14),
    -cos(t14),
    sin(t14) * sin(p12_14) * Y,
  ]

  return {
    faces: [
      N4, //
      N2,
      N3,
      N1,
    ],
    word: '',
  }
}
