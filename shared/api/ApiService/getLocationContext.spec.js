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
      name: 'ROUTE_RESULTS',
      path: '/FR-fr/consultation/foo/results',
      params: { questionId: 'question-id' },
      expected: `page-results question-id`,
      expectedTracking: `page-results`,
    },
    {
      name: 'ROUTE_TOP_IDEA_DETAILS',
      path: '/FR-fr/consultation/foo/top-ideas/bar',
      params: { questionId: 'question-id' },
      expected: `page-top-idea-details question-id`,
      expectedTracking: `page-top-idea-details`,
    },
    {
      name: 'ROUTE_TOP_IDEAS',
      path: '/FR-fr/consultation/foo/top-ideas',
      params: { questionId: 'question-id' },
      expected: `page-top-ideas question-id`,
      expectedTracking: `page-top-ideas`,
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
      name: 'ROUTE_PROFILE_FAVOURITES',
      path: '/FR-fr/profile/favourites',
      expected: `private-profile-page`,
      expectedTracking: `private-profile-page`,
    },

    {
      name: 'ROUTE_PROFILE_PROPOSALS',
      path: '/FR-fr/profile/proposals',
      expected: `private-profile-page`,
      expectedTracking: `private-profile-page`,
    },
    {
      name: 'ROUTE_PROFILE_FOLLOWING',
      path: '/FR-fr/profile/following',
      expected: `private-profile-page`,
      expectedTracking: `private-profile-page`,
    },
    {
      name: 'ROUTE_PROFILE_OPINIONS',
      path: '/FR-fr/profile/opinions',
      expected: `private-profile-page`,
      expectedTracking: `private-profile-page`,
    },
    {
      name: 'ROUTE_PERSONALITY_PROFILE',
      path: '/FR-fr/profile/personality/1234',
      expected: `public-profile-page`,
      expectedTracking: `public-profile-page`,
    },
    {
      name: 'ROUTE_ORGANISATION_PROFILE',
      path: '/FR-fr/profile/organisation/foo',
      expected: `public-profile-page`,
      expectedTracking: `public-profile-page`,
    },
    {
      name: 'ROUTE_SEARCH',
      path: '/FR-fr/search',
      expected: `search-page`,
      expectedTracking: `search-page`,
    },
    {
      name: 'ROUTE_STATIC_NOCOOKIES',
      path: '/FR-fr/no-cookies',
      expected: `nocookies-page`,
      expectedTracking: `nocookies-page`,
    },
    {
      name: 'ROUTE_STATIC_NOTFOUND',
      path: '/FR-fr/not-found',
      expected: `not-found-page`,
      expectedTracking: `not-found-page`,
    },
    {
      name: 'ROUTE_BROWSE_CONSULTATIONS',
      path: '/FR-fr/browse/consultations',
      expected: `browse-consultations-page`,
      expectedTracking: `browse-consultations-page`,
    },
    {
      name: 'ROUTE_BROWSE_RESULTS',
      path: '/FR-fr/browse/results',
      expected: `browse-results-page`,
      expectedTracking: `browse-results-page`,
    },
    {
      name: 'home',
      path: '/',
      expected: `homepage`,
      expectedTracking: `homepage`,
    },
    {
      name: 'home fr',
      path: '/FR-fr/',
      expected: `homepage`,
      expectedTracking: `homepage`,
    },
    {
      name: 'ROUTE_BETA_HOME',
      path: '/beta/FR-fr/home',
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

  it('all routes have location', () => {
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
      'ROUTE_COUNTRY_LANG_FR',
      'ROUTE_RESULTS',
      'ROUTE_TOP_IDEAS',
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
      'ROUTE_STATIC_LEGAL_EN',
      'ROUTE_STATIC_GTU_EN',
      'ROUTE_STATIC_DATA_EN',
      'ROUTE_STATIC_CONTACT_EN',
      'ROUTE_STATIC_NOCOOKIES',
      'ROUTE_SOON',
    ];

    // .map(route => route.replace(/:/g, ''));
    const filteredRoutes = definedRoutes.filter(
      route => !routesToExcludes.includes(route.name)
    );
    filteredRoutes.forEach(route => {
      const elementFromFixture = fixtures.find(
        item => item.name === route.name
      );
      if (!elementFromFixture) {
        throw new Error(`Not found. Route: ${route.name}`);
      }
      const pathFromFixtures = elementFromFixture.path;

      expect(pathFromFixtures !== undefined).toBe(true);

      expect({
        routeName: route.name,
        isReferencedLocation:
          getTrackingLocation(pathFromFixtures) !== 'unknown-location',
        pathFromFixtures,
      }).toStrictEqual({
        routeName: route.name,
        isReferencedLocation: true,
        pathFromFixtures,
      });
    });
  });
});
