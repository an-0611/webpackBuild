const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.hot.config.js')

const express = require('express')
const app = express();
// const port = 8080;
const port = process.env.PORT || 8080;
// const host = '0.0.0.0';
const host = process.env.PORT ? null : '0.0.0.0';

const http = require('http');

if (process.env.PORT) {
    // app.get('/', function(req, res) {
    //   var body = '<!doctype html>' +
    //     '<html lang="en">'+
    //     '<head><meta charset="utf-8"></head>' +
    //     '<body>' +
    //     '<script src="/static/app.js"></script>' +
    //     '</body>'+
    //     '</html>';

    //   res.writeHead(200, {"Content-Type": "text/html"});
    //   res.write(body);
    //   res.end();
    // });
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('TTT 123\n')
  })
  
  server.listen(port, () => console.log(`Listening on ${port}`));
} else {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { // app.use() =< 此方法是宣告使用一個路由，變數 index 就是引入 routers 資料夾裡的 index.route 檔案，該路徑詳細內容就在該文件中編輯。
    noInfo: true,
    publicPath: config.output.publicPath
  })) 

  app.use(webpackHotMiddleware(compiler))

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
  })


  app.listen(port, host, function(error) {
    if (error) {
      console.error(error)
    } else {
      console.log('伺服器已啟動在 port %s . 打開 http://%s:%s/ 查看', port, host, port)
    }
  })
}