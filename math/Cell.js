import { intersect, reflect } from './hypermath'
import Vector3 from './Vector3'
import Vertex from './Vertex'
import { rewrite } from './group'

export default class Simplex {
  constructor(coxeter) {
    this.coxeter = coxeter
    this.simplices = []
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
}
