import {
  Vector2,
  Vector3,
  Vector4 as ThreeVector4,
  Sphere,
  Matrix3,
  Matrix4,
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
  v1.yzw.dot(v2.yzw) + c * v1.x * v2.x

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
  const nr = 1 / sqrt(d)
  return new Vector4(v.x * nr, v.y * nr, v.z * nr, v.w * nr)
}

export const poincare = (v, c = curvature) => {
  // z = -c
  // if (c <= 0 || v.w < 1) {
  const nr = 1 / (1 - c * v.x)
  return v.yzw.multiplyScalar(nr)
  // }
}

// export const getGoursatTetrahedron = (
//   AB = 5,
//   AC = 2,
//   AD = 2,
//   BC = 3,
//   BD = 2,
//   CD = 4
// ) => {
//   const c01 = -cos(PI / AB)
//   const c02 = -cos(PI / AC)
//   const c03 = -cos(PI / AD)
//   const c12 = -cos(PI / BC)
//   const c13 = -cos(PI / BD)
//   const c23 = -cos(PI / CD)
//   // const activeMirrors = [1, 0, 0, 0]

//   // Goursat tetrahedron :
//   // Mirrors expressed as normal in minkowski space
//   const A = new Vector4(1, 0, 0, 0)
//   const B = new Vector4(c01, sqrt(1 - c01 * c01), 0, 0)
//   const C = new Vector4(c02, 0, 0, 0)
//   C.y = (c12 - C.x * B.x) / B.y
//   C.z = sqrt(abs(1 - C.xy.dot(C.xy)))

//   const D = new Vector4(c03, 0, 0, 0)
//   D.y = (c13 - D.x * B.x) / B.y
//   D.z = (c23 - D.xy.dot(C.xy)) / C.z
//   D.w = -sqrt(abs(D.xyz.dot(D.xyz) - 1))

//   return [A, B, C, D]
// }
export const proj = (u, v) => u.clone().multiplyScalar(dot(u, v))

export const gramSchmidt = (v1, v2, v3, v4, u1, u2, u3, u4) => {
  const w1 = u1.clone()
  const w2 = u2.clone().sub(proj(w1, v2))
  const w3 = u3.clone().sub(proj(w1, v3)).sub(proj(w2, v3))
  const w4 = u4.clone().sub(proj(w1, v4)).sub(proj(w2, v4)).sub(proj(w3, v4))

  return [w1, w2, w3, w4].map(v => v.normalize())
}

export const getGoursatTetrahedron = (
  A = 2,
  B = 5,
  C = 3,
  A_ = 2,
  B_ = 4,
  C_ = 2
) => {
  const id = 1
  const m = [
    new Vector4(id, -cos(PI / A_), -cos(PI / B_), -cos(PI / C)),
    new Vector4(-cos(PI / A_), id, -cos(PI / C_), -cos(PI / B)),
    new Vector4(-cos(PI / B_), -cos(PI / C_), id, -cos(PI / A)),
    new Vector4(-cos(PI / C), -cos(PI / B), -cos(PI / A), id),
  ]
  const basis = [
    new Vector4(1, 0, 0, 0),
    new Vector4(0, 1, 0, 0),
    new Vector4(0, 0, 1, 0),
    new Vector4(0, 0, 0, 1),
  ]
  const W = gramSchmidt(...m, ...basis)
  console.log('GRAMSCHMIDT', ...W)
  const W_ = new Matrix4().set(...W[3], ...W[2], ...W[1], ...W[0]).transpose()
  const D = new Matrix4()
  D.elements[0] = -1
  const U = D.multiply(W_).transpose()
  const U_ = [
    new Vector4(U.elements[12], U.elements[13], U.elements[14], U.elements[15]),
    new Vector4(U.elements[8], U.elements[9], U.elements[10], U.elements[11]),
    new Vector4(U.elements[4], U.elements[5], U.elements[6], U.elements[7]),
    new Vector4(U.elements[0], U.elements[1], U.elements[2], U.elements[3]),
  ]

  return U_.map(v => normalize(v))
}

