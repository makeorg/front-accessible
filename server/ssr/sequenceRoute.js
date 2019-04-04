import { createInitialState } from 'Shared/store/initialState';
import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';
import {
  getQuestion,
  getQuestionConfiguration,
} from '../service/QuestionService';

export const sequenceRoute = async (req, res) => {
  let routeState = {};

  try {
    const initialState = createInitialState();
    const { questionSlug } = req.params;
    const question = await getQuestion(questionSlug);
    const questionConfiguration = await getQuestionConfiguration(questionSlug);
    if (questionConfiguration) {
      const { sequenceConfig } = questionConfiguration;
      questionConfiguration.sequenceConfig = disableExtraSlidesByQuery(
        sequenceConfig,
        req.query
      );
    }

    const { firstProposal } = req.query;

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
    };

    if (firstProposal) {
      routeState.sequence = {
        ...routeState.sequence,
        firstProposal,
      };
    }
  } catch (error) {
    logError(error);
    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
