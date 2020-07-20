// @flow
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { logger } from '../logger';

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
  const CACHE_KEY = `HOMEPAGE`;
  const content = cache.get(CACHE_KEY);
  if (content) {
    return content;
  }

  try {
    const viewsResponse = await ViewsApiService.getHome(country, language, {
      'x-make-country': country,
      'x-make-language': language,
    });
    cache.put(CACHE_KEY, viewsResponse.data, 300000);

    return viewsResponse.data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();
      return null;
    }
    logger.log('error in server/service/ViewsService/getHome', apiServiceError);
    unexpectedError();

    return null;
  }
};

export const ViewsService = {
  getHome,
  clearCache,
};
