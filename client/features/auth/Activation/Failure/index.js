// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';

export const AccountActivationFailureComponent = () => (
  <p>{i18n.t('activate_account.bad_link')}</p>
);
