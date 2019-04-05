import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'

const defaultState = {
  inputVal: '',
  list: []
}

// reducer可以接收state,但绝不能修改state
function todo(prevState = defaultState, action) {  
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = {...prevState, ...action.value}
    newState.inputVal = action.value
    return newState
  } else if (action.type === ADD_TODO_ITEM) {
    const newState = {...prevState}
    newState.list.push(action.value)
    newState.inputVal = ''
    return newState
  } else if (action.type === DEL_TODO_ITEM) {
    const newState = {...prevState}
    newState.list.splice(action.index, 1)
    return newState
  } else if (action.type === INIT_TODO_LIST) {
    const newState = {...prevState,...{ list: action.list }}
    return newState
  }
  return prevState
}

export default todo