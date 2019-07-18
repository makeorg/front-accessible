// @flow
import { useEffect, useState } from 'react';

export const useFieldValidation = (
  ref: React.MutableRefObject<any>,
  initialErrors: any
) => {
  const [errors, setErrors] = useState<any>(initialErrors);

  useEffect(() => {
    if (initialErrors.length) {
      return setErrors(true);
    }

    let hasErrors = errors;
    if (ref && ref.current.value.length) {
      hasErrors = !ref.current.checkValidity();
    }

    return setErrors(hasErrors);
  });

  return errors;
};
