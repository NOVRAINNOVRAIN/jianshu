import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

const defaultState = {
  inputVal: '',
  list: []
}

function todo(prevState=defaultState, action) {
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = {...prevState, ...{inputVal: action.value}}
    return newState
  } else if (action.type === ADD_TODO_ITEM ) {
    const newState = {...prevState}
    newState.list.push(prevState.inputVal)
    newState.inputVal = ''
    return newState
  } else if (action.type === DEL_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(prevState))
    newState.list.splice(action.index, 1) 
    return newState
  }
  return prevState
}

export default todo