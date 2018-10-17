import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';


let initialState = window.INITIAL_STATE;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  initialState = {
    appConfig: {
      operationId: '55e4e34c-da29-401e-8858-bbf54f4769e2',
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
