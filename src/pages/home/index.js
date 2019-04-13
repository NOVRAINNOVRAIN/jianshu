import React, { Component, Fragment } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Download from './components/Download'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
  render() {
    const { showScroll} = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src='//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Download></Download>
          <Writer></Writer>
        </HomeRight>
        <Fragment>
          { this.showBackTop(showScroll) }
        </Fragment>
      </HomeWrapper>
    )
  }


  componentDidMount() {
    this.props.getHomeData()
    this.bindScrollEvent()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindScrollEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  showBackTop(showScroll) {
    return showScroll ?  <BackTop onClick={this.handleScrollTop}>^</BackTop> : null
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      const action = actionCreators.getHomeDataAction()
      dispatch(action)
    },
    changeScrollTopShow(e) {
      const top = document.documentElement.scrollTop
      if (top>100) {
        const action = actionCreators.toggleScrollTopShowAction(true)
        dispatch(action)
      } else {
        const action = actionCreators.toggleScrollTopShowAction(false)
        dispatch(action)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)