/* @flow */

import { getBaitText } from 'Constants/proposal';
import * as ProposalHelper from './proposal';

describe('Proposal Helper', () => {
  const validProposalContent = "foobar";
  it('getProposalLength with content', () => {
    const proposalLength = ProposalHelper.getProposalLength(validProposalContent);
    expect(proposalLength).toBe(14);
  });

  it('getProposalLength with empty content', () => {
    const proposalLength = ProposalHelper.getProposalLength();
    expect(proposalLength).toBe(getBaitText().length);
  });

  it('getIsProposalValidLength with content with valid length', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength(15);
    expect(isProposalValidLength).toBe(true);
  });

  it('getIsProposalValidLength with content with length more than Max', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength(141);
    expect(isProposalValidLength).toBe(false);
  });

  it('getIsProposalValidLength with content with length minus than Min', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength(2);
    expect(isProposalValidLength).toBe(false);
  });

  it('getIsProposalValidLength without content', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength();
    expect(isProposalValidLength).toBe(false);
  });

  it('sortProposalsByVoted with empty array', () => {
    const sortedProposals = ProposalHelper.sortProposalsByVoted([]);
    expect(sortedProposals).toEqual([]);
  });

  it('sortProposalsByVoted with proposals', () => {
    const proposals = [
      {id: 'foo', votes: [{hasVoted: false}, {hasVoted: false}, {hasVoted: false}]},
      {id: 'bar', votes: [{hasVoted: false}, {hasVoted: false}, {hasVoted: false}]},
      {id: 'baz', votes: [{hasVoted: true}, {hasVoted: false}, {hasVoted: false}]}
    ];

    const sortedProposals = ProposalHelper.sortProposalsByVoted(proposals);
    expect(Array.isArray(sortedProposals)).toBe(true);
    expect(sortedProposals).toHaveLength(3);
    expect(sortedProposals[0].id).toBe('baz');
  });

  it('searchFirstUnvotedProposal with empty array', () => {
    const firstUnvotedProposal = ProposalHelper.searchFirstUnvotedProposal([]);
    expect(firstUnvotedProposal).toBeUndefined();
  });

  it('searchFirstUnvotedProposal with proposals', () => {
    const fooProposal = {id: 'foo', votes: [{hasVoted: true}, {hasVoted: false}, {hasVoted: false}]};
    const barProposal = {id: 'bar', votes: [{hasVoted: false}, {hasVoted: false}, {hasVoted: false}]};
    const bazProposal = {id: 'baz', votes: [{hasVoted: true}, {hasVoted: false}, {hasVoted: false}]};
    const proposals = [fooProposal, barProposal, bazProposal];

    const firstUnvotedProposal = ProposalHelper.searchFirstUnvotedProposal(proposals);
    expect(firstUnvotedProposal.id).toBe('bar');
  });
});
