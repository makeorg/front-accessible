// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';

export const AccountActivationFailureMessage = () => (
  <React.Fragment>{i18n.t('common.notifications.bad_link')}</React.Fragment>
);
