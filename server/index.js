import { countryLanguageMiddelware } from './middelware/countryLanguage';
import { cookiesMiddelware } from './middelware/cookies';
import questionApi from './questionApi';
import { logger } from './logger';

require('./browserPolyfill');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
const csp = require('express-csp');
const cookiesMiddleware = require('universal-cookie-express');
const homeRoute = require('./ssr/homeRoute');
const sequenceRoute = require('./ssr/sequenceRoute');
const accountActivationRoute = require('./ssr/accountActivationRoute');
const proposalRoute = require('./ssr/proposalRoute');
const passwordRecoveryRoute = require('./ssr/passwordRecoveryRoute');
const {
  BUILD_DIR,
  IMAGES_DIR,
  DOC_DIR,
  VERSION_PATH
} = require('./paths');

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
app.use(cookiesMiddleware());

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

const versionData = fs.readFileSync(VERSION_PATH, 'utf8');
function renderVersion(req, res) {
  try {
    res.json(JSON.parse(versionData));
  } catch (error) {
    res.status(404).send('Version file not found');
  }
}

// define front middelware
const frontMiddelwares = [countryLanguageMiddelware, cookiesMiddelware];

// Front Routes
app.get('/', countryLanguageMiddelware);
app.get('/version', renderVersion);
app.get('/:countryLanguage', frontMiddelwares, homeRoute);
app.get(
  '/:countryLanguage/consultation/:questionSlug/selection',
  frontMiddelwares,
  sequenceRoute
);
app.get('/:countryLanguage/account-activation/:userId/:verificationToken',
  frontMiddelwares,
  accountActivationRoute);
app.get(
  '/:countryLanguage/consultation/:questionSlug/proposal/:proposalId/:proposalSlug',
  frontMiddelwares,
  proposalRoute
);
app.get(
  '/:countryLanguage/password-recovery/:userId/:resetToken',
  frontMiddelwares,
  passwordRecoveryRoute
);

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

module.exports = app;
