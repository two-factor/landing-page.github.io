const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/index.js'),
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
      {
        test: /\.(css)$/,
        loader: 'css-loader'
      }
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
};

