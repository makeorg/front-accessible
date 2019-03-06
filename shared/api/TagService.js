// @flow

import { ApiService } from './ApiService';

const PATH_TAGS_LIST = '/tags';

export class TagService {
  static getList(questionId: string, country: string, language: string) {
    return ApiService.callApi(PATH_TAGS_LIST, {
      method: 'GET',
      params: {
        questionId,
        country,
        language,
      },
    });
  }
}
