/* @flow */

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import ReactModal from 'react-modal';
import { CloseButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgClose } from 'Client/ui/Svg/elements';

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
      <CloseButtonStyle
        aria-label={i18n.t('modal.close')}
        aria-expanded="false"
        onClick={handleClose}
      >
        <SvgClose aria-hidden />
      </CloseButtonStyle>
      {children}
    </ReactModal>
  );
};
