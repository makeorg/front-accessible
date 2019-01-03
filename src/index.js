import ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import AppContainer from 'Containers/App';
import configureStore from './store';
import './i18n';
import Logger from './services/Logger';

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

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  initialState = {
    appConfig: {
      source: 'core',
      language: 'fr',
      country: 'FR'
    },
    sequence: {
      question: {
        questionId: '8358bb5d-493c-4ae8-88be-3de613e2e527',
        operationId: '65dfe694-2ea9-486b-8bc5-3107316fa6ff'
      },
      votedProposalIds: []
    }
  };
}

const store = configureStore(initialState);

ReactDOM.hydrate(
  <HeadProvider>
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </HeadProvider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
