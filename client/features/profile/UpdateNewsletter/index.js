// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { NEWSLETTER_UPDATE_FORMNAME } from 'Shared/constants/form';
import { type ErrorObjectType } from 'Shared/types/api';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { SubmitSaveIcon } from 'Shared/constants/icons';
import { CheckBox } from 'Client/ui/Elements/Form/CheckBox';
import { type UserProfileType } from 'Shared/types/user';
import { UserService } from 'Shared/services/User';
import { OrganisationService } from 'Shared/services/Organisation';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { defaultApiError } from 'Shared/errors/Messages';
import { FormSuccessMessage } from 'Client/ui/Elements/Form/Success';
import { getUser } from 'Shared/store/actions/authentication';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { TYPE_ORGANISATION, TYPE_PERSONALITY } from 'Shared/constants/user';
import { PersonalityService } from 'Shared/services/Personality';

type Props = {
  /** User id */
  userId: string,
  /** User type */
  userType: String,
  /** User Profile */
  profile: UserProfileType,
};

export const UpdateNewsletter = ({ userId, userType, profile }: Props) => {
  const dispatch = useDispatch();
  const [optInNewsletter, setOptInNewsletter] = useState<boolean>(
    profile.optInNewsletter
  );
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);

  const handleCheck = (event: SyntheticEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setOptInNewsletter(!optInNewsletter);

    setCanSubmit(true);
    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const success = () => {
      setIsSubmitSuccessful(true);
      setCanSubmit(false);
      dispatch(getUser());
    };
    const handleErrors = () => {
      setErrors([defaultApiError]);
      setIsSubmitSuccessful(false);
    };
    const newProfile = {
      ...profile,
      optInNewsletter,
    };
    switch (userType) {
      case TYPE_ORGANISATION:
        await OrganisationService.update(
          userId,
          newProfile,
          success,
          handleErrors
        );
        break;
      case TYPE_PERSONALITY:
        await PersonalityService.update(
          userId,
          newProfile,
          success,
          handleErrors
        );
        break;
      default:
        await UserService.update(
          userId,
          {
            ...profile,
            optInNewsletter,
          },
          success,
          handleErrors
        );
        break;
    }
  };

  return (
    <TileWithTitle title={i18n.t('profile.newsletter_update.title')}>
      <form id={NEWSLETTER_UPDATE_FORMNAME} onSubmit={handleSubmit}>
        <FormRequirementsStyle>
          {i18n.t('common.form.requirements')}
        </FormRequirementsStyle>
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
