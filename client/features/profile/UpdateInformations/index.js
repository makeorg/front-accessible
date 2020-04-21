// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { type PersonalityProfileType } from 'Shared/types/personality';
import { type OrganisationProfileType } from 'Shared/types/organisation';
import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/services/User';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PROFILE_UPDATE_FORMNAME } from 'Shared/constants/form';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import {
  SubmitSaveIcon,
  DescriptionFieldIcon,
  WebsiteLinkFieldIcon,
} from 'Shared/constants/icons';
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
import { getFieldError } from 'Shared/helpers/form';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { OrganisationForm } from './Organisation';
import { PersonalityForm } from './Personality';
import { UserForm } from './User';

type Props = {
  /** User */
  user: UserType,
};

export const UpdateInformations = ({ user }: Props) => {
  const dispatch = useDispatch();

  let updateProfile;
  switch (user.userType) {
    case TYPE_ORGANISATION:
      updateProfile = OrganisationService.update;
      break;
    case TYPE_PERSONALITY:
      updateProfile = PersonalityService.update;
      break;
    case TYPE_USER:
      updateProfile = UserService.update;
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
        {user.userType === TYPE_ORGANISATION && (
          <OrganisationForm
            profile={user.profile}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {user.userType === TYPE_PERSONALITY && (
          <PersonalityForm
            profile={user.profile}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {user.userType === TYPE_USER && (
          <UserForm
            profile={user.profile}
            handleChange={handleChange}
            errors={errors}
          />
        )}

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
