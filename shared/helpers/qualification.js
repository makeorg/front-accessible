// @flow

export const getQualificationIndex = (
  qualificationKey: string,
  proposalId: string
) => {
  if (proposalId === null) {
    return null;
  }

  return `${qualificationKey}_${proposalId}`;
};
