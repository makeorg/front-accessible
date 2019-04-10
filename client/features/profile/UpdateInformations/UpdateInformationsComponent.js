import React from 'react';
import { i18n } from 'Shared/i18n';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PROFILE_UPDATE_FORMNAME } from 'Shared/constants/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import {
  FirstNameFieldIcon,
  AgeFieldIcon,
  PostalCodeFieldIcon,
  JobFieldIcon,
  DescriptionFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import {
  type UserInformationForm,
  type UserInformationFormErrors,
} from 'Shared/types/user';
import { SubmitButtonWrapperStyle } from 'Client/ui/Elements/Form/Styled/Content';

type Props = {
  values: UserInformationForm,
  errors: UserInformationFormErrors,
  submitDone: boolean,
  submitError: boolean,
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  handleSubmit: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
};

export const UpdateInformationsComponent = ({
  values,
  errors,
  submitDone,
  submitError,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <form id={PROFILE_UPDATE_FORMNAME} onSubmit={handleSubmit}>
      <UntypedInput
        type="text"
        name="firstName"
        icon={FirstNameFieldIcon}
        errors={errors.firstName}
        value={values.firstName}
        label={i18n.t('common.form.firstname_label')}
        required
        handleChange={handleChange}
      />
      {errors.firstName && (
        <ErrorMessageStyle id="update-information-firstname-error">
          {errors.firstName}
        </ErrorMessageStyle>
      )}
      <UntypedInput
        type="number"
        name="age"
        icon={AgeFieldIcon}
        value={values.age}
        label={i18n.t('common.form.age_label')}
        required={false}
        handleChange={handleChange}
      />
      {errors.age && (
        <ErrorMessageStyle id="update-information-age-error">
          {errors.age}
        </ErrorMessageStyle>
      )}
      <UntypedInput
        type="text"
        name="profession"
        icon={JobFieldIcon}
        value={values.profession}
        label={i18n.t('common.form.profession_label')}
        required={false}
        handleChange={handleChange}
      />
      {errors.profession && (
        <ErrorMessageStyle id="update-information-profession-error">
          {errors.profession}
        </ErrorMessageStyle>
      )}
      <UntypedInput
        type="number"
        name="postalCode"
        icon={PostalCodeFieldIcon}
        value={values.postalCode}
        label={i18n.t('common.form.postalcode_label')}
        required={false}
        handleChange={handleChange}
      />
      {errors.postalCode && (
        <ErrorMessageStyle id="update-information-postalcode-error">
          {errors.postalCode}
        </ErrorMessageStyle>
      )}
      <TextArea
        name="description"
        icon={DescriptionFieldIcon}
        value={values.description}
        label={i18n.t('common.form.biography_label')}
        errors={errors.description}
        required={false}
        maxLength={450}
        withCounter
        handleChange={handleChange}
      />
      {submitDone && (
        <SuccessMessageStyle>
          {i18n.t('profile.common.submit_success')}
        </SuccessMessageStyle>
      )}
      {submitError && (
        <ErrorMessageStyle>{i18n.t('common.form.api_error')}</ErrorMessageStyle>
      )}
      <SubmitButtonWrapperStyle>
        <SubmitButton
          formName={PROFILE_UPDATE_FORMNAME}
          icon={SubmitThumbsUpIcon}
          label={i18n.t('profile.common.submit_label')}
        />
      </SubmitButtonWrapperStyle>
    </form>
  );
};

UpdateInformationsComponent.defaultProps = {};
