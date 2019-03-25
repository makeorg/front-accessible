// @flow
import * as React from 'react';
import {
  IconWrapperStyle,
  FacebookButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { Svg } from 'Client/ui/Svg';
import { FacebookAuthentificationComponent } from '../index';

const renderFacebookLogin = tabIndex => renderProps => (
  <FacebookButtonStyle onClick={renderProps.onClick} tabIndex={tabIndex}>
    <IconWrapperStyle>
      <Svg aria-hidden type="SvgFacebookLogoF" />
    </IconWrapperStyle>
    Facebook
  </FacebookButtonStyle>
);

type Props = {
  /** Tabindex for interactive items */
  tabIndex?: number,
};

/**
 * Renders Facebook authentification button
 */
export const FacebookAuthentificationButtonComponent = (props: Props) => {
  const { tabIndex } = props;
  return (
    <FacebookAuthentificationComponent
      {...props}
      render={renderFacebookLogin(tabIndex)}
    />
  );
};

FacebookAuthentificationButtonComponent.defaultProps = {
  tabIndex: 0,
};
