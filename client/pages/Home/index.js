/* @flow */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type HomeViewType } from 'Shared/types/views';
import { trackDisplayHomepage } from 'Shared/services/Tracking';
import { MetaTags } from 'Client/app/MetaTags';
import { type StateRoot } from 'Shared/store/types';
import { loadHomepage } from 'Shared/store/reducers/views/actions';
import { ViewsService } from 'Shared/services/Views';
import { HighlightsBanner } from 'Client/features/homepage/Highlights/HighlightsBanner';
import { BrowseConsultations } from 'Client/features/homepage/BrowseConsultations/BrowseConsultations';
import { NoConsultation } from 'Client/features/consultation/Browse/NoConsultation';
import { Link } from 'react-router-dom';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  getBrowseConsultationsLink,
  getBrowseResultsLink,
} from 'Shared/helpers/url';
import {
  LinkAsRedButton,
  ResultsLinkAsRedButton,
} from 'Client/ui/Elements/Buttons/V2/style';
import { StartColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ConsultationsWrapperStyle,
  ConsultationsTitleStyle,
} from 'Client/features/consultation/Browse/style';
import { HomepageWrapperStyle } from './style';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const { homepage } = useSelector((state: StateRoot) => state.views);

  const initHomepage = async () => {
    setIsLoading(true);
    const homepageResponse: ?HomeViewType = await ViewsService.getHome(
      country,
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

  const hasQuestions = homepage && homepage.currentQuestions.length > 0;
  const hasOneQuestion = homepage && homepage.currentQuestions.length === 1;

  return (
    <HomepageWrapperStyle>
      <MetaTags />
      {isLoading && <Spinner />}
      {!isLoading && homepage && (
        <>
          <HighlightsBanner
            participantsCount={homepage.highlights.participantsCount}
            proposalsCount={homepage.highlights.proposalsCount}
            partnersCount={homepage.highlights.partnersCount}
          />
          <ConsultationsWrapperStyle>
            <ConsultationsTitleStyle>
              {i18n.t('browse_consultations.title')}
            </ConsultationsTitleStyle>
            {hasQuestions && (
              <BrowseConsultations
                currentQuestions={homepage.currentQuestions}
              />
            )}
            {hasOneQuestion && (
              <NoConsultation length={homepage.currentQuestions.length} />
            )}
            {!hasQuestions && (
              <StartColumnStyle>
                <NoConsultation length={homepage.currentQuestions.length} />
                <ResultsLinkAsRedButton
                  as={Link}
                  to={getBrowseResultsLink(country, language)}
                >
                  {i18n.t('browse_consultations.see_closed_consultations')}
                </ResultsLinkAsRedButton>
              </StartColumnStyle>
            )}
            {hasQuestions && (
              <LinkAsRedButton
                as={Link}
                to={getBrowseConsultationsLink(country, language)}
              >
                {i18n.t('browse_consultations.browse')}
              </LinkAsRedButton>
            )}
          </ConsultationsWrapperStyle>
        </>
      )}
    </HomepageWrapperStyle>
  );
};

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
