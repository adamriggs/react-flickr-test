var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  // entry: APP_DIR + '/index.jsx',

  entry: {
    App: [
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/only-dev-server',
      APP_DIR + '/index.jsx',
    ]
  },

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },

  plugins: [
      new ExtractTextPlugin('style.css', {
          allChunks: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],

  module : {
    loaders : [

      // ES6 & JSX
      {
        test : /\.jsx$/,
        include : APP_DIR,
        loaders: ['react-hot', 'babel']
      },

      // ES5
      { 
        test: /\.js$/,
        loader: 'babel'
        //exclude: '/node_modules/'
      },

      //Masonry
      {
          test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
          loader: 'imports?define=>false&this=>window'
      },

      // SASS
      {
        test: /\.scss$/,
        include : APP_DIR,
        loader: ExtractTextPlugin.extract('css!sass')
      },

      // CSS
      { 
        test: /\.css$/,
        loader: 'style!css' 
      },

      //JSON
      { test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  }
};

module.exports = config;
