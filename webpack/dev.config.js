const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const createHtmlWebpackPlugin = require('./plugins/htmlWebpackPlugin.config.js');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    createHtmlWebpackPlugin({ ssr: false }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.HTTPS': JSON.stringify(process.env.HTTPS || 'true'),
      'process.env.HOST': JSON.stringify(
        process.env.HOST || 'local.makeorg.tech'
      ),
      'process.env.PORT': JSON.stringify(process.env.PORT || '3000'),
      'process.env.API_URL': JSON.stringify(
        process.env.API_URL || 'https://api.preprod.makeorg.tech'
      ),
      'process.env.FRONT_URL': JSON.stringify(
        process.env.FRONT_URL || 'https://local.makeorg.tech:3000'
      ),
    }),
  ],
  devServer: {
    port: process.env.PORT || '3000',
    contentBase: './dist',
    hot: true,
    host: process.env.HOST || 'local.makeorg.tech',
    historyApiFallback: true,
    disableHostCheck: true,
    https: process.env.HTTPS ? process.env.HTTPS === 'true' : true,
  },
  devtool: 'inline-source-map',
});
