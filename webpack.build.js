const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(base, {
  devtool: 'source-map',
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
    }),

  ]
});