import ProposalService from 'Shared/api/ProposalService';
import SequenceService from 'Shared/api/SequenceService';
import { initialState } from 'Shared/store/initialState';
import { logger } from '../logger';

const reactRender = require('../reactRender');

async function getProposal(proposalId) {
  return ProposalService.getProposal(proposalId);
}

async function getQuestionConfiguration(questionSlug) {
  return SequenceService.fetchConfiguration(questionSlug);
}

module.exports = async function ProposalRoute(req, res) {
  try {
    const { proposalId, questionSlug } = req.params;
    const proposal = await getProposal(proposalId);
    const questionConfiguration = await getQuestionConfiguration(questionSlug);

    const routeState = {
      proposal: {
        ...initialState.proposal,
        proposal
      },
      sequence: {
        questionConfiguration
      }
    };
    return reactRender(req, res, routeState);
  } catch (error) {
    if (error && error.stack) {
      const { stack } = error;
      logger.log('error', stack);
    }
    res.send(error);
  }
};
