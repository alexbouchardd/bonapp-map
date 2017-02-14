var webpack = require('webpack');

new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}),

new webpack.optimize.UglifyJsPlugin()

var config = {
  entry: './src/client',

  output: {
    path:'./public',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
         test: /\.json$/,
         exclude: /node_modules/,
         loader: 'json'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json']
  }
}

module.exports = config;
