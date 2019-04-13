import React, { PureComponent } from 'react'
import GlobalStyle from './style'
import GlobalIconfontStyle from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconfontStyle />
        <Header/>
        <Router>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
        </Router>
      </Provider>
    );
  }
}

export default App
