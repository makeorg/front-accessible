import { getProposalLength, getIsProposalValidLength } from './proposal';
import { PROPOSAL_BAIT_TEXT } from '../constants/proposal';

describe('proposal Helper', () => {
  const validProposalContent = "foobar";
  it('getProposalLength with content', () => {
    const proposalLength = getProposalLength(validProposalContent);
    expect(proposalLength).to.equal(14);
  });

  it('getProposalLength with empty content', () => {
    const proposalLength = getProposalLength();
    expect(proposalLength).to.equal(PROPOSAL_BAIT_TEXT.length);
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
