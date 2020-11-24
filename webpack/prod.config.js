const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./base.config.js');
const createHtmlWebpackPlugin = require('./plugins/htmlWebpackPlugin.config.js');

module.exports = [
  merge(baseConfig, {
    mode: 'production',
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      path: path.resolve(__dirname, '..', 'dist'),
      publicPath: '/assets/',
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
      new InlineSourcePlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
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
    },
    node: {
      __dirname: true,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2|manifest|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '/assets/[name].[hash].[ext]',
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
    ],
  },
];
