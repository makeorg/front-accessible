// @flow

import { DemographicsTrackingApiService } from 'Shared/api/DemographicsTrackingApiService';
import { DemographicsTrackingService } from 'Shared/services/DemographicsTracking';

jest.mock('Shared/api/DemographicsTrackingApiService');
jest.mock('Shared/services/Logger');

describe('DemographicsTrackingService Service', () => {
  describe('track function', () => {
    beforeEach(() => {
      jest.spyOn(DemographicsTrackingApiService, 'track');
    });
    afterEach(() => {
      DemographicsTrackingApiService.track.mockRestore();
    });

    it('trackAge', async () => {
      await DemographicsTrackingService.track('age', '12-25', {
        utm_test: 'hello',
        notrackparam: 'world',
      });

      expect(DemographicsTrackingApiService.track).toHaveBeenNthCalledWith(
        1,
        'age',
        '12-25',
        { utm_test: 'hello' }
      );
    });

    it('trackRegion', async () => {
      await DemographicsTrackingService.track('region', 'FR-GES', {
        utm_test: 'hello2',
        notrackparam: 'world',
      });

      expect(DemographicsTrackingApiService.track).toHaveBeenNthCalledWith(
        1,
        'region',
        'FR-GES',
        { utm_test: 'hello2' }
      );
    });

    it('trackGender', async () => {
      await DemographicsTrackingService.track('gender', 'M', {
        utm_test: 'hello2',
        notrackparam: 'world',
      });

      expect(DemographicsTrackingApiService.track).toHaveBeenNthCalledWith(
        1,
        'gender',
        'M',
        { utm_test: 'hello2' }
      );
    });
  });
});
