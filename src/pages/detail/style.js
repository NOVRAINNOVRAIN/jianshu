import styled from 'styled-components'


const Detailwrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding: 0 0 100px 0;
`

const Header = styled.div`
  margin: 50px 0 20px 0;
  line-height: 44px;
  color: #333;
  font-size: 34px;
  font-weight: bold;
`

const Content = styled.div`
  color: #2f2f2f;
  img{
    width: 100%;
  }
  p{
    line-height: 30px;
    margin: 25px 0;
    color: #2f2f2f;
    font-size: 16px;
  }
  b{
    font-weight: bold;
  }
`


export { Detailwrapper, Header, Content }