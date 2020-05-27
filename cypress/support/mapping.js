

const sequenceButtons = {
  "intro card start button": 'start-sequence',
  "next proposal": 'next-proposal',
  "back to proposals": 'back-to-proposals',
  "back to proposals arrow": "back-to-proposals-arrow",
  "push proposal next": 'push-proposal-next',
  "skip sign up": 'skip-sign-up',
  "previous card": 'previous-card',
  "proposal submit": "proposal-submit",
}

const buttonIdentifiers = {
  ...sequenceButtons,
}

export const getIdentifierButtonByName = (buttonName) => {
  return buttonIdentifiers[buttonName] ? buttonIdentifiers[buttonName] : buttonName;
}
