const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ManifestPlugin = require('webpack-manifest-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'client', 'index.js'),
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, '../client/app/assets/images/favicon.png'),
      prefix: 'favicon/',
    }),
    new WebpackPwaManifest({
      short_name: 'Make.org',
      name: 'Make.org',
      start_url: './index.html',
      display: 'standalone',
      theme_color: '#ed1844',
      background_color: '#ffffff',
      icons: [
        {
          src: path.join(__dirname, '../client/app/assets/images/favicon.png'),
          size: [36, 48, 72, 96, 144, 192, 256, 384, 512],
          destination: path.join('favicon'),
        },
      ],
    }),
    new ManifestPlugin(),
    new LoadablePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
            },
          },
        ],
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
