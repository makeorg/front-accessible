// @flow
import React, { type Node } from 'react';
import { i18n } from 'Shared/i18n';
import ReactModal from 'react-modal';
import { CloseButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgClose } from 'Client/ui/Svg/elements';

type Props = {
  isModalOpen: boolean,
  handleClose: Function,
  children: Node,
};

export const ModalComponent = ({
  isModalOpen,
  handleClose,
  children,
}: Props) => (
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
