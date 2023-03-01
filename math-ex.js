import {
  Vector2,
  Vector3,
  Vector4 as ThreeVector4,
  Sphere,
  Matrix3,
  Matrix4,
  Color,
} from 'three'
import { getGoursatSimplex } from './math'
const { abs, cos, sin, min, max, sqrt, PI } = Math

export const dot = (v1, v2, c = curvature) =>
  v1.xyz.dot(v2.xyz) + c * v1.w * v2.w

export const cross = (v1, v2, v3, c = curvature) =>
  new Vector4(
    (c || 1) *
      (+v2.y * v3.z * v1.w -
        v3.y * v2.z * v1.w -
        v1.y * v3.z * v2.w +
        v3.y * v1.z * v2.w +
        v3.w * v1.y * v2.z -
        v3.w * v2.y * v1.z),
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
    -v1.x * v2.y * v3.z +
      v1.x * v3.y * v2.z +
      v2.x * v1.y * v3.z -
      v2.x * v3.y * v1.z -
      v3.x * v1.y * v2.z +
      v3.x * v2.y * v1.z
  )

export const poincare = (v, c = curvature) => {
  // z = -c
  // if (c <= 0 || v.w < 1) {
  const nr = 1 / (1 - c * v.x)
  return v.yzw.multiplyScalar(nr)
  // }
}
export const proj = (u, v) => u.clone().multiplyScalar(dot(u, v))

export const gramSchmidt = (v1, v2, v3, v4, u1, u2, u3, u4) => {
  const w1 = u1.clone()
  const w2 = u2.clone().sub(proj(w1, v2))
  const w3 = u3.clone().sub(proj(w1, v3)).sub(proj(w2, v3))
  const w4 = u4.clone().sub(proj(w1, v4)).sub(proj(w2, v4)).sub(proj(w3, v4))

  return [w1, w2, w3, w4].map(v => v.normalize())
}

export const getGoursatTetrahedronGramSchhmidt = (A, B, C, A_, B_, C_) => {
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

const drawSimplex = (simplex, vertices, edges, depth, expand, subexpand) => {
  const verts = simplex.map(v =>
    poincare(intersect(...simplex.filter(face => face !== v)))
  )

  verts.forEach(vert => {
    const color = new Color().setHSL(vert.length(), 0.5, 0.5)
    if (vertexTokens.has(vert.token)) {
      return
    }
    vertexTokens.add(vert.token)
    vertices.push({ vertex: vert, color })
  })

  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const edge = [verts[i], verts[j]]
      const color = new Color().setHSL(
        0.5 * (edge[0].length() + edge[1].length()),
        0.5,
        0.5
      )
      if (edgeTokens.has(tokenEdge(edge))) {
        continue
      }
      edgeTokens.add(tokenEdge(edge))
      edges.push({ vertices: edge, color })
    }
  }
  return min(...verts.map(v => v.length()))
}

const expandSimplex = simplex =>
  simplex.map((_, i) => reflectSimplex(simplex, i))

const filteredExpandSimplex = simplex =>
  expandSimplex(simplex).filter(subSimplex => registerSimplex(subSimplex))

export const getHoneyCombBruteForce = (order = 2) => {
  const p = 5
  const q = 3
  const r = 4

  const verts = getGoursatSimplex(p, 2, 2, q, 2, r)
  const vertices = []
  const edges = []

  const fundamentalMirrors = [
    intersect(verts[0], verts[2], verts[3]),
    intersect(verts[0], verts[1], verts[2]),
    intersect(verts[0], verts[3], verts[1]),
    intersect(verts[1], verts[3], verts[2]),
  ]

  order = 20
  let currentOrderTetrahedra = []
  let previousOrderTetrahedra = [fundamentalMirrors]
  for (let i = 0; i < order; i++) {
    currentOrderTetrahedra = []
    for (let j = 0; j < previousOrderTetrahedra.length; j++) {
      const simplex = previousOrderTetrahedra[j]
      currentOrderTetrahedra.push(filteredExpandSimplex(simplex))
    }
    previousOrderTetrahedra = []
    for (let j = 0; j < currentOrderTetrahedra.length; j++) {
      const currentOrderTetrahedraExpand = currentOrderTetrahedra[j]
      for (let k = 0; k < currentOrderTetrahedraExpand.length; k++) {
        if (
          drawSimplex(
            currentOrderTetrahedraExpand[k],
            vertices,
            edges,
            i,
            j,
            k
          ) < 0.75
        ) {
          previousOrderTetrahedra.push(currentOrderTetrahedraExpand[k])
        }
      }
    }
  }

  return { vertices, edges }
}
