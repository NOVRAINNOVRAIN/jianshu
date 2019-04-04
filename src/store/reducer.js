const defaultState = {
  inputVal: 'react',
  list: ['antd', 'redux', 'reducer', 'store']
}

// reducer可以接收state,但绝不能修改state
export default (prevState = defaultState, action) => {
  if(action.type === 'change_input_value') {
    const newState = {...prevState, ...action.value}
    newState.inputVal = action.value
    return newState
  } else if (action.type === 'add_todo_item') {
    const newState = {...prevState}
    newState.list.push(action.value)
    newState.inputVal = ''
    return newState
  }
  return prevState
}