const path = require('path');
const webpack = require('webpack');

const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');
const JS = path.resolve(__dirname, 'src/js');

module.exports = {
  entry: {
    app: path.join(JS, 'index.js'),
    vendor: [
      'jquery',
      'bootstrap'
    ]
  },

  output: {
    path: DIST,
    filename: '[name].js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase: DIST
  }
};
