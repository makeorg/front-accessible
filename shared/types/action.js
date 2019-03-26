/* @flow */

import { type ProposalType } from './proposal';

type ProposalLoadAction = { type: 'PROPOSAL_LOAD', payload: ProposalType };
type ProposalProposeSuccessAction = {
  type: 'PROPOSAL_PROPOSE_SUCCESS',
  payload: string,
};

export type ProposalAction = ProposalLoadAction | ProposalProposeSuccessAction;
