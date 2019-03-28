// @flow
import * as React from 'react';
import {
  IconWrapperStyle,
  GoogleButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { SvgGoogleLogoG } from 'Client/ui/Svg/elements';
import { GoogleAuthentificationComponent } from '../index';

const renderGoogleLogin = tabIndex => renderProps => (
  <GoogleButtonStyle onClick={renderProps.onClick} tabIndex={tabIndex}>
    <IconWrapperStyle>
      <SvgGoogleLogoG aria-hidden />
    </IconWrapperStyle>
    Google
  </GoogleButtonStyle>
);

type Props = {
  /** Tabindex for interactive items */
  tabIndex?: number,
};

/**
 * Renders Google authentification button
 */
export const GoogleAuthentificationButtonComponent = (props: Props) => {
  const { tabIndex } = props;

  return (
    <GoogleAuthentificationComponent
      {...props}
      render={renderGoogleLogin(tabIndex)}
    />
  );
};

GoogleAuthentificationButtonComponent.defaultProps = {
  tabIndex: 0,
};
