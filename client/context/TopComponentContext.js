// @flow
import { createContext, type Context } from 'react';

export type TopComponentContextValueType = string;

export const TopComponentContextValue = {
  getProposalList: () => 'proposal-list',
  getPopularProposals: () => 'popular-proposals-showcase',
  getPopularProposalsTop: () => 'top-proposals',
  getControversialProposals: () => 'controversial-proposals-showcase',
  getTopideaProposalList: () => 'top-idea-proposal-list',
  getSearchResultProposalList: () => 'search-result-proposal-list',
  getOrganisationProposalList: () => 'organisation-proposal-list',
  getSingleProposal: () => 'single-proposal ',
  getSequenceProposal: () => 'sequence-proposal-card',
};

const defaultContext: TopComponentContextValueType = '';

export const TopComponentContext: Context<TopComponentContextValueType> = createContext(
  defaultContext
);
