export default class Edge {
  static tokens = new Set()
  static all = []

  static clear = () => {
    Edge.tokens.clear()
    Edge.all.length = 0
  }

  constructor(vertex1, vertex2) {
    this.vertex1 = vertex1
    this.vertex2 = vertex2
  }

  push(color) {
    if (this.vertex1.token === this.vertex2.token) {
      return false
    }
    const token = this.token
    if (Edge.tokens.has(token)) {
      return
    }
    Edge.tokens.add(token)
    this.color = color
    Edge.all.push(this)
  }

  get token() {
    return [this.vertex1.token, this.vertex2.token].sort().join('/')
  }
}
