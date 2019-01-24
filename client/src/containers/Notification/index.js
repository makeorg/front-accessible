/* @flow */

import * as React from 'react';
import { notificationConstants } from 'Shared/constants/notification';
import { AccountActivationSuccessComponent } from 'Components/UserAccount/Activation/Success';
import { AccountActivationFailureComponent } from 'Components/UserAccount/Activation/Failure';
import { PasswordRecoveryFailureComponent } from 'Components/UserAccount/PasswordRecovery/Failure';
import { NotificationComponent } from 'Components/Notification';
import { connect } from 'react-redux';
import { clearNotification } from 'Actions/notification';
import { selectNotificationContent } from './notification.selector';

const notifcationContent = {
  [notificationConstants.ACTIVATION_SUCCESS_CONTENT]: <AccountActivationSuccessComponent />,
  [notificationConstants.ACTIVATION_FAILURE_CONTENT]: <AccountActivationFailureComponent />,
  [notificationConstants.PASSWORD_RECOVERY_FAILURE_CONTENT]: <PasswordRecoveryFailureComponent />
};

type Props = {
  /** Content to render in Notification Component */
  contentType?: string,
  closeNotification: () => void
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
  contentType: undefined
};


const mapStateToProps = state => ({
  contentType: selectNotificationContent(state)
});

const mapDispatchToProps = dispatch => ({
  closeNotification: () => {
    dispatch(clearNotification());
  }
});

export const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationSwitch);
