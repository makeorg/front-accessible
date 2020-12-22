const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./base.config.js');
const createHtmlWebpackPlugin = require('./plugins/htmlWebpackPlugin.config.js');

module.exports = [
  merge(baseConfig, {
    mode: 'production',
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js',
      path: path.resolve(__dirname, '..', 'dist', 'client'),
      publicPath: '/',
      sourceMapFilename: '../map/[name].[hash].js.map',
    },
    stats: {
      hash: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true,
      children: true,
    },
    optimization: {
      moduleIds: 'hashed',
      minimizer: [new TerserPlugin()],
      runtimeChunk: false, // runtimeChunk + inlineSource is not compatible with loadable-component for now
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
          },
        },
      },
      concatenateModules: true,
    },
    plugins: [
      createHtmlWebpackPlugin({ ssr: true }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
    devtool: 'hidden-source-map',
  }),
  {
    // server side rendering
    target: 'node',
    mode: 'production',
    context: path.resolve('.'),
    entry: [
      'core-js/stable',
      'regenerator-runtime',
      path.resolve(__dirname, '..', 'server', 'index.js'),
    ],
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      sourceMapFilename: 'map/[file].map',
    },
    node: {
      __dirname: true,
    },
    externals: [
      nodeExternals(),
      { 'webpack-manifest': './webpack-manifest.json' },
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['convert-to-json'],
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2|manifest|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'client/assets',
                publicPath: '/assets/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
    devtool: 'source-map',
  },
];
