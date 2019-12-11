import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
// entry can't use react e.g. class App extends component , can't read it

ReactDOM.render(
  <App />,
  document.getElementById('app')
);