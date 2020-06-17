import httpMocks from 'node-mocks-http';
import { createInitialState } from 'Shared/store/initialState';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import homepageFixture from '../../apiMocks/db/views.json';
import { ViewsService } from '../service/ViewsService';
import { homepageRoute } from './homepageRoute';
import { reactRender } from '../reactRender';

jest.mock('Shared/api/ViewsApiService');
jest.mock('../service/ViewsService');
jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));
jest.mock('./helpers/ssr.helper', () => ({
  logError: jest.fn(),
}));
jest.mock('Shared/store/initialState', () => ({
  createInitialState: jest.fn(),
}));

const country = 'FR';
const language = 'fr';
const request = httpMocks.createRequest({
  params: {
    country,
    language,
  },
});
const response = httpMocks.createResponse();

describe('Homepage route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('The route', () => {
    it('construct route initial state and render', async () => {
      ViewsApiService.getHome.mockReturnValue({ data: homepageFixture });
      createInitialState.mockReturnValue({});
      ViewsService.clearCache();

      await homepageRoute(request, response);
      expect(reactRender).toHaveBeenCalledWith(request, response, {
        views: {
          homepage: homepageFixture,
        },
      });
    });
  });
});
