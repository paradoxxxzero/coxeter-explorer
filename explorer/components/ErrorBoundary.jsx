import { Component } from 'react'

export class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    this.props.onError(error, errorInfo)
  }
  render() {
    if (this.props.error) {
      return null
    }
    return this.props.children
  }
}
