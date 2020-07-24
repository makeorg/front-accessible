// @flow
import { type QuestionResultsType } from 'Shared/types/question';
import { ExpressApiService } from 'Shared/api/ExpressApiService';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const getResults = async (
  questionSlug: string,
  notFound: () => void = () => {}
): Promise<?QuestionResultsType> => {
  try {
    const response = await ExpressApiService.getResults(questionSlug);

    return response.data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();

      return null;
    }

    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const ExpressService = {
  getResults,
};
