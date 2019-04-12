import React from 'react';
import { i18n } from 'Shared/i18n';
import { PROFILE_DELETE_ACCOUNT_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PasswordFieldIcon, SubmitThumbsUpIcon } from 'Shared/constants/icons';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { SubmitButtonWrapperStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FormParagraphStyle } from '../Styled/Forms';

type Props = {
  password: string,
  /** Boolean to check that for is valid */
  formIsValid: boolean,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

export const DeleteAccountComponent = ({
  password,
  formIsValid,
  submitDone,
  submitError,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <TileWithTitle title={i18n.t('profile.delete_account.title')}>
      <form id={PROFILE_DELETE_ACCOUNT_FORMNAME} onSubmit={handleSubmit}>
        <FormParagraphStyle>
          {i18n.t('profile.delete_account.description')}
        </FormParagraphStyle>
        <PasswordInput
          label={i18n.t('profile.delete_account.password_label')}
          name="password"
          id="password"
          required
          icon={PasswordFieldIcon}
          value={password}
          handleChange={handleChange}
        />
        {submitDone && (
          <SuccessMessageStyle>
            {i18n.t('profile.common.submit_success')}
          </SuccessMessageStyle>
        )}
        {submitError && (
          <ErrorMessageStyle>
            {i18n.t('common.form.incorrect_password')}
          </ErrorMessageStyle>
        )}
        <SubmitButtonWrapperStyle>
          <SubmitButton
            disabled={!formIsValid}
            formName={PROFILE_DELETE_ACCOUNT_FORMNAME}
            icon={SubmitThumbsUpIcon}
            label={i18n.t('profile.common.submit_label')}
          />
        </SubmitButtonWrapperStyle>
      </form>
    </TileWithTitle>
  );
};
