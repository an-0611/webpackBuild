import React from 'react'
// import ReactDOM from 'react-dom'
import { hydrate }  from 'react-dom'
// import { Router } from 'react-router-dom';
import App from './components/app'

const component = (
  // <Router>
    <App />
  // </Router>
);

hydrate( // dydrate 將 JS 功能重新放回到已經被伺服器所渲染的 HTML 樣版上
  component,
  document.getElementById('app')
);
