/* @flow */

import { ProposalService } from 'Shared/api/ProposalService';
import * as actionTypes from 'Shared/store/actionTypes';
import { Logger } from 'Shared/services/Logger';

export const proposeSuccess = () => ({ type: actionTypes.PROPOSE_SUCCESS });

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
