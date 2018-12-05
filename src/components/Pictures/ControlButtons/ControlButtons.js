import React from 'react'

const Buttons = props => {
  return (
    <div>
      <button className="btn is-primary" onClick={props.click}>
        +
      </button>
      <button className="btn is-error" onClick={props.click}>
        -
      </button>
    </div>
  )
}

export default Buttons
