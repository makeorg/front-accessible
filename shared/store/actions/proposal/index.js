/* @flow */

import { ProposalService } from 'Shared/api/ProposalService';
import { getBaitText } from 'Shared/constants/proposal';
import * as actionTypes from 'Shared/store/actionTypes';
import { Tracking } from 'Shared/services/Tracking';
import { Logger } from 'Shared/services/Logger';

export const proposeTyping = (
  content: string,
  length: number,
  canSubmit: boolean
) => ({
  type: actionTypes.PROPOSE_TYPING,
  payload: {
    content,
    length,
    canSubmit,
  },
});

export const proposeRequest = (content: string, questionId: string) => ({
  type: actionTypes.PROPOSE_REQUEST,
  payload: { content, questionId },
});

export const proposeSuccess = () => ({ type: actionTypes.PROPOSE_SUCCESS });
export const proposeFailure = (error: string) => ({
  type: actionTypes.PROPOSE_FAILURE,
  error,
});

export const typingProposal = (
  content: string,
  length: number,
  canSubmit: boolean
) => (dispatch: Function) => {
  dispatch(proposeTyping(content, length, canSubmit));
};

export const submitProposal = (content: string) => (
  dispatch: Function,
  getState: Function
) => {
  const { isLoggedIn } = getState().authentification;
  const { questionId, slug } = getState().sequence;

  if (!isLoggedIn) {
    dispatch(proposeRequest(content, questionId));
    return Promise.resolve();
  }

  if (!content || !questionId) {
    return Promise.resolve();
  }

  const proposalContent = getBaitText() + content;
  return ProposalService.propose(proposalContent, questionId)
    .then(() => {
      dispatch(proposeSuccess());

      Tracking.trackDisplayProposalSubmitValidation(slug);
    })
    .catch(error => {
      dispatch(proposeFailure(error));
    });
};

export const fetchProposalData = (proposalId: string) => (dispatch: Function) =>
  ProposalService.getProposal(proposalId)
    .then(proposal => {
      dispatch({ type: actionTypes.PROPOSAL_LOAD, payload: proposal });
      // Important ! Do not remove: use by the parent to use proposal.questionId
      return proposal;
    })
    .catch(error => {
      Logger.logError({
        ...{ source: 'fetchProposalData api call error' },
        ...{ error },
      });
    });
