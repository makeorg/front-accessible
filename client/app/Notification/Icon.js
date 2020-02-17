// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { SvgCheck, SvgInfos, SvgAlert } from 'Client/ui/Svg/elements';
import {
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
  NOTIFICATION_LEVEL_ERROR,
  NOTIFICATION_LEVEL_ALERT,
} from 'Shared/constants/notification';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { SvgCheckStyle, SvgIconStyle } from './style';

export const NotificationIcon = () => {
  /** Level of the Notification */
  const { level } = useSelector((state: StateRoot) => state.notification);

  switch (level) {
    case NOTIFICATION_LEVEL_INFORMATION:
      return (
        <SvgInfos
          aria-label={i18n.t('common.notifications.icons.information')}
          style={SvgIconStyle}
        />
      );
    case NOTIFICATION_LEVEL_SUCCESS:
      return (
        <SvgCheck
          aria-label={i18n.t('common.notifications.icons.success')}
          style={SvgCheckStyle}
        />
      );
    case NOTIFICATION_LEVEL_ERROR:
      return (
        <SvgAlert
          aria-label={i18n.t('common.notifications.icons.error')}
          style={SvgIconStyle}
        />
      );
    case NOTIFICATION_LEVEL_ALERT:
      return (
        <SvgAlert
          aria-label={i18n.t('common.notifications.icons.alert')}
          style={SvgIconStyle}
        />
      );

    default:
      return null;
  }
};
