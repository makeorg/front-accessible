/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import { consultationLink } from 'Constants/config';
import MainFooter from './Styled';

type Props = {
  handleTracking: Function
};

const MainFooterComponent = (props: Props) => {
  const { handleTracking } = props;

  return (
    <MainFooter role="contentinfo">
      <MainFooter.Nav role="navigation" aria-labelledby="footer_title">
        <MainFooter.Title id="footer_title">
          <HiddenItem aria-hidden>{i18next.t('footer.see_more')}</HiddenItem>
          { 'Comment mieux prendre soin de nos aînés ?' }
        </MainFooter.Title>
        <MainFooter.Link
          target="_blank"
          href={consultationLink}
          onClick={handleTracking}
        >
          {i18next.t('footer.link')}
        </MainFooter.Link>
      </MainFooter.Nav>
    </MainFooter>
  );
};

export default MainFooterComponent;
