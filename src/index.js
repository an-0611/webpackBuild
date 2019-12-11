import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
// entry can't use react e.g. class App extends component , can't read it

ReactDOM.render(
  <App />,
  document.getElementById('app')
);