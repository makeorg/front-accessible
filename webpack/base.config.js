const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'glider-js/glider-compat.min.js',
    path.resolve(__dirname, '..', 'client', 'index.js'),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new WebpackPwaManifest({
      filename: 'assets/[name].[hash].[ext]',
      short_name: 'Make.org',
      inject: true,
      name: 'Make.org',
      start_url: '/',
      display: 'standalone',
      theme_color: '#ed1844',
      background_color: '#ffffff',
      fingerprints: true,
      includeDirectory: true,
      ios: true,
      publicPath: '/assets/',
      icons: [
        {
          src: path.join(__dirname, '../client/app/assets/images/favicon.png'),
          size: [36, 48, 72, 96, 144, 192, 256, 384, 512],
          destination: path.join('favicon'),
        },
      ],
    }),
    new WebpackManifestPlugin({
      fileName: '../webpack-manifest.json',
    }),
    new LoadablePlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['fr', 'en'],
    }),
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
              name: 'assets/[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ],
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};
