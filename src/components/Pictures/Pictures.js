import React, { Component } from 'react'
import axios from 'axios'

import styles from './Pictures.module.css'
import PictureContainer from './PictureContainer/PictureContainer'
import Buttons from './Buttons/Buttons'

class Pictures extends Component {
  constructor(props) {
    super(props)
    this.apiUrl = 'https://jsonplaceholder.typicode.com/photos/1'
  }
  state = {
    image: {
      url: '',
      title: ''
    },
    counter: 1
  }

  componentDidMount() {
    axios
      .get(this.apiUrl)
      .then(response => {
        this.setState(state => {
          return { ...state, image: { url: response.data.url, title: response.data.title } }
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeCounter = event => {
    const buttonLabel = event.target.textContent
    if (this.state.counter === 1 && buttonLabel === '-') {
      return
    }
    this.setState(state => {
      const counter = buttonLabel === '+' ? state.counter + 1 : state.counter - 1
      return { ...state, counter }
    })
  }

  render() {
    const style = 'container ' + styles.pictures

    return (
      <div className={style}>
        <PictureContainer counter={this.state.counter} src={this.state.image.url} alt={this.state.image.title} />
        <div className="">{this.state.counter}</div>
        <Buttons click={this.changeCounter} />
      </div>
    )
  }
}

export default Pictures
