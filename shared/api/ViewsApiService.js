// @flow

import { ApiService } from './ApiService';

export const HOMEPAGE_PATH = '/views/home';

export class ViewsApiService {
  static getHome() {
    return ApiService.callApi(HOMEPAGE_PATH, {
      method: 'GET',
    });
  }
}
