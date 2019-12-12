import React from 'react';
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')

// const http = require('http');

const express = require('express')
const app = express();
const port = process.env.PORT || 8080; // 用docker 時換成8080,  webpack output記得改
// const host = process.env.PORT ? null : '0.0.0.0';

import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
// how to set server.js to read es6  // 把server 拉到跟entry ./src/index.js 同一層 // dockerfile && package.json server.js's router also need to change
import Html from './src/html' // 使用 import 需先編譯打包至dist 開啟的server 路徑也改成 ./dist/server.js
import App from './src/components/app';

if (process.env.PORT) {
  try {
    // const server = http.createServer((req, res) => {
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');
    //   var body = '<!doctype html>' +
    //     '<html lang="en">'+
    //     '<head><meta charset="utf-8"></head>' +
    //     '<body>' +
    //     '<div>server render heroku test</div>'
    //     '</body>'+
    //     '</html>';
    //   res.write(body);
    //   res.end('TTT 123\n')
    // })
    // server.listen(port, () => console.log(`Listening on ${port}`));
    // const helmet = Helmet.renderStatic();
    // res.send(`<!doctype html>\n${renderToStaticMarkup(<Html
    //   helmet={helmet}
    // />)}`);
    app.get('/', function(req, res) { // 之後改成ssr 先用測試
      // var body = '<!doctype html>' +
        '<html lang="zh-TW">'+
        '<head><meta charset="utf-8"></head>' +
        '<body>' +
        '<div>server render heroku test</div>'
        '</body>'+
        '</html>';

      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(body);
      // res.send(body);
      res.end();
    });
    app.listen(port, () => console.log((`Listening on ${port}`))) // need listen port to run server
  } catch(err) {
    console.log(err)
  }
  
} else {
  console.log(11111111111111111111)
  const host = '0.0.0.0';
  // app.use(path, router) router 代表一個由express.Router()創建的對象 可定義多個路由規則
  // app.get() // 當只有一個規則時 用app.get()直接回掉function 即可
  
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
    const helmet = Helmet.renderStatic();
    const appHtml = renderToString(<App />);
    // const bundles = getBundles(stats, modules);
    app.use('/', express.static('dist')); // step3 // 完成server 渲染<Html> , 需要把client side 靜態資源復原 (client.bundle.js || css) 取代<Html內容>
    // 提供給 express.static 函數的路徑，是相對於您從中啟動 node 程序的目錄。如果您是從另一個目錄執行 Express 應用程式，保險作法是使用您想提供之目錄的絕對路徑
    // https://expressjs.com/zh-tw/starter/static-files.html

    app.get('/', function(req, res) { // step2
      // res.send is only on express server 只能調用一次 // 用於本機測試server 無論dev or production // 上傳至heroku or aws 會走上面 process.env.PORT的code
      res.send(`<!doctype html>\n${renderToStaticMarkup(<Html
        helmet={helmet}
        appHtml={appHtml}// 資料已經帶進去但server side 尚未render // test express router
        // https://pjchender.github.io/2018/09/21/react-ssr-%E7%AD%86%E8%A8%98/
        // https://github.com/jakoblind/universal-react-server-bundle
        // https://medium.com/@slashtu/react-loadable-ssr-and-code-splitting-ede5b31baf35
      />)}`);
      res.end();
    });
  
    app.listen(port, host, function(error) {
      if (error) {
        console.error(error)
      } else {
        console.log('伺服器已啟動在 port %s . 打開 http://%s:%s/ 查看', port, host, port)
      }
    })
  } catch (err) {
    console.log('serverErrorCatch: ', err);
  }

}