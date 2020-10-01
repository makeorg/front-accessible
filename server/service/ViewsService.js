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

    // toDo: hack multi-countries
    const { data } = viewsResponse;

    const dataWithCountry = {
      ...data,
      currentQuestions: data.currentQuestions.map(question => ({
        ...question,
        country: question.countries[0],
      })),
      featuredQuestions: data.featuredQuestions.map(question => ({
        ...question,
        country: question.countries[0],
      })),
    };

    cache.put(CACHE_KEY, dataWithCountry, 300000);

    return dataWithCountry;
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

export const ViewsService = {
  getHome,
  clearCache,
};
