import { Vector3, Color } from 'three'

import Simplex from './math/Simplex'
import {
  getGoursatSimplex,
  intersect,
  poincare,
  reflect,
} from './math/hypermath'
import { draw, drawDebug } from './math'
import Vertex from './math/Vertex'
import Edge from './math/Edge'

export const getHoneyCombNewAPI = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4
  const activeMirrors = [0, 1, 2, 3]
  const coxeter = {
    p,
    q,
    r,
    activeMirrors,
  }
  const fundamental = getGoursatSimplex(p, 2, 2, q, 2, r)
  const fundamentalSimplex = new Simplex([
    intersect(fundamental[0], fundamental[1], fundamental[2]),
    intersect(fundamental[0], fundamental[2], fundamental[3]),
    intersect(fundamental[0], fundamental[3], fundamental[1]),
    intersect(fundamental[1], fundamental[3], fundamental[2]),
  ])

  drawDebug(fundamentalSimplex, new Color(0xffffff))
  drawDebug(fundamentalSimplex.reflect(3), new Color(0xffff00))
  drawDebug(fundamentalSimplex.reflect(3).reflect(2), new Color(0xffff00))
  // let seed
  // let simplex = fundamentalSimplex
  // for (let j = 0; j < 2 * coxeter.p; j++) {
  //   simplex = simplex.reflect(j % 2)
  //   if (j == 2) {
  //     seed = simplex
  //   }
  //   drawDebug(simplex, new Color().setHSL(0.5, 0.5, 0.5))
  // }
  // seed = seed.reflect(2)
  // drawDebug(seed)

  // simplex = fundamentalSimplex.reflect(3)
  // drawDebug(simplex)

  // for (let j = 0; j < 2 * coxeter.p; j++) {
  //   simplex = simplex.reflect(j % 2)
  //   if (j == 2) {
  //     seed = simplex
  //   }
  //   drawDebug(simplex, new Color().setHSL(0.25, 0.5, 0.5))
  // }
  // seed = seed.reflect(2)
  // drawDebug(seed)
  //       C
  //      / \ \
  //     /   \  \
  //    /     \ / D
  //    -------
  //   A       B

  return { vertices: Vertex.all, edges: Edge.all }
}

