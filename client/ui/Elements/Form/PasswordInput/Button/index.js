// @flow
import React from 'react';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { HidePasswordIconStyle } from 'Client/ui/Elements/Form/Styled/Icons';
import { SvgEyeSlash, SvgEye } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';

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
      type="button"
      as={isPasswordDisplayed ? HidePasswordIconStyle : UnstyledButtonStyle}
      onClick={toggleIsPasswordDisplayed}
      aria-label={
        isPasswordDisplayed
          ? i18n.t('common.form.hide_password')
          : i18n.t('common.form.show_password')
      }
    >
      {isPasswordDisplayed ? (
        <SvgEyeSlash aria-hidden focusable="false" />
      ) : (
        <SvgEye aria-hidden focusable="false" />
      )}
    </UnstyledButtonStyle>
  );
};