export const getHoneyComb = (order = 1) => {
  const [A, B, C, D] = getGoursatTetrahedron() //3.5, 3.8, 3.1, 2.2, 2.01, 3.1) //getGoursatTetrahedron(3, 3, 3, 3)
  const vertices = []
  const edges = []

  // // Plot Goursat Tetrahedron:
  vertices.push({ vertex: poincare(A), order: 1, color: 0xffff00 })
  vertices.push({ vertex: poincare(B), order: 1, color: 0xff00ff })
  vertices.push({ vertex: poincare(C), order: 1, color: 0x00ffff })
  vertices.push({ vertex: poincare(D), order: 1, color: 0xffffff })

  edges.push({ vertices: [0, 1], color: 0xffffff })
  edges.push({ vertices: [0, 2], color: 0xffffff })
  edges.push({ vertices: [0, 3], color: 0xffffff })
  edges.push({ vertices: [1, 2], color: 0xffffff })
  edges.push({ vertices: [1, 3], color: 0xffffff })
  edges.push({ vertices: [2, 3], color: 0xffffff })

  // Mirrors
  const P = intersect(A, B, C)
  const Q = intersect(B, C, D)
  const R = intersect(C, D, A)
  const S = intersect(D, A, B)

  const T = reflect(Q, P)
  const U = reflect(R, P)
  const V = reflect(S, P)

  vertices.push({ vertex: poincare(intersect(T, U, V)), color: 0xff0000 })
  edges.push({ vertices: [4, 0], color: 0xff9999 })
  edges.push({ vertices: [4, 1], color: 0xff9999 })
  edges.push({ vertices: [4, 2], color: 0xff9999 })

  const Z = reflect(P, Q)
  const a = reflect(R, Q)
  const b = reflect(S, Q)

  vertices.push({ vertex: poincare(intersect(a, b, Z)), color: 0x00ff00 })
  edges.push({ vertices: [5, 1], color: 0x99ff99 })
  edges.push({ vertices: [5, 2], color: 0x99ff99 })
  edges.push({ vertices: [5, 3], color: 0x99ff99 })

  const W = reflect(P, R)
  const X = reflect(Q, R)
  const Y = reflect(S, R)

  vertices.push({ vertex: poincare(intersect(W, X, Y)), color: 0x0000ff })
  edges.push({ vertices: [6, 0], color: 0x9999ff })
  edges.push({ vertices: [6, 2], color: 0x9999ff })
  edges.push({ vertices: [6, 3], color: 0x9999ff })

  const c = reflect(P, S)
  const d = reflect(Q, S)
  const e = reflect(R, S)

  vertices.push({ vertex: poincare(intersect(c, d, e)), color: 0x00ffff })
  edges.push({ vertices: [7, 0], color: 0x99ffff })
  edges.push({ vertices: [7, 1], color: 0x99ffff })
  edges.push({ vertices: [7, 3], color: 0x99ffff })

  // let R = A,
  //   S = B,
  //   T = C,
  //   U = D
  // for (let i = 0; i < 4; i++) {
  //   U = reflect(U, R)
  //   S = reflect(S, R)
  //   T = reflect(T, R)
  //   R = U

  //   vertices.push({ vertex: poincare(intersect(S, R, T)), order: i + 2 })

  //   edges.push([4 + i, 0])
  //   edges.push([4 + i, 1])
  //   edges.push([4 + i, 2])
  //   edges.push([4 + i, 3])
  //   // vertices.push({ vertex: poincare(intersect(E, F, G)), order: 2 })
  // }
  // vertices.push({ vertex: poincare(intersect(A, E, F)), order: 2 })
  // vertices.push({ vertex: poincare(intersect(A, E, F)), order: 2 })
  // vertices.push({ vertex: poincare(intersect(A, E, F)), order: 2 })

  // const H = reflect(E, E)
  // const I = reflect(C, E)
  // const J = reflect(D, E)

  // vertices.push({ vertex: poincare(intersect(F, E, A)), order: 2 })
  // vertices.push({ vertex: poincare(intersect(A, G, F)), order: 2 })
  // vertices.push({ vertex: poincare(intersect(E, A, G)), order: 2 })

  // vertices.push({ vertex: poincare(intersect(A, E, C)), order: 2 })
  // vertices.push({ vertex: poincare(intersect(C, D, A)), order: 2 })
  // vertices.push({ vertex: poincare(intersect(D, A, G)), order: 2 })

  // edges.push([3, 4])
  // edges.push([3, 5])
  // edges.push([3, 6])
  // edges.push([4, 5])
  // edges.push([4, 6])
  // edges.push([5, 6])
  // edges.push([0, 4])
  // edges.push([0, 5])
  // edges.push([0, 6])

  return { vertices, edges }
}

//   const vertices = []
//   const edges = []

//   for (let i = -size; i < size; i++) {
//     for (let j = -size; j < size; j++) {
//       for (let k = -size; k < size; k++) {
//         vertices.push({
//           vertex: new Vector3(i + 0.5, j + 0.5, k + 0.5),
//           order: Math.abs(i + 0.5) + Math.abs(j + 0.5) + Math.abs(k + 0.5),
//         })
//       }
//     }
//   }
//   for (let i = 0; i < vertices.length; i++) {
//     for (let j = i + 1; j < vertices.length; j++) {
//       const a = vertices[i].vertex
//       const b = vertices[j].vertex
//       if (a.distanceTo(b) < 1.1) {
//         edges.push([i, j])
//       }
//     }
//   }

//   return { vertices, edges }
// }
