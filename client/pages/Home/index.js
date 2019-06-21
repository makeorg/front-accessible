/* @flow */

import React, { useEffect, useState } from 'react';
import { type TypeHome } from 'Shared/types/views';
import { getHome } from 'Shared/services/Views';
import { MetaTags } from 'Client/app/MetaTags';
import { FeaturedConsultations } from 'Client/features/homepage/FeaturedConsultations';
import { CorporateBanner } from 'Client/features/homepage/Corporate';
import { BusinessConsultations } from 'Client/features/homepage/BusinessConsultations';
import { CurrentConsultations } from 'Client/features/homepage/CurrentConsultations';
import { HomepageSkipLinks } from 'Client/app/SkipLinks/Homepage';
import { Tracking } from 'Shared/services/Tracking';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';

import { HomepageWrapperStyle, HomepageContainerStyle } from './Styled';

export const HomePage = () => {
  const [data, setData] = useState<TypeHome>({
    popularProposals: [],
    controverseProposals: [],
    businessConsultations: [],
    featuredConsultations: [],
    currentConsultations: [],
  });
  apiClient.questionId = '';
  apiClient.operationId = '';

  useEffect(() => {
    async function fetchData() {
      const response = await getHome();
      setData(response);
    }

    Tracking.trackDisplayHomepage();
    fetchData();
  }, []);

  return (
    <HomepageWrapperStyle>
      <HomepageSkipLinks />
      <MetaTags />
      <HomepageContainerStyle>
        <FeaturedConsultations featureds={data.featuredConsultations} />
      </HomepageContainerStyle>
      <HomepageContainerStyle>
        <CurrentConsultations consultations={data.currentConsultations} />
      </HomepageContainerStyle>
      <CorporateBanner />
      <HomepageContainerStyle>
        <BusinessConsultations consultations={data.businessConsultations} />
      </HomepageContainerStyle>
    </HomepageWrapperStyle>
  );
};

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
