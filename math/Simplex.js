import { intersect, reflect } from './hypermath'
import Vector3 from './Vector3'
import Vertex from './Vertex'
import { rewrite } from './group'

export default class Simplex {
  static words = new Set()

  static clear = () => {
    Simplex.words.clear()
  }

  constructor(faces, coxeter, word = '', mirror, parent = null) {
    this.parent = parent
    this.faces = faces
    this._vertices = null
    this.coxeter = coxeter
    this.mirror = mirror
    this.word = word
  }

  reflect(mirrorIndex = 0) {
    const faces = this.faces.filter((_, i) => i !== mirrorIndex)
    const mirror = this.faces[mirrorIndex]
    const reflected = faces.map(face => reflect(face, mirror))
    reflected.splice(mirrorIndex, 0, mirror)
    // reflected.forEach(face => face.divideScalar(sqrt(dot(face, face))))
    const newWord = rewrite(
      this.coxeter.rules,
      this.word + String.fromCharCode(97 + mirrorIndex)
    )
    return new Simplex(reflected, this.coxeter, newWord, mirrorIndex, this)
  }

  isNew() {
    if (Simplex.words.has(this.word)) {
      return false
    }
    Simplex.words.add(this.word)
    return true
  }

  get vertices() {
    if (this._vertices === null) {
      this._vertices = this.faces.map(
        v => new Vertex(intersect(...this.faces.filter(face => face !== v)))
      )
    }
    return this._vertices
  }
}
