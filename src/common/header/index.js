import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, Addition, Button } from './style'
import { CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'

const Header = (props) => {
  const { focus, handleInputFocus, handleInputBlur } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavSearchWrapper>
          <CSSTransition in={focus} timeout={200} classNames='slide'>
            <NavSearch onFocus={handleInputFocus} onBlur={handleInputBlur} className={focus? 'focused': ''}></NavSearch>
          </CSSTransition>
          <i className={focus? 'focused iconfont': 'iconfont'}>&#xe62d;</i>
        </NavSearchWrapper>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  )
}


const mapStateToProps = (state) => ({
  focus: state.header.get('focus') 
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {   
      const action = actionCreators.changeInputFocusAction()
      dispatch(action)
    },
    handleInputBlur() {    
      const action = actionCreators.changeInputBlurAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)