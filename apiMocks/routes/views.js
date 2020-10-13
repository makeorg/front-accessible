const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const viewsRouter = jsonServer.create();

viewsRouter.get('/home-page/FR/fr', (req, res) => {
  return res.send(fixtures.homeView);
});

viewsRouter.get('/home-page/GB/en', (req, res) => {
  return res.send(fixtures.homeView);
});

module.exports = viewsRouter;
