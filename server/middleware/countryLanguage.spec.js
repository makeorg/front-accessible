import Assert from 'assert';
import httpMocks from 'node-mocks-http';
import { isCountryLanguage, countryLanguageMiddleware } from './countryLanguage';

describe('Country Language middelware', () => {
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
      countryLanguageMiddleware(request, response, () => { });
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
    });
    it('country Lowercase and language Uppercase into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'fr-FR' }
      });
      const response = httpMocks.createResponse();
      countryLanguageMiddleware(request, response, () => { });
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
    });
    it('country Capitalize and language Capitalize into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'Fr-Fr' }
      });
      const response = httpMocks.createResponse();
      countryLanguageMiddleware(request, response, () => { });
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
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
  });
});
