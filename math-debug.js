import { Vector3 } from 'three'
import { getGoursatTetrahedron, poincare, intersect, reflect } from './math'

export const getHoneyCombExpanded = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4

  const [A, B, C, D] = getGoursatTetrahedron(p, 2, 2, q, 2, r) //3.5, 3.8, 3.1, 2.2, 2.01, 3.1) //getGoursatTetrahedron(3, 3, 3, 3)
  const vertices = []
  const edges = []

  // // Plot Goursat Tetrahedron:
  vertices.push({ vertex: poincare(A), order: 1, color: 0xffff00 }) // YELLOW
  vertices.push({ vertex: poincare(B), order: 1, color: 0xff00ff }) // PINK
  vertices.push({ vertex: poincare(C), order: 1, color: 0x00ffff }) // CYAN
  vertices.push({ vertex: poincare(D), order: 1, color: 0xffffff }) // WHITE

  edges.push({ vertices: [0, 1], color: 0xffffff })
  edges.push({ vertices: [0, 2], color: 0xffffff })
  edges.push({ vertices: [0, 3], color: 0xffffff })
  edges.push({ vertices: [1, 2], color: 0xffffff })
  edges.push({ vertices: [1, 3], color: 0xffffff })
  edges.push({ vertices: [2, 3], color: 0xffffff })

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

  vertices.push({ vertex: poincare(intersect(T, U, V)), color: 0xff0000 })
  edges.push({ vertices: [4, 0], color: 0xff9999 })
  edges.push({ vertices: [4, 2], color: 0xff9999 })
  edges.push({ vertices: [4, 1], color: 0xff9999 })

  const W = reflect(P, T)
  const X = reflect(U, T)
  const Y = reflect(V, T)

  vertices.push({ vertex: poincare(intersect(W, Y, X)), color: 0x00ff00 })
  edges.push({ vertices: [5, 0], color: 0x99ff99 })
  edges.push({ vertices: [5, 2], color: 0x99ff99 })
  edges.push({ vertices: [5, 4], color: 0x99ff99 })

  const Z = reflect(T, W)
  const AA = reflect(Y, W)
  const AB = reflect(X, W)

  vertices.push({ vertex: poincare(intersect(Z, AA, AB)), color: 0x0000ff })
  edges.push({ vertices: [6, 0], color: 0x9999ff })
  edges.push({ vertices: [6, 2], color: 0x9999ff })
  edges.push({ vertices: [6, 5], color: 0x9999ff })

  const AC = reflect(W, Z)
  const AD = reflect(AA, Z)
  const AE = reflect(AB, Z)

  vertices.push({ vertex: poincare(intersect(AC, AE, AD)), color: 0x00ffff })
  edges.push({ vertices: [7, 0], color: 0x99ffff })
  edges.push({ vertices: [7, 2], color: 0x99ffff })
  edges.push({ vertices: [7, 6], color: 0x99ffff })

  const AF = reflect(Z, AC)
  const AG = reflect(AE, AC)
  const AH = reflect(AD, AC)

  vertices.push({ vertex: poincare(intersect(AF, AG, AH)), color: 0xffff00 })
  edges.push({ vertices: [8, 0], color: 0xffff99 })
  edges.push({ vertices: [8, 2], color: 0xffff99 })
  edges.push({ vertices: [8, 7], color: 0xffff99 })

  const AI = reflect(AC, AF)
  const AJ = reflect(AG, AF)
  const AK = reflect(AH, AF)

  vertices.push({ vertex: poincare(intersect(AI, AK, AJ)), color: 0xff00ff })
  edges.push({ vertices: [9, 0], color: 0xff99ff })
  edges.push({ vertices: [9, 2], color: 0xff99ff })
  edges.push({ vertices: [9, 8], color: 0xff99ff })

  const AL = reflect(AF, AI)
  const AM = reflect(AK, AI)
  const AN = reflect(AJ, AI)

  vertices.push({ vertex: poincare(intersect(AL, AM, AN)), color: 0xff99ff })
  edges.push({ vertices: [10, 0], color: 0xff9900 })
  edges.push({ vertices: [10, 2], color: 0xff9900 })
  edges.push({ vertices: [10, 9], color: 0xff9900 })

  const AO = reflect(AI, AL)
  const AP = reflect(AM, AL)
  const AQ = reflect(AN, AL)

  vertices.push({ vertex: poincare(intersect(AO, AQ, AP)), color: 0x99ff99 })
  edges.push({ vertices: [11, 0], color: 0x00ff99 })
  edges.push({ vertices: [11, 2], color: 0x00ff99 })
  edges.push({ vertices: [11, 10], color: 0x00ff99 })

  edges.push({ vertices: [11, 3], color: 0x999999 })

  return { vertices, edges }
}

export const getHoneyCombAllFaces = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4

  const [A, B, C, D] = getGoursatTetrahedron(p, 2, 2, q, 2, r) //3.5, 3.8, 3.1, 2.2, 2.01, 3.1) //getGoursatTetrahedron(3, 3, 3, 3)
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
