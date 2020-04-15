// @flow
import React from 'react';
import {
  getFieldError,
  transformFieldValueToProfileValue,
  transformProfileToFormData,
} from 'Shared/helpers/form';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { i18n } from 'Shared/i18n';
import {
  NameFiledIcon,
  DescriptionFieldIcon,
  WebsiteLinkFieldIcon,
} from 'Shared/constants/icons';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';
import { type OrganisationProfileType } from 'Shared/types/organisation';
import { type ErrorObjectType } from 'Shared/types/api';

export const organisationForm = (
  profile: OrganisationProfileType,
  handleChange: (name: string, value: string | number | null) => void,
  errors: ErrorObjectType[]
) => {
  const organisationNameError = getFieldError('organisationname', errors);
  const websiteError = getFieldError('website', errors);

  const onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    handleChange(name, transformFieldValueToProfileValue(value));
  };

  const { organisationName, description, website } = transformProfileToFormData(
    profile
  );

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
        type="url"
        name="website"
        icon={WebsiteLinkFieldIcon}
        value={website}
        label={i18n.t('common.form.label.website', {
          context: 'optional',
        })}
        error={websiteError}
        handleChange={onChange}
        pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.%]+$"
      />
    </>
  );
};
