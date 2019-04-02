import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {handleItemDel, index} = this.props
    handleItemDel(index)
    // this.props.handleItemDel(this.props.index)
  }

  render() {
    const { content } = this.props 
    return (
      <li onClick={this.handleClick}>
        {content.text}
      </li>
    )
  }
}

export default TodoItem