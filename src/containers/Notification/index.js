/* @flow */

import * as React from 'react';
import * as notificationConstants from 'Constants/notification';
import { AccountActivationSuccessComponent } from 'Components/UserAccount/Activation/Success';
import { AccountActivationFailureComponent } from 'Components/UserAccount/Activation/Failure';
import { NotificationComponent } from 'Components/Notification';

const notifcationContent = {
  [notificationConstants.ACTIVATION_SUCCESS_CONTENT]: <AccountActivationSuccessComponent />,
  [notificationConstants.ACTIVATION_FAILURE_CONTENT]: <AccountActivationFailureComponent />
};

type Props = {
  /** Content to render in Notification Component */
  contentType: string
};

/**
 * Handles Sliding Pannel Business Logic
 */
export const NotificationContainer = (props: Props) => {
  const { contentType } = props;
  return (
    <NotificationComponent>
      {notifcationContent[contentType]}
    </NotificationComponent>
  );
};
