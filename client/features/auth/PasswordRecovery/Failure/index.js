// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';

export const PasswordRecoveryFailureMessage = () => (
  <React.Fragment>{i18n.t('reset_password.failure.bad_link')}</React.Fragment>
);
