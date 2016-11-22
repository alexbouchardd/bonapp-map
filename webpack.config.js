var webpack = require('webpack');

new webpack.DefinePlugin({
  "process.env": {
     NODE_ENV: JSON.stringify("production")
  }
});

var config = {
   entry: './src/client',

   output: {
      path:'./public',
      filename: 'bundle.js',
   },

   module: {
     preLoaders: [
        {
          test: /\.json$/,
          exclude: /node_modules/,
          loader: 'json-loader'
        },
      ],
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
              presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
