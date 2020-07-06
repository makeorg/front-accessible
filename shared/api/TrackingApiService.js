// @flow
import { ApiService } from './ApiService';

const PATH_POST_TRACKING = '/tracking/front';

export class TrackingApiService {
  static track = async (parameters: Object = {}): Promise<Object> => {
    return ApiService.callApi(PATH_POST_TRACKING, {
      method: 'POST',
      body: JSON.stringify(parameters),
    });
  };
}
