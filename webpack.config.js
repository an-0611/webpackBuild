const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');  // 防止將某些import的包（package）打包到bundle中，或者在運行時（runtime）再去從外部獲取這些擴展依賴 // https://webpack.docschina.org/configuration/externals/
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // build打包前清除該目錄檔案 避免舊文件存在
// 除去node中干擾模快 如jquery 使用cdn引入而不使用node module內的jquery

// https://medium.com/i-am-mike/webpack%E6%95%99%E5%AD%B8-%E4%B8%89-%E6%B0%B8%E4%B8%8D%E5%81%9C%E6%AD%A2%E7%9A%84watch-dbf98ebf8356
// production ：上線版本，需要將檔案給壓縮跟優化
// development：開發中，只編譯
// webpack4預設是production，所以在不設定mode的情況下watch會執行production狀態，
// 但是這樣不太好，因為開發中的時候你每次執行watch就除了幫你編譯還執行的壓縮跟優化，
// 太消耗資源，而且會佔太多電腦記憶體，所以我們會在執行npm script的時候要加上 “watch”: “webpack --watch --mode development”

// https://juejin.im/post/5a10d9fe51882554bd50a5d3
// express-hot-reload // https://github.com/kevinsimper/express-reload
// webpack-hot-reload // https://medium.com/@Ahmad.Asaad/webpack-dev-server-hot-module-replacement-hmr-and-source-maps-easing-the-pain-e7cee99e3bdf
// webpack4 sass & css https://medium.com/@mmaarriicckk/webpack4-sass-css-835062e31f6f
// style-loader // 將css打包進js內,需要轉換字串所引用
// css-loader // 將css轉換成CommonJS (es5前使用的模組化標準)
// 處理sass轉換 // sass-loader-將sass轉成css編輯方式,而node-sass,則可以透過.sass轉成.css
// webpack ./src/components/index.js --output ./dist/.bundle.js --mode development

// dev && prod config 拆分方法
// https://neighborhood999.github.io/webpack-tutorial-gitbook/Part1/WebpackDevServer.html 
// 1. dev 設定檔省略了優化，當你不斷的 rebuild 時，他們是不必要的。所以不需要 webpack.optimize plugins。

// https://webpack.js.org/configuration/mode/
// qa why webpack production 的綑綁會變成1.main.js'

// !!!!! chunk split !!! important
// https://webpack.js.org/guides/code-splitting/

// 操做完 檢查 
// npm run start    npm run test  npm run dockerize npm run build

// import Html from './src/html'
// console.log(Html)

const client = {
  // mode: 'development', // npm run start 沒有設定會出現warning // 可拆成webpack.production.config.js & webpack.development.config.js
  devtool: 'cheap-module-eval-source-map',
  // entry: './src/index.js', // can use for prod env 
  entry: { bundle: './src/index.js' }, // can use for prod env 
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: './main.js'
    filename: '[name].js'
  },
  optimization: { // 將main.js的重複依賴項目刪除
    splitChunks: { // 同時index.html自動拆成兩個依賴 <script type="text/javascript" src="./vendors~main.main.js"></script><script type="text/javascript" src="./main.js"></script>
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), // 排序输出，依調用次數決定各模組 ids，常被調用者會配給更短的 id，使其更好預測並降低文件大小。
    new webpack.NoEmitOnErrorsPlugin(), // 確保輸出的 assets 不會包含錯誤在裡面，在 compile 階段，有錯誤出現就終止。也可在 webpack.config 檔中設定 bail: true 的意思一樣
    new HtmlWebpackPlugin({ // 為你生成一個HTML5文件，其中包括使用script標籤的body中的所有webpack包 // 打包输出HTML
      title: 'React Webpack Babel Setup',
      // minify: {
      //   removeComments: true, // 移除HTML中的注釋
      //   collapseWhitespace: false, // 删除空白符与换行符 會變一行
      //   minifyCSS: false// 壓縮內聯css
      // },
      // filename: './index.html',
      template: 'index.html' //　以根目錄底下的index.html當作模版 添加<div id=app></div> 若該index.html有其他js build出來的index.html也會有
    }),
    // new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: ['dist']
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 1.遇到js檔案時
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', // 2.先用babel-loader進行轉換 在添加進綑綁中
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
}

