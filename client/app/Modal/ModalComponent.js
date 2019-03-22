/* @flow */

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalCloseButtonStyle } from './Styled';

type Props = {
  isModalOpen: boolean,
  handleClose: Function,
  children: React.Node,
};

export const ModalComponent = (props: Props) => {
  const { isModalOpen, handleClose, children } = props;
  return (
    <ReactModal
      isOpen={isModalOpen}
      overlayClassName="modal-overlay"
      className="modal-dialog"
    >
      <ModalCloseButtonStyle
        aria-label={i18n.t('modal.close')}
        aria-expanded="false"
        onClick={handleClose}
      >
        <FontAwesomeIcon aria-hidden icon={faTimes} />
      </ModalCloseButtonStyle>
      {children}
    </ReactModal>
  );
};
