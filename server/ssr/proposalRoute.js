import ProposalService from 'Shared/api/ProposalService';
import SequenceService from 'Shared/api/SequenceService';
import { createInitialState } from 'Shared/store/initialState';
import { logger } from '../logger';

const { reactRender } = require('../reactRender');

async function getProposal(proposalId, headers) {
  return ProposalService.getProposal(proposalId, headers);
}

async function getQuestionConfiguration(questionSlug) {
  return SequenceService.fetchConfiguration(questionSlug);
}

export const proposalRoute = async (req, res) => {
  let routeState = {};
  try {
    const initialState = createInitialState();
    const {
      proposalId,
      questionSlug,
      country,
      language
    } = req.params;

    const proposal = await getProposal(proposalId, {
      'x-make-country': country,
      'x-make-language': language
    });
    const questionConfiguration = await getQuestionConfiguration(questionSlug);

    routeState = {
      proposal: {
        ...initialState.proposal,
        proposal
      },
      sequence: {
        questionConfiguration
      }
    };
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }
    return res.send(error);
  }

  return reactRender(req, res, routeState);
};
