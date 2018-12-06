import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Buttons extends Component {
  static propTypes = {
    click: PropTypes.func
  }

  render() {
    return (
      <div>
        <button className="btn is-primary" onClick={this.props.click}>
          +
        </button>
        <button className="btn is-error" onClick={this.props.click}>
          -
        </button>
      </div>
    )
  }
}

export default Buttons
