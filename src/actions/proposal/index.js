/* @flow */

import { PROPOSAL_BAIT_TEXT } from '../../constants/proposal';
import * as actionTypes from '../../constants/actionTypes';
import ProposalService from '../../api/ProposalService';

export const proposeTyping = (content: string, length: number, canSubmit: boolean) => ({
  type: actionTypes.PROPOSE_TYPING,
  content,
  length,
  canSubmit
});
export const proposeRequest = (content: string, operationId: string) => (
  { type: actionTypes.PROPOSE_REQUEST, content, operationId }
);
export const proposeSuccess = (proposalId: string) => ({ type: actionTypes.PROPOSE_SUCCESS, proposalId });
export const proposeFailure = (error: string) => ({ type: actionTypes.PROPOSE_FAILURE, error });

export const typingProposal = (content: string, length: number, canSubmit: boolean) => (dispatch: Function) => {
  dispatch(proposeTyping(content, length, canSubmit));
};

export const submitProposal = (content: string) => (dispatch: Function, getState: Function) => {
  const { isLoggedIn } = getState().authentification;
  const { operationId } = getState().appConfig;
  if (!isLoggedIn) {
    dispatch(proposeRequest(content, operationId));
    return Promise.resolve();
  }

  if (!content || !operationId) {
    return Promise.resolve();
  }

  const proposalContent = PROPOSAL_BAIT_TEXT + content;
  return ProposalService.propose(proposalContent, operationId)
    .then(({ proposalId }) => {
      dispatch(proposeSuccess(proposalId));
    })
    .catch((error) => {
      dispatch(proposeFailure(error));
    });
};
