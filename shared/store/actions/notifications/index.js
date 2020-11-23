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

export const dismissNotification = (contentId: string) => ({
  type: DISMISS_NOTIFICATION,
  payload: { contentId },
});

export const displayNotificationBanner = (
  contentId: string,
  level?: string,
  params?: Object,
  toDismiss?: boolean
) => ({
  type: DISPLAY_NOTIFICATION_BANNER,
  payload: { contentId, level, toDismiss, params },
});

export const clearNotificationTip = () => ({
  type: CLOSE_NOTIFICATION_TIP,
});

export const displayNotificationTip = (
  contentId: string,
  level?: string,
  toDismiss?: boolean
) => ({
  type: DISPLAY_NOTIFICATION_TIP,
  payload: { contentId, level, toDismiss },
});
