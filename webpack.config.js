var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var __f7Path = __dirname + '/node_modules/framework7/dist';

var config = {
  // the main entry of our app
  entry: {
      app: ['./src/app/index.js']
  },
  // output configuration
  output: {
    path: __dirname + '/dist/',
    contentBase: 'dist/',
    filename: 'app.js'
  },
  // f7 alias
  resolve: {
    alias: {
        'framework7': __f7Path + '/js/framework7.js',
        'framework7.material.css': __f7Path + '/css/framework7.material.css',
        'framework7.material.color.css': __f7Path + '/css/framework7.material.colors.css'
    }
  },
  // how modules should be transformed
  module: {
    loaders: [
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
        {test: /\.less$/, loader: ExtractTextPlugin.extract( "style-loader", 'css-loader?sourceMap!autoprefixer-loader!less-loader')},
        {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        {test: /\.html$/, loader: 'html'},
        {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
        {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
        {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
    ]
  },
  // configure babel-loader.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
      new ExtractTextPlugin("style.css", {
          allChunks: true
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CopyWebpackPlugin([
          {from: './src/index.html', to: './index.html'},
          {from: './src/page', to: './page' }
      ])
  ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]);
}

module.exports = config;
