const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const base = require('./webpack.base.conf')

const TITLE = 'Join the biggest LIVE event ever in Words With Friends - Word With Friends 2'

module.exports = merge(base, {
  mode   : 'production',
  // devtool : 'source-map', // remove this comment if you want JS source maps
  output : {
    path       : path.resolve(__dirname, '../dist'),
    publicPath : '/',
    filename   : '[chunkhash].app.js',
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin({
        cache     : true,
        parallel  : 3,
        sourceMap : false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline     : false,
            annotation : true
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test : /(\.css|\.pcss|\.(sass|scss))$/,
        use  : [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader  : 'css-loader', // translates CSS into CommonJS
            options : {
              minimize      : true,
              sourceMap     : true,
              importLoaders : 2
            }
          },
          {
            loader  : 'sass-loader',
            options : {
              sourceMap: true
            }
          },
          {
            // resolves relative paths based on the original source file.
            loader: 'resolve-url-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: false }),
    new MiniCssExtractPlugin({
      filename: '[chunkhash].app.css'
    }),
    new HtmlWebpackPlugin({
      filename : path.resolve(__dirname, '../dist/index.html'),
      template : 'src/index.ejs',
      favicon  : 'favicon.ico', // or use favicons-webpack-plugin
      title    : TITLE,
      url      : 'https://www.wordswithfriendslive.com/',
      minify   : {
        removeComments        : true,
        collapseWhitespace    : true,
        removeAttributeQuotes : true,
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      filename : path.resolve(__dirname, '../dist/player/index.html'),
      template : 'src/player/index.ejs',
      favicon  : 'favicon.ico', // or use favicons-webpack-plugin
      title    : TITLE,
      url      : 'https://www.wordswithfriendslive.com/'
    }),

    // copy assets and manifest.json
    new CopyWebpackPlugin([
      {
        from   : path.resolve(__dirname, '../src/assets'),
        to     : 'assets',
        ignore : ['.*', 'css/*']
      },
      {
        from : path.resolve(__dirname, '../src/manifest.json'),
        to   : ''
      }
    ]),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new OfflinePlugin({
      autoUpdate     : 30,
      AppCache       : false,
      updateStrategy : 'all',
      ServiceWorker  : {
        minify: false
      }
    })
  ]
})
