// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { SmallRedButton, IconInButton } from 'Components/Elements/ButtonElements';
import {
  FormErrors,
  FormError
} from 'Components/Elements/Form';
import UntypedInput from 'Components/Elements/Form/UntypedInput';
import ForgotPassword from '../Styled';

type Props = {
  /** User email value */
  email: string,
  /** Array with form errors */
  errors: Array<string>,
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean
};

/**
 * Renders ForgotPassword Form
 */
const ForgotPasswordFormComponent = (props: Props) => {
  const {
    email,
    errors,
    handleChange,
    handleSubmit,
    isPannelOpen
  } = props;

  return (
    <ForgotPassword.Form id="forgot_password" onSubmit={handleSubmit}>
      {errors.length > 0
        && (
          <FormErrors>
            {errors.map(error => <FormError key={error}>{error}</FormError>)}
          </FormErrors>
        )
      }
      <UntypedInput
        type="email"
        name="email"
        icon={faEnvelope}
        value={email}
        label={i18next.t('common.form.email_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <SmallRedButton
        type="submit"
        form="forgot_password"
        tabIndex={isPannelOpen ? 0 : -1}
      >
        <IconInButton>
          <FontAwesomeIcon icon={faPaperPlane} />
        </IconInButton>
        {i18next.t('forgot_password.send_link')}
      </SmallRedButton>
    </ForgotPassword.Form>
  );
};

export default ForgotPasswordFormComponent;
