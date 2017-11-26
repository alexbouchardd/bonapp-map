const webpack = require('webpack');

const environment = JSON.stringify(process.env.NODE_ENV || 'production');

const config = {
  entry: ['./src/client'],

  output: {
    filename: 'docs/bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: environment
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],

  resolve: {
    extensions: ['.js', '.json']
  }
};

if (environment === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false
    }
  }));
}

module.exports = config;

