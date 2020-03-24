// @flow

import { type ProposalType } from './proposal';

type ProposalLoadActionType = { type: 'PROPOSAL_LOAD', payload: ProposalType };
type ProposalProposeSuccessActionType = {
  type: 'PROPOSAL_PROPOSE_SUCCESS',
  payload: string,
};
type ProposalPopularActionType = {
  type: 'PROPOSAL_POPULAR_LOAD',
  payload: ProposalType[],
};

export type ProposalActionType =
  | ProposalLoadActionType
  | ProposalProposeSuccessActionType
  | ProposalPopularActionType;
