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
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { DateHelper } from 'Shared/helpers/date';
import { detected as adBlockerDetected } from 'adblockdetect';
import {
  cookieIsEnabled,
  thirdCookieEnabled,
} from 'Client/helper/cookieDetect';
import { Tracking } from 'Shared/services/Tracking';

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

ApiService.strategy = apiClient;

const logAndTrackEvent = (eventName: string) => {
  Logger.logInfo({
    trackingEvent: eventName,
    referrer: window.document.referrer,
    url: window.location.href,
  });
  Tracking.track(eventName, {
    referrer: window.document.referrer,
    url: window.location.href,
  });
};

const initApp = async state => {
  const authentificationState = await authenticationState();

  const store = configureStore({
    ...state,
    user: {
      ...state.user,
      authentification: {
        ...state.user.authentification,
        ...authentificationState,
      },
    },
  });

  const { currentQuestion } = state;
  if (currentQuestion && state.questions[currentQuestion]) {
    const { questionId } = state.questions[currentQuestion];

    apiClient.questionId = questionId;
    apiClient.operationId =
      state.questions[questionId] &&
      state.questions[questionId].question &&
      state.questions[questionId].question.operationId;
  }

  apiClient.source = state.appConfig.source;
  apiClient.country = state.appConfig.country;
  apiClient.language = state.appConfig.language;
  DateHelper.language = state.appConfig.language;

  if (adBlockerDetected()) {
    logAndTrackEvent('adblocker-detected');
  }
  if (!cookieIsEnabled()) {
    logAndTrackEvent('cookie-is-disabled');
  }
  const thirdCookieNameToCheck: string = 'make-session-id-expiration';
  if (!thirdCookieEnabled(thirdCookieNameToCheck)) {
    logAndTrackEvent('third-cookie-is-disabled');
  }

  loadableReady(() => {
    Logger.logInfo({
      trackingEvent: 'application-loading',
      referrer: window.document.referrer,
      url: window.location.href,
    });
    const appDom = document.getElementById('app');
    ReactDOM.hydrate(
      <CookiesProvider>
        <HeadProvider>
          <Provider store={store}>
            <BrowserRouter>
              <React.StrictMode>
                <AppContainer />
              </React.StrictMode>
            </BrowserRouter>
          </Provider>
        </HeadProvider>
      </CookiesProvider>,
      appDom
    );

    Logger.logInfo({
      trackingEvent: 'application-loaded',
      referrer: window.document.referrer,
      url: window.location.href,
    });
  });
};

initApp(initialState);

if (module.hot) {
  module.hot.accept();
}
