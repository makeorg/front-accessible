// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const NetworkErrorMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.network_error')}
  </React.Fragment>
);
