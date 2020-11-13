const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function createHtmlWebpackPlugin(options) {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, '../../public/index.html'),
    filename: './index.html',
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      charset: 'utf-8',
      'theme-color': '#ed1844',
    },
    chunks: options.ssr ? [] : undefined, // do not inject scripts in ssr because it's managed by loadable in server/reactRender.js -> extractor.getScriptTags
    minify: {
      removeComments: false,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
    inlineSource: 'runtime~.+\\.js',
  });
};
