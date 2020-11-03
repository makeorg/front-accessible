// @flow
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { SvgDisconnect } from 'Client/ui/Svg/elements';
import {
  clearNotificationBanner,
  dismissNotification,
} from 'Shared/store/actions/notifications';
import {
  NotificationWrapperStyle,
  NotificationContentStyle,
  NotificationCloseButtonStyle,
} from './style';
import { NotificationIcon } from '../Icon';

export const NotificationBanner = () => {
  const notificationRef = useRef(null);
  const dispatch = useDispatch();
  const { id, content, level, toDismiss } = useSelector(
    (state: StateRoot) => state.notifications.banner
  );
  const { dismissed } = useSelector((state: StateRoot) => state.notifications);
  const isDismissed = dismissed.find(notificationId => notificationId === id);

  const closeNotificationBanner = () => {
    if (toDismiss) {
      dispatch(dismissNotification(id));
      return dispatch(clearNotificationBanner());
    }

    return dispatch(clearNotificationBanner());
  };

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!content]);

  if (!content || isDismissed) return null;

  return (
    <NotificationWrapperStyle ref={notificationRef} role="banner" tabIndex={0}>
      <NotificationContentStyle as="div" className={level}>
        <NotificationIcon level={level} />
        {content}
      </NotificationContentStyle>
      <NotificationCloseButtonStyle
        aria-label={i18n.t('common.notifications.icons.close')}
        aria-expanded="false"
        onClick={closeNotificationBanner}
      >
        <SvgDisconnect aria-hidden />
      </NotificationCloseButtonStyle>
    </NotificationWrapperStyle>
  );
};
