/* @flow */

import * as React from 'react';
import { notificationConstants } from 'Shared/constants/notification';
import { AccountActivationSuccessComponent } from 'Client/features/auth/Activation/Success';
import { AccountActivationFailureComponent } from 'Client/features/auth/Activation/Failure';
import { PasswordRecoveryFailureComponent } from 'Client/features/auth/PasswordRecovery/Failure';
import { connect } from 'react-redux';
import { clearNotification } from 'Shared/store/actions/notification';
import { selectNotificationContent } from 'Shared/store/selectors/notification.selector';
import { NotificationComponent } from './NotificationComponent';

const notifcationContent = {
  [notificationConstants.ACTIVATION_SUCCESS_CONTENT]: (
    <AccountActivationSuccessComponent />
  ),
  [notificationConstants.ACTIVATION_FAILURE_CONTENT]: (
    <AccountActivationFailureComponent />
  ),
  [notificationConstants.PASSWORD_RECOVERY_FAILURE_CONTENT]: (
    <PasswordRecoveryFailureComponent />
  ),
};

type Props = {
  /** Content to render in Notification Component */
  contentType?: string,
  closeNotification: () => void,
};

/**
 * Handles Sliding Pannel Business Logic
 */
const NotificationSwitch = (props: Props) => {
  const { contentType, closeNotification } = props;
  if (!contentType) return null;
  return (
    <NotificationComponent onClose={() => closeNotification()}>
      {notifcationContent[contentType]}
    </NotificationComponent>
  );
};

NotificationSwitch.defaultProps = {
  contentType: undefined,
};

const mapStateToProps = state => ({
  contentType: selectNotificationContent(state),
});

const mapDispatchToProps = dispatch => ({
  closeNotification: () => {
    dispatch(clearNotification());
  },
});

export const NotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSwitch);
