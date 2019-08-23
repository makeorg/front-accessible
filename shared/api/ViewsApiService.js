// @flow

import { ApiService } from './ApiService';

export const HOMEPAGE_PATH = '/views/home';
export const SEARCH_VIEWS_PATH =
  '/views/search?content=:content&proposalLimit=:proposalLimit&questionLimit=:questionLimit&organisationLimit=:organisationLimit&country=:country&language=:language';

export class ViewsApiService {
  static getHome() {
    return ApiService.callApi(HOMEPAGE_PATH, {
      method: 'GET',
    });
  }

  /**
   * search viiews
   * @param  {String}  content
   * @param  {String}  country
   * @param  {String}  language
   * @param  {Number}  proposalLimit
   * @param  {Number}  questionLimit
   * @param  {Number}  organisationLimit
   */
  static searchViews(
    content: string,
    country: string,
    language: string,
    proposalLimit?: number = 4,
    questionLimit?: number = 4,
    organisationLimit?: number = 4
  ): Promise<Object> {
    return ApiService.callApi(
      SEARCH_VIEWS_PATH.replace(':content', content)
        .replace(':proposalLimit', proposalLimit.toString())
        .replace(':questionLimit', questionLimit.toString())
        .replace(':organisationLimit', organisationLimit.toString())
        .replace(':country', country)
        .replace(':language', language),
      {
        method: 'GET',
      }
    );
  }
}
