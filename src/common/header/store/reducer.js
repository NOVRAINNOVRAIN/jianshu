import { CHANGE_INPUT_FOCUS, CHANGE_INPUT_BLUR } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false
})

const reducer = (state=defaultState, action) => {
  if(action.type === CHANGE_INPUT_FOCUS) {
    return state.set('focus', true)
  } else if (action.type === CHANGE_INPUT_BLUR) {
    return state.set('focus', false)
  }

  return state
}


export default reducer