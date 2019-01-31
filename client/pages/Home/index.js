/* @flow */

import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { PageWrapper } from 'Client/app/Styled/MainElements';

const HomePage = () => (
  <PageWrapper>
    <MetaTags />
    <h1>Homepage</h1>
  </PageWrapper>
);

export default HomePage;
