// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const LogoutSuccessMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.logout', { context: 'success' })}
  </React.Fragment>
);
