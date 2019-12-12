import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import App from './components/app'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// ReactDOM.hydrate( // dydrate 將 JS 功能重新放回到已經被伺服器所渲染的 HTML 樣版上
//   <App />,
//   document.getElementById('app')
// );
