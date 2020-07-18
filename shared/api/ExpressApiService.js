// @flow
import { type AxiosResponse } from 'axios';
import { ExpressApiServiceShared } from './ApiService/ExpressApiService.shared';

const PATH_RESULTS_CONFIGURATION = '/api/results/:questionSlug';

export class ExpressApiService {
  static getResults(questionSlug: string): Promise<AxiosResponse> {
    return ExpressApiServiceShared.callApi(
      PATH_RESULTS_CONFIGURATION.replace(':questionSlug', questionSlug),
      {
        method: 'GET',
      }
    );
  }
}
