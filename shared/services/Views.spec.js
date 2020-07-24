// @flow
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { homepageTypeFixture } from 'Shared/types/__fixtures__/homepage.fixture';
import { ViewsService } from './Views';

jest.mock('Shared/api/ViewsApiService');

describe('ViewsService function', () => {
  it('return getHome response', async () => {
    jest.spyOn(ViewsApiService, 'getHome');

    ViewsApiService.getHome.mockResolvedValue({
      data: homepageTypeFixture,
    });
    const response = await ViewsService.getHome('FR', 'fr');
    expect(response).toStrictEqual(homepageTypeFixture);
  });
});
