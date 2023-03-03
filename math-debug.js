import { Vector3, Color } from 'three'

import Simplex from './math/Simplex'
import {
  getGoursatSimplex,
  intersect,
  poincare,
  reflect,
} from './math/hypermath'
import { draw } from './math'
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

  draw(fundamentalSimplex, new Color(0xffffff))
  draw(fundamentalSimplex.reflect(3), new Color(0xffff00))
  draw(fundamentalSimplex.reflect(3).reflect(2), new Color(0xffff00))
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

export const renderHoneyCombMirrors = (simplex, coxeter) => {
  // simplex.faces.forEach(f => f.normalize())
  draw(simplex, new Color(0xffffff), true, coxeter)
  draw(simplex.reflect(0), new Color(0xff0000), true, coxeter) // OK
  draw(simplex.reflect(1), new Color(0x00ff00), true, coxeter) // OK
  draw(simplex.reflect(2), new Color(0x0000ff), true, coxeter)
  draw(simplex.reflect(3), new Color(0xffff00), true, coxeter) // OK
  // draw(simplex.reflect(3).reflect(2), new Color(0xffff00), true, coxeter)
}

export const renderHoneyCombNew = (simplex, coxeter) => {
  // simplex.faces.forEach(f => f.normalize())
  draw(simplex, new Color(0xffffff), true, coxeter)
  draw(simplex.reflect(0), new Color(0xff0000), true, coxeter) // OK
  draw(simplex.reflect(1), new Color(0x00ff00), true, coxeter) // OK
  draw(simplex.reflect(2), new Color(0x0000ff), true, coxeter)
  draw(simplex.reflect(3), new Color(0xffff00), true, coxeter) // OK
  // draw(simplex.reflect(3).reflect(2), new Color(0xffff00), true, coxeter)
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
