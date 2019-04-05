import axios from 'axios'
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


const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/todolist')
      .then((res) => {
        const list = res.data.list
        const action = initTodoListAction(list)
        dispatch(action)
      })
  }
}

export { getInputChangeAction, getAddTodoItemAction, getDelTodoItemAction, initTodoListAction, getTodoList }