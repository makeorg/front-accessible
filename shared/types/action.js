/* @flow */

import { type Proposal } from './proposal';

type ProposalLoadAction = { type: 'PROPOSAL_LOAD', payload: Proposal };
type ProposalProposeTypingAction = {
  type: 'PROPOSAL_PROPOSE_TYPING',
  payload: {
    content: string,
    length: number,
    canSubmit: boolean
  }
};
type ProposalProposeRequestAction = {
  type: 'PROPOSAL_PROPOSE_REQUEST',
  payload: {
    questionId: string,
    content: string
  }
};
type ProposalProposeSuccessAction = { type: 'PROPOSAL_PROPOSE_SUCCESS', payload: string };
type ProposalProposeFailureAction = { type: 'PROPOSAL_PROPOSE_FAILURE', error: string };

export type ProposalAction =
  | ProposalLoadAction
  | ProposalProposeTypingAction
  | ProposalProposeRequestAction
  | ProposalProposeSuccessAction
  | ProposalProposeFailureAction;
