/* @flow */

import { getBaitText } from 'Constants/proposal';
import { getProposalLength, getIsProposalValidLength } from './proposal';

describe('Proposal Helper', () => {
  const validProposalContent = "foobar";
  it('getProposalLength with content', () => {
    const proposalLength = getProposalLength(validProposalContent);
    expect(proposalLength).to.equal(14);
  });

  it('getProposalLength with empty content', () => {
    const proposalLength = getProposalLength();
    expect(proposalLength).to.equal(getBaitText().length);
  });

  it('getIsProposalValidLength with content with valid length', () => {
    const isProposalValidLength = getIsProposalValidLength(15);
    expect(isProposalValidLength).to.be.true;
  });

  it('getIsProposalValidLength with content with length more than Max', () => {
    const isProposalValidLength = getIsProposalValidLength(141);
    expect(isProposalValidLength).to.be.false;
  });

  it('getIsProposalValidLength with content with length minus than Min', () => {
    const isProposalValidLength = getIsProposalValidLength(2);
    expect(isProposalValidLength).to.be.false;
  });

  it('getIsProposalValidLength without content', () => {
    const isProposalValidLength = getIsProposalValidLength();
    expect(isProposalValidLength).to.be.false;
  });
});
