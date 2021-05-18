// @flow
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { logError } from '../ssr/helpers/ssr.helper';

const cache = require('memory-cache');

const clearCache = () => {
  cache.clear();
};

const getHome = async (
  country: string,
  language: string,
  notFound: () => void = () => {},
  unexpectedError: () => void = () => {}
) => {
  const CACHE_KEY = `HOMEPAGE_${country}`;
  const content = cache.get(CACHE_KEY);
  if (content) {
    return content;
  }

  try {
    const { data } = await ViewsApiService.getHome(country, {
      'x-make-country': country,
      'x-make-language': language,
    });

    cache.put(CACHE_KEY, data, 300000);

    return data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();
      return null;
    }
    logError(
      apiServiceError.clone(
        `error in server/service/ViewsService/getHome: ${apiServiceError.message}`
      )
    );

    unexpectedError();

    return null;
  }
};

const getCountries = async (
  country: string,
  language: string,
  notFound: () => void = () => {},
  unexpectedError: () => void = () => {}
) => {
  const CACHE_KEY = `COUNTRIES`;
  const content = cache.get(CACHE_KEY);
  if (content) {
    return content;
  }

  try {
    const countries: any = [];
    const headers = {};
    if (country) {
      headers['x-make-country'] = country;
    }
    if (language) {
      headers['x-make-language'] = language;
    }

    const { data } = await ViewsApiService.getCountries(headers);

    // push country codes in array
    data.map(countryWithConsultations =>
      countries.push(countryWithConsultations.countryCode)
    );

    cache.put(CACHE_KEY, countries.sort(), 300000);

    return countries.sort();
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();
      return [];
    }
    logError(
      apiServiceError.clone(
        `error in server/service/ViewsService/getCountries: ${apiServiceError.message}`
      )
    );

    unexpectedError(apiServiceError);

    return [];
  }
};

export const ViewsService = {
  getHome,
  getCountries,
  clearCache,
};
