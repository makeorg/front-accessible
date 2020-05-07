// @flow
import React, { useState } from 'react';
import {
  getFieldError,
  transformFieldValueToProfileValue,
  transformProfileToFormData,
} from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { i18n } from 'Shared/i18n';
import { NameFiledIcon } from 'Shared/constants/icons';
import { type OrganisationProfileType } from 'Shared/types/organisation';
import { type ErrorObjectType } from 'Shared/types/api';
import { CommonProfileFields } from './Common';

type ProfileFormProps = {
  profile: OrganisationProfileType,
  handleChange: (name: string, value: string | number | null) => void,
  errors: ErrorObjectType[],
};

export const OrganisationForm = ({
  profile,
  handleChange,
  errors,
}: ProfileFormProps) => {
  const organisationNameError = getFieldError('organisationname', errors);

  const [values, setValues] = useState<OrganisationProfileType>(
    transformProfileToFormData(profile)
  );

  const onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    handleChange(name, transformFieldValueToProfileValue(value));
  };

  const { organisationName } = values;

  return (
    <>
      <UntypedInput
        type="text"
        name="organisationName"
        icon={NameFiledIcon}
        value={organisationName}
        label={i18n.t('common.form.label.organisation')}
        error={organisationNameError}
        required
        handleChange={onChange}
      />
      <CommonProfileFields
        profile={values}
        onChange={onChange}
        errors={errors}
      />
    </>
  );
};
