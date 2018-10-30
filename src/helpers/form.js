import i18next from 'i18next';


export const errorTranslation = (apiError) => {
  const translatedError = i18next.t(`common.form.${apiError}`);
  if (translatedError === undefined) {
    return apiError;
  }

  return translatedError;
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
