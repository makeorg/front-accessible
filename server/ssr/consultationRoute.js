// @flow
import { createInitialState } from 'Shared/store/initialState';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { type StateRoot as TypeStateRoot } from 'Shared/store/types';
import { isInProgress } from 'Shared/helpers/date';
import { QuestionNodeService } from 'Shared/api/QuestionNodeService';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import { QuestionService } from '../service/QuestionService';

export const consultationRoute = async (req: any, res: any) => {
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

  if (!isInProgress(question) && !question.displayResults) {
    return res.redirect(question.aboutUrl);
  }

  if (question.displayResults) {
    try {
      questionResults = await QuestionNodeService.fetchResults(questionSlug);
    } catch (error) {
      logError(error);

      return res.send(error);
    }
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
