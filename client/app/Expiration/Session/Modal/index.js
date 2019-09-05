// @flow

import * as React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { closeSessionExpirationModal } from 'Shared/store/actions/modal';
import { CloseButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgClose } from 'Client/ui/Svg/elements';
import { ThirdLevelTitleCircularStyle } from 'Client/ui/Elements/TitleElements';
import SessionExpiredPicture from 'Client/app/assets/images/session-expired.png';
import {
  ExpirationSessionModalContentStyle,
  ReloadButtonStyle,
  SessionExpiredPictureStyle,
  SessionExpiredParagraphStyle,
} from './Styled';

ReactModal.setAppElement('#app');

type Props = {
  showExpirationSession: string,
  handleClose: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

const ExpirationSessionModalHandler = ({
  showExpirationSession,
  handleClose,
}: Props) => {
  return (
    <ReactModal
      isOpen={showExpirationSession}
      overlayClassName="modal-overlay"
      className="modal-dialog"
      style={{ maxWidth: '350px' }}
      shouldCloseOnOverlayClick
    >
      <CloseButtonStyle
        aria-label={i18n.t('modal.close')}
        aria-expanded="false"
        onClick={handleClose}
      >
        <SvgClose aria-hidden />
      </CloseButtonStyle>
      <ExpirationSessionModalContentStyle>
        <SessionExpiredPictureStyle src={SessionExpiredPicture} alt="" />
        <ThirdLevelTitleCircularStyle>
          {i18n.t('common.notifications.session_expired.title')}
        </ThirdLevelTitleCircularStyle>
        <SessionExpiredParagraphStyle>
          {i18n.t('common.notifications.session_expired.description')}
        </SessionExpiredParagraphStyle>
        <ReloadButtonStyle onClick={handleClose}>
          {i18n.t('common.notifications.session_expired.button_text')}
        </ReloadButtonStyle>
      </ExpirationSessionModalContentStyle>
    </ReactModal>
  );
};

const mapStateToProps = state => {
  const { showExpirationSession } = state.modal;

  return {
    showExpirationSession,
  };
};

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(closeSessionExpirationModal());
    window.location.reload();
  },
});

export const ExpirationSessionModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpirationSessionModalHandler);
