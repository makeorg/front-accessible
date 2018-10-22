module.exports = {
  apiUrl: process.env.API_URL || 'https://api.preprod.makeorg.tech',
  proxyApiUrl: [process.env.FRONT_URL || 'https://accessible.preprod.makeorg.tech', 'api'].join('/'),
  port: process.env.PORT || 9009,
  host: process.env.HOST || 'localhost'
};
