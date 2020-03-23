// @flow
import { type ProposalType } from 'Shared/types/proposal';

export type ConsultationType = {
  presentation: string,
  logo: string,
};

export type SequenceType = {
  id: string,
  proposals: ProposalType[],
};
