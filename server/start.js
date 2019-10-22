require('core-js/stable');
require('regenerator-runtime');
require('@babel/register')({
  presets: ['@babel/env'],
  plugins: [
    [
      'transform-assets',
      {
        extensions: ['jpg', 'png', 'svg', 'woff', 'woff2', 'ttf', 'eot'],
        name: '/assets/[name].[hash].[ext]',
      },
    ],
  ],
});

module.exports = require('./index.js');
