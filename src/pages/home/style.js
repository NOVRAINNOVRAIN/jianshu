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
  width: 280px;
  margin: 0 0 0 15px;
  padding: 30px 0 0 0;
`

// Topic
const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin: 0 0 0 -18px;
  border-bottom: 1px solid #dcdcdc;
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
// List
const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`
const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    color: #999;
    font-size: 13px;
  }
`

// Recommend
const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0;
`

const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: contain;
`

// Writer
const WriterWrapper = styled.div`
  width: 100%;
  height: 300px;
  line-height: 300px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  box-sizing: border-box;
`

export { 
  HomeWrapper, HomeLeft, HomeRight, 
  TopicWrapper, TopicItem,
  ListItem, ListInfo,
  RecommendWrapper, RecommendItem,
  WriterWrapper
 }