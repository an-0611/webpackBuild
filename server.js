const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.hot.config.js')

const express = require('express')
const app = express();
const port = 3000;
const host = '0.0.0.0'

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