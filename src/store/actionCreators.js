import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'


const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

const getAddTodoItemAction = (value) => ({
  type: ADD_TODO_ITEM,
  value
})

const getDelTodoItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index
})

export { getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction }