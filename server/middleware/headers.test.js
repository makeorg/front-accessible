import httpMocks from 'node-mocks-http';
import sinon from 'sinon';
import { headersResponseMiddleware } from './headers';

describe('Headers response middleware', () => {
  describe('headersResponseMiddleware function', () => {
    let sandbox;
    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('set Header for Server Response, should returns "Server : Express"', () => {
      const request = httpMocks.createRequest({
        params: { countryLanguage: 'FR' }
      });
      const response = httpMocks.createResponse();
      sandbox.spy(response, 'setHeader');
      headersResponseMiddleware(request, response, () => { });
      expect(response.setHeader).to.have.been.calledWith('Server', 'Express');
    });
  });
});
