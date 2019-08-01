// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { NEWSLETTER_UPDATE_FORMNAME } from 'Shared/constants/form';
import { type TypeErrorObject } from 'Shared/types/api';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { SubmitSaveIcon } from 'Shared/constants/icons';
import { CheckBox } from 'Client/ui/Elements/Form/CheckBox';
import { type TypeProfile } from 'Shared/types/user';
import * as UserService from 'Shared/services/User';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { defaultApiError } from 'Shared/errors/Messages';
import { FormSuccessMessage } from 'Client/ui/Elements/Form/Success';
import { getUser } from 'Shared/store/actions/authentification';

type Props = {
  /** User Profile */
  profile: TypeProfile,
  /** Dispatch method for user after submit */
  handleGetUser: () => void,
};

export const UpdateNewsletterComponent = ({
  profile,
  handleGetUser,
}: Props) => {
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
      handleGetUser();
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
        <SubmitButton
          disabled={!canSubmit}
          formName={NEWSLETTER_UPDATE_FORMNAME}
          icon={SubmitSaveIcon}
          label={i18n.t('profile.common.submit_label')}
        />
        {isSubmitSuccessful && <FormSuccessMessage />}
      </form>
    </TileWithTitle>
  );
};

const mapDispatchToProps = dispatch => ({
  handleGetUser: () => {
    dispatch(getUser());
  },
});

export const UpdateNewsletter = connect(
  null,
  mapDispatchToProps
)(UpdateNewsletterComponent);
