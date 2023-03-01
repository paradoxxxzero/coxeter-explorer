import { poincare } from './hypermath'

export default class Vertex {
  static tokens = new Set()
  static all = []

  constructor(vertex4) {
    this.vertex4 = vertex4
    this._vertex3 = null
    this.color = null
  }

  get vertex() {
    if (this._vertex3 === null) {
      this._vertex3 = poincare(this.vertex4)
    }
    return this._vertex3
  }

  push(color) {
    const token = this.token
    if (Vertex.tokens.has(token)) {
      return
    }
    this.color = color
    Vertex.tokens.add(token)
    Vertex.all.push(this)
  }

  get token() {
    return this.vertex.token
  }
}
