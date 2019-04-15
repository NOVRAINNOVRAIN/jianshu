import React, { PureComponent } from 'react'
import GlobalStyle from './style'
import GlobalIconfontStyle from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconfontStyle />
        <Router>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/detail/:id' component={Detail}></Route>
          <Route path='/write' component={Write}></Route>
        </Router>
      </Provider>
    );
  }
}

export default App
