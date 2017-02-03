const path = require('path');
const http = require('http');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

const server = http.createServer(app);
server.listen(8080, 'localhost', function(err) {
  if (err) throw err;

  const addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
