import styled from 'styled-components'
import logoPic from '../../statics/images/nav-logo.png'

const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

const Nav = styled.div`
  width: 945px;
  height: 100%;
  padding: 0 70px 0 0;
  margin: 0 auto;
  box-sizing: border-box;
`
const NavItem = styled.div`
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
`

const NavSearchWrapper = styled.div`
  position: relative;
  float: left;
  background: red;
  .iconfont{
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    text-align: center;
  }
`

const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin: 9px 0 0 20px;
  padding: 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`

const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const Button = styled.div`
  float: right;
  line-height: 38px;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  border: 1px solid #ec6149b3;
  border-radius: 19px;
  font-size: 14px;
  &.reg{
    color: #ea6f5a;
  }
  &.writting{
    color: #fff;
    background: #ea6f5a;
  }
`

export  { HeaderWrapper, Logo, Nav, NavItem, NavSearchWrapper, NavSearch, Addition, Button }