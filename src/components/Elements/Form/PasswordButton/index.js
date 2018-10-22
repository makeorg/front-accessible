import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UnstyledButton } from '../../ButtonElements';
import { HidePasswordIcon } from '..';

const PasswordButton = ({ passwordIsDisplayed, showPassword, hidePassword }) => {
  if (passwordIsDisplayed) {
    return (
      <HidePasswordIcon onClick={hidePassword} aria-hidden="true">
        <FontAwesomeIcon aria-hidden icon={faEyeSlash} />
      </HidePasswordIcon>
    );
  }

  return (
    <UnstyledButton onClick={showPassword} aria-hidden="true">
      <FontAwesomeIcon aria-hidden icon={faEye} />
    </UnstyledButton>
  );
};

export default PasswordButton;
