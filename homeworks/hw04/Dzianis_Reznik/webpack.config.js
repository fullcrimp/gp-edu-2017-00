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
      exclude: [path.resolve(__dirname, 'index.html'),
        path.resolve(__dirname, 'src/components/content.html')
      ]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}
