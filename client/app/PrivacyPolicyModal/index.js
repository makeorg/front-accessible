// @flow
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { CloseButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgClose } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { DataPolicy } from './DataPolicy';
import { RefusalConfirmation } from './RefusalConfirmation';

ReactModal.setAppElement('#app');

export const PrivacyPolicyModal = () => {
  const [confirmation, setConfirmation] = useState(false);

  const toggleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleClick = () => {
    toggleConfirmation();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      padding: null,
      border: null,
      zIndex: 10,
      overflow: 'hidden',
    },
  };

  return (
    <ReactModal
      isOpen
      style={customStyles}
      overlayClassName="modal-overlay"
      data-cy-container="cookie-modal"
    >
      <CloseButtonStyle
        aria-label={i18n.t('modal.close')}
        aria-expanded="false"
        onClick={handleClick}
        type="button"
      >
        <SvgClose aria-hidden focusable="false" />
      </CloseButtonStyle>
      {confirmation ? (
        <RefusalConfirmation toggleConfirmation={toggleConfirmation} />
      ) : (
        <DataPolicy />
      )}
    </ReactModal>
  );
};
