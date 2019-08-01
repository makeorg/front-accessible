// @flow
import React from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { DefaultApiErrorMessage } from 'Client/ui/Elements/Form/Errors/Message';

export const emptyError: TypeErrorObject = {
  field: '',
  key: '',
  message: '',
};

export const defaultApiError: TypeErrorObject = {
  field: 'global',
  key: 'api_error',
  message: <DefaultApiErrorMessage />,
};
