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
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { NotificationMessage } from 'Client/app/Notifications/Message';
import {
  NotificationWrapperStyle,
  NotificationContentStyle,
  NotificationCloseButtonStyle,
} from './style';
import { NotificationIcon } from '../Icon';

export const NotificationBanner = () => {
  const notificationRef = useRef(null);
  const dispatch = useDispatch();
  const { contentId, level, toDismiss, params } = useSelector(
    (state: StateRoot) => state.notifications.banner
  );
  const { dismissed } = useSelector((state: StateRoot) => state.notifications);
  const uniqueIdentifier = JSON.stringify({ contentId, params });
  const isDismissed = dismissed.find(
    notificationId => notificationId === uniqueIdentifier
  );

  const closeNotificationBanner = () => {
    if (toDismiss) {
      dispatch(dismissNotification(uniqueIdentifier));
      return dispatch(clearNotificationBanner());
    }

    return dispatch(clearNotificationBanner());
  };

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!contentId]);

  if (!contentId || isDismissed) return null;

  return (
    <NotificationWrapperStyle ref={notificationRef} role="banner" tabIndex={0}>
      <NotificationContentStyle as="div" className={level}>
        <NotificationIcon level={level} />
        <NotificationMessage
          name={contentId}
          params={params}
          close={closeNotificationBanner}
        />
      </NotificationContentStyle>
      <NotificationCloseButtonStyle
        aria-expanded="false"
        onClick={closeNotificationBanner}
      >
        <SvgDisconnect aria-hidden focusable="false" />
        <ScreenReaderItemStyle>
          {i18n.t('common.notifications.icons.close')}
        </ScreenReaderItemStyle>
      </NotificationCloseButtonStyle>
    </NotificationWrapperStyle>
  );
};
