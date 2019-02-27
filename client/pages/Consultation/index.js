import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { PageWrapperStyle } from 'Client/app/Styled/MainElements';

const ConsultationPage = () => (
  <PageWrapperStyle>
    <MetaTags />
    <h1>Consultation</h1>
  </PageWrapperStyle>
);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
