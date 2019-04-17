// @flow
import * as React from 'react';
import { FooterLink } from './Link';
import { FooterStyle, FooterNavStyle } from './Styled';

/**
 * Renders Main Footer
 */
export const FooterComponent = () => (
  <FooterStyle role="contentinfo">
    <FooterNavStyle role="navigation">
      <FooterLink />
    </FooterNavStyle>
  </FooterStyle>
);
