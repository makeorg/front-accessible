// @flow
import { type Proposal as TypeProposal } from 'Shared/types/proposal';

export type ConsultationType = {
  presentation: string,
  logo: string,
};

export type SequenceType = {
  id: string,
  proposals: TypeProposal[],
};
