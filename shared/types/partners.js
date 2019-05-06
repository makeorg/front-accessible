// @flow
import { type Proposal as TypePropsal, type VoteType } from './proposal';

export type Partner = {
  name: string,
  imageUrl: string,
  isFounder: boolean,
  profileUrl: string,
};

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
  voteDetails: VoteType,
};
