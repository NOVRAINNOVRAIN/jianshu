import { CHANGE_INPUT_FOCUS, CHANGE_INPUT_BLUR, CHANGE_HOTSEARCH_LIST, CHANGE_SEARCH_MOUSEIN, CAHNGE_SEARCH_PAGE } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_INPUT_FOCUS:
      return state.set('focus', true)
    case CHANGE_INPUT_BLUR:
      return state.set('focus', false)
    case CHANGE_HOTSEARCH_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case CHANGE_SEARCH_MOUSEIN:
      return state.set('mouseIn', action.flag)
    case CAHNGE_SEARCH_PAGE: 
      return state.set('page', action.page)
    default:
      return state
  }
}


export default reducer