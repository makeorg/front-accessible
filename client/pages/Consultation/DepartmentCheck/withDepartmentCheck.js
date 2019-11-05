import React from 'react';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { useCustomDataSelector } from 'Client/hooks/useCustomDataSelector';
import { useSelector, useDispatch } from 'react-redux';
import {
  modalShowDepartmentForm,
  modalClose,
} from 'Shared/store/actions/modal';
import { DEPARTMENT_STORAGE_KEY } from 'Shared/constants/ids';

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
        'consultation-department-compulsory',
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
