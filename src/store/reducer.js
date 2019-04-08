import { CHANGE_INPUT_FOCUS, CHANGE_INPUT_BLUR } from './actionTypes'

const defaultState = {
  focus: false
}

const reducer = (state=defaultState, action) => {
  if(action.type === CHANGE_INPUT_FOCUS) {
    return { focus: true }
  } else if (action.type === CHANGE_INPUT_BLUR) {
    return { focus: false }
  }

  return state
}


export default reducer