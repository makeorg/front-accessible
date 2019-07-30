// @flow
import { type TypeErrorObject } from 'Shared/types/api';
import { i18n } from 'Shared/i18n';

export const emptyError: TypeErrorObject = {
  field: '',
  key: '',
  message: '',
};

export const defaultApiError: TypeErrorObject = {
  field: 'global',
  key: 'api_error',
  message: i18n.t('common.form.messages.api_error'),
};
