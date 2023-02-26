import {
  Vector2,
  Vector3,
  Vector4 as ThreeVector4,
  Sphere,
  Matrix3,
  Matrix4,
  Color,
} from 'three'
const { abs, cos, sin, min, max, sqrt, PI } = Math

let curvature = -1

class Vector4 extends ThreeVector4 {
  get xy() {
    return new Vector2(this.x, this.y)
  }
  get xz() {
    return new Vector2(this.x, this.z)
  }
  get xw() {
    return new Vector2(this.x, this.w)
  }
  get yz() {
    return new Vector2(this.y, this.z)
  }
  get yw() {
    return new Vector2(this.y, this.w)
  }
  get zw() {
    return new Vector2(this.z, this.w)
  }
  get xyz() {
    return new Vector3(this.x, this.y, this.z)
  }
  get xyw() {
    return new Vector3(this.x, this.y, this.w)
  }
  get xzw() {
    return new Vector3(this.x, this.z, this.w)
  }
  get yzw() {
    return new Vector3(this.y, this.z, this.w)
  }
  get xyzw() {
    return new Vector4(this.x, this.y, this.z, this.w)
  }
  get yzwx() {
    return new Vector4(this.y, this.z, this.w, this.x)
  }
  get zwxy() {
    return new Vector4(this.z, this.w, this.x, this.y)
  }
  get wzyx() {
    return new Vector4(this.w, this.z, this.y, this.x)
  }
}

export const dot = (v1, v2, c = curvature) =>
  v1.xyz.dot(v2.xyz) + c * v1.w * v2.w

export const reflect = (v, n) => {
  const k = dot(v, n)
  return v.clone().sub(n.clone().multiplyScalar(2 * k))
}

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

export const intersect = (v1, v2, v3) => normalize(cross(v1, v2, v3))

export const normalize = (v, c = curvature) => {
  if (c === 0) {
    return new Vector4(v.x / v.w, v.y / v.w, v.z / v.w, 1)
  }
  let d = -dot(v, v, c)
  if (d < 0) {
    d = -d
    console.warn('normalize: negative dot product')
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

export const getGoursatTetrahedron = (
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

  // Goursat tetrahedron :
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
export const proj = (u, v) => u.clone().multiplyScalar(dot(u, v))

export const getHoneyComb = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4

  const verts = getGoursatTetrahedron(p, 2, 2, q, 2, r)
  const vertices = []
  const edges = []

  verts.forEach((vert, i) => {
    vertices.push({
      vertex: poincare(vert),
      order: 1,
      color: new Color().setHSL(0, 0.5, 0.2 + (0.8 * i) / verts.length),
    })
    for (let j = 0; j < i; j++) {
      edges.push({
        vertices: [i, j],
        color: new Color().setHSL(0, 0.5, 0.2 + (0.8 * i) / verts.length),
      })
    }
  })

  let mirrors = [
    intersect(verts[0], verts[2], verts[3]),
    intersect(verts[0], verts[1], verts[2]),
    intersect(verts[0], verts[3], verts[1]),
    intersect(verts[1], verts[3], verts[2]),
  ]

  // P, Q, R, S
  // mirror P
  // faces Q, R, S
  // -> T, U, V
  // T, U, V, P
  // mirror T
  // faces U, V, P
  // flip U, P, V
  let lastEdge = 1
  for (let j = 0; j < 2 * p - 2; j++) {
    let [mirror] = mirrors.splice(1, 1)
    let faces = mirrors.map(face => reflect(face, mirror))

    if (j % 2 === 1) {
      faces = [faces[0], faces[2], faces[1]]
    }

    vertices.push({
      vertex: poincare(intersect(...faces)),
      color: new Color().setHSL(j / (2 * p), 0.5, 0.5),
    })

    edges.push({
      vertices: [vertices.length - 1, 0],
      color: new Color().setHSL(j / (2 * p), 0.5, 0.5),
    })
    edges.push({
      vertices: [vertices.length - 1, 2],
      color: new Color().setHSL(j / (2 * p), 0.5, 0.5),
    })
    edges.push({
      vertices: [vertices.length - 1, lastEdge],
      color: new Color().setHSL(j / (2 * p), 0.5, 0.5),
    })
    lastEdge = vertices.length - 1
    mirrors = [mirror, ...faces]
  }
  console.log(edges)
  edges.push({
    vertices: [lastEdge, 3],
    color: new Color().setHSL(1, 1, 0.5),
  })

  return { vertices, edges }
}
