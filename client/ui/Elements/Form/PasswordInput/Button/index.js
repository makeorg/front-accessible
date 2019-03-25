import * as React from 'react';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { HidePasswordIconStyle } from 'Client/ui/Elements/Form/Styled/Icons';
import { Svg } from 'Client/ui/Svg';

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
      <Svg aria-hidden type={isPasswordDisplayed ? 'SvgEyeSlash' : 'SvgEye'} />
    </UnstyledButtonStyle>
  );
};
