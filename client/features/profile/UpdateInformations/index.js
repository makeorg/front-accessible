// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/services/User';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PROFILE_UPDATE_FORMNAME } from 'Shared/constants/form';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { SubmitSaveIcon } from 'Shared/constants/icons';
import { type UserType } from 'Shared/types/user';
import { type ErrorObjectType } from 'Shared/types/api';
import { getUser } from 'Shared/store/actions/authentification';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { throttle } from 'Shared/helpers/throttle';
import { FormSuccessMessage } from 'Client/ui/Elements/Form/Success';
import {
  TYPE_PERSONALITY,
  TYPE_ORGANISATION,
  TYPE_USER,
} from 'Shared/constants/user';
import { OrganisationService } from 'Shared/services/Organisation';
import { PersonalityService } from 'Shared/services/Personality';
import { organisationForm } from './Organisation';
import { personalityForm } from './Personality';
import { userForm } from './User';

type Props = {
  /** User */
  user: UserType,
};

export const UpdateInformations = ({ user }: Props) => {
  const dispatch = useDispatch();

  let updateProfile;
  let profileForm;
  switch (user.userType) {
    case TYPE_ORGANISATION:
      updateProfile = OrganisationService.update;
      profileForm = organisationForm;
      break;
    case TYPE_PERSONALITY:
      updateProfile = PersonalityService.update;
      profileForm = personalityForm;
      break;
    case TYPE_USER:
      updateProfile = UserService.update;
      profileForm = userForm;
      break;
    default:
      throw new Error(`Unexpected user type "${user.userType}"`);
  }

  const [profile, setProfileValues] = useState<Object>(user.profile);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);

  const handleChange = (name: string, value: string | number | null) => {
    setProfileValues({ ...profile, [name]: value });
    setCanSubmit(true);
    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    setCanSubmit(false);
    const success = () => {
      setIsSubmitSuccessful(true);
      setErrors([]);
      dispatch(getUser());
    };
    const handleErrors = (serviceErrors: ErrorObjectType[]) => {
      setIsSubmitSuccessful(false);
      setErrors(serviceErrors);
    };

    const { userId } = user;
    await updateProfile(userId, profile, success, handleErrors);
  };

  return (
    <TileWithTitle title={i18n.t('profile.informations_update.title')}>
      <form id={PROFILE_UPDATE_FORMNAME} onSubmit={throttle(handleSubmit)}>
        <FormRequirementsStyle>
          {i18n.t('common.form.requirements')}
        </FormRequirementsStyle>
        <FormErrors errors={errors} />

        {profileForm(profile, handleChange, errors)}

        <SubmitButton
          disabled={!canSubmit}
          formName={PROFILE_UPDATE_FORMNAME}
          icon={SubmitSaveIcon}
          label={i18n.t('profile.common.submit_label')}
        />
        {isSubmitSuccessful && <FormSuccessMessage />}
      </form>
    </TileWithTitle>
  );
};
