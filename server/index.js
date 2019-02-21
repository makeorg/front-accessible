import './browserPolyfill';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceServer } from 'Shared/api/ApiService/ApiService.server';
import { countryLanguageMiddleware } from './middleware/countryLanguage';
import { headersResponseMiddleware } from './middleware/headers';
import { metricsMiddleware } from './middleware/metrics';
import { cspMiddleware } from './middleware/contentSecurityPolicy';
import { questionApi } from './api/question';
import { loggerApi } from './api/logger';
import * as technicalPages from './technicalPages';

import { accountActivationRoute } from './ssr/accountActivationRoute';
import { defaultRoute } from './ssr/defaultRoute';
import { sequenceRoute } from './ssr/sequenceRoute';
import { proposalRoute } from './ssr/proposalRoute';
import { passwordRecoveryRoute } from './ssr/passwordRecoveryRoute';
import { serverInitI18n } from './i18n';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
const cookiesMiddleware = require('universal-cookie-express');
const favicon = require('serve-favicon');

serverInitI18n();
ApiService.strategy = new ApiServiceServer();

const {
  BUILD_DIR,
  IMAGES_DIR,
  DOC_DIR,
  FAVICON_PATH
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
app.use(favicon(FAVICON_PATH));
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

const frontMiddlewares = [
  countryLanguageMiddleware,
  metricsMiddleware
];

// Front Routes
app.get('/robot.txt', technicalPages.renderRobot);
app.get('/version', technicalPages.renderVersion);
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

app.get('*', frontMiddlewares, defaultRoute);

module.exports = app;
