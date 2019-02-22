import * as React from 'react';
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

deepFreeze(initialState);

const fs = require('fs');
const path = require('path');
const { BUILD_DIR } = require('./paths');
const configuration = require('./configuration.js');

const statsFile = path.resolve(__dirname, '..', 'dist', 'loadable-stats.json');

const htmlContent = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

const renderHtml = (reactApp, reduxStore, metaTags) => {
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

  return htmlContent
    .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
    .replace('<head>', `<head>${ReactDOMServer.renderToString(metaTags)}`)
    .replace('</head>', `${styles}</head>`)
    .replace('"__REDUX__"', JSON.stringify(reduxState))
    .replace('__LANG__', reduxState.appConfig.language)
    .replace('__API_URL__', apiUrl)
    .replace('__FRONT_URL__', frontUrl)
    .replace('</body>', `${scriptTags}</body>`);
};

export const reactRender = (req, res, routeState = {}) => {
  const { country, language } = req.params;

  const tradLanguage = `${language}-${country}`;

  const state = {
    ...createInitialState(),
    appConfig: {
      source: 'core',
      language,
      country,
      translations: i18n.getResourceBundle(tradLanguage, TRANSLATION_NAMESPACE),
    },
    ...routeState,
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

  const reactHtml = renderHtml(ReactApp, store, headTags);

  if (!reactHtml) {
    return res.status(404).end();
  }

  return res.send(reactHtml);
};
