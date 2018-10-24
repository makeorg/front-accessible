import React from 'react';
import i18next from 'i18next';
import MainFooter from './Styled';
import { HiddenItem } from '../Elements/HiddenElements';

export const FooterLink = 'https://make.org/FR#/FR/consultation/aines/consultation';

class MainFooterComponent extends React.Component {
  render() {
    return (
      <MainFooter role="contentinfo">
        <MainFooter.Nav role="navigation" aria-labelledby="footer_title">
          <MainFooter.Title id="footer_title">
            <HiddenItem>{i18next.t('footer.see_more')}</HiddenItem>
            { 'Comment mieux prendre soin de ' }
            <MainFooter.HighlightedTitle>
              { 'nos aînés ?' }
            </MainFooter.HighlightedTitle>
          </MainFooter.Title>
          <MainFooter.Link href={FooterLink}>{i18next.t('footer.link')}</MainFooter.Link>
        </MainFooter.Nav>
      </MainFooter>
    );
  }
}

export default MainFooterComponent;
