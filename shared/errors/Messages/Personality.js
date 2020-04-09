// @flow
import React from 'react';
import { type ErrorObjectType } from 'Shared/types/api';
import { MessageWithDynamicLabel } from 'Client/ui/Elements/Form/Errors/Message';

export const updatePersonalityErrors: ErrorObjectType[] = [
  {
    field: 'firstname',
    key: 'mandatory',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.mandatory"
        field="firstName"
        labelKey="common.form.label.firstname"
      />
    ),
  },
];
