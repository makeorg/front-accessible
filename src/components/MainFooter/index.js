import React, { Component } from 'react';
import MainFooter from './Styled';
import { HiddenItem } from '../Elements/HiddenElements';

export const FooterLink = 'https://make.org/FR#/FR/consultation/aines/consultation';

class MainFooterComponent extends Component {
  render() {
    return (
      <MainFooter role="contentinfo">
        <MainFooter.Nav role="navigation" aria-labelledby="footer_title">
          <MainFooter.Title id="footer_title">
            <HiddenItem>En savoir plus sur le sujet : </HiddenItem>
            { 'Comment mieux prendre soin de ' }
            <MainFooter.HighlightedTitle>
              { ' nos ainés ?' }
            </MainFooter.HighlightedTitle>
          </MainFooter.Title>
          <MainFooter.Link href={FooterLink}>Accéder à la consultation complète</MainFooter.Link>
        </MainFooter.Nav>
      </MainFooter>
    );
  }
}

export default MainFooterComponent;
