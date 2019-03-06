import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'Shared/store';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import { questionConfigurationFixture } from 'Shared/types/__fixtures__/sequence.fixture';
import { ThemeProvider } from 'styled-components';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceClient } from 'Shared/api/ApiService/ApiService.client';
import { serverInitI18n } from './server/i18n';

serverInitI18n();

const apiClient = new ApiServiceClient();
ApiService.strategy = apiClient;

/* eslint-disable import/no-default-export */
export default ({ children }) => (
  <div>
    <FontFacesStylesheet />
    <BrowserRouter>
      <Provider store={configureStore()}>
        <ThemeProvider theme={questionConfigurationFixture.theme}>
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </div>
);
