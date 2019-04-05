import React from 'react'
import { Input, Button, List } from 'antd'

function TodoListUI(props) {
  return (
    <div style={{margin: "20px 10px"}}>
      <Input 
        value={props.inputVal}
        onChange={props.handleInputChange} 
        placeholder="input here" 
        size="default" 
        style={{width: "300px", marginRight: "15px"}}
      />
      <Button onClick={props.handleBtnClick} type="primary">Submit</Button>
      <List 
        style={{width: "400px", margin: "10px 0"}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={(index) => {props.handleItemDel(index)}}>{item}</List.Item>)}>
      </List>
    </div>
  )
}

export default TodoListUI