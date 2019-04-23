import React from 'react';
import { i18n } from 'Shared/i18n';
import { PROFILE_DELETE_ACCOUNT_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import {
  PasswordFieldIcon,
  EmailFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { FormParagraphStyle } from '../Styled/Forms';
import { TypeDeletePassword } from './DeleteAccountContainer';

type Props = {
  values: TypeDeletePassword,
  /** Boolean to check that user can submit */
  canSubmit: boolean,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

export const DeleteAccountComponent = ({
  hasPassword,
  values,
  canSubmit,
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
        {hasPassword ? (
          <PasswordInput
            label={i18n.t('profile.delete_account.password_label')}
            name="password"
            id="password"
            required
            icon={PasswordFieldIcon}
            value={values.password}
            handleChange={handleChange}
          />
        ) : (
          <UntypedInput
            type="email"
            name="email"
            icon={EmailFieldIcon}
            label={i18n.t('common.form.email_label')}
            required
            handleChange={handleChange}
          />
        )}
        {submitDone && (
          <SuccessMessageStyle>
            {i18n.t('profile.common.submit_success')}
          </SuccessMessageStyle>
        )}
        {submitError && (
          <ErrorMessageStyle>
            {i18n.t('login.email_doesnot_exist')}
          </ErrorMessageStyle>
        )}
        <SubmitButton
          disabled={!canSubmit}
          formName={PROFILE_DELETE_ACCOUNT_FORMNAME}
          icon={SubmitThumbsUpIcon}
          label={i18n.t('profile.delete_account.submit_label')}
        />
      </form>
    </TileWithTitle>
  );
};
