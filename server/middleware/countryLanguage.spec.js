import httpMocks from 'node-mocks-http';
import { i18n } from 'Shared/i18n';
import { countryLanguageMiddleware } from './countryLanguage';

jest.mock('Shared/i18n');

describe('Country Language middelware', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    i18n.cloneInstance.mockRestore();
    i18n.changeLanguage.mockRestore();
  });

  describe('countryLanguageMiddleware function', () => {
    it('country Uppercase and language Lowercase into Request params', () => {
      const request = httpMocks.createRequest({
        params: { country: 'FR', language: 'fr' },
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');

      countryLanguageMiddleware(request, response, () => {});

      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
    });
    it('country Lowercase and language Uppercase into Request params', () => {
      const request = httpMocks.createRequest({
        params: { country: 'fr', language: 'FR' },
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');

      countryLanguageMiddleware(request, response, () => {});

      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
    });
    it('country Capitalize and language Capitalize into Request params', () => {
      const request = httpMocks.createRequest({
        params: { country: 'Fr', language: 'Fr' },
      });
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'redirect');

      countryLanguageMiddleware(request, response, () => {});
      expect(request.params.country).toBe('FR');
      expect(request.params.language).toBe('fr');
      expect(response.redirect).toHaveBeenCalledTimes(0);
    });
    it('must call i18n changeLanguage on a new instance', () => {
      jest.spyOn(i18n, 'changeLanguage');
      jest.spyOn(i18n, 'cloneInstance');
      const request = httpMocks.createRequest({
        params: { country: 'GB', language: 'en' },
      });
      const response = httpMocks.createResponse();

      countryLanguageMiddleware(request, response, () => {});

      expect(i18n.cloneInstance).toHaveBeenCalledTimes(1);
      expect(i18n.changeLanguage).toHaveBeenNthCalledWith(1, 'en-GB');
    });
  });
});
