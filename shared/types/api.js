/* @flow */
import { type ProposalType } from './proposal';

export type ApiServiceHeaders = {
  'x-make-country'?: string,
  'x-make-language'?: string,
  'x-make-question-id'?: string,
  'x-make-question'?: string,
};

export type ApiSearchProposalsResponseType = {
  total: number,
  results: ProposalType[],
};
