import React from 'react';
import webpack from 'webpack';
import express from 'express';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';// how to set server.js to read es6  // 把server 拉到跟entry ./src/index.js 同一層 // dockerfile && package.json server.js's router also need to change
import Html from './src/html' // 使用 import 需先編譯打包至dist 開啟的server 路徑也改成 ./dist/server.js
import App from './src/components/app';

const app = express();
const port = process.env.PORT || 8080; // 用docker 時換成8080,  webpack output記得改

// if (process.env.PORT) {
  // app.use('/', express.static('dist')); // 放外面 css 就失效 ssr 也跟著壞 路徑改成只抓css? stylecomponent class 還在但失效
  // app.use(express.static('dist')); // 有用middleware 使用app.use 反之 app.get
  // const compiler = webpack(config);
  // app.use(webpackDevMiddleware(compiler, { // app.use() =< 此方法是宣告使用一個路由，變數 index 就是引入 routers 資料夾裡的 index.route 檔案，該路徑詳細內容就在該文件中編輯。
  //   noInfo: true,
  //   publicPath: config.output.publicPath
  // })) 
  // app.use(webpackHotMiddleware(compiler))

  // app.get('/', function(req, res) {
  //   // res.sendFile(__dirname + './dist/index.html')
  //   res.sendFile(__dirname + '/index.html')
  // })
try {
  app.get('/', function(req, res) {
      app.use('/', express.static('dist'));
      // 完成server 渲染<Html> , 需要把client side 靜態資源復原 (client.bundle.js || css) 取代<Html內容> 但事件消失 hydrate 也沒用
      // 把client side 資源載進來 bundle.js server side render 才吃得到伺服器第一次渲染資料 但放在裡面後 css 會失效 (不確定是不是stylecomponent問題) css 改成由html.js 引入
      // res.send is only on express server 只能調用一次 // 用於本機測試server 無論dev or production // 上傳至heroku or aws 會走上面 process.env.PORT的code
      const helmet = Helmet.renderStatic();
      const appHtml = renderToString(<App />);
      // 提供給 express.static 函數的路徑，是相對於您從中啟動 node 程序的目錄。如果您是從另一個目錄執行 Express 應用程式，保險作法是使用您想提供之目錄的絕對路徑
      // https://expressjs.com/zh-tw/starter/static-files.html
      // renderToStaticMarku 可能造成換閃一下 // https://www.jishuwen.com/d/2BoD/zh-tw
      res.send(`<!doctype html>\n${renderToStaticMarkup(<Html
        helmet={helmet}
        appHtml={appHtml}
      />)}`);
  });
    
  app.listen(port, function(error) {
    if (error) {
      console.error(error);
    } else {
      process.env.PORT ? console.log('伺服器已啟動在 port %s', port) : console.log('本機伺服器已啟動在 port %s . 打開 http://%s:%s/ 查看', port, '0.0.0.0', port);
    }
  })
} catch (err) {
  console.log('express-Error: ', err);
}
// } // process.env.PORT end

// path note
// const config = require('./webpack.config.js')
// __dirname：總是返回被執行的js所在文件夾的絕對路徑
// __filename：總是返回被執行的js的絕對路徑

// ssr note
// https://pjchender.github.io/2018/09/21/react-ssr-%E7%AD%86%E8%A8%98/
// https://github.com/jakoblind/universal-react-server-bundle
// https://medium.com/@slashtu/react-loadable-ssr-and-code-splitting-ede5b31baf35
// https://iter01.com/11212.html
// https://github.com/jakoblind/universal-react-server-bundle/blob/master/server.js

// express note
// app.use(path, router) router 代表一個由express.Router()創建的對象 可定義多個路由規則
// app.get() // 當只有一個規則時 用app.get()直接回掉function 即可

// webpack note
// https://segmentfault.com/a/1190000015490721

// React Loadable note
// https://medium.com/@slashtu/react-loadable-ssr-and-code-splitting-ede5b31baf35

// React-Webpack4-Babel-setup(github repo)
// https://github.com/BusiRaja/React-Webpack4-Babel-Setup

// most compeleted CICD (contain docker aws nodejs github circleCI...)
// https://blog.amowu.com/2015/04/devops-continuous-integration-delivery-docker-circleci-aws-beanstalk.html