'use strict'

const path = require('path')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')
const docPath = path.resolve(__dirname, '../src/docs')
const markdown = require('./markdown.config')

module.exports = {
  entry: {
    app: ['./src/main.js'],
    // If you want to support IE < 11, should add `babel-polyfill` to vendor.
    // e.g. ['babel-polyfill', 'vue', 'vue-router', 'vuex']
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      views: path.resolve(__dirname, '../src/views'),
      docs: path.resolve(__dirname, '../src/docs'),
      i18n: path.resolve(__dirname, '../src/i18n'),
      'vuex-store': path.resolve(__dirname, '../src/store')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: require('./vue-loader.conf')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        // /node_modules\/(?!vue-bulma-.*)/
        exclude: [new RegExp(`node_modules\\${path.sep}(?!vue-bulma-.*)`)]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader',
        include: docPath,
        exclude: /node_modules/,
        options: markdown
      }
    ]
  },
  // See https://github.com/webpack/webpack/issues/3486
  performance: {
    hints: false
  }
}
