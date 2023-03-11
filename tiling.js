import { Color } from 'three'
import { C } from './c'
import {
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  reflect,
  normalize,
} from './math/hypermath'

export const tile = () => {
  const fundamentalSimplexMirrors = getFundamentalSimplexMirrors()
  const fundamentalSimplexVertices = fundamentalSimplexMirrors.map(
    (mirror, i) =>
      getFundamentalVertex(
        fundamentalSimplexMirrors,
        new Array(C.dimensions)
          .fill(0)
          .map((_, j) => (i === j ? C.curvature || 1 : 0))
      )
  )
  const vertex = getFundamentalVertex(fundamentalSimplexMirrors, [
    C.x ? 1 : 0,
    C.y ? 1 : 0,
    C.z ? 1 : 0,
    C.w ? 1 : 0,
  ])
  console.log(vertex)
  const { vertices, edges } = C.runtime
  vertices.push({ vertex, color: new Color(0x0000ff) })
  // fundamentalSimplexVertices.forEach(vertex =>
  //   vertices.push({ vertex, color: new Color(0x00ff00) })
  // )
  for (let i = 0; i < fundamentalSimplexVertices.length; i++) {
    for (let j = 0; j < i; j++) {
      edges.push({
        vertex1: fundamentalSimplexVertices[i],
        vertex2: fundamentalSimplexVertices[j],
        color: new Color(0x00ff00),
      })
    }
  }
  for (let i = 0; i < C.dimensions; i++) {
    const rv = reflect(vertex, fundamentalSimplexMirrors[i])
    console.log(i, rv, normalize(rv), fundamentalSimplexMirrors[i])
    vertices.push({
      vertex: normalize(rv),
      color: new Color().setHSL(i * 0.2, 0.7, 0.6),
    })
    for (let i = 0; i < C.dimensions; i++) {
      const rv2 = reflect(rv, fundamentalSimplexMirrors[i])
      vertices.push({
        vertex: normalize(rv2),
        color: new Color().setHSL(i * 0.2, 0.85, 0.4),
      })
      for (let i = 0; i < C.dimensions; i++) {
        const rv3 = reflect(rv2, fundamentalSimplexMirrors[i])
        vertices.push({
          vertex: normalize(rv3),
          color: new Color().setHSL(i * 0.2, 1, 0.1),
        })
      }
    }
  }
  // try {
  //   coxeter.rules = getRules(coxeter)
  // } catch (e) {
  //   console.log(e)
  //   return
  // }
}
