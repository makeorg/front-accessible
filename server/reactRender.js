import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import configureStore from '../src/store';
import App from '../src/components/App';
import i18next from '../src/i18n';

const fs = require('fs');
const path = require('path');
const { BUILD_DIR } = require('./paths');
const configuration = require('./configuration.js');

module.exports = function reactRender(req, res) {
  const { apiUrl, frontUrl } = configuration;
  const initialState = {
    appConfig: {
      operationId: req.query.operationId || 'a8d4deab-5b67-4e05-835a-a49e3ae40a81',
      source: 'core',
      language: req.query.language || 'fr',
      country: req.query.country || 'FR'
    }
  };
  i18next.changeLanguage(initialState.appConfig.language);

  fs.readFile(path.join(BUILD_DIR, 'index.html'), 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(404).end();
    }
    const store = configureStore(initialState);

    const ReactApp = (
      <Provider store={store}>
        <App />
      </Provider>
    );

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
