// @flow
import { type ProposalType } from './proposal';
import { type VoteType } from './vote';

export type OrganisationType = {
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
  website: string,
};

export type OrganisationVoteType = {
  proposal: ProposalType,
  vote: string,
  voteDate: string,
  voteDetails: VoteType,
};

export type OrganisationVotesType = {
  total: number,
  seed: number,
  results: OrganisationVoteType[],
};

export type OrganisationSoftType = {
  organisationId: string,
  organisationName: string,
  organisationSlug: string,
};

export type OrganisationsType = {
  total: number,
  results: OrganisationType[],
};
