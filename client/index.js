import ReactDOM from 'react-dom';
import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { loadableReady } from '@loadable/component';
import { AppContainer } from 'Client/app';
import { FacebookTracking } from 'Shared/services/Trackers/FacebookTracking';
import { env } from 'Shared/env';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';
import { configureStore, authenticationState } from 'Shared/store';
import { Logger } from 'Shared/services/Logger';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceClient } from 'Shared/api/ApiService/ApiService.client';
import { DateHelper } from 'Shared/helpers/date';

window.onerror = (message, source, lineNumber, columnNumber, error) => {
  if (error && error.stack) {
    const { stack } = error;
    Logger.log({
      message,
      source,
      lineNumber,
      columnNumber,
      stack,
    });
  }

  return false;
};

let initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;

if (env.isNone() || env.isDev()) {
  initialState = require('Shared/store/initialState.debug').initialStateDebug;
}

const tradLanguage = `${initialState.appConfig.language}-${
  initialState.appConfig.country
}`;

i18n.init({
  interpolation: {
    escapeValue: false,
  },
  debug: env.isDev(),
  lng: tradLanguage,
  resources: {
    [tradLanguage]: {
      [TRANSLATION_NAMESPACE]: initialState.appConfig.translations,
    },
  },
});

FacebookTracking.init();

const apiClient = new ApiServiceClient();
ApiService.strategy = apiClient;

const initApp = async state => {
  const authentificationState = await authenticationState();

  const store = configureStore({
    ...state,
    authentification: {
      ...state.authentification,
      ...authentificationState,
    },
  });

  if (state.sequence && state.sequence.questionId) {
    const { questionId } = state.sequence;
    apiClient.questionId = questionId;
    apiClient.operationId =
      state.questions[questionId] &&
      state.questions[questionId].question.operationId;
  }

  apiClient.source = state.appConfig.source;
  apiClient.country = state.appConfig.country;
  apiClient.language = state.appConfig.language;
  DateHelper.language = state.appConfig.language;

  loadableReady(() => {
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
      document.getElementById('app')
    );
  });
};

initApp(initialState);

if (module.hot) {
  module.hot.accept();
}
