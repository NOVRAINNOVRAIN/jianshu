import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, Addition, Button } from './style'
import { CSSTransition} from 'react-transition-group'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.state = { focus: false }
  }

  handleInputFocus() {
    this.setState({
      focus: true
    })
  }

  handleInputBlur() {
    this.setState({
      focus: false
    })
  }

  render() {
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
            <CSSTransition in={this.state.focus} timeout={200} classNames='slide'>
              <NavSearch onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} className={this.state.focus? 'focused': ''}></NavSearch>
            </CSSTransition>
            <i className={this.state.focus? 'focused iconfont': 'iconfont'}>&#xe62d;</i>
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
}

export default Header