// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

export const RegisterSuccessValidateMessage = (props: Object) => {
  const { replacements } = props;

  return (
    <React.Fragment>
      {i18n.t('common.notifications.register', {
        context: 'validate',
        ...replacements,
      })}
    </React.Fragment>
  );
};