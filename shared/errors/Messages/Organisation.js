// @flow
import React from 'react';
import { type ErrorObjectType } from 'Shared/types/api';
import { MessageWithDynamicLabel } from 'Client/ui/Elements/Form/Errors/Message';

export const updateOrganisationErrors: ErrorObjectType[] = [
  {
    field: 'organisationname',
    key: 'mandatory',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.mandatory"
        field="organisationName"
        labelKey="common.form.label.organisation"
      />
    ),
  },
];
