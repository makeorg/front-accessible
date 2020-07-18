// @flow
import { createInitialState } from 'Shared/store/initialState';
import { type Request, type Response } from 'express';
import { type QuestionType } from 'Shared/types/question';
import { type StateRoot as TypeStateRoot } from 'Shared/store/types';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';

export const consultationRoute = async (req: Request, res: Response) => {
  const routeState: TypeStateRoot = createInitialState();

  const { questionSlug, country, language } = req.params;
  const question: QuestionType = await QuestionService.getQuestion(
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
    },
  };
  updateTrackingQuestionParam(question);

  return reactRender(req, res, routeState);
};
