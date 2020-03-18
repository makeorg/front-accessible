// @flow
import { createInitialState } from 'Shared/store/initialState';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { type StateRoot as TypeStateRoot } from 'Shared/store/types';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';

export const topIdeasRoute = async (req: any, res: any) => {
  const routeState: TypeStateRoot = createInitialState();

  const { questionSlug, country, language } = req.params;
  let questionResults: TypeQuestionResults;
  const question: TypeQuestion = await QuestionService.getQuestion(
    questionSlug,
    country,
    language
  );

  if (!question) {
    return reactRender(req, res.status(404), routeState);
  }

  routeState.currentQuestion = questionSlug;
  routeState.questions = {
    [questionSlug]: {
      question,
      questionResults,
    },
  };
  updateTrackingQuestionParam(question);

  return reactRender(req, res, routeState);
};
