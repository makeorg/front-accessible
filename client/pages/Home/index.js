/* @flow */

import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { PageWrapperStyle } from 'Client/app/Styled/MainElements';
import { FeaturedConsultations } from 'Client/features/homepage/featured';

const HomePage = () => (
  <PageWrapperStyle>
    <MetaTags />
    <FeaturedConsultations />
  </PageWrapperStyle>
);

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
