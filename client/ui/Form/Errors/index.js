// @flow
import React from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import {
  FormErrorsContainerStyle,
  FormErrorsIntroStyle,
  FormErrorsListItemStyle,
} from '../Styled';

type Props = {
  errors: TypeErrorObject[],
};

export const FormErrors = (props: Props) => {
  const { errors } = props;

  if (!errors || !errors.length) {
    return null;
  }

  return (
    <FormErrorsContainerStyle>
      <FormErrorsIntroStyle>
        {i18n.t('common.form.errors_notification')}
      </FormErrorsIntroStyle>
      <UnstyledListStyle>
        {errors.map(error => (
          <FormErrorsListItemStyle key={error.field}>
            {error.message}
          </FormErrorsListItemStyle>
        ))}
      </UnstyledListStyle>
    </FormErrorsContainerStyle>
  );
};
