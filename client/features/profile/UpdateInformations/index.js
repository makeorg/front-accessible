// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PROFILE_UPDATE_FORMNAME } from 'Shared/constants/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import {
  FirstNameFieldIcon,
  AgeFieldIcon,
  PostalCodeFieldIcon,
  JobFieldIcon,
  DescriptionFieldIcon,
  SubmitSaveIcon,
  WebsiteLinkFieldIcon,
} from 'Shared/constants/icons';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { type TypeUser, type TypeUserInformationForm } from 'Shared/types/user';
import { type TypeErrorObject } from 'Shared/types/api';
import { NumberInput } from 'Client/ui/Elements/Form/NumberInput';
import { getUser } from 'Shared/store/actions/authentification';
import { getAgeFromDateOfBirth } from 'Shared/helpers/date';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { throttle } from 'Shared/helpers/throttle';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';
import { getFieldError } from 'Shared/helpers/form';
import { FormSuccessMessage } from 'Client/ui/Elements/Form/Success';
import {
  TYPE_PERSONALITY,
  TYPE_ORGANISATION,
  TYPE_USER,
} from 'Shared/constants/user';

type Props = {
  /** User */
  user: TypeUser,
};

export const UpdateInformations = ({ user }: Props) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<TypeUserInformationForm>({
    firstName: user.firstName,
    lastName: user.lastName,
    organisationName: user.organisationName,
    age: getAgeFromDateOfBirth(user.profile.dateOfBirth),
    profession: user.profile.profession,
    postalCode: user.profile.postalCode,
    description: user.profile.description,
    optInNewsletter: user.profile.optInNewsletter,
    website: user.profile.website,
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<TypeErrorObject[]>([]);
  const isOrganisation = user.userType === TYPE_ORGANISATION;
  const isPersonality = user.userType === TYPE_PERSONALITY;
  const isBasicUser = user.userType === TYPE_USER;

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
    setCanSubmit(true);
    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      await UserService.update(formValues);
      setIsSubmitSuccessful(true);
      setErrors([]);
      dispatch(getUser());
    } catch (serviceErrors) {
      setIsSubmitSuccessful(false);
      setErrors(serviceErrors);
      setCanSubmit(false);
    }
  };

  const firstnameError = getFieldError('firstname', errors);
  const ageError = getFieldError('dateofbirth', errors);
  const postalcodeError = getFieldError('postalCode', errors);
  const websiteError = getFieldError('website', errors);

  return (
    <TileWithTitle title={i18n.t('profile.informations_update.title')}>
      <form id={PROFILE_UPDATE_FORMNAME} onSubmit={throttle(handleSubmit)}>
        <FormRequirementsStyle>
          {i18n.t('common.form.requirements')}
        </FormRequirementsStyle>
        <FormErrors errors={errors} />
        {isBasicUser && (
          <>
            <UntypedInput
              type="text"
              name="firstName"
              icon={FirstNameFieldIcon}
              value={formValues.firstName}
              label={i18n.t('common.form.label.firstname')}
              error={firstnameError}
              required
              handleChange={handleChange}
            />
            <NumberInput
              name="age"
              icon={AgeFieldIcon}
              value={formValues.age}
              label={i18n.t('common.form.label.age', { context: 'optional' })}
              error={ageError}
              handleChange={handleChange}
              min={13}
              max={120}
            />
            <UntypedInput
              type="text"
              name="profession"
              icon={JobFieldIcon}
              value={formValues.profession}
              label={i18n.t('common.form.label.profession', {
                context: 'optional',
              })}
              handleChange={handleChange}
            />
            <CustomPatternInput
              type="text"
              name="postalCode"
              icon={PostalCodeFieldIcon}
              value={formValues.postalCode}
              label={i18n.t('common.form.label.postalcode', {
                context: 'optional',
              })}
              error={postalcodeError}
              handleChange={handleChange}
              maxLength={5}
              pattern="^[0-9]{5}"
            />
          </>
        )}
        {isOrganisation && (
          <UntypedInput
            type="text"
            name="organisationName"
            icon={FirstNameFieldIcon}
            value={formValues.organisationName}
            label={i18n.t('common.form.label.organisation')}
            handleChange={handleChange}
          />
        )}
        {isPersonality && (
          <>
            <UntypedInput
              type="text"
              name="firstName"
              icon={FirstNameFieldIcon}
              value={formValues.firstName}
              label={i18n.t('common.form.label.personality.firstname', {
                context: user.profile.gender,
              })}
              error={firstnameError}
              required
              handleChange={handleChange}
            />
            <UntypedInput
              type="text"
              name="lastName"
              icon={FirstNameFieldIcon}
              value={formValues.lastName}
              label={i18n.t('common.form.label.personality.lastname', {
                context: user.profile.gender,
              })}
              error={firstnameError}
              handleChange={handleChange}
            />
          </>
        )}
        <TextArea
          name="description"
          icon={DescriptionFieldIcon}
          value={formValues.description}
          label={i18n.t('common.form.label.biography', { context: 'optional' })}
          maxLength={450}
          withCounter
          handleChange={handleChange}
        />
        {!isBasicUser && (
          <CustomPatternInput
            type="text"
            name="website"
            icon={WebsiteLinkFieldIcon}
            value={formValues.website}
            label={i18n.t('common.form.label.website', {
              context: 'optional',
            })}
            error={websiteError}
            handleChange={handleChange}
            pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"
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
