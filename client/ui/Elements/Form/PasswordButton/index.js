import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UnstyledButton } from 'Client/ui/Elements/ButtonElements';
import { HidePasswordIcon } from '../Styled';

type Props = {
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed?: boolean,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: () => void,
  /** Tabindex for interactive items */
  tabIndex?: number
}

export class PasswordButton extends React.Component<Props> {
  static defaultProps = {
    passwordIsDisplayed: false,
    tabIndex: 0
  }

  render() {
    const {
      passwordIsDisplayed,
      togglePasswordIsDisplayed,
      tabIndex
    } = this.props;

    if (passwordIsDisplayed) {
      return (
        <HidePasswordIcon onClick={togglePasswordIsDisplayed} aria-hidden tabIndex={tabIndex}>
          <FontAwesomeIcon aria-hidden icon={faEyeSlash} />
        </HidePasswordIcon>
      );
    }
    return (
      <UnstyledButton onClick={togglePasswordIsDisplayed} aria-hidden tabIndex={tabIndex}>
        <FontAwesomeIcon aria-hidden icon={faEye} />
      </UnstyledButton>
    );
  }
}
