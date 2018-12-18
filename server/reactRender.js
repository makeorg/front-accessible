import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import configureStore from '../src/store';
import AppContainer from '../src/containers/App';
import i18next from '../src/i18n';

const fs = require('fs');
const path = require('path');
const { BUILD_DIR } = require('./paths');
const configuration = require('./configuration.js');

module.exports = function reactRender(req, res) {
  const { apiUrl, frontUrl } = configuration;
  const { country } = req.params;

  if (!country || !(/^[A-Z]{2,3}$/.test(country))) {
    const detectedCountry = req.headers['x-forced-country'] || req.headers['x-detected-country'] || 'FR';
    const url = (req.url !== '/') ? req.url : '';
    res.redirect(`/${detectedCountry}${url}`);
    return;
  }

  const initialState = {
    appConfig: {
      source: 'core',
      language: req.query.language || 'fr',
      country
    }
  };

  i18next.changeLanguage(initialState.appConfig.language);

  const store = configureStore(initialState);
  const context = {};

  const ReactApp = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <AppContainer />
      </StaticRouter>
    </Provider>
  );

  fs.readFile(path.join(BUILD_DIR, 'index.html'), 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(404).end();
    }

    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(ReactApp));
    const styles = sheet.getStyleTags();

    const RenderedApp = htmlData
      .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
      .replace('</head>', `${styles}</head>`)
      .replace('"__REDUX__"', JSON.stringify(initialState))
      .replace('__API_URL__', apiUrl)
      .replace('__FRONT_URL__', frontUrl);

    return res.send(RenderedApp);
  });
};
