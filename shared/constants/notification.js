// @flow
import React from 'react';
import { AccountActivationSuccessMessage } from 'Client/app/Notification/Messages/AccountActivationSuccess';
import { AccountActivationFailureMessage } from 'Client/app/Notification/Messages/AccountActivationFailure';
import { PasswordRecoveryFailureMessage } from 'Client/features/auth/PasswordRecovery/Failure';
import { RegisterSuccessMessage } from 'Client/app/Notification/Messages/RegisterSuccess';
import { LoginSuccessMessage } from 'Client/app/Notification/Messages/LoginSuccess';
import { LogoutSuccessMessage } from 'Client/app/Notification/Messages/LogoutSuccess';
import { AccountDeletionSuccessMessage } from 'Client/app/Notification/Messages/AccountDeletionSuccess';
import { SecureExpiredMessage } from 'Client/app/Notification/Messages/SecureExpired';
import { RegisterSuccessValidateMessage } from 'Client/app/Notification/Messages/RegisterSuccessValidate';
import { UnexpectedErrorMessage } from 'Client/app/Notification/Messages/UnexpectedError';
import { NetworkErrorMessage } from 'Client/app/Notification/Messages/NetworkError';
import { VoteOnlyMessage } from 'Client/app/Notification/Messages/VoteOnly';

export const ACTIVATION_SUCCESS_MESSAGE: string = 'ACTIVATION_SUCCESS_MESSAGE';
export const ACTIVATION_FAILURE_MESSAGE: string = 'ACTIVATION_FAILURE_MESSAGE';
export const ACCOUNT_DELETION_SUCCESS_MESSAGE: string =
  'ACCOUNT_DELETION_SUCCESS_MESSAGE';
export const PASSWORD_RECOVERY_FAILURE_MESSAGE: string =
  'PASSWORD_RECOVERY_FAILURE_MESSAGE';
export const LOGIN_SUCCESS_MESSAGE: string = 'LOGIN_SUCCESS_MESSAGE';
export const LOGOUT_SUCCESS_MESSAGE: string = 'LOGOUT_SUCCESS_MESSAGE';
export const REGISTER_SUCCESS_MESSAGE: string = 'REGISTER_SUCCESS_MESSAGE';
export const REGISTER_SUCCESS_VALIDATE_MESSAGE: string =
  'REGISTER_SUCCESS_VALIDATE_MESSAGE';
export const SESSION_EXPIRED_MESSAGE: string = 'SESSION_EXPIRED_MESSAGE';
export const SECURE_EXPIRED_MESSAGE: string = 'SECURE_EXPIRED_MESSAGE';
export const UNEXPECTED_ERROR_MESSAGE: string = 'UNEXPECTED_ERROR_MESSAGE';
export const NETWORK_ERROR_MESSAGE: string = 'NETWORK_ERROR_MESSAGE';
export const VOTE_ONLY_MESSAGE: string = 'VOTE_ONLY_MESSAGE';

const createNotification = component => replacements =>
  React.createElement(component, { replacements });

export const notifcationContent = {
  [ACTIVATION_SUCCESS_MESSAGE]: createNotification(
    AccountActivationSuccessMessage
  ),
  [ACTIVATION_FAILURE_MESSAGE]: createNotification(
    AccountActivationFailureMessage
  ),
  [ACCOUNT_DELETION_SUCCESS_MESSAGE]: createNotification(
    AccountDeletionSuccessMessage
  ),
  [PASSWORD_RECOVERY_FAILURE_MESSAGE]: createNotification(
    PasswordRecoveryFailureMessage
  ),
  [LOGIN_SUCCESS_MESSAGE]: createNotification(LoginSuccessMessage),
  [LOGOUT_SUCCESS_MESSAGE]: createNotification(LogoutSuccessMessage),
  [REGISTER_SUCCESS_MESSAGE]: createNotification(RegisterSuccessMessage),
  [REGISTER_SUCCESS_VALIDATE_MESSAGE]: createNotification(
    RegisterSuccessValidateMessage
  ),
  [SECURE_EXPIRED_MESSAGE]: () => <SecureExpiredMessage />,
  [UNEXPECTED_ERROR_MESSAGE]: createNotification(UnexpectedErrorMessage),
  [NETWORK_ERROR_MESSAGE]: createNotification(NetworkErrorMessage),
  [VOTE_ONLY_MESSAGE]: () => <VoteOnlyMessage />,
};

export const NOTIFICATION_LEVEL_INFORMATION: string = 'information';
export const NOTIFICATION_LEVEL_SUCCESS: string = 'success';
export const NOTIFICATION_LEVEL_ERROR: string = 'error';
export const NOTIFICATION_LEVEL_ALERT: string = 'alert';
