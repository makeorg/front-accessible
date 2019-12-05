import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'Shared/store';
import { ModernNormalizeStylesheet } from 'Client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import { DefaultStylesheet } from 'Client/app/assets/css-in-js/DefaultStyle';
import { UIThemeStylesheet } from 'Client/app/assets/css-in-js/UITheme';
import { questionConfigurationFixture } from 'Shared/types/__fixtures__/sequence.fixture';
import { ThemeProvider } from 'styled-components';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceClient } from 'Shared/api/ApiService/ApiService.client';
import { serverInitI18n } from './server/i18n';

serverInitI18n();

const apiClient = new ApiServiceClient();
ApiService.strategy = apiClient;

const initialState = {
  appConfig: { country: 'FR', language: 'fr' },
  partners: {
    environnement: {
      actors: {
        total: 2,
        results: [
          {
            organisationId: '2b522207-ffa5-471b-a13d-d836793694ac',
            organisationName: 'toto orga',
            slug: 'toto-orga',
            avatarUrl: 'string',
            description: 'string',
            publicProfile: true,
            proposalsCount: 0,
            votesCount: 1,
            language: 'fr',
            country: 'FR',
          },
          {
            organisationId: '6eaf9e87-8d45-4c9d-8dde-29671ce607ff',
            organisationName: 'CCAH',
            slug: 'ccah',
            avatarUrl: null,
            description: null,
            publicProfile: true,
            proposalsCount: null,
            votesCount: null,
            language: 'fr',
            country: 'FR',
          },
          {
            organisationId: '2b522207-ffa5-471b-a13d-d836793694ac',
            organisationName: 'toto orga',
            slug: 'toto-orga',
            avatarUrl: 'string',
            description: 'string',
            publicProfile: true,
            proposalsCount: 0,
            votesCount: 1,
            language: 'fr',
            country: 'FR',
          },
          {
            organisationId: '6eaf9e87-8d45-4c9d-8dde-29671ce607ff',
            organisationName: 'CCAH',
            slug: 'ccah',
            avatarUrl: null,
            description: null,
            publicProfile: true,
            proposalsCount: null,
            votesCount: null,
            language: 'fr',
            country: 'FR',
          },
          {
            organisationId: '2b522207-ffa5-471b-a13d-d836793694ac',
            organisationName: 'toto orga',
            slug: 'toto-orga',
            avatarUrl: 'string',
            description: 'string',
            publicProfile: true,
            proposalsCount: 0,
            votesCount: 1,
            language: 'fr',
            country: 'FR',
          },
        ],
      },
    },
  },
};

/* eslint-disable import/no-default-export */
export default ({ children }) => (
  <div>
    <ModernNormalizeStylesheet />
    <FontFacesStylesheet />
    <DefaultStylesheet />
    <UIThemeStylesheet />
    <BrowserRouter>
      <Provider store={configureStore(initialState)}>
        <ThemeProvider theme={questionConfigurationFixture.theme}>
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </div>
);
