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
import { CurrentQuestions } from 'Client/features/homepage/CurrentQuestions';
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
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const { homepage } = useSelector((state: StateRoot) => state.views);
  const hasActiveQuestions =
    homepage &&
    homepage.currentQuestions &&
    homepage.currentQuestions.length > 0;
  const isFR = country === 'FR';

  const initHomepage = async () => {
    setIsLoading(true);
    const homepageResponse: ?HomeViewType = await ViewsService.getHome(
      country,
      // @todo remove it when ready on API side
      language
    );
    if (homepageResponse) {
      dispatch(loadHomepage(homepageResponse));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!homepage) {
      initHomepage();
    }
    trackDisplayHomepage();
  }, []);

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
            {!isFR && !hasActiveQuestions ? (
              <InternationalPlaceholder />
            ) : (
              <CurrentQuestions questions={homepage.currentQuestions} />
            )}
            {isFR && (
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
