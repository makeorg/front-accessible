/* @flow */

import { getBaitText } from 'Constants/proposal';
import * as ProposalHelper from './proposal';

describe('Proposal Helper', () => {
  const validProposalContent = "foobar";
  it('getProposalLength with content', () => {
    const proposalLength = ProposalHelper.getProposalLength(validProposalContent);
    expect(proposalLength).to.equal(14);
  });

  it('getProposalLength with empty content', () => {
    const proposalLength = ProposalHelper.getProposalLength();
    expect(proposalLength).to.equal(getBaitText().length);
  });

  it('getIsProposalValidLength with content with valid length', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength(15);
    expect(isProposalValidLength).to.be.true;
  });

  it('getIsProposalValidLength with content with length more than Max', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength(141);
    expect(isProposalValidLength).to.be.false;
  });

  it('getIsProposalValidLength with content with length minus than Min', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength(2);
    expect(isProposalValidLength).to.be.false;
  });

  it('getIsProposalValidLength without content', () => {
    const isProposalValidLength = ProposalHelper.getIsProposalValidLength();
    expect(isProposalValidLength).to.be.false;
  });

  it('sortProposalsByVoted with empty array', () => {
    const sortedProposals = ProposalHelper.sortProposalsByVoted([]);
    expect(sortedProposals).to.be.an('array').that.is.empty;
  });

  it('sortProposalsByVoted with proposals', () => {
    const proposals = [
      {id: 'foo', votes: [{hasVoted: false}, {hasVoted: false}, {hasVoted: false}]},
      {id: 'bar', votes: [{hasVoted: false}, {hasVoted: false}, {hasVoted: false}]},
      {id: 'baz', votes: [{hasVoted: true}, {hasVoted: false}, {hasVoted: false}]}
    ];

    const sortedProposals = ProposalHelper.sortProposalsByVoted(proposals);
    expect(sortedProposals).to.be.an('array');
    expect(sortedProposals).to.have.lengthOf(3);
    expect(sortedProposals[0].id).to.equal('baz');
  });

  it('searchFirstNoVotedProposal with empty array', () => {
    const firstNoVotedProposal = ProposalHelper.searchFirstNoVotedProposal([]);
    expect(firstNoVotedProposal).to.be.undefined;
  });

  it('searchFirstNoVotedProposal with proposals', () => {
    const fooProposal = {id: 'foo', votes: [{hasVoted: true}, {hasVoted: false}, {hasVoted: false}]};
    const barProposal = {id: 'bar', votes: [{hasVoted: false}, {hasVoted: false}, {hasVoted: false}]};
    const bazProposal = {id: 'baz', votes: [{hasVoted: true}, {hasVoted: false}, {hasVoted: false}]};
    const proposals = [fooProposal, barProposal, bazProposal];

    const firstNoVotedProposal = ProposalHelper.searchFirstNoVotedProposal(proposals);
    expect(firstNoVotedProposal.id).to.equal('bar');
  });
});
