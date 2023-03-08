import { abs, acos, cos, max, PI, sin, sqrt } from './index.js'
let curvature = -1

export const dot = ([x1, y1, z1, w1], [x2, y2, z2, w2], c = curvature) =>
  x1 * x2 + y1 * y2 + z1 * z2 + c * w1 * w2

export const reflect = (v, n) => {
  const vn2 = 2 * dot(v, n) // dot(n, n) // /dot?
  return [
    v[0] - vn2 * n[0],
    v[1] - vn2 * n[1],
    v[2] - vn2 * n[2],
    v[3] - vn2 * n[3],
  ]
}

export const cross = (
  [x1, y1, z1, w1],
  [x2, y2, z2, w2],
  [x3, y3, z3, w3],
  c = curvature
) => {
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
    (c || 1) *
      (-x1 * y2 * z3 +
        x1 * y3 * z2 +
        x2 * y1 * z3 -
        x2 * y3 * z1 -
        x3 * y1 * z2 +
        x3 * y2 * z1),
  ]
}

export const intersect = (v1, v2, v3) => normalize(cross(v1, v2, v3))

export const normalize = ([x, y, z, w], c = curvature) => {
  if (c === 0) {
    return [x / w, y / w, z / w, 1]
  }

  if (w < 0) {
    x = -x
    y = -y
    z = -z
    w = -w
  }
  const nr = 1 / sqrt(max(0, -dot([x, y, z, w], [x, y, z, w], c)))
  return [x * nr, y * nr, z * nr, w * nr]
}

export const poincare = ([x, y, z, w], c = curvature) => {
  // z = -c
  const nr = 1 / (1 - c * w)
  return [x * nr, y * nr, z * nr]
}

export const getGoursatSimplex = coxeter => {
  if (coxeter.simplex === 'shifted') {
    return getGoursatSimplexShifted(coxeter)
  }

  return getGoursatSimplexCentered(coxeter)
}

export const getGoursatSimplexCentered = ({ p, q, r }) => {
  const c01 = -cos(PI / p) // AB
  const c02 = -cos(PI / 2) // AC
  const c03 = -cos(PI / 2) // AD
  const c12 = -cos(PI / q) // BC
  const c13 = -cos(PI / 2) // BD
  const c23 = -cos(PI / r) // CD

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

export const getGoursatSimplexShifted = coxeter => {
  const { p, q, r } = coxeter
  const s = 2
  const t = 2
  const u = 2

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
