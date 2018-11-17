const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/entry.jsx", // 此处使用 jsx 语法文件作为入口
  output: {
    filename: "js/[name].bundle[hash:6].js",
    chunkFilename: "js/[name][chunkhash:6].js", // 'js/[id].bundle[chunkhash:6].js'
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  watchOptions: {
    ignored: /node_modules/
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxAsyncRequests: 15,
      maxInitialRequests: 10,
      automaticNameDelimiter: "-",
      name: true,
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        },
        antd: {
          name: 'chunk-antd',
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          priority: 20,
          chunks: 'initial'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]-[hash:base64:4]'
            }
          },
          'postcss-loader',
          'less-loader'
        ]
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
    new MiniCssExtractPlugin({ // 分离 css
      filename: 'css/[name][contenthash:6].css',
      chunkFilename: 'css/[id][contenthash:6].css' // 供应商(vendor)样式文件
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "webpack-onDemand",
      favicon: __dirname + "/favicon.ico",
      template: __dirname + "/index.html"
    }),
    new CleanWebpackPlugin(["dist"], { exclude: ["dll"] }),
    new webpack.optimize.ModuleConcatenationPlugin(), // scope hoisting
    new BundleAnalyzerPlugin({
      analyzerPort: 2018,
      generateStatsFile: true
    })
  ]
};
