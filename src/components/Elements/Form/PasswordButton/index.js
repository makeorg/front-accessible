import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UnstyledButton } from 'Components/Elements/ButtonElements';
import { HidePasswordIcon } from '..';

const PasswordButton = ({
  passwordIsDisplayed,
  togglePasswordIsDisplayed,
  tabIndex
}) => {
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
};

export default PasswordButton;
