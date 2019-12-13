/* @flow */
import { type Dispatch } from 'redux';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import * as actionTypes from 'Shared/store/actionTypes';
import { Logger } from 'Shared/services/Logger';

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
