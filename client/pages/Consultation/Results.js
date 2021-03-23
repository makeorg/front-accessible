// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { ResultsSkipLinks } from 'Client/app/SkipLinks/Results';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { trackDisplayResultsPage } from 'Shared/services/Tracking';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MetaTags } from 'Client/app/MetaTags';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ThemeProvider } from 'styled-components';
import { ExpressService } from 'Shared/services/Express';
import { ParticipateHeader } from 'Client/features/consultation/Header';
import { ParticipateHighlights } from 'Client/features/consultation/Highlights';
import { ResultsContext } from 'Client/features/consultation/Results/Context';
import { Timeline } from 'Client/features/consultation/Timeline';
import { CitizenRegister } from 'Client/features/consultation/CitizenRegister';
import { SvgLightBulb, SvgLightning } from 'Client/ui/Svg/elements';
import { ResultCard } from 'Client/features/consultation/Results/ResultCard';
import { ResultsContact } from 'Client/features/consultation/Results/Contact';
import {
  ParticipateContentStyle,
  ParticipateMainContentStyle,
  ParticipateInnerStyle,
  ParticipateSidebarContentStyle,
  ResultsTitleStyle,
} from 'Client/pages/Consultation/style';
import {
  RESULTS_TOP_IDEAS,
  RESULTS_CARTOGRAPHY,
  RESULTS_PARTICIPATION,
  RESULTS_CONTROVERSIALS,
} from 'Shared/constants/ids';
import { TopIdeas } from 'Client/features/consultation/Results/TopIdeas';
import { ResultsSlider } from 'Client/features/consultation/Results/Sliders';
import { ProposalsResults } from 'Client/features/consultation/Results/Proposals';

import { NotFoundPage } from '../NotFound';

const ResultPage = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isDesktop = matchDesktopDevice(device);
  const CARTOGRAPHY_SLIDER: string = 'cartography';
  const PARTICIPATION_SLIDER: string = 'participation';

  const metas = (
    <MetaTags
      title={i18n.t('meta.results.title', {
        question: question.wording.question,
      })}
      description={i18n.t('meta.results.description')}
      picture={question.wording.metas.picture}
    />
  );
  const [alternativeContent, setAlternativeContent] = useState(
    <>
      {metas}
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    </>
  );
  const [questionResults, setResults] = useState<?QuestionResultsType>(null);

  const initResults = async () => {
    const response = await ExpressService.getResults(question.slug, () =>
      setAlternativeContent(<NotFoundPage />)
    );

    if (response) {
      setResults(response);
    }
  };

  const TopIdeaIcon = (
    <SvgLightBulb
      aria-hidden
      width={isDesktop ? 36 : 31}
      height={isDesktop ? 36 : 31}
      focusable="false"
    />
  );

  const ControversyIcon = (
    <SvgLightning
      fill="#f7b500"
      aria-hidden
      width={20}
      height={32}
      focusable="false"
    />
  );

  useEffect(() => {
    initResults();
    trackDisplayResultsPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!questionResults) {
    return alternativeContent;
  }

  return (
    <>
      <GliderStylesheet />
      <ThemeProvider theme={question.theme}>
        {metas}
        <ResultsSkipLinks questionResults={questionResults} />
        <ParticipateHeader />
        {!isDesktop && (
          <ResultsContext
            context={questionResults.context}
            aboutUrl={question.aboutUrl}
          />
        )}
        <ParticipateHighlights />
        <ParticipateContentStyle>
          <ResultsTitleStyle>
            {i18n.t('consultation.results.title')}
          </ResultsTitleStyle>
          <ParticipateInnerStyle>
            <ParticipateMainContentStyle>
              <ResultCard
                icon={TopIdeaIcon}
                title={i18n.t('consultation.results.top_ideas.title', {
                  count: questionResults.top_ideas.length,
                })}
                description={i18n.t(
                  'consultation.results.top_ideas.introduction'
                )}
                id={RESULTS_TOP_IDEAS}
                className="no-margin-bottom"
              >
                <TopIdeas
                  topIdeas={questionResults.top_ideas}
                  question={question}
                />
              </ResultCard>
              <ResultCard
                title={i18n.t('consultation.results.cartography.title')}
                id={RESULTS_CARTOGRAPHY}
              >
                <ResultsSlider
                  data={questionResults.cartography}
                  sliderName={CARTOGRAPHY_SLIDER}
                  styleClass="results-page"
                />
              </ResultCard>
              <ResultCard
                title={i18n.t(
                  'consultation.results.proposals.controversials_title'
                )}
                description={i18n.t(
                  'consultation.results.proposals.controversials_description'
                )}
                icon={ControversyIcon}
                id={RESULTS_CONTROVERSIALS}
              >
                <ProposalsResults
                  proposals={questionResults.controversials}
                  question={question}
                />
              </ResultCard>
              <ResultCard
                title={i18n.t('consultation.results.participation.title')}
                id={RESULTS_PARTICIPATION}
              >
                <ResultsSlider
                  data={questionResults.participation}
                  sliderName={PARTICIPATION_SLIDER}
                />
              </ResultCard>
            </ParticipateMainContentStyle>
            <ParticipateSidebarContentStyle>
              {isDesktop && (
                <ResultsContext
                  context={questionResults.context}
                  aboutUrl={question.aboutUrl}
                />
              )}
              <ResultsContact question={question} />
            </ParticipateSidebarContentStyle>
          </ParticipateInnerStyle>
        </ParticipateContentStyle>
        <Timeline />
        <ParticipateContentStyle as="aside">
          <CitizenRegister />
        </ParticipateContentStyle>
      </ThemeProvider>
    </>
  );
};

// default export needed for loadable coomponent
// eslint-disable-next-line import/no-default-export
export default ResultPage;
