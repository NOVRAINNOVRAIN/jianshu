import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, GET_MORE_ARTICLE_LIST } from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
})


const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case GET_MORE_ARTICLE_LIST:
      const newArticleList = [...state.get('articleList'), ...fromJS(action.list)]
      const nextPage = action.nextPage
      return state.merge({
        articleList: newArticleList,
        articlePage: nextPage
      })
    default:  
      return state
  }
}

export default reducer