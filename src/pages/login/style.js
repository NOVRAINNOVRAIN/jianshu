import styled from 'styled-components'

const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 0;
  background: #eee;
  z-index: 0;
`

const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 80px auto;
  padding: 20px 0 0 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777; 
  outline: none;
`

const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  padding: 9px 18px;
  margin: 25px auto;
  font-size: 18px;
  background: #3194d0;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
`


export { LoginWrapper, LoginBox, Input, Button }