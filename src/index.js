import React from 'react'
// import ReactDOM from 'react-dom'
import { hydrate }  from 'react-dom'
import App from './components/app'

// import * as _ from "lodash"; // 1. !!! 現在不用下載lodash-es (es6), lodash(es6) 也能自動tree shaking 即便引入全局 e.g. import * as _ from "lodash";
// import { get, chunk } from "lodash"; // 2. !!!引入了但沒有使用也會自動tree shaking, e.g. import { chunk } from "lodash";
// console.log(chunk([2, 4, 5], 2));

// Warning: Expected server HTML to contain a matching <div> in <div>.
// webpack 沒有--watch 然後改了程式碼但沒有重build 導致server 抓的build檔案跟實際程式碼(client)對不上

const component = (
    <App />
);

hydrate( // dydrate 將 JS 功能重新放回到已經被伺服器所渲染的 HTML 樣版上
  component,
  document.getElementById('app')
);
