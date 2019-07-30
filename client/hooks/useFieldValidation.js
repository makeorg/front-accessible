// @flow
import { type ElementRef as TypeElementRef, useEffect, useState } from 'react';
import { type BasicInputStyle as TypeBasicInput } from 'Client/ui/Elements/Form/Styled/Input';
import { type TypeErrorObject } from 'Shared/types/api';
import { i18n } from 'Shared/i18n';

export const useIsFieldValid = (
  ref: TypeElementRef<TypeBasicInput>,
  initialError: TypeErrorObject
) => {
  const [isFieldValid, setFieldValidation] = useState<boolean>(true);
  let isInitialErrorEmpty = true;
  let isRefEmpty = true;
  let inputField;

  if (initialError) {
    isInitialErrorEmpty = !initialError.message;
  }

  if (ref.current) {
    inputField = ref.current;
    isRefEmpty = inputField.value.length === 0;
  }

  useEffect(() => {
    let validationStatus = true;
    if (!isRefEmpty) {
      validationStatus = inputField.checkValidity();
    }

    if (!isInitialErrorEmpty) {
      validationStatus = false;
    }

    if (!isRefEmpty && inputField.name.toLowerCase() === 'postalcode') {
      if (inputField.validity.patternMismatch) {
        inputField.setCustomValidity(
          i18n.t('common.form.messages.invalid_postal_code')
        );
        validationStatus = false;
      } else {
        inputField.setCustomValidity('');
        validationStatus = true;
      }
    }

    return setFieldValidation(validationStatus);
  });

  return isFieldValid;
};
