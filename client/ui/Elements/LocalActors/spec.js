import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { configureStore } from 'Shared/store';
import { LocalActors } from './index';

describe('LocalActors', () => {
  it('snapshot by default ', () => {
    const { container } = render(
      <Provider store={configureStore()}>
        <LocalActors
          questionId="66a9230b-08cb-4f37-8ed8-aa95a8eac19a"
          slug="environnement"
        />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot with data', () => {
    const { container } = render(
      <Provider
        store={configureStore({
          appConfig: { country: 'FR', language: 'fr' },
          partners: {
            isLoading: false,
            environnement: {
              actors: {
                total: 2,
                results: [
                  {
                    organisationId: '12b522207-ffa5-471b-a13d-d836793694ac',
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
                    organisationId: '26eaf9e87-8d45-4c9d-8dde-29671ce607ff',
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
                    organisationId: '32b522207-ffa5-471b-a13d-d836793694ac',
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
                    organisationId: '46eaf9e87-8d45-4c9d-8dde-29671ce607ff',
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
                    organisationId: '52b522207-ffa5-471b-a13d-d836793694ac',
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
        })}
      >
        <BrowserRouter>
          <LocalActors
            questionId="66a9230b-08cb-4f37-8ed8-aa95a8eac19a"
            slug="environnement"
          />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
