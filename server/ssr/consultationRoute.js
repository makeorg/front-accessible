// @flow
import { createInitialState } from 'Shared/store/initialState';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { type StateRoot as TypeStateRoot } from 'Shared/store/types';
import { isInProgress } from 'Shared/helpers/date';
import { QuestionNodeService } from 'Shared/api/QuestionNodeService';
import { updateRequestContextQuestion } from 'Shared/store/middleware/requestContext';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import { getQuestion } from '../service/QuestionService';

export const consultationRoute = async (req: any, res: any) => {
  const routeState: TypeStateRoot = createInitialState();
  try {
    const { questionSlug } = req.params;
    let questionResults: TypeQuestionResults;
    const question: TypeQuestion = await getQuestion(questionSlug);

    if (!question) {
      return reactRender(req, res.status(404), routeState);
    }

    if (!isInProgress(question) && !question.displayResults) {
      return res.redirect(question.aboutUrl);
    }

    if (question.displayResults) {
      questionResults = await QuestionNodeService.fetchResults(questionSlug);
    }

    routeState.currentQuestion = questionSlug;
    routeState.questions = {
      [questionSlug]: {
        question,
        questionResults,
      },
    };
    updateRequestContextQuestion(question);
  } catch (error) {
    logError(error);

    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
