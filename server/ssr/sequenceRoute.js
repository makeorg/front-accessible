import QuestionService from 'Shared/api/QuestionService';
import SequenceService from 'Shared/api/SequenceService';
import { createInitialState } from 'Shared/store/initialState';
import { getBaitText } from 'Shared/constants/proposal';
// import { reactRender } from '../reactRender';
import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { logger } from '../logger';

const { reactRender } = require('../reactRender');

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
      const { sequenceExtraSlidesConfig } = questionConfiguration;
      questionConfiguration.sequenceExtraSlidesConfig = disableExtraSlidesByQuery(sequenceExtraSlidesConfig, req.query);
    }

    const { firstProposal } = req.query;

    routeState = {
      sequence: {
        ...initialState.sequence,
        question,
        questionConfiguration
      },
      proposal: {
        ...initialState.proposal,
        length: getBaitText().length
      }
    };

    if (firstProposal) {
      routeState.sequence = {
        ...routeState.sequence,
        firstProposal
      };
    }
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }

    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
