const path = require('path');
const webpack = require('webpack');
// https://juejin.im/post/5a10d9fe51882554bd50a5d3

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'components'),
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      './app.js'
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