// @flow
import React from 'react';
import { connect } from 'react-redux';
import { SvgCheck } from 'Client/ui/Svg/elements';
import {
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
} from 'Shared/constants/notification';
import { SvgCheckStyle } from '../Styled';

type Props = {
  /** Level of the Notification */
  level?: string,
};

const NotificationIconComponent = ({
  level = NOTIFICATION_LEVEL_INFORMATION,
}: Props) => {
  if (level === NOTIFICATION_LEVEL_SUCCESS) {
    return <SvgCheck style={SvgCheckStyle} />;
  }

  return null;
};

const mapStateToProps = state => {
  const { level } = state.notification;

  return { level };
};

export const NotificationIcon = connect(mapStateToProps)(
  NotificationIconComponent
);
