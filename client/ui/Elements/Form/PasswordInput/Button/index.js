import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { HidePasswordIconStyle } from 'Client/ui/Elements/Form/Styled/Icons';

type Props = {
  /** Boolean toggled when password shown / hidden */
  isPasswordDisplayed: boolean,
  /** Method called to show / encrypt password */
  toggleIsPasswordDisplayed: (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => void,
  /** Tabindex for interactive items */
  tabIndex: number,
};

export const PasswordButton = (props: Props) => {
  const { isPasswordDisplayed, toggleIsPasswordDisplayed, tabIndex } = props;

  return (
    <UnstyledButtonStyle
      as={isPasswordDisplayed ? HidePasswordIconStyle : UnstyledButtonStyle}
      onClick={toggleIsPasswordDisplayed}
      aria-hidden
      tabIndex={tabIndex}
    >
      <FontAwesomeIcon
        aria-hidden
        icon={isPasswordDisplayed ? faEyeSlash : faEye}
      />
    </UnstyledButtonStyle>
  );
};
