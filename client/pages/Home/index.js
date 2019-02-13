/* @flow */

import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { PageWrapperStyle } from 'Client/app/Styled/MainElements';

const HomePage = () => (
  <PageWrapperStyle>
    <MetaTags />
    <h1>Homepage</h1>
  </PageWrapperStyle>
);

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
