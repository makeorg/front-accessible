/* @flow */

import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { FeaturedConsultations } from 'Client/features/homepage/featured';
import { CorporateBanner } from 'Client/features/homepage/corporate';
import { HomeWrapperStyle, PaddingContainerStyle } from './Styled';

const HomePage = () => (
  <HomeWrapperStyle>
    <MetaTags />
    <PaddingContainerStyle>
      <FeaturedConsultations />
    </PaddingContainerStyle>
    <CorporateBanner />
  </HomeWrapperStyle>
);

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
