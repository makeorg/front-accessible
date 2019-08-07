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
import configuration from './configuration';
import { BUILD_DIR } from './paths';
import { logger } from './logger';

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
    .replace('__LANG__', reduxState.appConfig.language)
    .replace('__API_URL__', apiUrl)
    .replace('__FRONT_URL__', frontUrl)
    .replace('___NONCE_ID___', nonceId)
    .replace('</body>', `${scriptTags}</body>`);
};

// @todo test this function!!
export const reactRender = (req, res, routeState = {}) => {
  const { country, language } = req.params;

  const tradLanguage = `${language}-${country}`;

  const state = {
    ...createInitialState(),
    ...routeState,
    appConfig: {
      source: 'core',
      language,
      country,
      translations: i18n.getResourceBundle(tradLanguage, TRANSLATION_NAMESPACE),
    },
  };

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
      message: 'App served to the client',
      url: req.originalUrl,
    })
  );
  return res.send(reactHtml);
};
