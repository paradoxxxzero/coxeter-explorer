export const W = {
  coxeter: null,
  vertices: [],
  edges: [],
  words: new Map(),
  rules: new Set(),
  edgeHashes: new Set(),
  vertexHashes: new Set(),
  wordsToConsider: [],
  rootVertices: null,
  rootVertex: null,
  gram: null,
  mirrors: null,
}

export const setW = newW => {
  Object.assign(W, newW)
}
