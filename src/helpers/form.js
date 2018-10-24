import i18next from 'i18next';

const readableError = {
  'email is not a valid email': i18next.t('common.form.email_error'),
  'Password must be at least 8 characters': i18next.t('common.form.password_length_error')
};

export const errorTranslation = (apiError) => {
  if (readableError[apiError] === undefined) {
    return apiError;
  }

  return readableError[apiError];
};

export const fieldErrors = (field, errors) => {
  if (errors.length === 0) {
    return null;
  }

  const fieldError = errors.find(error => error.field === field);

  if (fieldError === undefined) {
    return null;
  }

  return (Object.keys(fieldError).length === 0) ? undefined : errorTranslation(fieldError.message);
};
