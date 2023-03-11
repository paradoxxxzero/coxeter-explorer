import { Color } from 'three'
import { C } from './c'
import {
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  reflect,
  normalize,
} from './math/hypermath'
import { combinations, cartesian, genPaths } from './math/index'
import { setRules, shorten, sorter } from './math/group'
import { floatToToken } from './math/utils'

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
  const { vertices, edges } = C.runtime
  C.vertices && vertices.push({ vertex, color: new Color(0x0000ff) })
  // fundamentalSimplexVertices.forEach(vertex =>
  //   vertices.push({ vertex, color: new Color(0x00ff00) })
  // )
  if (C.DEBUG) {
    for (let i = 0; i < fundamentalSimplexVertices.length; i++) {
      C.vertices &&
        vertices.push({
          vertex: fundamentalSimplexVertices[i],
          color: new Color(0x00ff00),
        })
      for (let j = 0; j < i; j++) {
        C.edges &&
          edges.push({
            vertex1: fundamentalSimplexVertices[i],
            vertex2: fundamentalSimplexVertices[j],
            color: new Color(0x00ff00),
          })
      }
    }
  }
  // for (let i = 0; i < C.dimensions; i++) {
  //   const rv = reflect(vertex, fundamentalSimplexMirrors[i])
  //   vertices.push({
  //     vertex: normalize(rv),
  //     color: new Color().setHSL(i * 0.2, 0.7, 0.5),
  //   })
  //   for (let i = 0; i < C.dimensions; i++) {
  //     const rv2 = reflect(rv, fundamentalSimplexMirrors[i])
  //     vertices.push({
  //       vertex: normalize(rv2),
  //       color: new Color().setHSL(i * 0.2, 0.85, 0.5),
  //     })
  //     for (let i = 0; i < C.dimensions; i++) {
  //       const rv3 = reflect(rv2, fundamentalSimplexMirrors[i])
  //       vertices.push({
  //         vertex: normalize(rv3),
  //         color: new Color().setHSL(i * 0.2, 1, 0.5),
  //       })
  //     }
  //   }
  // }
  // TODO: use a single geometry
  // const allPaths = genPaths('abcd', C.order)

  try {
    setRules()
  } catch (e) {
    console.log(e)
    return
  }
  // const paths = new Set()
  // allPaths.forEach(path => paths.add(shorten(path)))

  // for (const path of paths) {
  //   const reflections = path.split('').reverse()
  //   let v = vertex

  //   for (let i = 0; i < reflections.length; i++) {
  //     // TODO: use matrix for reflection and store intermediate values
  //     v = reflect(
  //       v,
  //       fundamentalSimplexMirrors[reflections[i].charCodeAt(0) - 97]
  //     )
  //   }
  //   vertices.push({
  //     vertex: normalize(v),
  //     color: new Color().setHSL(path.length / C.order, 0.5, 0.5),
  //   })
  // }
  const reflectionCache = new Map()
  const reflectWord = word => {
    let v = vertex
    const reflections = word.split('').reverse().join('')
    let reflection = ''
    let remaining = reflections
    for (let i = reflections.length; i > 0; i--) {
      reflection = reflections.slice(0, i)
      if (reflectionCache.has(reflection)) {
        v = reflectionCache.get(reflection)
        remaining = reflections.slice(i)
        break
      }
    }

    for (let i = 0; i < remaining.length; i++) {
      v = reflect(v, fundamentalSimplexMirrors[remaining[i].charCodeAt(0) - 97])
      reflectionCache.set(reflection + remaining.slice(0, i + 1), v)
    }
    return v
  }
  const hash = v =>
    new Array(C.dimensions)
      .fill(0)
      .map((_, i) => floatToToken(v[i]))
      .join('|')

  const words = new Map()
  const edgeHashes = new Set()
  const vertexHashes = new Set()
  let currentWord = ''
  words.set(currentWord, vertex)
  let wordsToConsider = [currentWord]

  for (let i = 0; i < C.order; i++) {
    let futurewordsToConsider = []

    for (let j = 0; j < wordsToConsider.length; j++) {
      const word = wordsToConsider[j]
      const v = words.get(word)

      for (let k = 0; k < C.dimensions; k++) {
        if (word.slice(-1) === String.fromCharCode(97 + k)) continue
        const newWord = shorten(word + String.fromCharCode(97 + k))
        const color = new Color().setHSL(newWord.length / C.order, 0.5, 0.5)
        if (words.has(newWord)) {
          const edgeHash = (v + words.get(newWord)) * 0.5
          if (edgeHashes.has(edgeHash)) {
            continue
          }
          if (C.edges) {
            const rv = words.get(newWord)
            const edgeHash = [hash(v), hash(rv)].sort().join('/')
            if (!edgeHashes.has(edgeHash)) {
              edgeHashes.add(edgeHash)
              edges.push({
                vertex1: v,
                vertex2: rv,
                color: color,
              })
            }
          }
        } else {
          const rv = reflectWord(newWord)
          words.set(newWord, rv)
          const normalized = normalize(rv)
          if (C.vertices) {
            const vertexHash = hash(normalized)
            if (!vertexHashes.has(vertexHash)) {
              vertexHashes.add(vertexHash)

              vertices.push({
                vertex: normalized,
                color,
              })
            }
          }
          if (C.edges) {
            const edgeHash = [hash(v), hash(rv)].sort().join('/')
            if (!edgeHashes.has(edgeHash)) {
              edgeHashes.add(edgeHash)
              edges.push({
                vertex1: v,
                vertex2: rv,
                color,
              })
            }
          }
          futurewordsToConsider.push(newWord)
        }
      }
    }
    wordsToConsider = futurewordsToConsider
  }
}
