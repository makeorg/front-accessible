// @flow
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type Question as TypeQuestion } from 'Shared/types/question';

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
