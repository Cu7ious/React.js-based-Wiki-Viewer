const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/core.js'
  ],

  output: {
    path: __dirname + '/src/assets/js',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: process.env.PORT
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
