require('@babel/register')({
  presets: ['@babel/env'],
  plugins: [
    ['transform-assets', {
      extensions: ['jpg', 'png', 'svg', 'woff', 'woff2', 'ttf', 'eot'],
      name: 'assets/[name].[hash].[ext]'
    }]
  ]
});
require('./index.js');