export const getHoneyCombExpanded = (order = 1) => {
  const vertices = []
  const edges = []
  const pushV = (vertex, color) => {
    vertices.push({ vertex, color: new Color(color) })
  }
  const pushE = (edge, color) => {
    edges.push({
      vertex1: { vertex: edge[0], color: new Color(color) },
      vertex2: { vertex: edge[1], color: new Color(color) },
      color: new Color(color),
    })
  }
  const p = 5
  const q = 3
  const r = 4

  const [A, B, C, D] = getGoursatSimplex(p, 2, 2, q, 2, r) //3.5, 3.8, 3.1, 2.2, 2.01, 3.1) //getGoursatTetrahedron(3, 3, 3, 3)

  const L = poincare(A)
  const M = poincare(B)
  const N = poincare(C)
  const O = poincare(D)

  // // Plot Goursat Tetrahedron:
  pushV(L, 0xffff00)
  pushV(M, 0xff00ff)
  pushV(N, 0x00ffff)
  pushV(O, 0xffffff)

  pushE([L, M], 0xffffff)
  pushE([L, N], 0xffffff)
  pushE([L, O], 0xffffff)
  pushE([M, N], 0xffffff)
  pushE([M, O], 0xffffff)
  pushE([N, O], 0xffffff)

  //       C             /\
  //   Q  / \ \          /
  //     / P \S \       /
  //    /     \ / D
  //    -------
  //   A   R   B

  // Mirrors
  const P = intersect(A, B, C)
  const Q = intersect(A, C, D)
  const R = intersect(A, D, B)
  const S = intersect(B, D, C)

  // const T = reflect(Q, P)
  // const U = reflect(R, P)
  // const V = reflect(S, P)

  // const E = poincare(intersect(T, U, V))
  // pushV(E, 0xff0000)
  // pushE([E, L], 0xff9999)
  // pushE([E, N], 0xff9999)
  // pushE([E, M], 0xff9999)

  // const W = reflect(P, T)
  // const X = reflect(U, T)
  // const Y = reflect(V, T)

  // const F = poincare(intersect(W, Y, X))
  // pushV(F, 0x00ff00)
  // pushE([F, L], 0x99ff99)
  // pushE([F, N], 0x99ff99)
  // pushE([F, E], 0x99ff99)

  const ZA = reflect(P, S)
  const ZB = reflect(Q, S)
  const ZC = reflect(R, S)

  console.log(S, ZA, ZB, ZC)
  const XA = poincare(intersect(ZA, ZB, ZC))
  pushV(XA, 0xfccfcf)
  pushE([XA, M], 0xf99f9f)
  pushE([XA, N], 0xf99f9f)
  pushE([XA, O], 0xf99f9f)

  const ZD = reflect(S, ZC)
  const ZE = reflect(ZA, ZC)
  const ZF = reflect(ZB, ZC)
  console.log(ZC, ZD, ZE, ZF)

  const XB = poincare(intersect(ZD, ZF, ZE))
  pushV(XB, 0xfccfcf)
  pushE([XB, M], 0xf99f9f)
  pushE([XB, O], 0xf99f9f)
  pushE([XB, XA], 0xf99f9f)

  // const Z = reflect(T, W)
  // const AA = reflect(Y, W)
  // const AB = reflect(X, W)

  // const G = poincare(intersect(Z, AA, AB))
  // pushV(G, 0x0000ff)
  // pushE([G, L], 0x9999ff)
  // pushE([G, N], 0x9999ff)
  // pushE([G, F], 0x9999ff)

  // const AC = reflect(W, Z)
  // const AD = reflect(AA, Z)
  // const AE = reflect(AB, Z)

  // const H = poincare(intersect(AC, AE, AD))
  // pushV(H, 0x00ffff)
  // pushE([H, L], 0x99ffff)
  // pushE([H, N], 0x99ffff)
  // pushE([H, G], 0x99ffff)

  // const AF = reflect(Z, AC)
  // const AG = reflect(AE, AC)
  // const AH = reflect(AD, AC)

  // const I = poincare(intersect(AF, AG, AH))
  // pushV(I, 0xffff00)
  // pushE([I, L], 0xffff99)
  // pushE([I, N], 0xffff99)
  // pushE([I, H], 0xffff99)

  // const AI = reflect(AC, AF)
  // const AJ = reflect(AG, AF)
  // const AK = reflect(AH, AF)

  // const J = poincare(intersect(AI, AK, AJ))
  // pushV(J, 0xff00ff)
  // pushE([J, L], 0xff99ff)
  // pushE([J, N], 0xff99ff)
  // pushE([J, I], 0xff99ff)

  // const AL = reflect(AF, AI)
  // const AM = reflect(AK, AI)
  // const AN = reflect(AJ, AI)

  // const K = poincare(intersect(AL, AM, AN))
  // pushV(K, 0xff99ff)
  // pushE([K, L], 0xff9900)
  // pushE([K, N], 0xff9900)
  // pushE([K, J], 0xff9900)

  // const AO = reflect(AI, AL)
  // const AP = reflect(AM, AL)
  // const AQ = reflect(AN, AL)

  // const KK = poincare(intersect(AO, AQ, AP))
  // pushV(KK, 0x99ff99)
  // pushE([KK, L], 0x00ff99)
  // pushE([KK, N], 0x00ff99)
  // pushE([KK, K], 0x00ff99)

  // pushE([KK, O], 0x999999)

  // const TA = reflect(P, R)
  // const TB = reflect(Q, R)
  // const TC = reflect(S, R)

  // const UA = poincare(intersect(TA, TB, TC))
  // pushV(UA, 0x559955)
  // pushE([UA, O], 0x55cc55)
  // pushE([UA, L], 0x55cc55)
  // pushE([UA, M], 0x55cc55)

  // const TD = reflect(R, TB)
  // const TE = reflect(TA, TB)
  // const TF = reflect(TC, TB)

  // const UB = poincare(intersect(TD, TE, TF))
  // pushV(UB, 0x995555)
  // pushE([UB, O], 0xcc5555)
  // pushE([UB, L], 0xcc5555)
  // pushE([UB, UA], 0xcc5555)

  // pushE([UB, N], 0xcc5555)

  return { vertices, edges }
}

