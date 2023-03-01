import { abs, cos, PI, sqrt } from './index.js'
import Vector4 from './Vector4'
let curvature = -1

export const dot = (v1, v2, c = curvature) =>
  v1.xyz.dot(v2.xyz) + c * v1.w * v2.w

export const reflect = (v, n) =>
  v.clone().sub(n.clone().multiplyScalar(2 * dot(v, n)))

export const cross = (v1, v2, v3, c = curvature) =>
  new Vector4(
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

export const intersect = (v1, v2, v3, face = curvature) =>
  normalize(cross(v1, v2, v3), face)

export const normalize = (v, c = curvature) => {
  if (c === 0) {
    return new Vector4(v.x / v.w, v.y / v.w, v.z / v.w, 1)
  }

  if (v.w < 0) {
    v = v.clone().multiplyScalar(-1)
  }

  let d = -dot(v, v, c)
  if (d < 0) {
    d = -d
    // console.warn('normalize: negative dot product')
  }
  return v.clone().divideScalar(sqrt(d))
}

export const poincare = (v, c = curvature) => {
  // z = -c
  // if (c <= 0 || v.w < 1) {
  const nr = 1 / (1 - c * v.w)
  return v.xyz.multiplyScalar(nr)
  // }
}

export const getGoursatSimplex = (
  AB = 5,
  AC = 2,
  AD = 2,
  BC = 3,
  BD = 2,
  CD = 4
) => {
  const c01 = -cos(PI / AB)
  const c02 = -cos(PI / AC)
  const c03 = -cos(PI / AD)
  const c12 = -cos(PI / BC)
  const c13 = -cos(PI / BD)
  const c23 = -cos(PI / CD)
  // const activeMirrors = [1, 0, 0, 0]

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

  return [
    intersect(MA, MB, MC),
    intersect(MD, MC, MB),
    intersect(MA, MD, MB),
    intersect(MA, MC, MD),
  ]
}
