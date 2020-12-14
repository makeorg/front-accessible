// @flow
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type HomeViewType } from 'Shared/types/views';
import { trackDisplayHomepage } from 'Shared/services/Tracking';
import { MetaTags } from 'Client/app/MetaTags';
import { type StateRoot } from 'Shared/store/types';
import { loadHomepage } from 'Shared/store/reducers/views/actions';
import { ViewsService } from 'Shared/services/Views';
import { HighlightsBanner } from 'Client/features/homepage/Highlights';
import { HomepageQuestions } from 'Client/features/homepage/Questions';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { FeaturedNews } from 'Client/features/homepage/Featured';
import { Hero } from 'Client/features/homepage/Hero';
import { HomepageSkipLinks } from 'Client/app/SkipLinks/Homepage';
import { PartnershipBanner } from 'Client/features/homepage/Partnership';
import { InternationalPlaceholder } from 'Client/features/homepage/International';
import { HomepageWrapperStyle } from './style';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const { homepage } = useSelector((state: StateRoot) => state.views);
  const isFR = country === 'FR';
  const hasConsultations =
    homepage?.currentQuestions.length > 0 || homepage?.pastQuestions.length > 0;

  const initHomepage = async () => {
    setIsLoading(true);
    const homepageResponse: ?HomeViewType = await ViewsService.getHome(country);
    if (homepageResponse && country) {
      dispatch(loadHomepage(homepageResponse, country));
    }
    setIsLoading(false);
  };

  const { featuredQuestions, posts } = homepage || {
    featuredQuestions: [],
    posts: [],
  };
  const hasFeaturedQuestions = featuredQuestions?.length > 0;
  const hasPosts = posts?.length > 0;

  useEffect(() => {
    trackDisplayHomepage();
    if (!homepage || homepage.country !== country) {
      initHomepage();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <>
      <HomepageSkipLinks />
      <MetaTags />
      {isLoading && (
        <MiddlePageWrapperStyle>
          <Spinner />
        </MiddlePageWrapperStyle>
      )}
      {!isLoading && homepage && (
        <>
          <Hero />
          <HomepageWrapperStyle>
            <HighlightsBanner highlights={homepage.highlights} />
            {hasConsultations ? (
              <HomepageQuestions
                currentQuestions={homepage.currentQuestions}
                pastQuestions={homepage.pastQuestions}
              />
            ) : (
              <InternationalPlaceholder />
            )}
            {hasFeaturedQuestions && hasPosts && (
              <FeaturedNews
                questions={homepage.featuredQuestions}
                posts={homepage.posts}
              />
            )}
          </HomepageWrapperStyle>
          {isFR && <PartnershipBanner />}
        </>
      )}
    </>
  );
};

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
