/* @flow */
import * as React from 'react';
import FooterLinkContainer from './Link';
import MainFooter from './Styled';

/**
 * Renders Main Footer
 */
export const MainFooterComponent = () => (
  <MainFooter role="contentinfo">
    <MainFooter.Nav role="navigation">
      <FooterLinkContainer />
    </MainFooter.Nav>
  </MainFooter>
);
