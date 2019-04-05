import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'


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

const initTodoListAction = (list) => ({
  type: INIT_TODO_LIST,
  list
})

export { getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction, initTodoListAction }