const server = {
  devtool: "source-map",
  entry: { server: './server.js' }, // 這樣設定才不會打包到預設 webpack4 預設 main.js內 會獨立產一隻js 產玩的server.js 經過babel編譯就可以使用import es6 
  output: {
    path: path.resolve(__dirname,'dist'), // 又server.js 在 ./dist 資料夾內生成  server.js => res.sendFile index.html讀取路徑也要調整
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 1.遇到js檔案時
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', // 2.先用babel-loader進行轉換 在添加進綑綁中
        }
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
  ],
  externals: [nodeExternals()],
  target: 'node',
  // node: {
  //   __dirname: false,
  //   __filename: false,
  // }
  
}

module.exports = [client, server];

// =====================================================================================================================

// module.exports = {
//   mode: 'development', // npm run start 沒有設定會出現warning // 可拆成webpack.production.config.js & webpack.development.config.js
//   // mode: 'production',
//   // context: path.resolve(__dirname, 'src'),
//   devtool: 'cheap-module-eval-source-map',
//   // entry: {
//   //   app: [
//   //     './src/index.js',
//   //     // 'webpack-hot-middleware/client?reload=true' // 現在build 會包含此模組 但不需要 webpack改成dev & prod 後 將此依賴僅輸出於dev 使build出來的檔案不包含該模組
//   //   ]
//   // },
//   entry: './src/index.js', // can use for prod env 
//   output: {
//     path: path.join(__dirname,'/dist'),
//     filename: './main.js'
//   },
//   optimization: { // 將main.js的重複依賴項目刪除
//     splitChunks: { // 同時index.html自動拆成兩個依賴 <script type="text/javascript" src="./vendors~main.main.js"></script><script type="text/javascript" src="./main.js"></script>
//       chunks: 'all',
//     },
//   },
//   // 其他優化套件
//   // mini-css-extract-plugin：對於將CSS從主應用程序中分離出來很有用。
//   // bundle-loader：用於拆分代碼並延遲加載生成的包。
//   // promise-loader：類似於，bundle-loader但使用諾言
//   // output: {
//   //   path: path.resolve(__dirname, 'dist'),
//   //   // path: path.join(__dirname, 'dist'),
//   //   // filename: '[name].js',
//   //   filename: 'bundle.js',
//   //   publicPath: 'http://localhost:8080/dist/'
//   //   // publicPath: '/'
//   // },
//   plugins: [
//     // https://medium.com/@savemuse/webpack-%E5%B8%B8%E7%94%A8-plugins-%E4%BB%8B%E7%B4%B9-1505ea01052d
//     new webpack.optimize.OccurrenceOrderPlugin(), // 排序输出，依調用次數決定各模組 ids，常被調用者會配給更短的 id，使其更好預測並降低文件大小。
//     // new webpack.HotModuleReplacementPlugin(), // 熱加載 HMR // build　出來的檔案不該有這個 之後優化 限定於development Ver.
//     new webpack.NoEmitOnErrorsPlugin(), // 確保輸出的 assets 不會包含錯誤在裡面，在 compile 階段，有錯誤出現就終止。也可在 webpack.config 檔中設定 bail: true 的意思一樣
//     new HtmlWebpackPlugin({ // 為你生成一個HTML5文件，其中包括使用script標籤的body中的所有webpack包 // 打包输出HTML
//       title: 'React Webpack Babel Setup',
//       minify: {
//         removeComments: true, // 移除HTML中的注釋
//         collapseWhitespace: false, // 删除空白符与换行符 會變一行
//         minifyCSS: false// 壓縮內聯css
//       },
//       // filename: '', // 輸出的名稱?
//       template: 'index.html' //　以根目錄底下的index.html當作模版 添加<div id=app></div> 若該index.html有其他js build出來的index.html也會有
//     })
//     // html-webpack-plugin默認將會在output.path的目錄下創建一個index.html文件，並在這個文件中插入一個script標籤，標籤的src為 output.filename
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // 1.遇到js檔案時
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader', // 2.先用babel-loader進行轉換 在添加進綑綁中
//         }
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader"
//           }
//         ]
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
// };
