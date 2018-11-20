/* @flow */

export const getQualificationIndex = (qualificationKey: string, proposalId: string) => {
  if (proposalId === null) {
    return null;
  }

  return `${qualificationKey}_${proposalId}`;
};

export const doUpdateState = (prevState: Object, qualification: Object) => {
  const newQualifications = prevState.qualifications.map((oldQualification) => {
    if (oldQualification.qualificationKey === qualification.qualificationKey) {
      return qualification;
    }

    return oldQualification;
  });

  return {
    ...prevState,
    qualifications: newQualifications
  };
};
