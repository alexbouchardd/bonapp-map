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
              presets: ['react', 'es2015']
            }
         }
      ]
   }
}

module.exports = config;
