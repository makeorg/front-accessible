// @flow

import { type Proposal as TypeProposal } from './proposal';

type ProposalLoadAction = { type: 'PROPOSAL_LOAD', payload: TypeProposal };
type ProposalProposeSuccessAction = {
  type: 'PROPOSAL_PROPOSE_SUCCESS',
  payload: string,
};
type ProposalPopularAction = {
  type: 'PROPOSAL_POPULAR_LOAD',
  payload: TypeProposal[],
};

export type ProposalAction =
  | ProposalLoadAction
  | ProposalProposeSuccessAction
  | ProposalPopularAction;
