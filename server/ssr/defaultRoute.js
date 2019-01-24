const reactRender = require('../reactRender');

module.exports = function defaultRoute(req, res) {
  return reactRender(req, res);
};
