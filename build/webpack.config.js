const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./rules');
const config = require('./config');

const webpackConfig = {
  entry: {
      app: ['./src/app/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules
  },
  devServer: config.dev,
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {from: './src/page', to: './page' }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: process.env.NODE_ENV === 'production'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
}

module.exports = webpackConfig;
