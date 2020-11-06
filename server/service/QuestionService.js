import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { logError } from '../ssr/helpers/ssr.helper';

const cache = require('memory-cache');

const clearCache = () => {
  cache.clear();
};

const getQuestion = async (
  questionIdOrSlug: string,
  country: string,
  language: string,
  notFound: () => void = () => {},
  unexpectedError: () => void = () => {}
) => {
  const handleData = data => {
    if (!data.countries?.includes(country)) {
      notFound();
      return null;
    }

    return data;
  };

  const CACHE_KEY = `QUESTION_${questionIdOrSlug}`;
  const content = cache.get(CACHE_KEY);
  if (content) {
    return handleData(content);
  }

  try {
    const { data } = await QuestionApiService.getDetail(questionIdOrSlug, {
      'x-make-question-id': questionIdOrSlug,
      'x-make-country': country,
      'x-make-language': language,
    });

    cache.put(CACHE_KEY, data, 300000);

    return handleData(data);
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();
      return null;
    }
    logError(
      apiServiceError.clone(
        `error in server/service/QuestionService/getQuestion: ${apiServiceError.message}`
      )
    );

    unexpectedError();

    return null;
  }
};

export const QuestionService = {
  getQuestion,
  clearCache,
};
