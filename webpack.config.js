const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
}
;