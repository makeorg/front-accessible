import { countryLanguageMiddleware } from './middleware/countryLanguage';
import { cookiesHandlerMiddleware } from './middleware/cookies';
import { headersResponseMiddleware } from './middleware/headers';
import { metricsMiddleware } from './middleware/metrics';
import { cspMiddleware } from './middleware/contentSecurityPolicy';
import { questionApi } from './api/question';
import { loggerApi } from './api/logger';

require('./browserPolyfill');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
const cookiesMiddleware = require('universal-cookie-express');

const defaultRoute = require('./ssr/defaultRoute');
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
app.use(headersResponseMiddleware);
app.use(cspMiddleware);

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
app.post('/api/logger', loggerApi);

const versionData = fs.readFileSync(VERSION_PATH, 'utf8');
function renderVersion(req, res) {
  try {
    res.json(JSON.parse(versionData));
  } catch (error) {
    res.status(404).send('Version file not found');
  }
}


const frontMiddlewares = [
  countryLanguageMiddleware,
  cookiesHandlerMiddleware,
  metricsMiddleware
];

// Front Routes
app.get('/version', renderVersion);
app.get('/404', cookiesHandlerMiddleware, defaultRoute);
app.get('/', countryLanguageMiddleware);
app.get('/:countryLanguage', frontMiddlewares, defaultRoute);
app.get(
  '/:countryLanguage/consultation/:questionSlug/selection',
  frontMiddlewares,
  sequenceRoute
);
app.get('/:countryLanguage/account-activation/:userId/:verificationToken',
  frontMiddlewares,
  accountActivationRoute);
app.get(
  '/:countryLanguage/consultation/:questionSlug/proposal/:proposalId/:proposalSlug',
  frontMiddlewares,
  proposalRoute
);
app.get(
  '/:countryLanguage/password-recovery/:userId/:resetToken',
  frontMiddlewares,
  passwordRecoveryRoute
);

module.exports = app;
