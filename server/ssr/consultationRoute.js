// @flow
import { createInitialState } from 'Shared/store/initialState';
import { SequenceService } from 'Shared/api/SequenceService';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { type StateRoot as TypeStateRoot } from 'Shared/store/types';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { isInProgress } from 'Shared/helpers/date';
import { QuestionNodeService } from 'Shared/api/QuestionNodeService';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import { getQuestion } from '../service/QuestionService';

export const consultationRoute = async (req: any, res: any) => {
  const routeState: TypeStateRoot = createInitialState();
  try {
    const { questionSlug } = req.params;
    let questionResults: TypeQuestionResults;
    const question: TypeQuestion = await getQuestion(questionSlug);

    if (
      !isInProgress(question.startDate, question.endDate) &&
      !question.displayResults
    ) {
      return res.redirect(question.aboutUrl);
    }

    if (question.displayResults) {
      questionResults = await QuestionNodeService.fetchResults(questionSlug);
    }

    const questionConfiguration: TypeQuestionConfiguration = await SequenceService.fetchConfiguration(
      questionSlug
    );

    routeState.currentQuestion = questionSlug;
    routeState.questions = {
      [questionSlug]: {
        question,
        questionConfiguration,
        questionResults,
      },
    };
  } catch (error) {
    logError(error);

    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
