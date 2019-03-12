import { initialStateDebug } from './initialState.debug';

describe('initialStateDebug', () => {
  it('question must not be defined', () => {
    expect(initialStateDebug.sequence.questionId).toBeUndefined();
  });

  it('question must not be defined', () => {
    expect(initialStateDebug.sequence.votedProposalIds).toEqual([]);
  });

  it('question must not be defined', () => {
    expect(initialStateDebug.user.passwordRecovery).toBeUndefined();
  });
});
