var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    {
      test: /\.css$/,
      use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
