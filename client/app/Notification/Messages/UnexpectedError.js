// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const UnexpectedErrorMessage = () => (
  <React.Fragment>
    {i18n.t('common.notifications.unexpected_error')}
  </React.Fragment>
);
