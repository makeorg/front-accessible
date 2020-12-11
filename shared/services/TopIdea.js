// @flow
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type TopIdeaType, type TopIdeaDetailType } from 'Shared/types/topIdea';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const orderByWeight = (topIdea1, topIdea2) => topIdea2.weight - topIdea1.weight;

const getTopIdeas = async (
  questionId: string,
  notFound: () => void = () => {}
): Promise<?(TopIdeaType[])> => {
  try {
    const topIdeasResponse = await QuestionApiService.getTopIdeas(questionId);

    return topIdeasResponse.data.questionTopIdeas.sort(orderByWeight);
  } catch (apiServiceError) {
    if (apiServiceError.status === '404') {
      notFound();
      return null;
    }

    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getTopIdea = async (
  questionId: string,
  topIdeaId: string,
  notFound: () => void
): Promise<?TopIdeaDetailType> => {
  try {
    const topIdeaResponse = await QuestionApiService.getTopIdea(
      questionId,
      topIdeaId
    );

    return topIdeaResponse.data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();
      return null;
    }
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const TopIdeaService = {
  getTopIdeas,
  getTopIdea,
};
