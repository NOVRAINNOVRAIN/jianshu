import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA } from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})


const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:  
      return state
  }
}

export default reducer