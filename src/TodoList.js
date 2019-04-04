import React, { Component } from 'react'
import store from './store/index'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  render () {
    return (
      <div style={{margin: "20px 10px"}}>
        <Input value={this.state.inputVal} placeholder="input here" size="default" style={{width: "300px", marginRight: "15px"}}/>
        <Button type="primary">Submit</Button>
        <List 
          style={{width: "400px", margin: "10px 0"}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}>
        </List>
      </div>
    )
  }
}

export default TodoList