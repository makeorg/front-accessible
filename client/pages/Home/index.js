/* @flow */

import React, { useEffect, useState } from 'react';
import { type TypeHome } from 'Shared/types/views';
import { getHome } from 'Shared/services/Views';
import { trackDisplayHomepage } from 'Shared/services/Tracking';
import { MetaTags } from 'Client/app/MetaTags';
import { FeaturedConsultations } from 'Client/features/homepage/FeaturedConsultations';
import { CorporateBanner } from 'Client/features/homepage/Corporate';
import { BusinessConsultations } from 'Client/features/consultation/Business';
import { CurrentConsultations } from 'Client/features/homepage/CurrentConsultations';
import { HomepageSkipLinks } from 'Client/app/SkipLinks/Homepage';
import { HomepagePopularProposals } from 'Client/features/homepage/Proposals/Popular';
import { ControversialProposals } from 'Client/features/homepage/Proposals/Controversial';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
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
  trackingParamsService.questionSlug = '';

  useEffect(() => {
    async function fetchData() {
      const response = await getHome();
      setData(response);
    }
    setIsLoading(true);
    trackDisplayHomepage();
    fetchData();
    setIsLoading(false);
  }, []);

  const popularProposalsContext: TopComponentContextValueType = TopComponentContextValue.getPopularProposals();
  const controversialProposals: TopComponentContextValueType = TopComponentContextValue.getControversialProposals();

  return (
    <HomepageWrapperStyle>
      <HomepageSkipLinks />
      <MetaTags />
      <FeaturedConsultations featureds={data.featuredConsultations} />
      <CurrentConsultations consultations={data.currentConsultations} />
      <TopComponentContext.Provider value={popularProposalsContext}>
        <HomepagePopularProposals
          proposals={data.popularProposals}
          isLoading={isLoading}
        />
      </TopComponentContext.Provider>
      <CorporateBanner />
      <TopComponentContext.Provider value={controversialProposals}>
        <ControversialProposals
          proposals={data.controverseProposals}
          isLoading={isLoading}
        />
      </TopComponentContext.Provider>
      <BusinessConsultations consultations={data.businessConsultations} />
    </HomepageWrapperStyle>
  );
};

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
