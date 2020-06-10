/* @flow */

import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { ViewsService } from './Views';

jest.mock('Shared/api/ViewsApiService');

describe('getDeprecatedHome function', () => {
  it('return an ordered business consultations', async () => {
    jest.spyOn(ViewsApiService, 'getDeprecatedHome');
    const mockApiResult = {
      currentConsultations: [],
      popularProposals: [],
      controverseProposals: [],
      featuredConsultations: [],
      businessConsultations: [
        {
          startDate: '2020-02-07T23:00:00.000Z',
          endDate: '2020-06-14T22:00:00.000Z',
          slug: 'consultation-1',
        },
        {
          startDate: null,
          endDate: '2020-05-15T22:00:00.000Z',
          slug: 'consultation-2',
        },
        {
          startDate: '2020-02-07T23:00:00.000Z',
          endDate: '2022-05-14T22:00:00.000Z',
          slug: 'consultation-3',
        },
        {
          startDate: '2020-02-07T23:00:00.000Z',
          endDate: null,
          slug: 'consultation-4',
        },
      ],
    };
    ViewsApiService.getDeprecatedHome.mockResolvedValue({
      data: mockApiResult,
    });
    const response = await ViewsService.getDeprecatedHome();
    expect(response.businessConsultations.map(item => item.slug)).toStrictEqual(
      ['consultation-4', 'consultation-3', 'consultation-1', 'consultation-2']
    );
  });
});
