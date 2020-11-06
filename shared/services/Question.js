// @flow
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import {
  type QuestionType,
  type QuestionPartnerType,
  type HomeQuestionType,
} from 'Shared/types/question';
import { type TagType } from 'Shared/types/tag';
import { type PersonalityType } from 'Shared/types/user';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const getQuestions = async (
  country: string,
  status: ?string = undefined,
  sortAlgorithm: ?string = undefined,
  limit: ?number = undefined,
  skip: ?number = undefined
): Promise<?{ total: number, results: HomeQuestionType[] }> => {
  try {
    const { data } = await QuestionApiService.getQuestions(
      country,
      status,
      sortAlgorithm,
      limit,
      skip
    );

    return data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getDetail = async (
  questionSlugOrId: string,
  notFound: () => void = () => {},
  country?: string
): Promise<?QuestionType> => {
  try {
    const { data } = await QuestionApiService.getDetail(questionSlugOrId);
    if (country !== undefined && !data?.countries?.includes(country)) {
      notFound();

      return null;
    }

    return data;
  } catch (apiServiceError) {
    if (apiServiceError.status === 404) {
      notFound();

      return null;
    }

    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const searchQuestions = async (
  country: string,
  language: string,
  content: string
): Promise<?{ total: number, results: QuestionType[] }> => {
  try {
    const { data } = await QuestionApiService.searchQuestions(
      country,
      language,
      content
    );

    return data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getQuestionPopularTags = async (
  questionId: string,
  limit: ?number = undefined,
  skip: ?number = undefined
): Promise<?(TagType[])> => {
  try {
    const response = await QuestionApiService.getQuestionPopularTags(
      questionId,
      limit,
      skip
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getQuestionPartners = async (
  questionId: string,
  partnerKind: string,
  sortAlgorithm?: string,
  limit: ?number = undefined,
  skip: ?number = undefined
): Promise<?{ total: number, results: QuestionPartnerType[] }> => {
  try {
    const response = await QuestionApiService.getQuestionPartners(
      questionId,
      partnerKind,
      sortAlgorithm,
      limit,
      skip
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getQuestionPersonalities = async (
  questionId: string,
  personalityRole: ?string = undefined,
  limit: ?number = undefined,
  skip: ?number = undefined
): Promise<?{ total: number, results: PersonalityType[] }> => {
  try {
    const response = await QuestionApiService.getQuestionPersonalities(
      questionId,
      personalityRole,
      limit,
      skip
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const QuestionService = {
  getQuestions,
  getDetail,
  searchQuestions,
  getQuestionPopularTags,
  getQuestionPartners,
  getQuestionPersonalities,
};
