/* @flow */

import i18next from 'i18next';
import type { ErrorObject } from 'Types/form';


export const errorTranslation = (apiError: string) => {
  if (/Email\s(.+)\salready exist/.test(apiError)) {
    return i18next.t('common.form.email_already_exist');
  }

  const translatedError = i18next.t(`common.form.${apiError}`);
  if (translatedError === undefined) {
    return apiError;
  }

  return translatedError;
};

export const fieldErrors = (field: string, errors: Array<ErrorObject>) => {
  if (errors.length === 0) {
    return null;
  }

  const fieldError = errors.find(error => error.field === field);

  if (fieldError === undefined) {
    return null;
  }

  return (Object.keys(fieldError).length === 0) ? undefined : errorTranslation(fieldError.message);
};
