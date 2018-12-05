import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({ error: true })
  }

  onClickHandler() {
    this.setState({ error: false })
  }

  render() {
    if (this.state.error) {
      return (
        <div className="container with-title" onClick={this.onClickHandler.bind(this)}>
          <p class="title">Error!</p>
          <p>Oops. Something going wrong. Click to retry.</p>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
