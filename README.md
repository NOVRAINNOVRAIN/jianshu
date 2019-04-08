> Created by sea, 2019.4.7

### npx create-react-app jianshu

### npm start
Runs the app in the development mode.<br>

###  git remote 
git init
git remote add origin git@github.com:Supremeyh/jianshu.git

### styled-components
npm i --save styled-components

### normalize.js
使用 styled-components 变成全局样式导入
```JavaScript
// normalize.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
export { GlobalStyle }

// src/App.js
import { GlobalStyle }

<GlobalStyle />
<Header />
```

### iconfont.js
使用 styled-components 变成 GlobalIconfontStyle 全局样式导入
```JavaScript
<GlobalStyle />
<GlobalIconfontStyle />
```

### react-transition-group
```JavaScript
// src/common/header/index.js
import { CSSTransition} from 'react-transition-group'

<CSSTransition in={this.state.focus} timeout={200} classNames='slide'>
  <NavSearch></NavSearch>
</CSSTransition>
```

### redux
npm i redux

### react-redux
Provider
connect

### redux 模块划分

### immutable、redux-immutable
npm i immutable
npm i redux-immutable