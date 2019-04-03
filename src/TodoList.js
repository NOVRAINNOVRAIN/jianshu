import React, { Component, Fragment } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { inputVal: '', list: [], id: 0 }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleListItemDel = this.handleListItemDel.bind(this)
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputVal: value
    }))
  }

  handleSubmit(e) {
    if(!this.state.inputVal) { return false }
    this.setState((prevState, props) => ({
      list: [...prevState.list, {text: prevState.inputVal, id: prevState.id++}],
      inputVal: ''
    }))
  }

  handleListItemDel(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  componentDidMount() {
    axios.get('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/todolist')
      .then((res) => {
        this.setState(() => ({
          list: [...res.data.data]
        }))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            key={item.id} 
            handleItemDel={this.handleListItemDel}
            content={item} 
            index={index} />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <h2>TodoList</h2>
        <label htmlFor="input">input: </label>
        <input 
          id="input" 
          className="input" 
          value={this.state.inputVal} 
          onChange={this.handleInputChange} /> 
        <button onClick={this.handleSubmit}>submit</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList