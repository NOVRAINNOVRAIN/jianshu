import React, { Component } from 'react'
import store from './store/index'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './store/actionTypes'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleBtnClick(e) {
    const action = {
      type: ADD_TODO_ITEM,
      value: this.state.inputVal
    }
    store.dispatch(action)
  }

  handleItemDel(index) {
    const action = { 
      type: DEL_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  render () {
    return (
      <div style={{margin: "20px 10px"}}>
        <Input 
          value={this.state.inputVal}
          onChange={this.handleInputChange} 
          placeholder="input here" 
          size="default" 
          style={{width: "300px", marginRight: "15px"}}
        />
        <Button onClick={this.handleBtnClick} type="primary">Submit</Button>
        <List 
          style={{width: "400px", margin: "10px 0"}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDel.bind(this, index)}>{item}</List.Item>)}>
        </List>
      </div>
    )
  }
}

export default TodoList