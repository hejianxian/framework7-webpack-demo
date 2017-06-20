const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ["css-loader", "less-loader", "postcss-loader"]
    })
  },
  {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.html$/,
    use: 'html-loader'
  },
  {
    test: /\.png$/,
    use: 'url-loader?limit=8192&mimetype=image/png'
  },
  {
    test: /\.jpe?g$/,
    use: 'ur-loaderl?limit=8192&mimetype=image/jpg'
  },
  {
    test: /\.gif$/,
    use: 'url-loader?limit=8192&mimetype=image/gif'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=8192&mimetype=image/svg+xml'
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=8192&mimetype=application/font-woff2'
  },
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=8192&mimetype=application/font-woff'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=8192&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    use: 'file-loader'
  },
  {
    test: /\.json$/,
    use: 'json-loader'
  }
];
