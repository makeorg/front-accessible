import { initialStateDebug } from './initialState.debug';

describe('initialStateDebug', () => {
  it('question must not be defined', () => {
    expect(initialStateDebug.sequence.question).to.equal(undefined)
  })

  it('question must not be defined', () => {
    expect(initialStateDebug.sequence.votedProposalIds).to.be.eql([])
  })

  it('question must not be defined', () => {
    expect(initialStateDebug.user.passwordRecovery).to.equal(undefined)
  })
})