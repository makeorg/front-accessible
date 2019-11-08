// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { modalClose } from 'Shared/store/actions/modal';
import {
  MODAL_LOGIN,
  MODAL_REGISTER,
  MODAL_FORGOT_PASSWORD,
  MODAL_DEPARTMENT,
} from 'Shared/constants/modal';
import { Login } from 'Client/features/auth/Login';
import { Register } from 'Client/features/auth/Register';
import { PasswordForgot } from 'Client/features/auth/PasswordForgot';
import { DepartmentForm } from 'Client/custom/cdc/departmentCheck/DepartmentForm';
import { trackClickCloseModal } from 'Shared/services/Tracking';
import { ModalComponent } from './ModalComponent';

ReactModal.setAppElement('#app');

const modalContents = {
  [MODAL_LOGIN]: <Login />,
  [MODAL_REGISTER]: <Register />,
  [MODAL_FORGOT_PASSWORD]: <PasswordForgot />,
  [MODAL_DEPARTMENT]: <DepartmentForm />,
};

type Props = {
  isModalOpen: boolean,
  contentType: string,
  handleClose: () => {},
};

const ModalContainerSwitch = (props: Props) => {
  const { handleClose, isModalOpen, contentType } = props;

  const handleCloseWithTracking = () => {
    handleClose();
    trackClickCloseModal(contentType);
  };

  if (isModalOpen) {
    // @todo remove or refactor when CDC is over
    if (contentType === MODAL_DEPARTMENT) {
      return modalContents[contentType];
    }

    return (
      <ModalComponent
        isModalOpen={isModalOpen}
        handleClose={handleCloseWithTracking}
      >
        {modalContents[contentType]}
      </ModalComponent>
    );
  }

  return null;
};

const mapStateToProps = state => {
  const { isOpen, contentType } = state.modal;

  return {
    isModalOpen: isOpen,
    contentType,
  };
};

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(modalClose());
  },
});

export const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainerSwitch);
