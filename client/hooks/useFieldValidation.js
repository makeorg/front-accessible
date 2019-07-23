// @flow
import { type ElementRef as TypeElementRef, useEffect, useState } from 'react';
import { type BasicInputStyle as TypeBasicInput } from 'Client/ui/Elements/Form/Styled/Input';
import { type TypeErrorObject } from 'Shared/types/api';

export const useIsFieldValid = (
  ref: TypeElementRef<TypeBasicInput>,
  initialError: TypeErrorObject
) => {
  const [isFieldValid, setFieldValidation] = useState<boolean>(true);
  let isInitialErrorEmpty = true;
  let isRefEmpty = true;

  if (initialError) {
    isInitialErrorEmpty = !initialError.message;
  }

  if (ref.current) {
    isRefEmpty = ref.current.value.length === 0;
  }

  useEffect(() => {
    let validationStatus = true;
    if (!isRefEmpty) {
      validationStatus = ref.current.checkValidity();
    }
    if (!isInitialErrorEmpty) {
      validationStatus = false;
    }

    return setFieldValidation(validationStatus);
  });

  return isFieldValid;
};
