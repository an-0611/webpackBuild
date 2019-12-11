import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
// entry can't use react e.g. class App extends component , can't read it
// update heroku 檔名需小寫
// dependencies on heroku need update webpack && express
// npm run dockerize need open docker first
ReactDOM.render(
  <App />,
  document.getElementById('app')
);