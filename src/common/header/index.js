import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoTitleSwitch, SearchInfoList, SearchInfoItem, Addition, Button } from './style'
import { CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Header extends Component {
  constructor(props) {
    super(props)
    this.getSearchInfo = this.getSearchInfo.bind(this)
  }

  getSearchInfo(show, list) {
    if(show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoTitleSwitch>换一批</SearchInfoTitleSwitch>
            <SearchInfoList>
              {
                list.map((item, index) => {
                  return (
                    <SearchInfoItem key={index}>{item}</SearchInfoItem>
                  )
                })
              }
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  
  render() {
    const { focus, list, handleInputFocus, handleInputBlur } = this.props
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
            {this.getSearchInfo(focus, list)}
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




const mapStateToProps = (state) => ({
  focus: state.get('header').get('focus'),
  list: state.get('header').get('list') 
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {   
      const action1 = actionCreators.getHotSearchListAction()
      dispatch(action1)
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