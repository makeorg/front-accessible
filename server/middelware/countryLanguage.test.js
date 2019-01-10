import Assert from 'assert';
import httpMocks from 'node-mocks-http';
import sinon from 'sinon';
import { isCountryLanguage, countryLanguageMiddelware } from './countryLanguage';

describe('Country Language middelware', () => {
  describe('isCountryLanguage country-language (FR-fr)', () => {
    it('return false when params is an invalid string', () => (
      Assert.equal(isCountryLanguage('foo'), false)
    ));
    it('return false when params is FR-fr', () => (
      Assert.equal(isCountryLanguage('FR-fr'), true)
    ));
    it('return false when params is fr-fr', () => (
      Assert.equal(isCountryLanguage('fr-fr'), true)
    ));
    it('return false when params is null', () => (
      Assert.equal(isCountryLanguage(), false)
    ));
  });

  describe('countryLanguageMiddelware function', () => {
    let sandbox;
    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
    });
    it('add country and language into Request params', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR-fr' }
      });
      const response = httpMocks.createResponse();
      countryLanguageMiddelware(request, response, () => { });
      expect(request.params.country).to.equal('FR');
      expect(request.params.language).to.equal('fr');
    });
    it('redirect to FR-fr on unknow country', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR' }
      });
      const response = httpMocks.createResponse();
      sandbox.spy(response, 'redirect');
      countryLanguageMiddelware(request, response, () => { });
      expect(response.redirect).to.have.been.calledWith('/FR-fr');
    });
  });
});
