import React, { Component } from 'react'
import GlobalStyle from './style'
import GlobalIconfontStyle from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconfontStyle />
        <Header/>
      </Provider>
    );
  }
}

export default App
