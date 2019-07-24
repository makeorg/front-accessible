// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
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
} from 'Shared/constants/icons';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { type TypeUser, type TypeUserInformationForm } from 'Shared/types/user';
import { type TypeErrorObject } from 'Shared/types/api';
import { NumberInput } from 'Client/ui/Elements/Form/NumberInput';
import { getUser } from 'Shared/store/actions/authentification';
import { getAgeFromDateOfBrth } from 'Shared/helpers/date';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { throttle } from 'Shared/helpers/throttle';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';

type Props = {
  /** User */
  user: TypeUser,
  /** Method called to load user */
  handleGetUser: () => void,
};

export const UpdateInformationsComponent = ({ user, handleGetUser }: Props) => {
  const [formValues, setFormValues] = useState<TypeUserInformationForm>({
    firstName: user.firstName || '',
    age: getAgeFromDateOfBrth(user.profile.dateOfBirth) || undefined,
    profession: user.profile.profession || '',
    postalCode: user.profile.postalCode || undefined,
    description: user.profile.description || '',
    optInNewsletter: user.profile.optInNewsletter || false,
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<TypeErrorObject[]>();

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
    setCanSubmit(true);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      await UserService.update(formValues);
      setIsSubmitSuccessful(true);
      handleGetUser();
    } catch (serviceErrors) {
      setErrors(serviceErrors);
    }
  };

  return (
    <TileWithTitle title={i18n.t('profile.informations_update.title')}>
      <form id={PROFILE_UPDATE_FORMNAME} onSubmit={handleSubmit}>
        <FormRequirementsStyle>
          {i18n.t('common.form.requirements')}
        </FormRequirementsStyle>
        <FormErrors errors={errors} />
        <UntypedInput
          type="text"
          name="firstName"
          icon={FirstNameFieldIcon}
          value={formValues.firstName}
          label={i18n.t('common.form.firstname_label')}
          required
          handleChange={throttle(handleChange)}
        />
        <NumberInput
          name="age"
          icon={AgeFieldIcon}
          value={formValues.age}
          label={i18n.t('common.form.age_label')}
          required={false}
          handleChange={throttle(handleChange)}
          min={13}
          max={120}
        />
        <UntypedInput
          type="text"
          name="profession"
          icon={JobFieldIcon}
          value={formValues.profession}
          label={i18n.t('common.form.profession_label')}
          required={false}
          handleChange={throttle(handleChange)}
        />
        <CustomPatternInput
          type="text"
          name="postalCode"
          icon={PostalCodeFieldIcon}
          value={user.postalcode}
          label={i18n.t('common.form.postalcode_label')}
          handleChange={throttle(handleChange)}
          maxLength={5}
          pattern="^[0-9]{5}"
        />
        <TextArea
          name="description"
          icon={DescriptionFieldIcon}
          value={formValues.description}
          label={i18n.t('common.form.biography_label')}
          maxLength={450}
          withCounter
          handleChange={throttle(handleChange)}
        />
        {isSubmitSuccessful && (
          <SuccessMessageStyle>
            {i18n.t('profile.common.submit_success')}
          </SuccessMessageStyle>
        )}
        <SubmitButton
          disabled={!canSubmit}
          formName={PROFILE_UPDATE_FORMNAME}
          icon={SubmitSaveIcon}
          label={i18n.t('profile.common.submit_label')}
        />
      </form>
    </TileWithTitle>
  );
};

UpdateInformationsComponent.defaultProps = {};

const mapDispatchToProps = dispatch => ({
  handleGetUser: () => {
    dispatch(getUser());
  },
});

export const UpdateInformations = connect(
  null,
  mapDispatchToProps
)(UpdateInformationsComponent);
