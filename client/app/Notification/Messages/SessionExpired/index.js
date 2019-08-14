// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const SessionExpiredMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.session_expired')}
  </React.Fragment>
);
