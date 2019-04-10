import axios from 'axios'
import { fromJS } from 'immutable'
import { CHANGE_INPUT_FOCUS, CHANGE_INPUT_BLUR, CHANGE_HOTSEARCH_LIST, CHANGE_SEARCH_MOUSEIN, CAHNGE_SEARCH_PAGE } from './actionTypes'

// self
const changeHotSearchListAction = (data) => ({
  type: CHANGE_HOTSEARCH_LIST,
  data: fromJS(data),
  totalPage: fromJS(Math.ceil(data.length / 10))
})

// export
const changeInputFocusAction = () => ({
  type: CHANGE_INPUT_FOCUS
})

const changeInputBlurAction = () => ({
  type: CHANGE_INPUT_BLUR
})

const changeSearchMouseInAction = (flag) => ({
  type: CHANGE_SEARCH_MOUSEIN,
  flag: fromJS(flag)
})

const changeSearchPageAction = (page, totalPage) => ({
  type: CAHNGE_SEARCH_PAGE,
  page: fromJS(page)
})

const getHotSearchListAction = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/hot_search_list')
      .then(res => {
        const data = res.data
        const action = changeHotSearchListAction(data.data)
        dispatch(action)
      })
      .catch(err => {
        console.log(err)
      })
  }
}


export { changeInputFocusAction, changeInputBlurAction, getHotSearchListAction, changeSearchMouseInAction, changeSearchPageAction }