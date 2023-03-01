import { poincare, intersect, reflect } from './hypermath'
import Vertex from './Vertex'
import Vector3 from './Vector3'

export default class Simplex {
  static tokens = new Set()

  constructor(faces, parent = null) {
    this.parent = parent
    this.faces = faces
    this._vertices = null
  }

  project(nope) {
    this._vertices = this.faces.map(
      v =>
        new Vertex(
          poincare(intersect(...this.faces.filter(face => face !== v)))
        )
    )
    return !nope && this.register()
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
      this.project(true)
    }
    return this._vertices
  }

  get token() {
    const centroid = new Vector3()
    this.vertices.forEach(vertex => {
      centroid.add(vertex.vertex)
    })
    centroid.divideScalar(this.vertices.length)

    return centroid.token
  }
}
