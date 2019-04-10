import { CHANGE_INPUT_FOCUS, CHANGE_INPUT_BLUR, CHANGE_HOTSEARCH_LIST } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false,
  list: []
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_INPUT_FOCUS:
      return state.set('focus', true)
    case CHANGE_INPUT_BLUR:
      return state.set('focus', false)
    case CHANGE_HOTSEARCH_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}


export default reducer