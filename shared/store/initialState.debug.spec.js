import { initialStateDebug } from './initialState.debug';

describe('initialStateDebug', () => {
  it('questionSlug must not be defined', () => {
    expect(initialStateDebug.currentQuestion).toEqual('');
  });

  it('votedProposalIds must not be defined', () => {
    expect(initialStateDebug.sequence.votedProposalIds).toEqual({});
  });

  it('cards must not be defined', () => {
    expect(initialStateDebug.sequence.cards).toEqual([]);
  });

  it('passwordRecovery must not be defined', () => {
    expect(initialStateDebug.user.passwordRecovery).toBeUndefined();
  });
});
