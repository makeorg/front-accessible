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
      operationId: 'a8d4deab-5b67-4e05-835a-a49e3ae40a81',
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
