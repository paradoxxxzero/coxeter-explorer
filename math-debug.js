import { Vector3, Color } from 'three'
import { getGoursatTetrahedron, poincare, intersect, reflect } from './math'

export const getHoneyCombExpanded = (order = 1) => {
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
  vertices.push({ vertex: L, order: 1, color: 0xffff00 })
  vertices.push({ vertex: M, order: 1, color: 0xff00ff })
  vertices.push({ vertex: N, order: 1, color: 0x00ffff })
  vertices.push({ vertex: O, order: 1, color: 0xffffff })

  edges.push({ vertices: [L, M], color: 0xffffff })
  edges.push({ vertices: [L, N], color: 0xffffff })
  edges.push({ vertices: [L, O], color: 0xffffff })
  edges.push({ vertices: [M, N], color: 0xffffff })
  edges.push({ vertices: [M, O], color: 0xffffff })
  edges.push({ vertices: [N, O], color: 0xffffff })

  //       C
  //      / \ \
  //     /   \  \
  //    /     \ / D
  //    -------
  //   A       B

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
  edges.push({ vertices: [E, N], color: 0xff9999 })
  edges.push({ vertices: [E, M], color: 0xff9999 })

  // const W = reflect(P, T)
  // const X = reflect(U, T)
  // const Y = reflect(V, T)

  // const F = poincare(intersect(W, Y, X))
  // vertices.push({ vertex: F, color: 0x00ff00 })
  // edges.push({ vertices: [F, L], color: 0x99ff99 })
  // edges.push({ vertices: [F, N], color: 0x99ff99 })
  // edges.push({ vertices: [F, E], color: 0x99ff99 })

  // const Z = reflect(T, W)
  // const AA = reflect(Y, W)
  // const AB = reflect(X, W)

  // const G = poincare(intersect(Z, AA, AB))
  // vertices.push({ vertex: G, color: 0x0000ff })
  // edges.push({ vertices: [G, L], color: 0x9999ff })
  // edges.push({ vertices: [G, N], color: 0x9999ff })
  // edges.push({ vertices: [G, F], color: 0x9999ff })

  // const AC = reflect(W, Z)
  // const AD = reflect(AA, Z)
  // const AE = reflect(AB, Z)

  // const H = poincare(intersect(AC, AE, AD))
  // vertices.push({ vertex: H, color: 0x00ffff })
  // edges.push({ vertices: [H, L], color: 0x99ffff })
  // edges.push({ vertices: [H, N], color: 0x99ffff })
  // edges.push({ vertices: [H, G], color: 0x99ffff })

  // const AF = reflect(Z, AC)
  // const AG = reflect(AE, AC)
  // const AH = reflect(AD, AC)

  // const I = poincare(intersect(AF, AG, AH))
  // vertices.push({ vertex: I, color: 0xffff00 })
  // edges.push({ vertices: [I, L], color: 0xffff99 })
  // edges.push({ vertices: [I, N], color: 0xffff99 })
  // edges.push({ vertices: [I, H], color: 0xffff99 })

  // const AI = reflect(AC, AF)
  // const AJ = reflect(AG, AF)
  // const AK = reflect(AH, AF)

  // const J = poincare(intersect(AI, AK, AJ))
  // vertices.push({ vertex: J, color: 0xff00ff })
  // edges.push({ vertices: [J, L], color: 0xff99ff })
  // edges.push({ vertices: [J, N], color: 0xff99ff })
  // edges.push({ vertices: [J, I], color: 0xff99ff })

  // const AL = reflect(AF, AI)
  // const AM = reflect(AK, AI)
  // const AN = reflect(AJ, AI)

  // const K = poincare(intersect(AL, AM, AN))
  // vertices.push({ vertex: K, color: 0xff99ff })
  // edges.push({ vertices: [K, L], color: 0xff9900 })
  // edges.push({ vertices: [K, N], color: 0xff9900 })
  // edges.push({ vertices: [K, J], color: 0xff9900 })

  // const AO = reflect(AI, AL)
  // const AP = reflect(AM, AL)
  // const AQ = reflect(AN, AL)

  // const KK = poincare(intersect(AO, AQ, AP))
  // vertices.push({ vertex: KK, color: 0x99ff99 })
  // edges.push({ vertices: [KK, L], color: 0x00ff99 })
  // edges.push({ vertices: [KK, N], color: 0x00ff99 })
  // edges.push({ vertices: [KK, K], color: 0x00ff99 })

  // edges.push({ vertices: [KK, O], color: 0x999999 })

  const TA = reflect(P, R)
  const TB = reflect(Q, R)
  const TC = reflect(S, R)

  const UA = poincare(intersect(TA, TB, TC))
  vertices.push({ vertex: UA, color: 0x559955 })
  edges.push({ vertices: [UA, O], color: 0x55cc55 })
  edges.push({ vertices: [UA, L], color: 0x55cc55 })
  edges.push({ vertices: [UA, M], color: 0x55cc55 })

  const TD = reflect(R, TB)
  const TE = reflect(TA, TB)
  const TF = reflect(TC, TB)

  const UB = poincare(intersect(TD, TE, TF))
  vertices.push({ vertex: UB, color: 0x995555 })
  edges.push({ vertices: [UB, O], color: 0xcc5555 })
  edges.push({ vertices: [UB, L], color: 0xcc5555 })
  edges.push({ vertices: [UB, UA], color: 0xcc5555 })

  edges.push({ vertices: [UB, N], color: 0xcc5555 })

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
  vertices.push({ vertex: L, order: 1, color: 0xffff00 })
  vertices.push({ vertex: M, order: 1, color: 0xff00ff })
  vertices.push({ vertex: N, order: 1, color: 0x00ffff })
  vertices.push({ vertex: O, order: 1, color: 0xffffff })

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
