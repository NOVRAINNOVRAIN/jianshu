import axios from 'axios'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_TODO_LIST } from './actionTypes'
import { initTodoListAction } from './actionCreators'

function* getInitTodoList() {
  try {
    const res = yield  axios.get('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/todolist')
    const list = res.data.list
    const action = initTodoListAction(list)
    yield put(action)
  } catch(e) {
    console.log('error')
  }
}

function* mySaga(params) {
  yield takeEvery(GET_INIT_TODO_LIST, getInitTodoList)
}

export default mySaga