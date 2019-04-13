import React, { PureComponent } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoTitleSwitch, SearchInfoList, SearchInfoItem, Addition, Button } from './style'
import { CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.getSearchInfo = this.getSearchInfo.bind(this)
  }

  getSearchInfo() {
    const { focus, mouseIn, list, page, totalPage, handleSearchMouseEnter, handleSearchMouseLeave, hanleSearchPageChange } = this.props
    const show = focus || mouseIn
    let pageList = []
    let newList = list.toJS()
    // 取 len 和 newList.length 的 较小值，避免多余的渲染
    for(let i = (page-1) * 10, len = page * 10;  i < Math.min(len, newList.length); i++) {
      pageList.push(newList[i])
    }
    if(show) {
      return (
        <SearchInfo onMouseEnter={handleSearchMouseEnter} onMouseLeave={handleSearchMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            {/* <SearchInfoTitleSwitch onClick={() => hanleSearchPageChange(page, totalPage)}>换一批</SearchInfoTitleSwitch> */}
            <SearchInfoTitleSwitch onClick={hanleSearchPageChange.bind(this, page, totalPage, this.spinIcon)}>
              <i ref={(spin) => {this.spinIcon = spin}} className='iconfont spin'>&#xe851;</i>换一批
            </SearchInfoTitleSwitch>
            <SearchInfoList>
              {
                pageList.map((item, index) => {
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
              <NavSearch onFocus={() => {handleInputFocus(list)}} onBlur={handleInputBlur} className={focus? 'focused': ''}></NavSearch>
            </CSSTransition>
            <i className={focus? 'focused iconfont zoom': 'iconfont zoom'}>&#xe62d;</i>
            {this.getSearchInfo()}
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
  mouseIn: state.get('header').get('mouseIn'),
  list: state.get('header').get('list'),
  page: state.get('header').get('page'),
  totalPage: state.get('header').get('totalPage') 
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {  
      const action = actionCreators.changeInputFocusAction()
      dispatch(action) 
      const action2 = actionCreators.getHotSearchListAction()
      // 避免不必要的ajax请求   && 优先级 比 <、=== 优先级低
      list.size < 1 && dispatch(action2)
    },
    handleInputBlur() {    
      const action = actionCreators.changeInputBlurAction()
      dispatch(action)
    },
    handleSearchMouseEnter() {
      const action = actionCreators.changeSearchMouseInAction(true)
      dispatch(action)
    },
    handleSearchMouseLeave() {
      const action = actionCreators.changeSearchMouseInAction(false)
      dispatch(action)
    },
    hanleSearchPageChange(page, totalPage, spinIcon) {
      // 换页图标旋转动画效果
      let originAngel = spinIcon.style.transform.replace(/\D/ig, '') //  或者 [^0-9]
      if(originAngel) {
        originAngel = parseInt(originAngel, 10)
      } else {
        originAngel = 0
      }
      spinIcon.style.transform = 'rotate('+ (originAngel + 360) +'deg)'
      
      page < totalPage ? page ++ : page =1
      const action = actionCreators.changeSearchPageAction(page, totalPage)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)