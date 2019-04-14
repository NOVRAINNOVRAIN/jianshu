import React, { PureComponent } from 'react'
import { Detailwrapper, Header, Content } from './style'
 
class Detail extends PureComponent {
  render() {
    return (
      <Detailwrapper>
        <Header>徒步香港 - 东澳古道浓浓港味之旅</Header>
        <Content>
          <img alt='' src='https://upload-images.jianshu.io/upload_images/5429138-82cf03e0c5ccfb8a.JPG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'></img>
          <p><b>欢迎来到【薯片城市徒步计划】-香港站，我是薯片。</b></p>
          <p>也许，你曾从香港机场起飞在3000尺高空看过太平洋，在旺角人山人海的潮鞋店里买鞋，在尖沙咀小店里吃鱼蛋，在铜锣湾的折扣季里血拼……</p>
          <p>香港的市井生活就像一道烧腊拼盘，除了无尽的购物商场，还有许多可以值得探索的地方。与市区的水泥森林不同，香港的郊野有着绝佳的自然风光。而领略这些的最佳方式就是——徒步。</p>
        </Content>
      </Detailwrapper>
    )
  }
}


export default Detail