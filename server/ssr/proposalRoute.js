import { createInitialState } from 'Shared/store/initialState';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { SequenceService } from 'Shared/api/SequenceService';
import { logError } from './helpers/ssr.helper';
import { reactRender } from '../reactRender';

export const getQuestionConfiguration = async questionSlug =>
  SequenceService.fetchConfiguration(questionSlug);

export const proposalRoute = async (req, res) => {
  let routeState = {};
  try {
    const initialState = createInitialState();
    const { questionSlug, proposalId } = req.params;

    const proposal = await ProposalApiService.getProposal(proposalId);
    const questionConfiguration = await getQuestionConfiguration(questionSlug);

    routeState = {
      sequence: {
        ...initialState.sequence,
        questionId: proposal.question.questionId,
      },
      proposal: {
        data: proposal,
      },
      questions: {
        [proposal.question.questionId]: {
          questionConfiguration,
        },
      },
    };
  } catch (error) {
    logError(error);
    return res.status(404).end();
  }

  return reactRender(req, res, routeState);
};
