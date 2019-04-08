import axios from 'axios'
import { fromJS } from 'immutable'
import { CHANGE_INPUT_FOCUS, CHANGE_INPUT_BLUR, GET_HOTSEARCH_LIST, CHANGE_HOTSEARCH_LIST } from './actionTypes'

const changeInputFocusAction = () => ({
  type: CHANGE_INPUT_FOCUS
})

const changeInputBlurAction = () => ({
  type: CHANGE_INPUT_BLUR
})

const changeHotSearchListAction = (data) => ({
  type: CHANGE_HOTSEARCH_LIST,
  data: fromJS(data)
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


export { changeInputFocusAction, changeInputBlurAction, getHotSearchListAction }