import {
  Color,
  Vector2,
  Vector3 as ThreeVector3,
  Vector4 as ThreeVector4,
} from 'three'
const { abs, cos, sin, min, max, round, sqrt, PI } = Math

let curvature = -1

const tokenPrecision = 1
const tokenSize = 10 ** tokenPrecision
const tokenEpsilon = 10 ** -tokenPrecision

const floatToToken = f => {
  return String(
    (f >= -tokenEpsilon ? '_' : '-') + ~~round(tokenSize * abs(f))
  ).padStart(tokenPrecision, '0')
}

class Vector3 extends ThreeVector3 {
  get token() {
    return 'xyz'
      .split('')
      .map(c => floatToToken(this[c]))
      .join('|')
  }
}

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
  get token() {
    return 'xyzw'
      .split('')
      .map(c => floatToToken(this[c]))
      .join('|')
  }
}
export const combinations = array =>
  [].concat(...array.map((v, i) => array.slice(i + 1).map(w => [v, w])))

export const dot = (v1, v2, c = curvature) =>
  v1.xyz.dot(v2.xyz) + c * v1.w * v2.w

export const reflect = (v, n) =>
  v.clone().sub(n.clone().multiplyScalar(2 * dot(v, n)))

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

export const intersect = (v1, v2, v3, face = curvature) =>
  normalize(cross(v1, v2, v3), face)

export const asqrt = x => (x < 0 ? -sqrt(-x) : sqrt(x))

export const normalize = (v, c = curvature) => {
  if (c === 0) {
    return new Vector4(v.x / v.w, v.y / v.w, v.z / v.w, 1)
  }

  if (v.w < 0) {
    v = v.clone().multiplyScalar(-1)
  }

  let d = -dot(v, v, c)
  if (d < 0) {
    d = -d
    // console.warn('normalize: negative dot product')
  }
  return v.clone().divideScalar(sqrt(d))
}

export const poincare = (v, c = curvature) => {
  // z = -c
  // if (c <= 0 || v.w < 1) {
  const nr = 1 / (1 - c * v.w)
  return v.xyz.multiplyScalar(nr)
  // }
}

export const getGoursatSimplex = (
  AB = 5,
  AC = 2,
  AD = 2,
  BC = 3,
  BD = 2,
  CD = 4
) => {
  const c01 = -cos(PI / AB)
  const c02 = -cos(PI / AC)
  const c03 = -cos(PI / AD)
  const c12 = -cos(PI / BC)
  const c13 = -cos(PI / BD)
  const c23 = -cos(PI / CD)
  // const activeMirrors = [1, 0, 0, 0]

  // Goursat simplex :
  // Mirrors expressed as normal in minkowski space
  const MA = new Vector4(1, 0, 0, 0)
  const MB = new Vector4(c01, sqrt(1 - c01 * c01), 0, 0)
  const MC = new Vector4(c02, 0, 0, 0)
  MC.y = (c12 - MC.x * MB.x) / MB.y
  MC.z = sqrt(abs(1 - MC.xy.dot(MC.xy)))

  const MD = new Vector4(c03, 0, 0, 0)
  MD.y = (c13 - MD.x * MB.x) / MB.y
  MD.z = (c23 - MD.xy.dot(MC.xy)) / MC.z
  MD.w = -sqrt(abs(MD.xyz.dot(MD.xyz) - 1))

  return [
    intersect(MA, MB, MC),
    intersect(MD, MC, MB),
    intersect(MA, MD, MB),
    intersect(MA, MC, MD),
  ]
}

const tokenSimplex = simplex =>
  simplex
    .map(vertex => vertex.token)
    .sort()
    .join(' / ')

const tokenEdge = edge =>
  edge
    .map(vertex => vertex.token)
    .sort()
    .join(' / ')

const tokens = new Set()
const vertexTokens = new Set()
const edgeTokens = new Set()

const registerSimplex = simplex => {
  const token = tokenSimplex(simplex)
  if (tokens.has(token)) {
    return false
  }
  tokens.add(token)
  return true
}
// 1
// 0 -> 1
// 1 -> 0
// 2 -> 2
// 3 -> 3

// 2
// 0 -> 2
// 1 -> 1
// 2 -> 0
// 3 -> 3

const reflectSimplex = (simplex, mirrorIndex = 0, keepMirror = false) => {
  const faces = simplex.filter((_, i) => i !== mirrorIndex)
  const mirror = simplex[mirrorIndex]
  const reflected = faces.map(face => reflect(face, mirror))
  reflected.splice(mirrorIndex, 0, mirror)
  if (!keepMirror) {
    ;[reflected[0], reflected[mirrorIndex]] = [
      reflected[mirrorIndex],
      reflected[0],
    ]
  }
  return reflected
}

export const projectSimplex = simplex =>
  simplex.map(v => poincare(intersect(...simplex.filter(face => face !== v))))

export const getHoneyComb = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4

  const activeMirrors = [0]
  const vertices = []
  const edges = []

  const fundamental = getGoursatSimplex(p, 2, 2, q, 2, r)
  const fundamentalSimplex = [
    intersect(fundamental[0], fundamental[1], fundamental[2], 1),
    intersect(fundamental[0], fundamental[2], fundamental[3], 1),
    intersect(fundamental[0], fundamental[3], fundamental[1], 1),
    intersect(fundamental[1], fundamental[3], fundamental[2], 1),
  ]

  const draw = (v, color) => {
    const activeVertices = v.filter((_, i) => activeMirrors.includes(i))
    activeVertices.forEach(vertex => {
      vertices.push({
        vertex,
        color,
      })
    })

    combinations(v).forEach(([v1, v2]) => {
      edges.push({
        vertices: [v1, v2],
        color,
      })
    })
  }

  const renderFace = (simplex, color) => {
    const roots = []

    for (let j = 0; j < 2 * p; j++) {
      simplex = reflectSimplex(simplex, 1)
      const verts = projectSimplex(simplex)
      if (!registerSimplex(verts)) {
        continue
      }

      draw(verts, color)
      if (j % 2 === 0) {
        roots.push(simplex)
      }
    }
    return roots
  }

  let roots = [fundamentalSimplex]
  let newRoots
  let iterations = 0

  while (roots.length > 0 && iterations++ < 10) {
    newRoots = []
    for (let i = 0; i < roots.length; i++) {
      const root = roots[i]

      const color = new Color().setHSL((i + 1) / (root.length + 2), 0.5, 0.5)
      let seed = iterations === 1 ? root : reflectSimplex(root, 2, true)
      const verts = projectSimplex(seed)

      if (!registerSimplex(verts)) {
        continue
      }
      draw(verts, color)

      newRoots.push(...renderFace(seed, color))
    }

    roots = newRoots
  }
  // console.log([...tokens].sort().join('\n'))
  return { vertices, edges }
}
