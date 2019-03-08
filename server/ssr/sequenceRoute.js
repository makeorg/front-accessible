import { QuestionService } from 'Shared/api/QuestionService';
import { SequenceService } from 'Shared/api/SequenceService';
import { createInitialState } from 'Shared/store/initialState';
import { getBaitText } from 'Shared/constants/proposal';
import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';

async function getQuestion(questionSlug, headers) {
  return QuestionService.getDetail(questionSlug, headers);
}

async function getQuestionConfiguration(questionSlug) {
  return SequenceService.fetchConfiguration(questionSlug);
}

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
      proposal: {
        ...initialState.proposal,
        length: getBaitText().length,
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
