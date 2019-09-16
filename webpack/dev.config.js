const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
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
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_URL: JSON.stringify('https://api.preprod.makeorg.tech'),
      },
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: './dist',
    hot: true,
    host: process.env.HOST || '0.0.0.0',
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
});
