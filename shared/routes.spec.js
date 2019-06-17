import {
  getRouteProfile,
  getRouteProfileEdit,
  formatCountryLanguage,
  ROUTE_CONSULTATION,
  matchRoute,
  ROUTE_SEQUENCE,
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
    it('getRouteProfile', () => {
      expect(getRouteProfile('FR', 'fr')).toBe('/FR-fr/profile');
    });

    it('getRouteProfileEdit', () => {
      expect(getRouteProfileEdit('FR', 'fr')).toBe('/FR-fr/profile/edit');
    });
  });
});
