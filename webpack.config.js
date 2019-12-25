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

// webpack4 配置介紹
// https://segmentfault.com/a/1190000015032321

const client = {
  mode: 'development', // npm run start 沒有設定會出現warning // 可拆成webpack.production.config.js & webpack.development.config.js
  // mode: 'production',
  devtool: 'none', // 生產模式下:  devtool should be set to (none), source-map,hidden-source-map, or nosources-source-map
  // devtool: 'source-map', // devtool 影響tree shaking https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/267
  // 設定下面幾種 devtool (eval, cheap-eval-source-map, cheap-module-eval-source-map, eval-source-map, eval-source-map)　會造成tree shaking失效 (可能以上幾種會產生sideEffects)
  // devtool 有七種
  // 1. eval : 每個module會封裝到eval裡包裹起來執行，並且會在末尾追加註釋//@ sourceURL
  // 2. source-map : 生成一個SourceMap 文件.
  // 3. hidden-source-map : 和source-map 一樣，但不會在bundle 末尾追加註釋
  // 4. inline-source-map :生成一個DataUrl 形式的SourceMap 文件
  // 5. eval-source-map : 每個module 會通過eval() 來執行，並且生成一個DataUrl 形式的SourceMap
  // 6. cheap-source-map : 生成一個沒有列信息（column-mappings）的SourceMaps 文件，不包含loader 的sourcemap（譬如babel 的sourcemap）
  // 7. cheap-module-source-map : 生成一個沒有列信息（column-mappings）的SourceMaps 文件，同時loader 的sourcemap 也被簡化為只包含對應行的
  // entry: './src/index.js', // can use for prod env 
  entry: { bundle: './src/index.js' }, // can use for prod env 
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: './main.js'
    filename: '[name].js'
  },
  optimization: { // 將main.js的重複依賴項目刪除
    splitChunks: { // 相當於以前的 CommonsChunkPlugin // 同時index.html自動拆成兩個依賴 <script type="text/javascript" src="./vendors~main.main.js"></script><script type="text/javascript" src="./main.js"></script>
      chunks: 'all',
    },
    // sideEffects: false, // default: false // 如果所有代碼都不包含side effect，我們就可以簡單地將該屬性標記為false，來告知webpack，它可以安全地刪除未用到的export
    // "side effect(副作用)" 的定義是，在導入時會執行特殊行為的代碼，而不是僅僅暴露一個export 或多個export。舉例說明，例如polyfill，它影響全局作用域，並且通常不提供export。
    // 如果你的代碼確實有一些副作用，可以改為提供一個數組：
    // https://webpack.docschina.org/guides/tree-shaking/
    // 如果在mode:"production"模式，這個插件已經默認添加了 打包文件中添加諸如/* unused harmony export */這樣的註釋 代表有套用 UglifyJsPlugin 它告訴webpack每個模塊明確使用exports
    // webpack4 production下會自動機活uglifyJsPlugin 不用再下載 測試發現更小約原本30%而已    
  },
  //   // 其他優化套件
//   // mini-css-extract-plugin：對於將CSS從主應用程序中分離出來很有用。
//   // bundle-loader：用於拆分代碼並延遲加載生成的包。
//   // promise-loader：類似於，bundle-loader但使用諾言
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
  // devtool: "source-map",// server.js 沒有設定tree shaking 可輸出devtool : soure-map 不影響shaking
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

// ps:
// tree shaking 前提 // https://segmentfault.com/a/1190000016767989
// 1. use es6 module 即import和export & 確保沒有compiler將ES2015模塊語法轉換為CommonJS模塊 // can't use commonJs 但如果有使用babel babel.preset默認將所有模快轉成commonJs (server client都要改成es6?)  針對第三方庫的tree shaking 一樣要為es6 module
// solve: .babelrc 設置modules: false
// .babelrc
// {
//   "presets": [
//     ["env",
//       {
//         "modules": false
//       }
//     ]
//   ]
// }
// 2. 需要使用UglifyJsPlugin插件(壓縮js), 如果在mode:"production"模式，這個插件已經默認添加了，如果在其它模式下，可以手工添加它

// note
// !!! webpack4 webpack = build --mode production 而 tree shaking 在 webpack4 production環境下會自動tree shaking 
// !!! package.json sideEffects 如無副作用可設定為false 如果有則可用數組提供路徑 避免被tree shaking (package sideeffect 設定全局) # https://webpack.docschina.org/guides/tree-shaking/
// !!! 若第三方庫有sideEffect 可能導致整個庫tree shaking fail

// @media (orientation: landscape) {} 處理手機橫屏css
// webAPI:
          // 1.requestIdleCallback  # https://ithelp.ithome.com.tw/articles/10217280 // 當browser idle 可以插入任務 ex: 應用於idle期間先抓取資料
          // 2. MutationObserver # 在實作 Virtual DOM，或是想要監聽 DOM 的變化，來改變對應的 model # https://ithelp.ithome.com.tw/articles/10217810  
          //    MutationObserver 可以監聽 DOM 的變化，像是增刪、改變節點、Text node 變化等等。 
          //    異步執行(解決當下異動節點卻抓不到問題) 且當操作結束後 僅觸發一次 增加效能
          // 3. ServiceWorker for PWA, 讓網頁可以具備像 App 一樣的功能，像是設定桌面 icon、接收通知、更新、離線操作、快取等等，未來還可以利用手機原生的 share API 介面  # https://ithelp.ithome.com.tw/articles/10218255

// MEI : 影片靜音判定 分數夠高影片又有使用auto play 會自動開啟聲音 不會在是靜音 # chrome://media-engagement/
// 前端快取機制 - CDN, localStorage, Cache-Control, ServiceWorker # https://ithelp.ithome.com.tw/articles/10219276