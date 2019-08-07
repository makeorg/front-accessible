import {
  ROUTE_COUNTRY_LANG,
  ROUTE_SEQUENCE,
  ROUTE_ACCOUNT_ACTIVATION,
  ROUTE_PROPOSAL,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_CONSULTATION,
  ROUTE_PROFILE,
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVOURITES,
  ROUTE_PROFILE_EDIT,
  ROUTE_ACTION,
  ROUTE_ORGANISATION_PROFILE,
  ROUTE_ORGANISATION_PROPOSALS,
  ROUTE_ORGANISATION_VOTES,
} from 'Shared/routes';
import { countryLanguageMiddleware } from './middleware/countryLanguage';
import { metricsMiddleware } from './middleware/metrics';
import { questionApi } from './api/question';
import { loggerApi } from './api/logger';
import * as technicalPages from './technicalPages';

import { accountActivationRoute } from './ssr/accountActivationRoute';
import { defaultRoute } from './ssr/defaultRoute';
import { consultationRoute } from './ssr/consultationRoute';
import { sequenceRoute } from './ssr/sequenceRoute';
import { proposalRoute } from './ssr/proposalRoute';
import { passwordRecoveryRoute } from './ssr/passwordRecoveryRoute';
import { loggerMiddleware } from './middleware/logger';

const express = require('express');
const serveStatic = require('serve-static');
const { BUILD_DIR, IMAGES_DIR, DOC_DIR } = require('./paths');

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
}

export const initRoutes = app => {
  // Static files
  app.use(
    '/assets',
    express.static(BUILD_DIR, {
      maxAge: '1y',
      setHeaders: setCustomCacheControl,
    })
  );

  app.use(
    '/images',
    express.static(IMAGES_DIR, {
      maxAge: '1y',
      setHeaders: setCustomCacheControl,
    })
  );

  app.use('/doc', express.static(DOC_DIR));

  // API Routes
  app.get('/api/questions/:questionSlug', questionApi);
  app.post('/api/logger', loggerApi);

  const frontMiddlewares = [
    countryLanguageMiddleware,
    metricsMiddleware,
    loggerMiddleware,
  ];

  // Front Routes
  app.get('/robot.txt', technicalPages.renderRobot);
  app.get('/version', technicalPages.renderVersion);
  app.get(ROUTE_COUNTRY_LANG, frontMiddlewares, defaultRoute);
  app.get(ROUTE_CONSULTATION, frontMiddlewares, consultationRoute);
  app.get(ROUTE_ACTION, frontMiddlewares, consultationRoute);
  app.get(ROUTE_SEQUENCE, frontMiddlewares, sequenceRoute);
  app.get(ROUTE_ACCOUNT_ACTIVATION, frontMiddlewares, accountActivationRoute);
  app.get(ROUTE_PROPOSAL, frontMiddlewares, proposalRoute);
  app.get(ROUTE_PASSWORD_RECOVERY, frontMiddlewares, passwordRecoveryRoute);

  app.get(ROUTE_ORGANISATION_PROFILE, frontMiddlewares, defaultRoute);
  app.get(ROUTE_ORGANISATION_PROPOSALS, frontMiddlewares, defaultRoute);
  app.get(ROUTE_ORGANISATION_VOTES, frontMiddlewares, defaultRoute);

  app.get(ROUTE_PROFILE_EDIT, frontMiddlewares, defaultRoute);
  app.get(ROUTE_PROFILE_PROPOSALS, frontMiddlewares, defaultRoute);
  app.get(ROUTE_PROFILE_FAVOURITES, frontMiddlewares, defaultRoute);
  app.get(ROUTE_PROFILE, frontMiddlewares, defaultRoute);

  app.get('*', frontMiddlewares, defaultRoute);
};
