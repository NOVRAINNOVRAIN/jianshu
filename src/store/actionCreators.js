import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

const changeInputValAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

const addTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

const delTodoItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index
})

export { changeInputValAction, addTodoItemAction, delTodoItemAction }