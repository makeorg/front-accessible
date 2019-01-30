/* @flow */

import React from 'react';
import MetaTags from 'Src/components/MetaTags';
import { PageWrapper } from 'Client/app/Styled/MainElements';

const HomePage = () => (
  <PageWrapper>
    <MetaTags />
    <h1>Homepage</h1>
  </PageWrapper>
);

export default HomePage;
