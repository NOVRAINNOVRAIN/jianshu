import { combineReducers } from 'redux'
import { default as headerReducer } from '../common/header/store'

const reducer = combineReducers({
  header: headerReducer
})


export default reducer