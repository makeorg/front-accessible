import React from 'react';
import { i18n } from 'Shared/i18n';
import { NEWSLETTER_UPDATE_FORMNAME } from 'Shared/constants/form';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { SubmitSaveIcon } from 'Shared/constants/icons';
import { CheckBox } from 'Client/ui/Elements/Form/CheckBox';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { SubmitButtonWrapperStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';

type Props = {
  /** Boolean of optin check */
  optInNewsletter: boolean,
  /** Boolean for form done */
  submitDone: boolean,
  /** Boolean for form error */
  submitError: boolean,
  /** function to handle check */
  handleCheck: () => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

export const UpdateNewsletterComponent = ({
  optInNewsletter,
  submitDone,
  submitError,
  handleCheck,
  handleSubmit,
}: Props) => {
  return (
    <TileWithTitle title={i18n.t('profile.newsletter_update.title')}>
      <form id={NEWSLETTER_UPDATE_FORMNAME} onSubmit={handleSubmit}>
        <CheckBox
          id="optInNewsletter"
          name="optInNewsletter"
          value="newsletter"
          handleCheck={handleCheck}
          label={i18n.t('profile.newsletter_update.optin_label')}
          isChecked={optInNewsletter}
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
        <SubmitButtonWrapperStyle>
          <SubmitButton
            formName={NEWSLETTER_UPDATE_FORMNAME}
            icon={SubmitSaveIcon}
            label={i18n.t('profile.common.submit_label')}
          />
        </SubmitButtonWrapperStyle>
      </form>
    </TileWithTitle>
  );
};
