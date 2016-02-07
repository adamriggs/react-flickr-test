var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
    
      // ES6 & JSX
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          presets: ['es2015', 'react']
        }
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

      //JSON
      { test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};

module.exports = config;