export const getHoneyCombAllFaces = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4

  const [A, B, C, D] = getGoursatTetrahedron(p, 2, 2, q, 2, r) //3.5, 3.8, 3.1, 2.2, 2.01, 3.1) //getGoursatTetrahedron(3, 3, 3, 3)
  const vertices = []
  const edges = []
  const L = poincare(A)
  const M = poincare(B)
  const N = poincare(C)
  const O = poincare(D)

  // // Plot Goursat Tetrahedron:
  vertices.push({ vertex: L, color: 0xffff00 })
  vertices.push({ vertex: M, color: 0xff00ff })
  vertices.push({ vertex: N, color: 0x00ffff })
  vertices.push({ vertex: O, color: 0xffffff })

  edges.push({ vertices: [L, M], color: 0xffffff })
  edges.push({ vertices: [L, N], color: 0xffffff })
  edges.push({ vertices: [L, O], color: 0xffffff })
  edges.push({ vertices: [M, N], color: 0xffffff })
  edges.push({ vertices: [M, O], color: 0xffffff })
  edges.push({ vertices: [N, O], color: 0xffffff })

  // Mirrors
  const P = intersect(A, B, C)
  const Q = intersect(A, C, D)
  const R = intersect(A, D, B)
  const S = intersect(B, D, C)

  const T = reflect(Q, P)
  const U = reflect(R, P)
  const V = reflect(S, P)

  const E = poincare(intersect(T, U, V))
  vertices.push({ vertex: E, color: 0xff0000 })
  edges.push({ vertices: [E, L], color: 0xff9999 })
  edges.push({ vertices: [E, M], color: 0xff9999 })
  edges.push({ vertices: [E, N], color: 0xff9999 })

  const W = reflect(P, Q)
  const X = reflect(R, Q)
  const Y = reflect(S, Q)

  const F = poincare(intersect(W, Y, X))
  vertices.push({ vertex: F, color: 0x00ff00 })
  edges.push({ vertices: [F, M], color: 0x99ff99 })
  edges.push({ vertices: [F, N], color: 0x99ff99 })
  edges.push({ vertices: [F, O], color: 0x99ff99 })

  const Z = reflect(P, R)
  const AA = reflect(Q, R)
  const AB = reflect(S, R)

  const G = poincare(intersect(Z, AA, AB))
  vertices.push({ vertex: G, color: 0x0000ff })
  edges.push({ vertices: [G, L], color: 0x9999ff })
  edges.push({ vertices: [G, N], color: 0x9999ff })
  edges.push({ vertices: [G, O], color: 0x9999ff })

  const AC = reflect(P, S)
  const AD = reflect(Q, S)
  const AE = reflect(R, S)

  const H = poincare(intersect(AC, AD, AE))
  vertices.push({ vertex: H, color: 0x00ffff })
  edges.push({ vertices: [H, L], color: 0x99ffff })
  edges.push({ vertices: [H, M], color: 0x99ffff })
  edges.push({ vertices: [H, O], color: 0x99ffff })

  return { vertices, edges }
}

export const getTestHoneyComb = (size = 10) => {
  const vertices = []
  const edges = []

  for (let i = -size; i < size; i++) {
    for (let j = -size; j < size; j++) {
      for (let k = -size; k < size; k++) {
        vertices.push({
          vertex: new Vector3(i + 0.5, j + 0.5, k + 0.5),
          order: 1, //Math.abs(i + 0.5) + Math.abs(j + 0.5) + Math.abs(k + 0.5),
        })
      }
    }
  }
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      const a = vertices[i].vertex
      const b = vertices[j].vertex
      if (a.distanceTo(b) < 1.1) {
        edges.push({ vertices: [i, j], order: 1 })
      }
    }
  }

  return { vertices, edges }
}

export const getHoneyCombManual = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4

  const verts = getGoursatTetrahedron(p, 2, 2, q, 2, r)
  const vertices = []
  const edges = []
  const [centerVertex, faceLastVertex, faceCenterVertex, faceFirstVertex] =
    verts.map(v => poincare(v))
  const color = new Color().setHSL(0, 0.5, 0.9)
  // vertices.push({ vertex: centerVertex, color })
  // vertices.push({ vertex: faceCenterVertex, color })
  vertices.push({ vertex: faceLastVertex, color })

  edges.push({ vertices: [centerVertex, faceFirstVertex], color })
  edges.push({ vertices: [centerVertex, faceCenterVertex], color })
  edges.push({ vertices: [centerVertex, faceLastVertex], color })
  edges.push({ vertices: [faceFirstVertex, faceCenterVertex], color })
  edges.push({ vertices: [faceFirstVertex, faceLastVertex], color })
  edges.push({ vertices: [faceCenterVertex, faceLastVertex], color })

  const fundamentalMirrors = [
    intersect(verts[0], verts[2], verts[3]),
    intersect(verts[0], verts[1], verts[2]),
    intersect(verts[0], verts[3], verts[1]),
    intersect(verts[1], verts[3], verts[2]),
  ]

  let mirrors = [...fundamentalMirrors]
  let lastVertex = faceLastVertex
  for (let j = 0; j < 2 * p - 2; j++) {
    const color = new Color().setHSL(j / (2 * p), 0.5, 0.5)

    let [mirror] = mirrors.splice(1, 1)
    let faces = mirrors.map(face => reflect(face, mirror))

    const vertex = poincare(intersect(...faces))

    if (j % 2 === 1) {
      vertices.push({
        vertex,
        color,
      })
    }

    edges.push({
      vertices: [vertex, centerVertex],
      color,
    })
    edges.push({
      vertices: [vertex, faceCenterVertex],
      color,
    })
    edges.push({
      vertices: [vertex, lastVertex],
      color,
    })
    lastVertex = vertex
    mirrors = [mirror, ...faces]
  }
  edges.push({
    vertices: [lastVertex, faceFirstVertex],
    color,
  })

  return { vertices, edges }
}
