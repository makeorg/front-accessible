// @flow
import React from 'react';
import { type PersonalityProfileType } from 'Shared/types/personality';
import { type OrganisationProfileType } from 'Shared/types/organisation';
import {
  DescriptionFieldIcon,
  WebsiteLinkFieldIcon,
} from 'Shared/constants/icons';
import { getFieldError } from 'Shared/helpers/form';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { i18n } from 'Shared/i18n';

type CommonProfileFieldsProps = {
  profile: OrganisationProfileType | PersonalityProfileType,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  errors: ErrorObjectType[],
};

export const CommonProfileFields = ({
  profile,
  onChange,
  errors,
}: CommonProfileFieldsProps) => {
  const websiteError = getFieldError('website', errors);
  const { description, website } = profile;
  return (
    <>
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
