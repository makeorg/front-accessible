// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const LoginSuccessMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.login', { context: 'success' })}
  </React.Fragment>
);
