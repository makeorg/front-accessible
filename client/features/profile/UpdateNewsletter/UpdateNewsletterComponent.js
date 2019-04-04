import React from 'react';
import { i18n } from 'Shared/i18n';
import { NEWSLETTER_UPDATE_FORMNAME } from 'Shared/constants/form';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { SubmitThumbsUpIcon } from 'Shared/constants/icons';
import { CheckBox } from 'Client/ui/Elements/Form/CheckBox';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';

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
    <form id={NEWSLETTER_UPDATE_FORMNAME} onSubmit={handleSubmit}>
      <ThirdLevelTitleStyle>
        {i18n.t('profile.newsletter_update.title')}
      </ThirdLevelTitleStyle>
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
        <ErrorMessageStyle>{i18n.t('common.form.api_error')}</ErrorMessageStyle>
      )}
      <SubmitButton
        formName={NEWSLETTER_UPDATE_FORMNAME}
        icon={SubmitThumbsUpIcon}
        label={i18n.t('profile.common.submit_label')}
      />
    </form>
  );
};
