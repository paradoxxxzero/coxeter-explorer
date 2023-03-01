export default class Vertex {
  static tokens = new Set()
  static all = []

  constructor(vertex) {
    this.vertex = vertex
    this.color = null
  }

  push(color) {
    const token = this.token
    if (Vertex.tokens.has(token)) {
      return false
    }
    this.color = color
    Vertex.tokens.add(token)
    Vertex.all.push(this)
    return Vertex
  }

  get token() {
    return this.vertex.token
  }
}
