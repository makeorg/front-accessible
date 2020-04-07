// @flow

import React from 'react';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { i18n } from 'Shared/i18n';
import {
  NameFiledIcon,
  DescriptionFieldIcon,
  WebsiteLinkFieldIcon,
} from 'Shared/constants/icons';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';
import { type PersonalityProfileType } from 'Shared/types/personality';
import {
  getFieldError,
  transformFieldValueToProfileValue,
  transformProfileToFormData,
} from 'Shared/helpers/form';
import { type ErrorObjectType } from 'Shared/types/api';

export const personalityForm = (
  profile: PersonalityProfileType,
  handleChange: (name: string, value: string | number | null) => void,
  errors: ErrorObjectType[]
) => {
  const firstNameError = getFieldError('firstname', errors);
  const websiteError = getFieldError('website', errors);

  const onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    handleChange(name, transformFieldValueToProfileValue(value));
  };

  const {
    firstName,
    lastName,
    description,
    website,
    gender,
  } = transformProfileToFormData(profile);

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

      <TextArea
        name="description"
        icon={DescriptionFieldIcon}
        value={description}
        label={i18n.t('common.form.label.biography', { context: 'optional' })}
        maxLength={450}
        withCounter
        handleChange={onChange}
      />

      <CustomPatternInput
        type="text"
        name="website"
        icon={WebsiteLinkFieldIcon}
        value={website}
        label={i18n.t('common.form.label.website', {
          context: 'optional',
        })}
        error={websiteError}
        handleChange={onChange}
        pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"
      />
    </>
  );
};
