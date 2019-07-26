// @flow
import React, { useRef, useLayoutEffect } from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import {
  FormErrorsContainerStyle,
  FormErrorsIntroStyle,
  FormErrorsListItemStyle,
} from '../Styled/Errors';

type Props = {
  errors: TypeErrorObject[],
};

export const FormErrors = ({ errors }: Props) => {
  const formRef = useRef(null);

  useLayoutEffect(() => {
    if (formRef.current) {
      formRef.current.focus();
    }
  }, [errors]);

  if (!errors || !errors.length) {
    return null;
  }

  return (
    <FormErrorsContainerStyle ref={formRef} tabIndex={0}>
      <FormErrorsIntroStyle>
        {i18n.t('common.form.messages.errors_notification')}
      </FormErrorsIntroStyle>
      <UnstyledListStyle>
        {errors.map(error => (
          <FormErrorsListItemStyle key={`${error.field}_${error.key}`}>
            {error.message}
          </FormErrorsListItemStyle>
        ))}
      </UnstyledListStyle>
    </FormErrorsContainerStyle>
  );
};
