const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const viewsRouter = jsonServer.create();

viewsRouter.get('/home', (req, res) => {
  return res.send(fixtures.deprecatedHomeView);
});

viewsRouter.get('/home-page/FR/fr', (req, res) => {
  return res.send(fixtures.homeView);
});

module.exports = viewsRouter;
