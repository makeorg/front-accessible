import { ApiService } from 'Shared/api/ApiService';
import { TrackingApiService, PATH_PERFORMANCE } from './TrackingApiService';

jest.mock('./ApiService');

describe('TrackingApiService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('trackPerformance', () => {
    it('must call ApiService.callApi', async () => {
      const performanceTiming = {
        connectStart: 1,
        connectEnd: 2,
        domComplete: 3,
        domContentLoadedEventEnd: 4,
        domContentLoadedEventStart: 5,
        domInteractive: 6,
        domLoading: 7,
        domainLookupEnd: 8,
        domainLookupStart: 9,
        fetchStart: 10,
        loadEventEnd: 11,
        loadEventStart: 12,
        navigationStart: 13,
        redirectEnd: 14,
        redirectStart: 15,
        requestStart: 16,
        responseEnd: 17,
        responseStart: 18,
        secureConnectionStart: 19,
        unloadEventEnd: 20,
        unloadEventStart: 21,
      };
      await TrackingApiService.trackPerformance('foo', performanceTiming);
      expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_PERFORMANCE, {
        method: 'POST',
        body: JSON.stringify({
          applicationName: 'foo',
          timings: performanceTiming,
        }),
      });
    });
  });
});
