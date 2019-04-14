import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends PureComponent {
  render () {
    const { isLogin } = this.props
    if (!isLogin) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => this.account = input} />
            <Input placeholder='密码' ref={(input) => this.password = input} type='password' />
            <Button onClick={() => this.props.login(this.account , this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
       return <Redirect to='/' />
    }
  }
}



const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    login(account, password) {
      const action = actionCreators.loginAction(account.value, password.value)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)