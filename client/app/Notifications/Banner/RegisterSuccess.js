// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const RegisterSuccessMessage = () => (
  <>{i18n.t('common.notifications.register', { context: 'success' })}</>
);
