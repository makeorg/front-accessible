export const getQualificationIndex = (qualificationKey, proposalId) => {
  if (proposalId === null) {
    return null;
  }

  return `${qualificationKey}_${proposalId}`;
};

export const doUpdateState = (prevState, qualification) => {
  const newQualifications = prevState.qualifications.map(
    (oldQualification) => {
      if (oldQualification.qualificationKey === qualification.qualificationKey) {
        return qualification;
      }

      return oldQualification;
    }
  );

  return {
    ...prevState,
    qualifications: newQualifications
  };
};
