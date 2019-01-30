export const initialState = {
  proposal: {
    isTyping: false,
    canSubmit: false,
    hasProposed: false,
    isCurrentSubmitSuccess: false,
    content: '',
    questionId: null,
    error: null
  },
  sequence: {
    isSequenceCollapsed: false,
    firstProposal: undefined,
    question: undefined,
    questionConfiguration: undefined,
    votedProposalIds: []
  },
  notification: {
    contentType: undefined
  },
  user: {
    passwordRecovery: {
      newPassword: undefined,
      resetToken: undefined,
      userId: undefined,
      errorMessage: undefined,
      error: false,
      updated: false
    }
  }
};
