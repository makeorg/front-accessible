// @flow
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { Logger } from 'Shared/services/Logger';
import { type ApiSearchQuestionsResponseType } from 'Shared/types/api';

export const getQuestions = async (
  questionSlugsOrIds: string[]
): Promise<TypeQuestion[]> => {
  const questionsPromises = questionSlugsOrIds.map(async questionSlugOrId => {
    const question = await QuestionApiService.getDetail(questionSlugOrId);
    return question;
  });

  const questions = await Promise.all(questionsPromises);

  return questions;
};

export const searchQuestions = async (
  country: string,
  language: string,
  content: string
): ApiSearchQuestionsResponseType | Object => {
  try {
    const response = await QuestionApiService.searchQuestions(
      country,
      language,
      content
    );

    return response;
  } catch (error) {
    Logger.logError(Error(error));
    return {};
  }
};
