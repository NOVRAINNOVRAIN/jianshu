import { fromJS } from 'immutable'
import { CHNAGE_LOGIN } from './actionTypes'

const defaultState = fromJS({
  login: false
})


const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHNAGE_LOGIN:
      return state.set('login', action.login)
    default:
      return state
  }
}

export default reducer