module.exports = {
  proxyTargetApiUrl:
    process.env.PROXY_TARGET_API_URL ||
    process.env.API_URL ||
    'http://localhost:9000',
  apiUrl: process.env.API_URL || 'http://localhost:9000',
  frontUrl: process.env.FRONT_URL || 'https://www.preprod.makeorg.tech',
  port: process.env.PORT || 9009,
  host: process.env.HOST || 'localhost',
};
