import React, { Component } from 'react'
import store from './store/index'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

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
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleBtnClick(e) {
    const action = {
      type: 'add_todo_item',
      value: this.state.inputVal
    }
    store.dispatch(action)
  }

  handleItemDel(index) {
    const action = { 
      type: 'del_todo_item',
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