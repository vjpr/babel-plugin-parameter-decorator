const path = require('path');

module.exports = {
  entry: './example/src/index.js',
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};