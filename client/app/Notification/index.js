// @flow
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { SvgDisconnect } from 'Client/ui/Svg/elements';
import { clearNotification } from 'Shared/store/actions/notification';
import {
  notifcationContent,
  NOTIFICATION_LEVEL_INFORMATION,
} from 'Shared/constants/notification';
import {
  NotificationWrapperStyle,
  NotificationContentStyle,
  NotificationCloseButtonStyle,
} from './Styled';
import { NotificationIcon } from './Icon';

type Props = {
  /** Level of the Notification */
  level?: string,
  /** Content to render in Notification Component */
  contentType?: any,
  /** Method used to close Notification Component */
  closeNotification: () => void,
};

const NotificationComponent = ({
  level = NOTIFICATION_LEVEL_INFORMATION,
  contentType = undefined,
  closeNotification,
}: Props) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
  }, [contentType]);

  if (!contentType) return null;

  return (
    <NotificationWrapperStyle ref={notificationRef} role="banner" tabIndex={0}>
      <NotificationContentStyle className={level}>
        <NotificationIcon />
        {notifcationContent[contentType]}
      </NotificationContentStyle>
      <NotificationCloseButtonStyle
        aria-label={i18n.t('common.notifications.icons.close')}
        aria-expanded="false"
        onClick={closeNotification}
      >
        <SvgDisconnect aria-hidden />
      </NotificationCloseButtonStyle>
    </NotificationWrapperStyle>
  );
};

const mapStateToProps = state => {
  const { level, contentType } = state.notification;

  return { level, contentType };
};

const mapDispatchToProps = dispatch => ({
  closeNotification: () => {
    dispatch(clearNotification());
  },
});

export const Notification = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationComponent);
