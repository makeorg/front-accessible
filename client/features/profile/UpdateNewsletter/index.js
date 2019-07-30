// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { NEWSLETTER_UPDATE_FORMNAME } from 'Shared/constants/form';
import { type TypeErrorObject } from 'Shared/types/api';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { SubmitSaveIcon } from 'Shared/constants/icons';
import { CheckBox } from 'Client/ui/Elements/Form/CheckBox';
import { type TypeProfile } from 'Shared/types/user';
import * as UserService from 'Shared/services/User';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { defaultApiError } from 'Shared/errors/Messages';

type Props = {
  /** User Profile */
  profile: TypeProfile,
};

export const UpdateNewsletter = ({ profile }: Props) => {
  const [optInNewsletter, setOptInNewsletter] = useState<boolean>(
    profile.optInNewsletter
  );
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<TypeErrorObject[]>([]);

  const handleCheck = (event: SyntheticEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setOptInNewsletter(!optInNewsletter);

    setCanSubmit(true);
    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await UserService.updateNewsletter(optInNewsletter);
      setIsSubmitSuccessful(true);
      setCanSubmit(false);
    } catch {
      setErrors([defaultApiError]);
      setIsSubmitSuccessful(false);
    }
  };

  return (
    <TileWithTitle title={i18n.t('profile.newsletter_update.title')}>
      <form id={NEWSLETTER_UPDATE_FORMNAME} onSubmit={handleSubmit}>
        <FormErrors errors={errors} />
        <CheckBox
          name="optInNewsletter"
          value="newsletter"
          handleCheck={handleCheck}
          label={i18n.t('profile.newsletter_update.optin_label')}
          isChecked={optInNewsletter}
        />
        {isSubmitSuccessful && (
          <SuccessMessageStyle>
            {i18n.t('profile.common.submit_success')}
          </SuccessMessageStyle>
        )}
        <SubmitButton
          disabled={!canSubmit}
          formName={NEWSLETTER_UPDATE_FORMNAME}
          icon={SubmitSaveIcon}
          label={i18n.t('profile.common.submit_label')}
        />
      </form>
    </TileWithTitle>
  );
};
