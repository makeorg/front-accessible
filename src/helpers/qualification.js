export const getQualificationIndex = (qualificationKey, proposalId) => {
  if (proposalId === null) {
    return null;
  }

  return `${qualificationKey}_${proposalId}`;
};

export const getQualifiedKey = (qualifications, qualificationKey) => {
  const qualifiedKey = qualifications.filter(
    qualification => qualification.qualificationKey === qualificationKey
  ).length > 0;

  return qualifiedKey;
};

export const doUnqualifying = (prevState, qualificationKey) => {
  const userQualifications = prevState.userQualifications.filter(
    qualification => qualification.qualificationKey !== qualificationKey
  );

  return {
    ...prevState,
    userQualifications
  };
};

export const doQualifying = (prevState, qualifications) => ({
  userQualifications: [...prevState.userQualifications, qualifications]
});

export const findQualificationByKey = (qualifications, qualificationKey) => {
  qualifications.find(qualification => qualificationKey === qualification.qualificationKey);
};

export const getQualificationCount = (userQualifications, qualificationKey) => {
  const userQualification = findQualificationByKey(userQualifications, qualificationKey);
  if (userQualification != null) {
    return userQualification.count;
  }

  return '+1';
};
