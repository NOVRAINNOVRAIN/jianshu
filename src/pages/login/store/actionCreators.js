import axios from 'axios'
import { CHNAGE_LOGIN } from './actionTypes'

const loginActionIn = (flag) => ({
  type: CHNAGE_LOGIN,
  login: flag
})


const logoutActionIn = (flag) => ({
  type: CHNAGE_LOGIN,
  login: flag
})

const loginAction = (account, password) => {
  return (dispatch) => {
    axios.post('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/login')
      .then(res => {
        const login = res.data.login
        if(login) {
          const action = loginActionIn(login)
          dispatch(action)
        } else {
          console.log('login failed')
        }
      })
  }
}

const logoutAction = () => {
  return (dispatch) => {
    axios.post('https://easy-mock.com/mock/5ca47d2fac5abe5a8d89b977/react/api/logout')
    .then(res => {
      const login = res.data.login
      const action = logoutActionIn(login)
      dispatch(action)
    })
  }
}

export { loginAction, logoutAction } 