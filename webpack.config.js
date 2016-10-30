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
      filename: 'app.js',
   },

   module: {
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
