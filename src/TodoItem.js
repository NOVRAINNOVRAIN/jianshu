import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    // 当组件的state或props发生改变的时候，render函数就会重新执行
    // 当父组件的render函数被运行时，他的子组件的render都将被重新运行一次
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

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