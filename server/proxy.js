const proxy = require('http-proxy-middleware');
const configuration = require('./configuration.js');

function onProxyRes(proxyRes) {
  if (!configuration.proxyApiUrl.startsWith('https://') && proxyRes.headers['set-cookie']) {
    const cookies = proxyRes.headers['set-cookie']
      .map(cookie => cookie.replace(/; secure/gi, ''));
    proxyRes.headers['set-cookie'] = cookies; /* eslint no-param-reassign:0 */
  }
}

const options = {
  target: configuration.apiUrl,
  headers: { Accept: 'application/json' },
  pathRewrite: {
    '^/api/': '/'
  },
  secure: false,
  changeOrigin: true,
  onProxyRes
};

module.exports = proxy(options);
