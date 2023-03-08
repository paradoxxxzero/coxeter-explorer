import { Vector3, Color } from 'three'

import Simplex from './math/Simplex'
import {
  getGoursatSimplex,
  intersect,
  poincare,
  reflect,
} from './math/hypermath'
import { draw, renderFace, renderCell } from './math'
import Vertex from './math/Vertex'
import Edge from './math/Edge'
import { knuthBendix, rewrite } from './math/group'

export const renderHoneyCombMirrors = (simplex, coxeter) => {
  // simplex.faces.forEach(f => f.normalize())
  draw(simplex, new Color(0xffffff), true, coxeter)
  draw(simplex.reflect(0), new Color(0xff0000), true, coxeter) // OK
  draw(simplex.reflect(1), new Color(0x00ff00), true, coxeter) // OK
  draw(simplex.reflect(2), new Color(0x0000ff), true, coxeter)
  draw(simplex.reflect(3), new Color(0xffff00), true, coxeter) // OK
  // draw(simplex.reflect(3).reflect(2), new Color(0xffff00), true, coxeter)
}

export const renderHoneyCombScale = (simplex, coxeter) => {
  // simplex.faces.forEach(f => f.normalize())
  let s = 0.1
  const color = new Color().setHSL(-s, 0.5, 0.5)
  const d = simplex => {
    draw(simplex, color.offsetHSL(s, 0, 0).clone(), true, coxeter)
    console.log(simplex)
  }
  coxeter.DEBUG = true
  d(simplex)
  d((simplex = simplex.reflect(3)))
  d((simplex = simplex.reflect(2)))
  d((simplex = simplex.reflect(1)))
  d((simplex = simplex.reflect(0)))
  d((simplex = simplex.reflect(1)))
  d((simplex = simplex.reflect(2)))
  d((simplex = simplex.reflect(0)))
  d((simplex = simplex.reflect(1)))
  d((simplex = simplex.reflect(0)))
  d((simplex = simplex.reflect(2)))
  d((simplex = simplex.reflect(3)))
  d((simplex = simplex.reflect(2)))
  d((simplex = simplex.reflect(0)))
  d((simplex = simplex.reflect(1)))
  d((simplex = simplex.reflect(0)))
  d((simplex = simplex.reflect(2)))
  d((simplex = simplex.reflect(3)))
  d((simplex = simplex.reflect(2)))
  d((simplex = simplex.reflect(1)))
  d((simplex = simplex.reflect(0)))
  d((simplex = simplex.reflect(2)))
}

export const renderHoneyCombNew = (simplex, coxeter) => {
  let s = 0.1
  const color = new Color().setHSL(-0.1, 0.5, 0.5)
  const d = simplex => {
    draw(simplex, color.offsetHSL(s, 0, 0).clone(), true, coxeter)
    console.log(simplex)
  }
  const f = simplex =>
    renderFace(simplex, color.offsetHSL(s, 0, 0).clone(), coxeter)

  const c = (simplex, c = true) =>
    renderCell(simplex, c ? color.offsetHSL(s, 0, 0).clone() : null, coxeter)

  // coxeter.DEBUG = true
  c(simplex)
  // simplex = c(simplex, null)[0].reflect(3)
  // simplex = c(simplex, null)[11].reflect(3)
  // simplex = c(simplex, null)[11].reflect(3)
  // //   console.log(simplex)
  // simplex = c(simplex)[11].reflect(3)
  //   console.log(simplex)
  // console.log(simplex, simplex.reflect(2))
}
export const renderHoneyCombManual = (simplex, coxeter) => {
  let simplices
  let s = 0.1
  const color = new Color().setHSL(-s, 0.5, 0.5)
  const next = () => color.offsetHSL(s, 0, 0).clone()

  simplices = renderFace(simplex, next(), coxeter)

  simplices = simplices
    .filter((_, i) => i % { 3: 2, 5: 1 }[coxeter.q] === 0)
    .map(s => renderFace(s.reflect(2), next(), coxeter))
  simplices = simplices.map(g =>
    g
      .filter((_, i) => i === 4) //i > 2 && i <= coxeter.p && i % 2 === 1)
      .flatMap(s => renderFace(s.reflect(2), next(), coxeter))
  )
  // For q === 5:
  if (coxeter.q > 3) {
    simplices = simplices.map(g =>
      g
        .filter((_, i) => i === 4) // i > 2 && i <= coxeter.p && i % 2 === 1)
        .flatMap(s => renderFace(s.reflect(2), next(), coxeter))
    )

    simplices = simplices
      .filter((_, i) => i % 2 === 0)
      .map(g =>
        g
          .filter((_, i) => i === 4) // i > 2 && i <= coxeter.p && i % 2 === 1)
          .flatMap(s => renderFace(s.reflect(2), next(), coxeter))
      )
  }
  console.log(simplices)
  if (simplices.length) {
    renderFace(simplices[0][4].reflect(2), color, coxeter)
  }
  // coxeter.DEBUG = 1
  // simplices[0][0].map((s, i) =>
  //   draw(s.reflect(2), new Color().setHSL(i / 10, 0.5, 0.5), coxeter)
  // )
  // renderFace(simplices[0][0][3].reflect(2), color, coxeter)
  // simplex = c(simplex, null)[0].reflect(3)
  // simplex = c(simplex, null)[11].reflect(3)
  // simplex = c(simplex, null)[11].reflect(3)
  // //   console.log(simplex)
  // simplex = c(simplex)[11].reflect(3)
  //   console.log(simplex)
  // console.log(simplex, simplex.reflect(2))
}

export const renderEuclideanHoneyComb = (size = 10) => {
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

export const testKnuthBendix = () => {
  const rules = knuthBendix({
    aa: '',
    bb: '',
    cc: '',
    dd: '',
    ababababab: '',
    acac: '',
    adad: '',
    bcbcbc: '',
    bdbd: '',
    cdcdcdcd: '',
  })
  console.log(rewrite(rules, 'abacbbdbacabbbc'))
}
