const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleConfig = require('./module.conf');

module.exports = {
  entry: {
    app: './src/app/index.js'
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: 'app.js'
  },
  module: moduleConfig,
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: process.env.NODE_ENV === 'production',
      chunks: ['commons', 'app']
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
