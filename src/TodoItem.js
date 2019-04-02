import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // static defaultProps = {
  //   test: 'need to do'
  // }

  handleClick() {
    const {handleItemDel, index} = this.props
    handleItemDel(index)
  }

  render() {
    const { content, test } = this.props 
    return (
      <li onClick={this.handleClick}>
        {test} -  {content.text}
      </li>
    )
  }
}

TodoItem.propTypes = {
  text: PropTypes.string,
  content: PropTypes.object.isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleItemDel: PropTypes.func
} 

TodoItem.defaultProps = {
  test: 're'
}

export default TodoItem