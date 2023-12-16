import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }
  static getDerivedStateFromError(error) {
    return { error: true }
  }
  static getDerivedStateFromProps(props) {
    return { error: props.error }
  }
  componentDidCatch(error, errorInfo) {
    this.props.onError(error, errorInfo)
  }
  render() {
    if (this.state.error) {
      return null
    }
    return this.props.children
  }
}
