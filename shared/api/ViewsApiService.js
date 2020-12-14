// @flow
import { type ApiServiceHeadersType } from 'Shared/types/api';
import { ApiService } from './ApiService';

// @todo remove it when ready on API side
const HOMEPAGE_PATH = '/views/home-page/:country';
const SEARCH_VIEWS_PATH =
  '/views/search?content=:content&proposalLimit=:proposalLimit&questionLimit=:questionLimit&organisationLimit=:organisationLimit&country=:country';
const COUNTRIES_PATH = '/views/countries';

export class ViewsApiService {
  static getCountries = async (
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> =>
    ApiService.callApi(COUNTRIES_PATH, {
      method: 'GET',
      headers,
    });

  static getHome = async (
    country: string,
    headers?: ApiServiceHeadersType = {}
  ): Promise<Object> =>
    ApiService.callApi(HOMEPAGE_PATH.replace(':country', country), {
      method: 'GET',
      headers,
    });

  static searchViews = async (
    content: string,
    country: string,
    proposalLimit?: number = 4,
    questionLimit?: number = 4,
    organisationLimit?: number = 4
  ): Promise<Object> =>
    ApiService.callApi(
      SEARCH_VIEWS_PATH.replace(':content', content)
        .replace(':proposalLimit', proposalLimit.toString())
        .replace(':questionLimit', questionLimit.toString())
        .replace(':organisationLimit', organisationLimit.toString())
        .replace(':country', country),
      {
        method: 'GET',
      }
    );
}
