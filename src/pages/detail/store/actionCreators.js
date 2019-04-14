import axios from 'axios'
import { GET_DETAIL_INFO } from './actionTypes'

// self
const getDetailInfoActionIn = (data) => ({
  type: GET_DETAIL_INFO,
  title: data.title,
  content: data.content,
})


// export
const getDetailInfoAction = (id) => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/get_detail_info?id=' + id)
      .then(res => {
        const data = res.data.data
        const action = getDetailInfoActionIn(data)
        dispatch(action)
      })
  }
}
 

export { getDetailInfoAction }
