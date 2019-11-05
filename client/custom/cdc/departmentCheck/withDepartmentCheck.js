import React from 'react';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { useCustomDataSelector } from 'Client/hooks/useCustomDataSelector';
import { useSelector, useDispatch } from 'react-redux';
import {
  modalShowDepartmentForm,
  modalClose,
} from 'Shared/store/actions/modal';
import { DEPARTMENT_STORAGE_KEY } from 'Shared/constants/ids';
import { CONSULTATION_DEPARTMENT_COMPULSORY } from 'Shared/constants/featureFlipping';

export const withDepartmentCheck = WrappedComponent => {
  return props => {
    const department = useCustomDataSelector(DEPARTMENT_STORAGE_KEY);
    const modalState = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const { question } = props;

    React.useEffect(() => {
      const isModalOpened =
        modalState.isOpen && modalState.contentType === 'MODAL_DEPARTMENT_FORM';
      const isFeatureActivated: boolean = checkIsFeatureActivated(
        CONSULTATION_DEPARTMENT_COMPULSORY,
        question.activeFeatures
      );
      if (!department && isFeatureActivated && !isModalOpened) {
        dispatch(modalShowDepartmentForm());
      }
    }, [modalState, department]);

    React.useEffect(() => {
      return function cleanup() {
        dispatch(modalClose());
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};
