/* @flow */
import { type Dispatch } from 'redux';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import * as actionTypes from 'Shared/store/actionTypes';
import { Logger } from 'Shared/services/Logger';
import { type PopularProposals } from 'Shared/store/types';

export const proposeSuccess = () => ({ type: actionTypes.PROPOSE_SUCCESS });

export const fetchProposalData = (proposalId: string) => (dispatch: Dispatch) =>
  ProposalApiService.getProposal(proposalId)
    .then(proposal => {
      dispatch({ type: actionTypes.PROPOSAL_LOAD, payload: proposal });
      // Important ! Do not remove: use by the parent to use proposal.question.questionId
      return proposal;
    })
    .catch(error => {
      Logger.logError(Error(error));
    });

export const setPopularProposals = (proposals: PopularProposals) => ({
  type: actionTypes.PROPOSAL_POPULAR_LOAD,
  payload: proposals,
});

export const fetchPopularProposals = (questionId: string) => async (
  dispatch: Dispatch
) => {
  try {
    const proposals = await ProposalApiService.getPopularProposals(questionId);
    dispatch(setPopularProposals(proposals));
  } catch (error) {
    Logger.logError(Error(error));
  }
};
