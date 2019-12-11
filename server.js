const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')

const http = require('http');

const express = require('express')
const app = express();
const port = process.env.PORT || 8080; // 用docker 時換成8080,  webpack output記得改
// const host = process.env.PORT ? null : '0.0.0.0';

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
    app.get('/', function(req, res) { // 之後改成ssr 先用測試
      var body = '<!doctype html>' +
        '<html lang="en">'+
        '<head><meta charset="utf-8"></head>' +
        '<body>' +
        '<div>server render heroku test</div>'
        '</body>'+
        '</html>';

      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(body);
      res.end();
    });
    app.listen(port, () => console.log((`Listening on ${port}`)))
  } catch(err) {
    console.log(err)
  }
  
} else {
  // app.use(path, router) router 代表一個由express.Router()創建的對象 可定義多個路由規則
  // app.get() // 當只有一個規則時 用app.get()直接回掉function 即可
  const host = '0.0.0.0';
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