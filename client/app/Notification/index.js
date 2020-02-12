// @flow
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { SvgDisconnect } from 'Client/ui/Svg/elements';
import { clearNotification } from 'Shared/store/actions/notification';
import { notifcationContent } from 'Shared/constants/notification';
import {
  NotificationWrapperStyle,
  NotificationContentStyle,
  NotificationCloseButtonStyle,
} from './style';
import { NotificationIcon } from './Icon';

export const Notification = () => {
  const notificationRef = useRef(null);
  const dispatch = useDispatch();
  const { level, contentType, replacements } = useSelector(
    (state: StateRoot) => state.notification
  );

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
        {notifcationContent[contentType](replacements)}
      </NotificationContentStyle>
      <NotificationCloseButtonStyle
        aria-label={i18n.t('common.notifications.icons.close')}
        aria-expanded="false"
        onClick={() => dispatch(clearNotification())}
      >
        <SvgDisconnect aria-hidden />
      </NotificationCloseButtonStyle>
    </NotificationWrapperStyle>
  );
};
