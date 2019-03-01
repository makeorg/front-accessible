import {
  getRouteConsultation,
  getRouteSequence,
  getRouteProposal,
  getRouteAccountActivation,
  getRoutePasswordRecovery,
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
    it('getRouteConsultation', () => {
      expect(getRouteConsultation('FR-fr', '1234')).toBe(
        '/FR-fr/consultation/1234/consultation'
      );
    });

    it('getRouteSequence', () => {
      expect(getRouteSequence('FR-fr', '1234')).toBe(
        '/FR-fr/consultation/1234/selection'
      );
    });

    it('getRouteProposal', () => {
      expect(getRouteProposal('FR-fr', '1234', 'abcd', 'prop-slug')).toBe(
        '/FR-fr/consultation/1234/proposal/abcd/prop-slug'
      );
    });

    it('getRouteAccountActivation', () => {
      expect(getRouteAccountActivation('FR-fr', '1234', 'abcd')).toBe(
        '/FR-fr/account-activation/1234/abcd'
      );
    });

    it('getRoutePasswordRecovery', () => {
      expect(getRoutePasswordRecovery('FR-fr', '1234', 'abcd')).toBe(
        '/FR-fr/password-recovery/1234/abcd'
      );
    });

    it('getRouteProfile', () => {
      expect(getRouteProfile('FR-fr')).toBe('/FR-fr/profile');
    });

    it('getRouteProfileEdit', () => {
      expect(getRouteProfileEdit('FR-fr')).toBe('/FR-fr/profile/edit');
    });
  });
});
