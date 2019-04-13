import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, GET_MORE_ARTICLE_LIST, CHANGE_SCROLLTOP_SHOW } from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})


const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const getMoreArticleList = (state, action) => {
  const newArticleList = [...state.get('articleList'), ...fromJS(action.list)]
  const nextPage = action.nextPage
  return state.merge({
    articleList: newArticleList,
    articlePage: nextPage
  })
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case GET_MORE_ARTICLE_LIST:
      return getMoreArticleList(state, action)
    case CHANGE_SCROLLTOP_SHOW:
      return state.set('showScroll', action.flag)
    default:  
      return state
  }
}

export default reducer