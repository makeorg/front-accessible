/* @flow */
import {
  compareCountriesByName,
  getCountryWithConsultations,
  getLanguageFromCountryCode,
} from './countries';

jest.mock('Shared/constants/config', () => ({
  DEFAULT_LANGUAGE: 'en',
}));

describe('Countries helper', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('compareCountriesByName', () => {
    const toBeSorted = [
      { isoCode: 'FR', name: 'France' },
      { isoCode: 'AU', name: 'Autriche' },
    ];
    const sorted = [
      { isoCode: 'AU', name: 'Autriche' },
      { isoCode: 'FR', name: 'France' },
    ];

    const same = [
      { isoCode: 'AU', name: 'Autriche' },
      { isoCode: 'AU', name: 'Autriche' },
    ];

    it('compare unsorted array', () => {
      expect(compareCountriesByName(toBeSorted[0], toBeSorted[1])).toBe(1);
    });

    it('compare sorted array', () => {
      expect(compareCountriesByName(sorted[0], sorted[1])).toBe(-1);
    });

    it('compare array with same values', () => {
      expect(compareCountriesByName(same[0], same[1])).toBe(0);
    });
  });

  describe('getLanguageFromCountry function', () => {
    it('language is known', () => {
      expect(getLanguageFromCountryCode('FR')).toBe('fr');
    });

    it('language is unknown', () => {
      expect(getLanguageFromCountryCode('GB')).toBe('en');
    });
  });

  describe('getCountryWithConsultations function', () => {
    const countriesWithConsultations = ['FR', 'GB', 'ES'];
    it('country has consultations', () => {
      expect(
        getCountryWithConsultations('FR', countriesWithConsultations)
      ).toBe('FR');
    });

    it("country doesn't have consultations", () => {
      expect(
        getCountryWithConsultations('US', countriesWithConsultations)
      ).toBe(null);
    });
  });
});
