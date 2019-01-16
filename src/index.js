import ReactDOM from 'react-dom';
import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import AppContainer from 'Containers/App';
import configureStore from './store';
import Logger from './services/Logger';
import { env } from '../shared/env';
import { TRANSLATION_NAMESPACE } from '../shared/i18n/constants';

window.onerror = (message, source, lineNumber, columnNumber, error) => {
  if (error && error.stack) {
    const { stack } = error;
    Logger.log({
      message,
      source,
      lineNumber,
      columnNumber,
      stack
    });
  }

  return false;
};

let initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;

if (!process.env.NODE_ENV || env.isDev()) {
  initialState = {
    appConfig: {
      source: 'core',
      language: 'fr',
      country: 'FR',
      translations: require('../server/staticData/i18n/fr-FR.json')
    },
    sequence: {
      question: {
        questionId: '8358bb5d-493c-4ae8-88be-3de613e2e527',
        operationId: '65dfe694-2ea9-486b-8bc5-3107316fa6ff'
      },
      votedProposalIds: []
    },
    user: {
      passwordRecovery: {
        validToken: true,
        resetToken: 'A888FA89B99A6A42DE1566940C4154B26CBEEF82',
        userId: 'f05665a2-b36b-42c3-89a9-344e8f41fe19'
      }
    }
  };
}

const tradLanguage = `${initialState.appConfig.language}-${initialState.appConfig.country}`;

i18next.init({
  interpolation: {
    escapeValue: false
  },
  debug: env.isDev(),
  lng: tradLanguage,
  resources: {
    [tradLanguage]: { [TRANSLATION_NAMESPACE]: initialState.appConfig.translations }
  }
});


const store = configureStore(initialState);

ReactDOM.hydrate(
  <CookiesProvider>
    <HeadProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </HeadProvider>
  </CookiesProvider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
