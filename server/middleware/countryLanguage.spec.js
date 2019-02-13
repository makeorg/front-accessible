import Assert from 'assert';
import httpMocks from 'node-mocks-http';
import { i18n } from 'Shared/i18n';
import { isCountryLanguage, countryLanguageMiddleware } from './countryLanguage';

jest.mock('Shared/i18n');

describe('Country Language middelware', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    i18n.cloneInstance.mockRestore();
    i18n.changeLanguage.mockRestore();
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

      countryLanguageMiddleware(request, response, () => { });

      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
    });
    it('country Lowercase and language Uppercase into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'fr-FR' }
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');

      countryLanguageMiddleware(request, response, () => { });

      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
    });
    it('country Capitalize and language Capitalize into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'Fr-Fr' }
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');

      countryLanguageMiddleware(request, response, () => { });
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
    });
    it('redirect to FR-fr on unknow country', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR' }
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');

      countryLanguageMiddleware(request, response, () => { });

      expect(response.redirect).toHaveBeenCalledWith('/FR-fr');
    });
    it('must call i18n changeLanguage on a new instance', () => {
      jest.spyOn(i18n, 'changeLanguage');
      jest.spyOn(i18n, 'cloneInstance');
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'GB-en' }
      });
      const response = httpMocks.createResponse();

      countryLanguageMiddleware(request, response, () => { });

      expect(i18n.cloneInstance).toHaveBeenCalledTimes(1);
      expect(i18n.changeLanguage).toHaveBeenNthCalledWith(1, 'en-GB');
    });
  });
});
