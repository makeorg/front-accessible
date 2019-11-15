// @flow
import {
  type Proposal as TypePropsal,
  type Vote as TypeVote,
} from './proposal';

export type Organisation = {
  avatarUrl: string,
  country: string,
  description: string,
  language: string,
  organisationId: string,
  organisationName: string,
  proposalsCount: number,
  publicProfile: boolean,
  slug: string,
  votesCount: number,
};

export type OrganisationVote = {
  proposal: TypePropsal,
  vote: string,
  voteDate: string,
  voteDetails: TypeVote,
};

export type OrganisationSoft = {
  organisationId: string,
  organisationName: string,
  organisationSlug: string,
};
