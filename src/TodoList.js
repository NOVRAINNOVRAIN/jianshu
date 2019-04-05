import React, { Component } from 'react'
import store from './store/index'
import 'antd/dist/antd.css'
import { getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'
// import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDel = this.handleItemDel.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick(e) {
    const action = getAddTodoItemAction(this.state.inputVal)
    store.dispatch(action)
  }

  handleItemDel(index) {
    const action = getDelTodoItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }


  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  render () {
    return (
      <TodoListUI  
        inputVal={this.state.inputVal} 
        handleInputChange= {this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDel={this.handleItemDel}
      />
    )
  }
}

export default TodoList