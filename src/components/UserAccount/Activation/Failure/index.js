// @flow

import React from 'react';
import i18next from 'i18next';

export const AccountActivationFailureComponent = () => (
  <p>{i18next.t('activate_account.bad_link')}</p>
);
