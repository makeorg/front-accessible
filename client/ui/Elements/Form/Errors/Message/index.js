import React from 'react';
import { i18n } from 'Shared/i18n';

type WithLabelProps = {
  messageKey: string,
  field: string,
  labelKey: string,
};

export const MessageWithDynamicLabel = ({
  messageKey,
  field,
  labelKey,
}: WithLabelProps) => (
  <span
    dangerouslySetInnerHTML={{
      __html: i18n.t(messageKey, {
        context: 'dynamic',
        label: `<label for="${field}">${i18n
          .t(labelKey)
          .toLowerCase()}</label>`,
      }),
    }}
  />
);

export const LoginErrorMessage = () => (
  <span
    dangerouslySetInnerHTML={{
      __html: i18n.t('login.email_doesnot_exist', {
        emailLabel: `<label for="email">${i18n
          .t('common.form.label.email')
          .toLowerCase()}</label>`,
        passwordLabel: `<label for="password">${i18n
          .t('common.form.label.password')
          .toLowerCase()}</label>`,
      }),
    }}
  />
);

export const DefaultApiErrorMessage = () => (
  <>{i18n.t('common.form.messages.api_error')}</>
);
