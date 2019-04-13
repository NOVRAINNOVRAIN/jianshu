import axios from 'axios'
import { CHANGE_HOME_DATA, GET_MORE_ARTICLE_LIST } from './actionTypes'

// self
const getHomeDataActionIn = (data) => ({
  type: CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList
})

const getMoreACticleListActionIn = (list, nextPage) => ({
  type: GET_MORE_ARTICLE_LIST,
  list,
  nextPage
})

// export
const getHomeDataAction = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/home')
      .then(res => {
        const data = res.data.data
        const action = getHomeDataActionIn(data)
        dispatch(action)
      })
  }
}


const getMoreACticleListAction = (page) => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/more_article_list?page='+ page)
      .then(res => {
        const data = res.data.data
        const action = getMoreACticleListActionIn(data, ++page)
        dispatch(action)
      })
  }
}

export { getHomeDataAction, getMoreACticleListAction }
