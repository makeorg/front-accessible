// @flow
import { partners } from './index';
import * as actionCreators from './actions';

describe('Partners reducer', () => {
  it('Return the initial state', () => {
    const exectedState = {};
    expect(partners(undefined, {})).toEqual(exectedState);
  });

  describe('Load partners', () => {
    it('Load partners', () => {
      const action = actionCreators.loadLocalActors();
      const previousState = {};
      const expectedState = {
        isLoading: true,
      };

      expect(partners(previousState, action)).toEqual(expectedState);
    });

    it('Set partners', () => {
      const slug = 'environnement';
      const expectedActors = {
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
            proposalsCount: 0,
            votesCount: 2,
            language: 'fr',
            country: 'FR',
          },
        ],
      };
      const previousState = { isLoading: true };
      const expectedState = {
        isLoading: false,
        [slug]: {
          actors: { ...expectedActors },
        },
      };
      const action = actionCreators.setLocalActors(slug, expectedActors);
      expect(partners(previousState, action)).toEqual(expectedState);
    });
  });
});
