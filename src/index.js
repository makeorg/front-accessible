import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.render(
  <App title="Front accessible" />,
  document.getElementById('app'),
);

module.hot.accept();
