// @flow

import React from 'react';
import i18next from 'i18next';

export const PasswordRecoveryFailureComponent = () => (
  <p>{i18next.t('reset_password.failure.bad_link')}</p>
);
