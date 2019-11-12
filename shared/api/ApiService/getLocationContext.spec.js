import * as routes from 'Shared/routes';
import { getLocationContext, getTrackingLocation } from './getLocationContext';

describe('getLocationContext', () => {
  const fixtures = [
    {
      name: 'ROUTE_CONSULTATION',
      path: '/FR-fr/consultation/foo/consultation',
      params: { questionId: 'question-id' },
      expected: `page-operation question-id`,
      expectedTracking: `page-operation`,
    },
    {
      name: 'ROUTE_ACTION uppercase',
      path: '/FR-fr/consultation/handicap/ACTIONS',
      params: { questionId: 'question-id' },
      expected: 'page-action question-id',
      expectedTracking: 'page-action',
    },
    {
      name: 'ROUTE_ACTION',
      path: '/FR-fr/consultation/handicap/actions',
      params: { questionId: 'question-id' },
      expected: 'page-action question-id',
      expectedTracking: 'page-action',
    },
    {
      name: 'ROUTE_SEQUENCE',
      path: '/FR-fr/consultation/foo/selection',
      params: { questionId: 'question-id' },
      expected: 'sequence question-id',
      expectedTracking: 'sequence',
    },
    {
      name: 'ROUTE_PROPOSAL',
      path: '/FR-fr/consultation/foo/proposal/bar/2',
      params: { proposalId: 'proposal-id' },
      expected: `proposal-page proposal-id`,
      expectedTracking: `proposal-page`,
    },
    {
      name: 'ROUTE_SEARCH_PROPOSALS',
      path: '/FR-fr/search/proposals',
      expected: `search-proposals-page`,
      expectedTracking: `search-proposals-page`,
    },
    {
      name: 'ROUTE_SEARCH_ORGANISATIONS',
      path: '/FR-fr/search/organisations',
      expected: `search-organisations-page`,
      expectedTracking: `search-organisations-page`,
    },
    {
      name: 'ROUTE_SEARCH_CONSULTATIONS',
      path: '/FR-fr/search/consultations',
      expected: `search-consultations-page`,
      expectedTracking: `search-consultations-page`,
    },
    {
      name: 'ROUTE_SEARCH',
      path: '/FR-fr/search',
      expected: `search-page`,
      expectedTracking: `search-page`,
    },
    {
      name: 'home',
      path: '/',
      expected: `homepage`,
      expectedTracking: `homepage`,
    },
    {
      name: 'home fr',
      path: '/Fr-fr-fr/',
      expected: `homepage`,
      expectedTracking: `homepage`,
    },
    {
      name: 'unknown location',
      path: '/Fr-fr/ho-fake-route',
      expected: `unknown-location /Fr-fr/ho-fake-route`,
      expectedTracking: `unknown-location`,
    },
  ];

  fixtures.map(record =>
    it(`get location context ${record.name}`, () => {
      expect(
        getLocationContext(
          record.path,
          record.params && record.params.questionId,
          record.params && record.params.proposalId
        )
      ).toBe(record.expected);
    })
  );

  fixtures.map(record =>
    it(`get tracking location context ${record.name}`, () => {
      expect(
        getTrackingLocation(
          record.path,
          record.params && record.params.questionId,
          record.params && record.params.proposalId
        )
      ).toBe(record.expectedTracking);
    })
  );

  it('all routes has location', () => {
    const definedRoutes = Object.keys(routes)
      .filter(name => name.includes('ROUTE_'))
      .map(name => {
        return {
          name,
          // eslint-disable-next-line import/namespace
          path: routes[name],
        };
      });

    const routesToExcludes = [
      'ROUTE_COUNTRY_LANG',
      'ROUTE_RESULTS',
      'ROUTE_ACCOUNT_ACTIVATION',
      'ROUTE_PASSWORD_RECOVERY',
      'ROUTE_PROFILE',
      'ROUTE_PROFILE_EDIT',
      'ROUTE_PROFILE_PROPOSALS',
      'ROUTE_PROFILE_FAVOURITES',
      'ROUTE_PROFILE_FOLLOWING',
      'ROUTE_ORGANISATION_PROFILE',
      'ROUTE_ORGANISATION_PROPOSALS',
      'ROUTE_ORGANISATION_VOTES',
      'ROUTE_STATIC_LEGAL',
      'ROUTE_STATIC_GTU',
      'ROUTE_STATIC_DATA',
      'ROUTE_STATIC_CONTACT',
    ];

    // .map(route => route.replace(/:/g, ''));
    const filteredRoutes = definedRoutes.filter(
      route => !routesToExcludes.includes(route.name)
    );
    filteredRoutes.forEach(route => {
      expect({
        routeName: route.name,
        isReferencedLocation:
          getTrackingLocation(route.path) !== 'unknown-location',
      }).toStrictEqual({ routeName: route.name, isReferencedLocation: true });
    });
  });
});
