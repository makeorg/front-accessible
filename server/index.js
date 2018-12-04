import questionApi from './questionApi';
import { logger } from './logger';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
require('./browserPolyfill');
const reactRender = require('./reactRender');
const { BUILD_DIR } = require('./paths');
const configuration = require('./configuration');

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
}

// App
const app = express();
app.use(compression());

app.use(bodyParser.json());

// Static files
app.use('/assets', express.static(BUILD_DIR, {
  maxAge: '1y',
  setHeaders: setCustomCacheControl
}));

// Routes
app.get('/:country?', reactRender);
app.get('/api/questions/:questionSlug', questionApi);


app.post('/api/logger', (req, res) => {
  logger.log(
    req.body.level,
    req.body.data
  );

  return res.sendStatus(204);
});

app.listen(configuration.port, configuration.host);
