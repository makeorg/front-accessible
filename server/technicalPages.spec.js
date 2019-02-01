import httpMocks from 'node-mocks-http';
import { env } from 'Shared/env';
import { renderRobot } from './technicalPages';

jest.mock('Shared/env');

describe('technical Pages', () => {
  describe('render a robots.txt by env', () => {
    it('allow when we are in prod env', () => {
      const request = httpMocks.createRequest({});
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'type');
      jest.spyOn(response, 'send');

      env.isProd.mockReturnValueOnce(true);
      renderRobot(request, response, () => { });
      expect(response.type).toHaveBeenCalledWith('text/plain');
      expect(response.send).toHaveBeenCalledWith('User-agent: *\nAllow: /');
    });
    it('disallow when we are in preprod env', () => {
      const request = httpMocks.createRequest({});
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'type');
      jest.spyOn(response, 'send');

      env.isProd.mockReturnValueOnce(false);
      renderRobot(request, response, () => { });
      expect(response.type).toHaveBeenCalledWith('text/plain');
      expect(response.send).toHaveBeenCalledWith('User-agent: *\nDisallow: /');
    });
  });
});
