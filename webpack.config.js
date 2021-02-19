const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve('src'),
  entry: {
    index: './index.js',
    progress: './progress.js',
    scrollTriggerTest1: './scrolltrigger-test1.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader',
      }
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'MorphSVG-1',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: 'scrolltrigger/test-1.html',
      title: 'scrolltrigger-test1',
      filename: 'scrolltrigger-test-1.html',
      chunks: ['scrollTriggerTest1'],
    }),
    new HtmlWebpackPlugin({
      template: 'scrolltrigger/progress.html',
      title: 'progress',
      filename: 'progress.html',
      chunks: ['progress'],
    }),
  ]
}
