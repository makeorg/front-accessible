// @flow
import React, { useEffect } from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { ConsultationPageContentStyle } from 'Client/pages/Consultation/Styled';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import {
  SvgInfos,
  SvgCalculator,
  SvgMap,
  SvgArrowLeft,
  SvgArrowRight,
  SvgLightBulb,
} from 'Client/ui/Svg/elements';
import { ChartType } from 'Client/ui/Data';
import { useSlider } from 'Client/hooks/useSlider';
import { useDesktop, useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { trackDisplayConsultation } from 'Shared/services/Tracking';
import { ConsultationPannelSidebar } from '../../Sidebar/ConsultationPannel';
import { ResultsContext } from '../../Results/Context';
import {
  ResultsIconsStyle,
  ResultsSliderStyle,
  ResultsSliderArrowsStyle,
  ResultsCounterStyle,
  ResultsLightningIconStyle,
  ResultsThumbIconStyle,
} from '../../Results/Styled';
import {
  CartographySliderStylesheet,
  ParticipationSliderStylesheet,
  CartographySliderParams,
  ParticipationSliderParams,
} from '../../Results/Slider/params';
import { KeyFigures } from '../../Results/KeyFigures';
import { ProposalsResults } from '../../Results/Proposals';
import { TopIdeas } from '../../Results/TopIdeas';

type Props = {
  questionResults: TypeQuestionResults,
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
};

export const ResultsPannel = ({
  questionResults,
  questionConfiguration,
  question,
}: Props) => {
  const isMobile = useMobile();
  const isDesktop = useDesktop();

  const displaySidebar = isMobile || isDesktop;
  const cartographyLength = questionResults.cartography.length;
  const participationLength = questionResults.participation.length;

  useSlider('cartography', CartographySliderParams, cartographyLength <= 0);

  useSlider(
    'participation',
    ParticipationSliderParams,
    participationLength <= 0
  );

  useEffect(() => {
    trackDisplayConsultation('results');
  }, []);

  return (
    <React.Fragment>
      <CartographySliderStylesheet />
      <ParticipationSliderStylesheet />
      <MetaTags
        title={i18n.t('meta.consultation.results.title', {
          question: question.wording.question,
        })}
      />
      {displaySidebar && (
        <ConsultationPannelSidebar
          question={question}
          questionConfiguration={questionConfiguration}
        />
      )}
      <ConsultationPageContentStyle id="main">
        <HiddenItemStyle as="h2">
          {i18n.t('consultation.results.title', {
            question: question.wording.question,
          })}
        </HiddenItemStyle>
        <TileWithTitle
          title={i18n.t('consultation.results.context')}
          icon={<SvgInfos aria-hidden style={ResultsIconsStyle} />}
        >
          <ResultsContext
            context={questionResults.context}
            aboutUrl={question.aboutUrl}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.key_figures.title')}
          icon={<SvgCalculator aria-hidden style={ResultsIconsStyle} />}
        >
          <KeyFigures
            results={questionResults.key_figures}
            themeColor={questionConfiguration.theme.color}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.top_ideas.title', {
            count: questionResults.top_ideas.length,
          })}
          icon={<SvgLightBulb aria-hidden style={ResultsIconsStyle} />}
        >
          <TopIdeas topIdeas={questionResults.top_ideas} />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.cartography.title')}
          icon={<SvgMap aria-hidden style={ResultsIconsStyle} />}
        >
          <ScreenReaderItemStyle>
            {i18n.t('common.slider.introduction')}
          </ScreenReaderItemStyle>
          <div className="cartography">
            <ResultsSliderStyle
              data-glide-el="track"
              className="cartography__track"
            >
              <ul id="cartography_translator" className="cartography__slides">
                {questionResults.cartography.map((chart, index) => (
                  <li key={chart.name} className="cartography__slide">
                    <ScreenReaderItemStyle>
                      {i18n.t('common.slider.index_count', {
                        index: index + 1,
                        total: cartographyLength,
                      })}
                    </ScreenReaderItemStyle>
                    <ChartType chart={chart} />
                  </li>
                ))}
              </ul>
            </ResultsSliderStyle>
            <div className="cartography__arrows" data-glide-el="controls">
              <ResultsSliderArrowsStyle
                className="cartography__arrow cartography__arrow--left"
                data-glide-dir="<"
                aria-label={i18n.t('common.slider.previous')}
                aria-controls="cartography_translator"
              >
                <SvgArrowLeft aria-hidden />
              </ResultsSliderArrowsStyle>
              <ResultsSliderArrowsStyle
                className="cartography__arrow cartography__arrow--right"
                data-glide-dir=">"
                aria-label={i18n.t('common.slider.next')}
                aria-controls="cartography_translator"
              >
                <SvgArrowRight aria-hidden />
              </ResultsSliderArrowsStyle>
            </div>
            <ResultsCounterStyle aria-hidden>
              <span className="cartography_counter_index">1</span>
              {` / ${cartographyLength}`}
            </ResultsCounterStyle>
          </div>
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.proposals.controversials')}
          icon={<ResultsLightningIconStyle aria-hidden />}
        >
          <ProposalsResults proposals={questionResults.controversials} />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.proposals.rejected')}
          icon={<ResultsThumbIconStyle aria-hidden />}
        >
          <ProposalsResults proposals={questionResults.rejected} isRejected />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.participation.title')}
        >
          <ScreenReaderItemStyle>
            {i18n.t('common.slider.introduction')}
          </ScreenReaderItemStyle>
          <div className="participation">
            <ResultsSliderStyle
              data-glide-el="track"
              className="participation__track"
            >
              <ul
                id="participation_translator"
                className="participation__slides"
              >
                {questionResults.participation.map((chart, index) => (
                  <li key={chart.name} className="participation__slide">
                    <ScreenReaderItemStyle>
                      {i18n.t('common.slider.index_count', {
                        index: index + 1,
                        total: participationLength,
                      })}
                    </ScreenReaderItemStyle>
                    <ChartType chart={chart} />
                  </li>
                ))}
              </ul>
            </ResultsSliderStyle>
            <div className="participation__arrows" data-glide-el="controls">
              <ResultsSliderArrowsStyle
                className="participation__arrow participation__arrow--left"
                data-glide-dir="<"
                aria-label={i18n.t('common.slider.previous')}
                aria-controls="participation_translator"
              >
                <SvgArrowLeft aria-hidden />
              </ResultsSliderArrowsStyle>
              <ResultsSliderArrowsStyle
                className="participation__arrow participation__arrow--right"
                data-glide-dir=">"
                aria-label={i18n.t('common.slider.next')}
                aria-controls="participation_translator"
              >
                <SvgArrowRight aria-hidden />
              </ResultsSliderArrowsStyle>
            </div>
            <ResultsCounterStyle aria-hidden>
              <span className="participation_counter_index">1</span>
              {` / ${participationLength}`}
            </ResultsCounterStyle>
          </div>
        </TileWithTitle>
      </ConsultationPageContentStyle>
    </React.Fragment>
  );
};
