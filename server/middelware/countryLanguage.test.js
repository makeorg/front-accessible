import Assert from 'assert';
import httpMocks from 'node-mocks-http';
import { isCountryLanguage, countryLanguageMiddelware } from './countryLanguage';

describe('Country Language middelware', () => {
  describe('isCountryLanguage country-language (FR-fr)', () => {
    it('return false when params is an invalid string', () => (
      Assert.equal(isCountryLanguage('foo'), false)
    ));
    it('return false when params is null', () => (
      Assert.equal(isCountryLanguage(), false)
    ));
  });

  describe('countryLanguageMiddelware function', () => {
    it('add country and language into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR-fr' }
      });
      const response = httpMocks.createResponse();
      countryLanguageMiddelware(request, response, () => {});
      expect(request.params.country).to.equal('FR');
      expect(request.params.language).to.equal('fr');
    });
    it('redirect to 404', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR' }
      });
      const response = httpMocks.createResponse();
      countryLanguageMiddelware(request, response, () => {});
      expect(response.statusCode).to.equal(404);
    });
  });
});
