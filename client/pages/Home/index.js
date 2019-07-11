/* @flow */

import React, { useEffect, useState } from 'react';
import { type TypeHome } from 'Shared/types/views';
import { getHome } from 'Shared/services/Views';
import { Tracking } from 'Shared/services/Tracking';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { MetaTags } from 'Client/app/MetaTags';
import { FeaturedConsultations } from 'Client/features/homepage/FeaturedConsultations';
import { CorporateBanner } from 'Client/features/homepage/Corporate';
import { BusinessConsultations } from 'Client/features/homepage/BusinessConsultations';
import { CurrentConsultations } from 'Client/features/homepage/CurrentConsultations';
import { HomepageSkipLinks } from 'Client/app/SkipLinks/Homepage';
import { PopularProposals } from 'Client/features/homepage/Proposals/Popular';
import { ControversialProposals } from 'Client/features/homepage/Proposals/Controversial';
import { HomepageWrapperStyle } from './Styled';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    Tracking.trackDisplayHomepage();
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <HomepageWrapperStyle>
      <HomepageSkipLinks />
      <MetaTags />
      <FeaturedConsultations featureds={data.featuredConsultations} />
      <CurrentConsultations consultations={data.currentConsultations} />
      <PopularProposals
        proposals={data.popularProposals}
        isLoading={isLoading}
      />
      <CorporateBanner />
      <ControversialProposals
        proposals={data.controverseProposals}
        isLoading={isLoading}
      />
      <BusinessConsultations consultations={data.businessConsultations} />
    </HomepageWrapperStyle>
  );
};

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
