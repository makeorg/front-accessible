// @flow

import {
  getAgeFromDateOfBirth,
  getDateOfBirthFromAge,
} from 'Shared/helpers/date';
import {
  getFieldError,
  transformFieldValueToProfileValue,
  transformProfileToFormData,
} from 'Shared/helpers/form';
import React, { useState } from 'react';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { i18n } from 'Shared/i18n';
import {
  NameFiledIcon,
  AgeFieldIcon,
  PostalCodeFieldIcon,
  JobFieldIcon,
  DescriptionFieldIcon,
} from 'Shared/constants/icons';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';
import { NumberInput } from 'Client/ui/Elements/Form/NumberInput';
import { type UserProfileType } from 'Shared/types/user';
import { type ErrorObjectType } from 'Shared/types/api';

type ProfileFormProps = {
  profile: UserProfileType,
  handleChange: (name: string, value: string | number | null) => void,
  errors: ErrorObjectType[],
};

export const UserForm = ({
  profile,
  handleChange,
  errors,
}: ProfileFormProps) => {
  const ageError = getFieldError('dateofbirth', errors);
  const postalCodeError = getFieldError('postalCode', errors);
  const firstNameError = getFieldError('firstName', errors);

  const [values, setValues] = useState<Object>({
    ...transformProfileToFormData(profile),
    age: getAgeFromDateOfBirth(profile.dateOfBirth),
  });

  const onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (name === 'age') {
      handleChange('dateOfBirth', getDateOfBirthFromAge(value));
      return;
    }

    handleChange(name, transformFieldValueToProfileValue(value));
  };

  const { firstName, age, profession, postalCode, description } = values;

  return (
    <>
      <UntypedInput
        type="text"
        name="firstName"
        icon={NameFiledIcon}
        value={firstName}
        label={i18n.t('common.form.label.firstname')}
        error={firstNameError}
        required
        handleChange={onChange}
      />
      <NumberInput
        name="age"
        icon={AgeFieldIcon}
        value={age}
        label={i18n.t('common.form.label.age', { context: 'optional' })}
        error={ageError}
        handleChange={onChange}
        min={13}
        max={120}
      />
      <UntypedInput
        type="text"
        name="profession"
        icon={JobFieldIcon}
        value={profession}
        label={i18n.t('common.form.label.profession', {
          context: 'optional',
        })}
        handleChange={onChange}
      />
      <CustomPatternInput
        type="text"
        name="postalCode"
        icon={PostalCodeFieldIcon}
        value={postalCode}
        label={i18n.t('common.form.label.postalcode', {
          context: 'optional',
        })}
        error={postalCodeError}
        handleChange={onChange}
        maxLength={5}
        pattern="^[0-9]{5}"
      />

      <TextArea
        name="description"
        icon={DescriptionFieldIcon}
        value={description}
        label={i18n.t('common.form.label.biography', { context: 'optional' })}
        maxLength={450}
        withCounter
        handleChange={onChange}
      />
    </>
  );
};
