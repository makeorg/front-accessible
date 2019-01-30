import Assert from 'assert';
import httpMocks from 'node-mocks-http';
import i18next from 'i18next';
import { isCountryLanguage, countryLanguageMiddleware } from './countryLanguage';

jest.mock('i18next');

describe('Country Language middelware', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('isCountryLanguage country-language (FR-fr)', () => {
    it('return false when params is an invalid string', () => (
      Assert.equal(isCountryLanguage('foo'), false)
    ));
    it('return true when params is FR-fr', () => (
      Assert.equal(isCountryLanguage('FR-fr'), true)
    ));
    it('return false when params is fr-fr', () => (
      Assert.equal(isCountryLanguage('fr-fr'), true)
    ));
    it('return false when params is null', () => (
      Assert.equal(isCountryLanguage(), false)
    ));
  });

  describe('countryLanguageMiddleware function', () => {
    it('country Uppercase and language Lowercase into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR-fr' }
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');
      jest.spyOn(i18next, 'changeLanguage');
      countryLanguageMiddleware(request, response, () => { });
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
      expect(i18next.changeLanguage).toHaveBeenCalledWith('fr-FR');
    });
    it('country Lowercase and language Uppercase into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'fr-FR' }
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');
      jest.spyOn(i18next, 'changeLanguage');
      countryLanguageMiddleware(request, response, () => { });
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
      expect(i18next.changeLanguage).toBeCalledWith('fr-FR');
    });
    it('country Capitalize and language Capitalize into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'Fr-Fr' }
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');
      jest.spyOn(i18next, 'changeLanguage');
      countryLanguageMiddleware(request, response, () => { });
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
      expect(i18next.changeLanguage).toBeCalledWith('fr-FR');
    });
    it('redirect to FR-fr on unknow country', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR' }
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');
      jest.spyOn(i18next, 'changeLanguage');
      countryLanguageMiddleware(request, response, () => { });
      expect(i18next.changeLanguage).toHaveBeenCalledTimes(0);
      expect(response.redirect).toHaveBeenCalledWith('/FR-fr');
    });
  });
});
