// @flow
import { type ApiServiceHeadersType } from 'Shared/types/api';
import { ApiService } from './ApiService';

const HOMEPAGE_PATH = '/views/home-page/:country/:language';
const SEARCH_VIEWS_PATH =
  '/views/search?content=:content&proposalLimit=:proposalLimit&questionLimit=:questionLimit&organisationLimit=:organisationLimit&country=:country&language=:language';

export class ViewsApiService {
  static getHome = async (
    country: string,
    language: string,
    headers?: ApiServiceHeadersType = {}
  ): Promise<Object> => {
    return ApiService.callApi(
      HOMEPAGE_PATH.replace(':country', country).replace(':language', language),
      {
        method: 'GET',
        headers,
      }
    );
  };

  static searchViews = async (
    content: string,
    country: string,
    language: string,
    proposalLimit?: number = 4,
    questionLimit?: number = 4,
    organisationLimit?: number = 4
  ): Promise<Object> => {
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
  };
}
