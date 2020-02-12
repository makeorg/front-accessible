// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const AccountDeletionSuccessMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.delete_account', { context: 'success' })}
  </React.Fragment>
);
