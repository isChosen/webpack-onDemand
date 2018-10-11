/**
 * @Author: detcx 
 * @Date: 2018-09-30 09:44:59 
 * @Last Modified by: Chosen
 * @Last Modified time: 2018-10-11 17:54:41
 * @description development configuration
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  mode: 'development', // development production
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].[chunkhash:6].js', // 'js/[id].bundle[chunkhash:6].js'
    path: path.resolve(__dirname, 'dist'), // 打包后的目录，必须是绝对路径
    publicPath: '/'
    
  },
  watchOptions: {
    ignored: /node_modules/
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
    mainFields: ['jsnext:main', 'browser', 'main'] // 配合 scope hoisting
  },

  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dist/dll/react.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./dist/dll/polyfill.manifest.json')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Oh-webpack-onDemand',
      template: __dirname + '/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {exclude: ['dll']}),
    // scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    /* new BundleAnalyzerPlugin({
      analyzerPort: 8039,
      generateStatsFile: true
    }) */
  ]
}
