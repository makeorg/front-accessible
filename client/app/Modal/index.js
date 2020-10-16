// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { modalClose } from 'Shared/store/actions/modal';
import {
  MODAL_LOGIN,
  MODAL_REGISTER,
  MODAL_FORGOT_PASSWORD,
  MODAL_PROPOSAL_SUCCESS,
  MODAL_COUNTRIES,
} from 'Shared/constants/modal';
import { type StateRoot } from 'Shared/store/types';
import { Login } from 'Client/features/auth/Login';
import { Register } from 'Client/features/auth/Register';
import { PasswordForgot } from 'Client/features/auth/PasswordForgot';
import { trackClickCloseModal } from 'Shared/services/Tracking';
import { ProposalSuccess } from 'Client/features/proposal/Submit/Success';
import { i18n } from 'Shared/i18n';
import { CloseButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgClose } from 'Client/ui/Svg/elements';
import { SwitchCountry } from '../SwitchCountry';

ReactModal.setAppElement('#app');

const modalContents = {
  [MODAL_LOGIN]: <Login />,
  [MODAL_REGISTER]: <Register />,
  [MODAL_FORGOT_PASSWORD]: <PasswordForgot />,
  [MODAL_PROPOSAL_SUCCESS]: <ProposalSuccess />,
  [MODAL_COUNTRIES]: <SwitchCountry />,
};

export const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, contentType, focusAfterClose } = useSelector(
    (state: StateRoot) => state.modal
  );

  const handleCloseWithTracking = () => {
    dispatch(modalClose());
    trackClickCloseModal(contentType);
  };

  if (isOpen) {
    return (
      <ReactModal
        isOpen={isOpen}
        overlayClassName="modal-overlay"
        className="modal-dialog"
        shouldReturnFocusAfterClose={focusAfterClose}
      >
        <CloseButtonStyle
          aria-label={i18n.t('modal.close')}
          aria-expanded="false"
          onClick={handleCloseWithTracking}
        >
          <SvgClose aria-hidden />
        </CloseButtonStyle>
        {modalContents[contentType]}
      </ReactModal>
    );
  }

  return null;
};
