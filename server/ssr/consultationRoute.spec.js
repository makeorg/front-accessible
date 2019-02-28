import httpMocks from 'node-mocks-http';
import { consultationRoute } from './consultationRoute';
import { reactRender } from '../reactRender';

jest.mock('../reactRender', () => ({ reactRender: jest.fn() }));

const country = 'FR';
const language = 'fr';
const questionSlug = 'baz';

const request = httpMocks.createRequest({
  params: {
    country,
    language,
    questionSlug,
  },
});
const response = httpMocks.createResponse();
const routeState = {};

describe('Proposal route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('The route', () => {
    it('construct route initial state and render', async () => {
      await consultationRoute(request, response);
      expect(reactRender).toHaveBeenCalledWith(request, response, routeState);
    });
  });
});
