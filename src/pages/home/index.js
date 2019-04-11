import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Download from './components/Download'
import Writer from './components/Writer'

class Home extends Component {
  render() {
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
      </HomeWrapper>
    )
  }
}


export default Home