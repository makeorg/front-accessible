/* @flow */

import ProposalService from 'Api/ProposalService';
import { getBaitText } from 'Constants/proposal';
import * as actionTypes from 'Constants/actionTypes';
import Tracking from 'Services/Tracking';

export const proposeTyping = (content: string, length: number, canSubmit: boolean) => ({
  type: actionTypes.PROPOSE_TYPING,
  content,
  length,
  canSubmit
});
export const proposeRequest = (content: string, questionId: string) => (
  { type: actionTypes.PROPOSE_REQUEST, content, questionId }
);
export const proposeSuccess = (proposalId: string) => ({ type: actionTypes.PROPOSE_SUCCESS, proposalId });
export const proposeFailure = (error: string) => ({ type: actionTypes.PROPOSE_FAILURE, error });

export const typingProposal = (content: string, length: number, canSubmit: boolean) => (dispatch: Function) => {
  dispatch(proposeTyping(content, length, canSubmit));
};

export const submitProposal = (content: string) => (dispatch: Function, getState: Function) => {
  const { isLoggedIn } = getState().authentification;
  const { questionId } = getState().sequence.question;
  if (!isLoggedIn) {
    dispatch(proposeRequest(content, questionId));
    return Promise.resolve();
  }

  if (!content || !questionId) {
    return Promise.resolve();
  }

  const proposalContent = getBaitText() + content;
  return ProposalService.propose(proposalContent, questionId)
    .then(({ proposalId }) => {
      dispatch(proposeSuccess(proposalId));

      Tracking.trackDisplayProposalSubmitValidation();
    })
    .catch((error) => {
      dispatch(proposeFailure(error));
    });
};
