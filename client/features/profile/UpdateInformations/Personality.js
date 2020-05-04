// @flow
import React, { useState } from 'react';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { i18n } from 'Shared/i18n';
import { NameFiledIcon } from 'Shared/constants/icons';
import { type PersonalityProfileType } from 'Shared/types/personality';
import {
  getFieldError,
  transformFieldValueToProfileValue,
  transformProfileToFormData,
} from 'Shared/helpers/form';
import { type ErrorObjectType } from 'Shared/types/api';
import { CommonProfileFields } from './Common';

type ProfileFormProps = {
  profile: PersonalityProfileType,
  handleChange: (name: string, value: string | number | null) => void,
  errors: ErrorObjectType[],
};

export const PersonalityForm = ({
  profile,
  handleChange,
  errors,
}: ProfileFormProps) => {
  const firstNameError = getFieldError('firstname', errors);

  const [values, setValues] = useState<PersonalityProfileType>(
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

  const { firstName, lastName, gender } = values;

  return (
    <>
      <UntypedInput
        type="text"
        name="firstName"
        icon={NameFiledIcon}
        value={firstName}
        label={i18n.t('common.form.label.personality.firstname', {
          context: gender,
        })}
        error={firstNameError}
        handleChange={onChange}
      />
      <UntypedInput
        type="text"
        name="lastName"
        icon={NameFiledIcon}
        value={lastName}
        label={i18n.t('common.form.label.personality.lastname', {
          context: gender,
        })}
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
