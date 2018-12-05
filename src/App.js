import React, { Component } from 'react'

import './App.css'
import Pictures from './components/Pictures/Pictures'
import ErrorBoundary from './components/hoc/ErrorBoundary/ErrorBoundary'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Pictures />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
