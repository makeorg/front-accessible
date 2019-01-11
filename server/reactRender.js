import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import { HeadProvider } from 'react-head';
import configureStore from '../src/store';
import i18next from './i18n';
import { TRANSLATION_NAMESPACE } from '../shared/i18n/constants';
import AppContainer from '../src/containers/App';

const fs = require('fs');
const path = require('path');
const { BUILD_DIR } = require('./paths');
const configuration = require('./configuration.js');

const renderHtml = (reactApp, reduxStore, metaTags) => {
  const { apiUrl, frontUrl } = configuration;
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToString(sheet.collectStyles(reactApp));
  const styles = sheet.getStyleTags();
  const reduxState = reduxStore.getState();

  const htmlContent = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');
  if (!htmlContent) {
    return false;
  }

  return htmlContent
    .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
    .replace('<head>', `<head>${ReactDOMServer.renderToString(metaTags)}`)
    .replace('</head>', `${styles}</head>`)
    .replace('"__REDUX__"', JSON.stringify(reduxState))
    .replace('__API_URL__', apiUrl)
    .replace('__FRONT_URL__', frontUrl);
};


module.exports = function reactRender(req, res, initialState = {}) {
  const { country, language } = req.params;

  const tradLanguage = `${language}-${country}`;
  i18next.changeLanguage(tradLanguage);

  const state = {
    ...{
      appConfig: {
        source: 'core',
        language,
        country,
        translations: i18next.getResourceBundle(tradLanguage, TRANSLATION_NAMESPACE)
      }
    },
    ...initialState
  };

  const store = configureStore(state);
  const context = {};
  const headTags = [];

  const ReactApp = (
    <HeadProvider headTags={headTags}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <AppContainer />
        </StaticRouter>
      </Provider>
    </HeadProvider>
  );

  const reactHtml = renderHtml(ReactApp, store, headTags);

  if (!reactHtml) {
    return res.status(404).end();
  }

  return res.send(reactHtml);
};
