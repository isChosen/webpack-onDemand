/**
 * @Author: detcx 
 * @Date: 2018-09-30 09:44:59 
 * @Last Modified by: Chosen
 * @Last Modified time: 2018-10-10 19:05:15
 * @description development configuration
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // development production
  entry: './src/index.js',
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].[chunkhash:6].js', // 'js/[name].bundle.js'
    path: path.resolve(__dirname, 'dist') // 打包后的目录，必须是绝对路径
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, 'node_modules'),
        // use: 'babel-loader'
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    open: true,
    port: '8053',
    hot: true,
    https: false,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    disableHostCheck: true,
    historyApiFallback: true
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.es6'],
    mainFields: ['main']
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Oh-webpack-onDemand',
      template: __dirname + '/index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
