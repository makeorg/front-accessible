import React from 'react';
import { i18n } from 'Shared/i18n';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
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
import {
  type UserInformationForm,
  type UserInformationFormErrors,
} from 'Shared/types/user';
import { NumberInput } from 'Client/ui/Elements/Form/NumberInput';

type Props = {
  values: UserInformationForm,
  errors: UserInformationFormErrors,
  canSubmit: boolean,
  submitDone: boolean,
  submitError: boolean,
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  handleSubmit: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
};

export const UpdateInformationsComponent = ({
  values,
  errors,
  canSubmit,
  submitDone,
  submitError,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <TileWithTitle title={i18n.t('profile.informations_update.title')}>
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
        <NumberInput
          name="age"
          icon={AgeFieldIcon}
          value={values.age}
          label={i18n.t('common.form.age_label')}
          required={false}
          handleChange={handleChange}
          min={13}
          max={120}
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
        <NumberInput
          name="postalCode"
          icon={PostalCodeFieldIcon}
          value={values.postalCode}
          label={i18n.t('common.form.postalcode_label')}
          required={false}
          handleChange={handleChange}
          max={99999}
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
          <ErrorMessageStyle>
            {i18n.t('common.form.api_error')}
          </ErrorMessageStyle>
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
