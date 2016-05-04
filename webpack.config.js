module.exports = {
  entry: [
    './src/core.js'
  ],
  output: {
    path: __dirname + '/webpack-bundle',
    filename: 'webpack-bundle.js'
  },
  devServer: {
    inline: true,
    port: process.env.PORT
  },
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
