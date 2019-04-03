import React, { Component, Fragment } from 'react'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      show: true
    }
  }

  handleToggle() {
    this.setState((prevState, props) => ({
      show: prevState.show ? false : true
    }))
  }

  render () {
    return (
      <Fragment>
        <span className={this.state.show ? 'show' : 'hide'}>hello App</span>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
}

export default App