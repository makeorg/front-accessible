import {
  getRouteProfile,
  getRouteProfileEdit,
  formatCountryLanguage,
  ROUTE_CONSULTATION,
  matchRoute,
  ROUTE_SEQUENCE,
  getRouteOrganisationProposals,
  getRouteOrganisationVotes,
  getRouteProfileProposals,
  getRouteProfileFavourites,
  getRouteProfileFollowing,
  getRouteProfileOpinions,
  getRouteNoCookies,
  getRouteSearch,
  getRouteSearchProposals,
  getRouteSearchOrganisations,
  getRouteSearchConsultations,
} from './routes';

describe('Shared routes', () => {
  it('formatCountryLanguage', () => {
    expect(formatCountryLanguage('FR', 'fr')).toBe('FR-fr');
  });

  describe('match Routes', () => {
    it('match route consultation', () => {
      expect(
        matchRoute('/FR-fr/consultation/1234/consultation', ROUTE_CONSULTATION)
      ).toBe(true);
    });

    it('do not match route consultation', () => {
      expect(
        matchRoute('/FR-fr/consultation/1234/consultation', ROUTE_SEQUENCE)
      ).toBe(false);
    });
  });

  describe('build Routes', () => {
    it('getRouteOrganisationProposals', () => {
      expect(getRouteOrganisationProposals('FR', 'fr', 'fooOrg')).toBe(
        '/FR-fr/profile/organisation/fooOrg/proposals'
      );
    });

    it('getRouteOrganisationVotes', () => {
      expect(getRouteOrganisationVotes('FR', 'fr', 'fooOrg')).toBe(
        '/FR-fr/profile/organisation/fooOrg/votes'
      );
    });

    it('getRouteProfile', () => {
      expect(getRouteProfile('FR', 'fr')).toBe('/FR-fr/profile');
    });

    it('getRouteProfileEdit', () => {
      expect(getRouteProfileEdit('FR', 'fr')).toBe('/FR-fr/profile/edit');
    });

    it('getRouteProfileProposals', () => {
      expect(getRouteProfileProposals('FR', 'fr')).toBe(
        '/FR-fr/profile/proposals'
      );
    });

    it('getRouteProfileFavourites', () => {
      expect(getRouteProfileFavourites('FR', 'fr')).toBe(
        '/FR-fr/profile/favourites'
      );
    });

    it('getRouteProfileFollowing', () => {
      expect(getRouteProfileFollowing('FR', 'fr')).toBe(
        '/FR-fr/profile/following'
      );
    });

    it('getRouteProfileOpinions', () => {
      expect(getRouteProfileOpinions('FR', 'fr')).toBe(
        '/FR-fr/profile/opinions'
      );
    });

    it('getRouteNoCookies', () => {
      expect(getRouteNoCookies('FR', 'fr')).toBe('/FR-fr/no-cookies');
    });

    it('getRouteSearch', () => {
      expect(getRouteSearch('FR', 'fr', 'fooQuery')).toBe(
        '/FR-fr/search?query=fooQuery'
      );
    });

    it('getRouteSearchProposals', () => {
      expect(getRouteSearchProposals('FR', 'fr', 'fooQuery')).toBe(
        '/FR-fr/search/proposals?query=fooQuery'
      );
    });

    it('getRouteSearchConsultations', () => {
      expect(getRouteSearchConsultations('FR', 'fr', 'fooQuery')).toBe(
        '/FR-fr/search/consultations?query=fooQuery'
      );
    });

    it('getRouteSearchOrganisations', () => {
      expect(getRouteSearchOrganisations('FR', 'fr', 'fooQuery')).toBe(
        '/FR-fr/search/organisations?query=fooQuery'
      );
    });
  });
});
