import httpMocks from 'node-mocks-http';
import { reactRender } from '../../reactRender';
import { profileRoute } from './profileRoute';

jest.mock('../../reactRender', () => ({ reactRender: jest.fn() }));

describe('profileRoute', () => {
  it('must call reactRender', async () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();

    await profileRoute(request, response, () => {});
    expect(reactRender).toHaveBeenCalledWith(request, response);
  });
});
