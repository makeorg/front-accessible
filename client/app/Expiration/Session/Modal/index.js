// @flow
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { closeSessionExpirationModal } from 'Shared/store/actions/modal';
import { CloseButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgClose } from 'Client/ui/Svg/elements';
import { ThirdLevelTitleCircularStyle } from 'Client/ui/Elements/TitleElements';
import SessionExpiredPicture from 'Client/app/assets/images/session-expired.png';
import { trackDisplaySessionExpired } from 'Shared/services/Tracking';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ExpirationSessionModalContentStyle,
  ReloadButtonStyle,
  SessionExpiredPictureStyle,
  SessionExpiredParagraphStyle,
} from './style';

ReactModal.setAppElement('#app');

export const ExpirationSessionModal = () => {
  const dispatch = useDispatch();
  const showExpirationSession: string = useSelector(
    (state: StateRoot) => state.modal.showExpirationSession
  );

  useEffect(() => {
    if (showExpirationSession) {
      trackDisplaySessionExpired();
    }
  }, [showExpirationSession]);

  const handleClose = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(closeSessionExpirationModal());
    window.location.reload();
  };

  return (
    <ReactModal
      isOpen={showExpirationSession}
      overlayClassName="modal-overlay"
      className="modal-dialog"
      style={{ maxWidth: '350px' }}
      shouldCloseOnOverlayClick
    >
      <CloseButtonStyle aria-expanded="false" onClick={handleClose}>
        <SvgClose aria-hidden focusable="false" />
        <ScreenReaderItemStyle>{i18n.t('modal.close')}</ScreenReaderItemStyle>
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
