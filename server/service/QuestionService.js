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
  const CACHE_KEY = `QUESTION_${questionIdOrSlug}`;
  const content = cache.get(CACHE_KEY);
  if (content) {
    return content;
  }

  try {
    const questionDetailResponse = await QuestionApiService.getDetail(
      questionIdOrSlug,
      {
        'x-make-question-id': questionIdOrSlug,
        'x-make-country': country,
        'x-make-language': language,
      }
    );

    // @toDo: hack countries
    const { data } = questionDetailResponse;
    const dataWithCountry = {
      ...data,
      country: data.countries[0],
      operation: {
        ...data.operation,
        questions: data.operation.questions.map(question => ({
          ...question,
          country: question.countries[0],
        })),
      },
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
        `error in server/service/QuestionService/getQuestion: ${
          apiServiceError.message
        }`
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
