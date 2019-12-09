const path = require('path');
const webpack = require('webpack');
// https://juejin.im/post/5a10d9fe51882554bd50a5d3
// express-hot-reload // https://github.com/kevinsimper/express-reload
// webpack-hot-reload // https://medium.com/@Ahmad.Asaad/webpack-dev-server-hot-module-replacement-hmr-and-source-maps-easing-the-pain-e7cee99e3bdf

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      './components/app.js',
      'webpack-hot-middleware/client?reload=true'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}