// @flow
import React from 'react';
import { type ErrorObjectType } from 'Shared/types/api';
import { DefaultApiErrorMessage } from 'Client/ui/Elements/Form/Errors/Message';

export const emptyError: ErrorObjectType = {
  field: '',
  key: '',
  message: '',
};

export const defaultApiError: ErrorObjectType = {
  field: 'global',
  key: 'api_error',
  message: <DefaultApiErrorMessage />,
};
