// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const RegisterSuccessMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.register', { context: 'success' })}
  </React.Fragment>
);
