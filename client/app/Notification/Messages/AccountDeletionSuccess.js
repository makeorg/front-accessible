// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const AccountDeletionSuccessMessage = () => (
  <>{i18n.t('common.notifications.delete_account', { context: 'success' })}</>
);
