import styled from 'styled-components'

const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin: 0 0 0 15px;
  padding: 30px 0 0 0;
  .banner-img{
    width: 100%;
    height: 270px;
  }
`

const HomeRight = styled.div`
  float: right;
  width: 240px;
  margin: 0 0 0 15px;
  padding: 30px 0 0 0;
`

// Topic
const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin: 0 0 0 -18px;
  overflow: hidden;
`
const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding: 0 10px 0 0;
  margin: 0 0 18px 18px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 1px;
  background: #f7f7f7;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin: 0 10px 0 0;
  }
`


export { HomeWrapper, HomeLeft, HomeRight, TopicWrapper, TopicItem }