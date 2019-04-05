import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
  render() {
    return (
      <div style={{margin: "20px 10px"}}>
        <Input 
          value={this.props.inputVal}
          onChange={this.props.handleInputChange} 
          placeholder="input here" 
          size="default" 
          style={{width: "300px", marginRight: "15px"}}
        />
        <Button onClick={this.props.handleBtnClick} type="primary">Submit</Button>
        <List 
          style={{width: "400px", margin: "10px 0"}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDel(index)}}>{item}</List.Item>)}>
        </List>
      </div>
    )
  }
}

export default TodoListUI