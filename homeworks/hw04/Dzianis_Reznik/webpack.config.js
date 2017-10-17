const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader',
      exclude: [path.resolve(__dirname, 'index.html')]
    }, {
      test: /\.(scss)$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          useRelativePath: true,
          name: '[name].[ext]'
        }
      }]
    }]
  }
}
