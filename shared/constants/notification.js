// @flow
import React from 'react';
import { AccountActivationSuccessMessage } from 'Client/app/Notification/Messages/Authentification/AccountActivationSuccess';
import { AccountActivationFailureMessage } from 'Client/app/Notification/Messages/Authentification/AccountActivationFailure';
import { PasswordRecoveryFailureMessage } from 'Client/features/auth/PasswordRecovery/Failure';
import { RegisterSuccessMessage } from 'Client/app/Notification/Messages/Authentification/RegisterSuccess';
import { LoginSuccessMessage } from 'Client/app/Notification/Messages/Authentification/LoginSuccess';
import { LogoutSuccessMessage } from 'Client/app/Notification/Messages/Authentification/LogoutSuccess';
import { AccountDeletionSuccessMessage } from 'Client/app/Notification/Messages/Authentification/AccountDeletionSuccess';
import { SessionExpiredMessage } from 'Client/app/Notification/Messages/SessionExpired';

export const ACTIVATION_SUCCESS_MESSAGE: string = 'ACTIVATION_SUCCESS_MESSAGE';
export const ACTIVATION_FAILURE_MESSAGE: string = 'ACTIVATION_FAILURE_MESSAGE';
export const ACCOUNT_DELETION_SUCCESS_MESSAGE: string =
  'ACCOUNT_DELETION_SUCCESS_MESSAGE';
export const PASSWORD_RECOVERY_FAILURE_MESSAGE: string =
  'PASSWORD_RECOVERY_FAILURE_MESSAGE';
export const LOGIN_SUCCESS_MESSAGE: string = 'LOGIN_SUCCESS_MESSAGE';
export const LOGOUT_SUCCESS_MESSAGE: string = 'LOGOUT_SUCCESS_MESSAGE';
export const REGISTER_SUCCESS_MESSAGE: string = 'REGISTER_SUCCESS_MESSAGE';
export const SESSION_EXPIRED_MESSAGE: string = 'SESSION_EXPIRED_MESSAGE';

export const notifcationContent = {
  [ACTIVATION_SUCCESS_MESSAGE]: <AccountActivationSuccessMessage />,
  [ACTIVATION_FAILURE_MESSAGE]: <AccountActivationFailureMessage />,
  [ACCOUNT_DELETION_SUCCESS_MESSAGE]: <AccountDeletionSuccessMessage />,
  [PASSWORD_RECOVERY_FAILURE_MESSAGE]: <PasswordRecoveryFailureMessage />,
  [LOGIN_SUCCESS_MESSAGE]: <LoginSuccessMessage />,
  [LOGOUT_SUCCESS_MESSAGE]: <LogoutSuccessMessage />,
  [REGISTER_SUCCESS_MESSAGE]: <RegisterSuccessMessage />,
  [SESSION_EXPIRED_MESSAGE]: <SessionExpiredMessage />,
};

export const NOTIFICATION_LEVEL_INFORMATION: string = 'information';
export const NOTIFICATION_LEVEL_SUCCESS: string = 'success';
export const NOTIFICATION_LEVEL_ERROR: string = 'error';
