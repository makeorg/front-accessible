import React from 'react';
import fs from 'fs';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { ServerStyleSheet } from 'styled-components';
import { HeadProvider } from 'react-head';
import { i18n } from 'Shared/i18n';
import deepFreeze from 'deep-freeze';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';
import { configureStore } from 'Shared/store';
import { AppContainer } from 'Client/app';
import { createInitialState, initialState } from 'Shared/store/initialState';
import {
  SECURE_EXPIRED_MESSAGE,
  NOTIFICATION_LEVEL_INFORMATION,
} from 'Shared/constants/notification';
import { env } from 'Shared/env';
import { TWTTR_SCRIPT } from 'Shared/services/Trackers/twttr';
import configuration from './configuration';
import { BUILD_DIR } from './paths';
import { logger } from './logger';

const parser = require('ua-parser-js');

deepFreeze(initialState);

const statsFile = path.resolve(__dirname, '..', 'dist', 'loadable-stats.json');

const htmlContent = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

const renderHtml = (reactApp, reduxStore, metaTags, res) => {
  if (!htmlContent) {
    return false;
  }

  const extractor = new ChunkExtractor({ statsFile });
  const { apiUrl, frontUrl } = configuration;
  const sheet = new ServerStyleSheet();

  const jsx = extractor.collectChunks(reactApp);

  const body = ReactDOMServer.renderToString(sheet.collectStyles(jsx));
  const styles = sheet.getStyleTags();
  const reduxState = reduxStore.getState();
  const scriptTags = extractor.getScriptTags();
  const nonceId = res.locals.nonce;

  return htmlContent
    .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
    .replace('<head>', `<head>${ReactDOMServer.renderToString(metaTags)}`)
    .replace('</head>', `${styles}</head>`)
    .replace('"__REDUX__"', JSON.stringify(reduxState))
    .replace(new RegExp('__LANG__', 'gi'), reduxState.appConfig.language)
    .replace(new RegExp('__API_URL__', 'gi'), apiUrl)
    .replace(new RegExp('__FRONT_URL__', 'gi'), frontUrl)
    .replace(new RegExp('___NONCE_ID___', 'gi'), nonceId)
    .replace('</body>', `${scriptTags}</body>`)
    .replace(
      '</body>',
      `${env.isTest() || env.isDev() ? '' : TWTTR_SCRIPT}</body>`
    );
};

// @todo test this function!!
export const reactRender = (req, res, routeState = {}) => {
  const { country, language } = req.params;
  const ua = parser(req.headers['user-agent']);

  const { secureExpired, ...queryParams } = req.query;

  const tradLanguage = `${language}-${country}`;

  const state = {
    ...createInitialState(),
    ...routeState,
    appConfig: {
      source: 'core',
      language,
      country,
      translations: i18n.getResourceBundle(tradLanguage, TRANSLATION_NAMESPACE),
      queryParams,
    },
  };

  if (secureExpired) {
    state.notification = {
      level: NOTIFICATION_LEVEL_INFORMATION,
      contentType: SECURE_EXPIRED_MESSAGE,
    };
  }
  const store = configureStore(state);
  const context = {};
  const headTags = [];

  const ReactApp = (
    <CookiesProvider cookies={req.universalCookies}>
      <HeadProvider headTags={headTags}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <AppContainer />
          </StaticRouter>
        </Provider>
      </HeadProvider>
    </CookiesProvider>
  );

  const reactHtml = renderHtml(ReactApp, store, headTags, res);

  if (!reactHtml) {
    return res.status(404).end();
  }
  // add log here
  logger.log(
    'info',
    JSON.stringify({
      message: { name: 'app-served-from-server' },
      url: req.originalUrl,
      browser: ua.browser,
      os: ua.os,
      device: ua.device,
      raw: ua.ua,
    })
  );

  return res.send(reactHtml);
};
