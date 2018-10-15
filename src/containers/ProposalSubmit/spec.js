import { shallow } from 'enzyme';
import ProposalSubmitContainer, { doInputChange } from './index';

describe('Local state', () => {
  it('should update proposalLength and errors in state', () => {
    const proposalLength = 20;
    const isProposalValidLength = true;
    const state = { proposalLength: 0, isProposalValidLength: false, errors: ['foo'] };
    const newState = doInputChange(state, proposalLength, isProposalValidLength);

    expect(newState.proposalLength).to.equal(20);
    expect(newState.isProposalValidLength).to.equal(true);
    expect(newState.errors).to.be.an('array').that.is.empty;
  });
});
