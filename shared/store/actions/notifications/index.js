import {
  CLOSE_NOTIFICATION_BANNER,
  DISMISS_NOTIFICATION,
  DISPLAY_NOTIFICATION_BANNER,
  CLOSE_NOTIFICATION_TIP,
  DISPLAY_NOTIFICATION_TIP,
} from 'Shared/store/actionTypes';

export const clearNotificationBanner = () => ({
  type: CLOSE_NOTIFICATION_BANNER,
});

export const dismissNotification = (id: string) => ({
  type: DISMISS_NOTIFICATION,
  payload: { id },
});

export const displayNotificationBanner = (
  id: string,
  content: any,
  level?: string,
  toDismiss?: boolean
) => ({
  type: DISPLAY_NOTIFICATION_BANNER,
  payload: { id, content, level, toDismiss },
});

export const clearNotificationTip = () => ({
  type: CLOSE_NOTIFICATION_TIP,
});

export const displayNotificationTip = (
  id: string,
  content: any,
  level?: string,
  toDismiss?: boolean
) => ({
  type: DISPLAY_NOTIFICATION_TIP,
  payload: { id, content, level, toDismiss },
});
