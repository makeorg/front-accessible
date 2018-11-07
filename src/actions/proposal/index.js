import { PROPOSAL_BAIT_TEXT } from '../../constants/proposal';
import * as actionTypes from '../../constants/actionTypes';
import ProposalService from '../../api/ProposalService';

export const proposeTyping = (content, length, canSubmit) => ({
  type: actionTypes.PROPOSE_TYPING,
  content,
  length,
  canSubmit
});
export const proposeRequest = (content, operationId) => ({ type: actionTypes.PROPOSE_REQUEST, content, operationId });
export const proposeSuccess = proposalId => ({ type: actionTypes.PROPOSE_SUCCESS, proposalId });
export const proposeFailure = error => ({ type: actionTypes.PROPOSE_FAILURE, error });

export const typingProposal = (content, length, canSubmit) => (dispatch) => {
  dispatch(proposeTyping(content, length, canSubmit));
};

export const submitProposal = content => (dispatch, getState) => {
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
    .then((proposalId) => {
      dispatch(proposeSuccess(proposalId));
    })
    .catch((error) => {
      dispatch(proposeFailure(error));
    });
};
