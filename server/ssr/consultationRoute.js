import { createInitialState } from 'Shared/store/initialState';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import {
  getQuestion,
  getQuestionConfiguration,
} from '../service/QuestionService';

export const consultationRoute = async (req, res) => {
  let routeState = {};

  try {
    const initialState = createInitialState();
    const { questionSlug } = req.params;
    const question = await getQuestion(questionSlug);

    const questionConfiguration = await getQuestionConfiguration(questionSlug);

    routeState = {
      sequence: {
        ...initialState.sequence,
        questionId: question.questionId,
      },
      questions: {
        [question.questionId]: {
          question,
          questionConfiguration,
        },
      },
      proposal: initialState.proposal,
    };
  } catch (error) {
    logError(error);

    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
