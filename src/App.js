import React, { Component } from 'react'
import GlobalStyle from './style'
import GlobalIconfontStyle from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconfontStyle />
        <Header/>
        <Router>
          <Route path='/' exact render={()=> <div>Home</div>}></Route>
          <Route path='/detail' render={()=> <div>Detail</div>}></Route>
        </Router>
      </Provider>
    );
  }
}

export default App
