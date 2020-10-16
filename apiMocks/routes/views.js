const jsonServer = require('json-server');
const { fixtures } = require('../fixtures/generator');

const viewsRouter = jsonServer.create();

viewsRouter.get('/home-page/FR', (req, res) => {
  return res.send(fixtures.homeView);
});

viewsRouter.get('/home-page/GB', (req, res) => {
  return res.send(fixtures.foreignHomeView);
});

viewsRouter.get('/countries', (req, res) => {
  return res.send(fixtures.countriesWithConsultations);
});

module.exports = viewsRouter;
