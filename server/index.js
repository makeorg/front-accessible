import questionApi from './questionApi';
import { logger } from './logger';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
const csp = require('express-csp');
require('./browserPolyfill');
const homeRoute = require('./ssr/homeRoute');
const sequenceRoute = require('./ssr/sequenceRoute');
const { BUILD_DIR, IMAGES_DIR, DOC_DIR } = require('./paths');
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

app.use('/images', express.static(IMAGES_DIR, {
  maxAge: '1y',
  setHeaders: setCustomCacheControl
}));

app.use('/doc', express.static(DOC_DIR));

// API Routes
app.get('/api/questions/:questionSlug', questionApi);
app.post('/api/logger', (req, res) => {
  logger.log(
    req.body.level,
    req.body.data
  );

  return res.sendStatus(204);
});


// Front middelware
function countryDetectMiddelware(req, res, next) {
  const { country } = req.params;
  if (!country || !(/^[A-Z]{2,3}$/.test(country))) {
    const detectedCountry = req.headers['x-forced-country'] || req.headers['x-detected-country'] || 'FR';
    const url = (req.url !== '/') ? req.url : '';
    return res.redirect(`/${detectedCountry}${url}`);
  }

  return next();
}

// Front Routes
app.get('/', countryDetectMiddelware);
app.get('/:country', countryDetectMiddelware, homeRoute);
app.get('/:country/consultation/:questionSlug/selection', countryDetectMiddelware, sequenceRoute);

// CSP
csp.extend(app, {
  policy: {
    directives: {
      'base-uri': 'self',
      'script-src': ['self', '*.facebook.net', '*.facebook.com', '*.google.com', 'unsafe-inline'],
      'img-src': ['self', '*.facebook.com'],
      'style-src': ['unsafe-inline'],
      'font-src': 'self',
      'object-src': 'none',
      'media-src': 'none',
      'connect-src': ['self', '*.makeorg.tech', '*.make.org'],
      'form-action': ['self', '*.facebook.com'],
      'child-src': ['self', '*.facebook.com', '*.google.com']
    }
  }
});

app.listen(configuration.port, configuration.host);
