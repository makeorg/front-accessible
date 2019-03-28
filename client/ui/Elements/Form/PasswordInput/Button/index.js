import * as React from 'react';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { HidePasswordIconStyle } from 'Client/ui/Elements/Form/Styled/Icons';
import { SvgEyeSlash, SvgEye } from 'Client/ui/Svg/elements';

type Props = {
  /** Boolean toggled when password shown / hidden */
  isPasswordDisplayed: boolean,
  /** Method called to show / encrypt password */
  toggleIsPasswordDisplayed: (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => void,
};

export const PasswordButton = (props: Props) => {
  const { isPasswordDisplayed, toggleIsPasswordDisplayed } = props;

  return (
    <UnstyledButtonStyle
      as={isPasswordDisplayed ? HidePasswordIconStyle : UnstyledButtonStyle}
      onClick={toggleIsPasswordDisplayed}
      aria-hidden
    >
      {isPasswordDisplayed ? (
        <SvgEyeSlash aria-hidden />
      ) : (
        <SvgEye aria-hidden />
      )}
    </UnstyledButtonStyle>
  );
};
