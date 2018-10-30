import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';
import './i18n';

let initialState = window.INITIAL_STATE;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  initialState = {
    appConfig: {
      operationId: '0117d90e-a986-4de9-9bbf-a1bb7a4f55a9',
      source: 'core',
      language: 'fr',
      country: 'FR'
    }
  };
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
