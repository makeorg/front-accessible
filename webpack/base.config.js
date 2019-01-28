const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'client', 'src', 'index.js'),
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: './index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        charset: 'utf-8',
        'theme-color': '#ed1844'
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inlineSource: 'runtime~.+\\.js'
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, '../client/src/assets/images/favicon.png'),
      prefix: 'favicon/'
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
          src: path.join(__dirname, '../client/src/assets/images/favicon.png'),
          size: [36, 48, 72, 96, 144, 192, 256, 384, 512],
          destination: path.join('favicon')
        }
      ]
    }),
    new InlineSourcePlugin(),
    new ManifestPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }]
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
