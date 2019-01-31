import QuestionService from 'Shared/api/QuestionService';
import SequenceService from 'Shared/api/SequenceService';
import { createInitialState } from 'Shared/store/initialState';
import { getBaitText } from 'Shared/constants/proposal';

import { disableExtraSlidesByQuery } from './helpers/query.helper';
import { logger } from '../logger';


const reactRender = require('../reactRender');

async function getQuestion(questionSlug) {
  return QuestionService.getDetail(questionSlug);
}

async function getQuestionConfiguration(questionSlug) {
  return SequenceService.fetchConfiguration(questionSlug);
}

module.exports = async function SequenceRoute(req, res) {
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

    const routeState = {
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

    return reactRender(req, res, routeState);
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }

    res.send(error);
  }
};
