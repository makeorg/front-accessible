const readableError = {
  'email is not a valid email': 'Format d\'email non reconnu',
  'Password must be at least 8 characters': 'Votre mot de passe doit contenir au moins 8 caractères.'
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
