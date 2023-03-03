import { abs, cos, sin, cosh, sinh, acos, PI, sqrt } from './index.js'
import Vector4 from './Vector4'
import Simplex from './Simplex'
import Vector3 from './Vector3'
let curvature = -1

export const dot = (v1, v2, c = curvature) =>
  v1.xyz.dot(v2.xyz) + c * v1.w * v2.w

export const reflect = (v, n) =>
  v.clone().sub(n.clone().multiplyScalar(2 * dot(v, n)))

export const cross = (v1, v2, v3, c = curvature) => {
  v1 = v1.clone().normalize()
  v2 = v2.clone().normalize()
  v3 = v3.clone().normalize()
  return new Vector4(
    +v2.y * v3.z * v1.w -
      v3.y * v2.z * v1.w -
      v1.y * v3.z * v2.w +
      v3.y * v1.z * v2.w +
      v3.w * v1.y * v2.z -
      v3.w * v2.y * v1.z,
    -v2.x * v3.z * v1.w +
      v3.x * v2.z * v1.w +
      v1.x * v3.z * v2.w -
      v3.x * v1.z * v2.w -
      v3.w * v1.x * v2.z +
      v3.w * v2.x * v1.z,
    +v2.x * v3.y * v1.w -
      v3.x * v2.y * v1.w -
      v1.x * v3.y * v2.w +
      v3.x * v1.y * v2.w +
      v3.w * v1.x * v2.y -
      v3.w * v2.x * v1.y,
    (c || 1) *
      (-v1.x * v2.y * v3.z +
        v1.x * v3.y * v2.z +
        v2.x * v1.y * v3.z -
        v2.x * v3.y * v1.z -
        v3.x * v1.y * v2.z +
        v3.x * v2.y * v1.z)
  )
}

export const intersect = (v1, v2, v3) => normalize(cross(v1, v2, v3))

export const normalize = (v, c = curvature) => {
  if (c === 0) {
    return new Vector4(v.x / v.w, v.y / v.w, v.z / v.w, 1)
  }

  if (v.w < 0) {
    v = v.clone().multiplyScalar(-1)
  }

  let d = -dot(v, v, c)
  if (d < 0 && d > -1e-6) {
    d = 0
  }
  // if (d < 0) {
  //   d = -d
  // }
  return v.clone().divideScalar(sqrt(d))
}

export const poincare = (v, c = curvature) => {
  // z = -c
  // if (c <= 0 || v.w < 1) {
  const nr = 1 / (1 - c * v.w)
  return v.xyz.multiplyScalar(nr)
  // }
}

export const getGoursatSimplex = ({ p, q, r, simplex }) => {
  if (simplex === 'shifted') {
    return getGoursatSimplexShifted({ p, q, r })
  }

  return getGoursatSimplexCentered({ p, q, r })
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
  const MA = new Vector4(1, 0, 0, 0)
  const MB = new Vector4(c01, sqrt(1 - c01 * c01), 0, 0)
  const MC = new Vector4(c02, 0, 0, 0)
  MC.y = (c12 - MC.x * MB.x) / MB.y
  MC.z = sqrt(abs(1 - MC.xy.dot(MC.xy)))

  const MD = new Vector4(c03, 0, 0, 0)
  MD.y = (c13 - MD.x * MB.x) / MB.y
  MD.z = (c23 - MD.xy.dot(MC.xy)) / MC.z
  MD.w = -sqrt(abs(MD.xyz.dot(MD.xyz) - 1))

  return new Simplex([MA, MB, MC, MD])
}

export const getGoursatSimplexShifted = ({ p, q, r }) => {
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

  console.log(p12_13 + p12_14 + p13_14 < PI)

  const X =
    (cos(p13_14) + cos(p12_13) * cos(p12_14)) / (sin(p12_13) * sin(p12_14))
  const Y = sqrt(X * X - 1)
  // Goursat simplex :
  // Mirrors expressed as normal in minkowski space
  const N1 = new Vector4(0, 0, 1, 0)
  const N2 = new Vector4(0, sin(t12), -cos(t12), 0)
  const N3 = new Vector4(
    sin(t13) * sin(p12_13),
    -sin(t13) * cos(p12_13),
    -cos(t13),
    0
  )
  const N4 = new Vector4(
    -sin(t14) * sin(p12_14) * X,
    -sin(t14) * cos(p12_14),
    -cos(t14),
    sin(t14) * sin(p12_14) * Y
  )

  return new Simplex([
    N4, //
    N2,
    N3,
    N1,
  ])
}
