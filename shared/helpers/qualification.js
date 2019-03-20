/* @flow */

export const getQualificationIndex = (
  qualificationKey: string,
  proposalId: string
) => {
  if (proposalId === null) {
    return null;
  }

  return `${qualificationKey}_${proposalId}`;
};

export const startPendingState = (
  prevState: Object,
  pendingQualificationKey: string
): Object => {
  return {
    ...prevState,
    pendingQualificationKeys: prevState.pendingQualificationKeys.add(
      pendingQualificationKey
    ),
  };
};

export const finishPendingState = (
  prevState: Object,
  pendingQualificationKey: string
): Object => {
  const newPendingQualificationKeys = prevState.pendingQualificationKeys;
  newPendingQualificationKeys.delete(pendingQualificationKey);
  return {
    ...prevState,
    pendingQualificationKeys: newPendingQualificationKeys,
  };
};

export const doUpdateState = (prevState: Object, qualification: Object) => {
  const newQualifications = prevState.qualifications.map(oldQualification => {
    if (oldQualification.qualificationKey === qualification.qualificationKey) {
      return qualification;
    }

    return oldQualification;
  });

  return finishPendingState(
    {
      ...prevState,
      qualifications: newQualifications,
    },
    qualification.qualificationKey
  );
};
