// @flow
import { type Proposal as TypeProposal } from './proposal';
import { type Question as TypeQuestion } from './question';
import { type Organisation as TypeOrganisation } from './organisation';

export type ApiServiceHeaders = {
  'x-make-country'?: string,
  'x-make-language'?: string,
  'x-make-question-id'?: string,
  'x-make-question'?: string,
  'x-make-custom-data'?: String,
};

export type ApiSearchProposalsResponseType = {
  total: number,
  seed: number,
  results: TypeProposal[],
};

export type ApiSearchQuestionsResponseType = {
  total: number,
  results: TypeQuestion[],
};

export type ApiSearchOrganisationsResponseType = {
  total: number,
  results: TypeOrganisation[],
};

export type TypeErrorObject = {
  field: string,
  key: string,
  message: any,
};
