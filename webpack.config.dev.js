const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/entry.jsx", // 此处使用 jsx 语法文件作为入口
  output: {
    filename: "js/[name].bundle[hash:6].js",
    chunkFilename: "js/[name][chunkhash:6].js", // 'js/[id].bundle[chunkhash:6].js'
    path: path.resolve(__dirname, "dist"), // 打包后的目录，必须是绝对路径
    publicPath: "/"
  },
  watchOptions: {
    ignored: /node_modules/
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      automaticNameDelimiter: "-"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  devServer: {
    hot: true,
    open: true,
    https: false,
    port: "8053",
    publicPath: "/",
    host: "localhost",
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist")
  },

  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx", ".es6"],
    mainFields: ["jsnext:main", "browser", "main"] // 配合 scope hoisting
  },

  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require("./dist/dll/react.manifest.json")
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dist/dll/polyfill.manifest.json")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Oh-webpack-onDemand",
      favicon: __dirname + "/favicon.ico",
      template: __dirname + "/index.html"
    }),
    new CleanWebpackPlugin(["dist"], { exclude: ["dll"] }),
    new webpack.optimize.ModuleConcatenationPlugin() // scope hoisting
    /* new BundleAnalyzerPlugin({
      analyzerPort: 2018,
      generateStatsFile: true
    }) */
  ]
};
