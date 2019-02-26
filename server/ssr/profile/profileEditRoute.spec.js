import httpMocks from 'node-mocks-http';
import { reactRender } from '../../reactRender';
import { profileEditRoute } from './profileEditRoute';

jest.mock('../../reactRender', () => ({ reactRender: jest.fn() }));

describe('profileEditRoute', () => {
  it('must call reactRender', async () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();

    await profileEditRoute(request, response, () => {});
    expect(reactRender).toHaveBeenCalledWith(request, response);
  });
});
