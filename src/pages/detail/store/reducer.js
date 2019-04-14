import { fromJS } from 'immutable'
import { GET_DETAIL_INFO } from './actionTypes'

const defaultState = fromJS({
  title: '',
  content: ''
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case GET_DETAIL_INFO:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}


export default reducer