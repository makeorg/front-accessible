import { ApiService } from 'Shared/api/ApiService';
import {
  PersonalityApiService,
  PERSONALITY_PATH,
} from './PesronalityApiService';

jest.mock('./ApiService');

describe('PersonalityApiService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('getPersonality', () => {
    it('must call ApiService.callApi', async () => {
      await PersonalityApiService.getPersonality('1234');
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        PERSONALITY_PATH.replace(':userId', '1234'),
        {
          method: 'GET',
          headers: {},
        }
      );
    });
  });
});
