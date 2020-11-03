// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';

type Props = {
  email: string,
};

export const RegisterSuccessValidateMessage = ({ email }: Props) => (
  <>
    {i18n.t('common.notifications.register', {
      context: 'validate',
      email,
    })}
  </>
);
