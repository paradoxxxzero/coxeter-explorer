import { poincare, intersect, reflect } from './hypermath'
import Vertex from './Vertex'

export default class Simplex {
  static tokens = new Set()

  constructor(faces, parent = null) {
    this.parent = parent
    this.faces = faces
    this._vertices = null
  }

  project() {
    this._vertices = this.faces.map(
      v =>
        new Vertex(
          poincare(intersect(...this.faces.filter(face => face !== v)))
        )
    )
    return this.register()
  }

  reflect(mirrorIndex = 0) {
    const faces = this.faces.filter((_, i) => i !== mirrorIndex)
    const mirror = this.faces[mirrorIndex]
    const reflected = faces.map(face => reflect(face, mirror))
    reflected.splice(mirrorIndex, 0, mirror)
    return new Simplex(reflected, this)
  }

  register() {
    const token = this.token
    if (Simplex.tokens.has(token)) {
      return false
    }
    Simplex.tokens.add(token)
    return true
  }

  get vertices() {
    if (this._vertices === null) {
      this.project()
    }
    return this._vertices
  }

  get token() {
    return this.vertices
      .map(vertex => vertex.token)
      .sort()
      .join(' / ')
  }
}
