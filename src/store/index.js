import { createStore } from 'redux'
import reducer from './reducer';

// Redux设计思想：Web 应用是一个状态机，视图与状态是一一对应的；所有的状态，保存在一个对象里面
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


export default store