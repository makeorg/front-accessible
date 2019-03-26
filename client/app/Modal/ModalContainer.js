/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { modalClose } from 'Shared/store/actions/modal';
import {
  MODAL_LOGIN_CONTENT,
  MODAL_REGISTER_CONTENT,
  MODAL_FORGOT_PASSWORD_CONTENT,
} from 'Shared/constants/modal';
import { Login } from 'Client/features/auth/Login';
import { Register } from 'Client/features/auth/Register';
import { PasswordForgot } from 'Client/features/auth/PasswordForgot';
import { ModalComponent } from './ModalComponent';

ReactModal.setAppElement('#app');

const modalContents = {
  [MODAL_LOGIN_CONTENT]: <Login />,
  [MODAL_REGISTER_CONTENT]: <Register />,
  [MODAL_FORGOT_PASSWORD_CONTENT]: <PasswordForgot />,
};

type Props = {
  isModalOpen: boolean,
  contentType: string,
  handleClose: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

const ModalContainerSwitch = (props: Props) => {
  const { handleClose, isModalOpen, contentType } = props;

  if (isModalOpen) {
    return (
      <ModalComponent isModalOpen={isModalOpen} handleClose={handleClose}>
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
