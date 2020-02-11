// @flow
import React, { useEffect } from 'react';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { ConsultationPageContentStyle } from 'Client/pages/Consultation/style';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import {
  SvgInfos,
  SvgCalculator,
  SvgMap,
  SvgLightBulb,
} from 'Client/ui/Svg/elements';
import { useDesktop, useMobile } from 'Client/hooks/useMedia';
import {
  trackDisplayConsultation,
  trackDownloadReport,
} from 'Shared/services/Tracking';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import {
  RESULTS_CONTEXT,
  RESULTS_KEY_FIGURES,
  RESULTS_TOP_IDEAS,
  RESULTS_CARTOGRAPHY,
  RESULTS_CONTROVERSIALS,
  RESULTS_REJECTED,
  RESULTS_PARTICIPATION,
  RESULTS_REPORT,
} from 'Shared/constants/ids';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ConsultationSidebar } from './Sidebar';
import { ResultsContext } from './Results/Context';
import {
  ResultsIconsStyle,
  ResultsLightningIconStyle,
  ResultsThumbIconStyle,
  ResultsDownloadItemStyle,
  ResultsDownloadButtonStyle,
} from './Results/Styled';
import { KeyFigures } from './Results/KeyFigures';
import { ProposalsResults } from './Results/Proposals';
import { TopIdeas } from './Results/TopIdeas';
import { ResultsSlider } from './Results/Sliders';

type Props = {
  questionResults: TypeQuestionResults,
  question: TypeQuestion,
};

const CARTOGRAPHY_SLIDER: string = 'cartography';
const PARTICIPATION_SLIDER: string = 'participation';

export const ResultsContent = ({ questionResults, question }: Props) => {
  const isMobile = useMobile();
  const isDesktop = useDesktop();
  const displaySidebar = isMobile || isDesktop;
  const hasReports = questionResults && questionResults.reports;

  useEffect(() => {
    if (question) {
      trackDisplayConsultation('results');
    }
  }, [question]);

  return (
    <>
      <GliderStylesheet />
      {displaySidebar && <ConsultationSidebar question={question} />}
      <ConsultationPageContentStyle id="main" data-cy-container="main">
        <HiddenItemStyle as="h2">
          {i18n.t('consultation.results.title', {
            question: question.wording.question,
          })}
        </HiddenItemStyle>
        <TileWithTitle
          title={i18n.t('consultation.results.context')}
          icon={<SvgInfos aria-hidden style={ResultsIconsStyle} />}
          id={RESULTS_CONTEXT}
        >
          <ResultsContext
            context={questionResults.context}
            aboutUrl={question.aboutUrl}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.key_figures.title')}
          icon={<SvgCalculator aria-hidden style={ResultsIconsStyle} />}
          id={RESULTS_KEY_FIGURES}
        >
          <KeyFigures
            results={questionResults.key_figures}
            themeColor={question.theme.color}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.top_ideas.title', {
            count: questionResults.top_ideas.length,
          })}
          icon={<SvgLightBulb aria-hidden style={ResultsIconsStyle} />}
          id={RESULTS_TOP_IDEAS}
        >
          <TopIdeas topIdeas={questionResults.top_ideas} />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.cartography.title')}
          icon={<SvgMap aria-hidden style={ResultsIconsStyle} />}
          id={RESULTS_CARTOGRAPHY}
        >
          <ResultsSlider
            data={questionResults.cartography}
            sliderName={CARTOGRAPHY_SLIDER}
          />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.proposals.controversials')}
          icon={<ResultsLightningIconStyle aria-hidden />}
          id={RESULTS_CONTROVERSIALS}
        >
          <ProposalsResults proposals={questionResults.controversials} />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.proposals.rejected')}
          icon={<ResultsThumbIconStyle aria-hidden />}
          id={RESULTS_REJECTED}
        >
          <ProposalsResults proposals={questionResults.rejected} isRejected />
        </TileWithTitle>
        <TileWithTitle
          title={i18n.t('consultation.results.participation.title')}
          id={RESULTS_PARTICIPATION}
        >
          <ResultsSlider
            data={questionResults.participation}
            sliderName={PARTICIPATION_SLIDER}
          />
        </TileWithTitle>
        {hasReports && (
          <TileWithTitle
            title={i18n.t('consultation.results.download.title')}
            id={RESULTS_REPORT}
          >
            <UnstyledListStyle>
              {questionResults.reports &&
                questionResults.reports.map(report => (
                  <ResultsDownloadItemStyle as="li" key={report.type}>
                    <ParagraphStyle as="span">
                      {i18n.t('consultation.results.download.type', {
                        extension: report.type,
                        weight: report.size,
                      })}
                    </ParagraphStyle>
                    <ResultsDownloadButtonStyle
                      as="a"
                      href={report.path}
                      download={`${question.slug}`}
                      onClick={() => trackDownloadReport(report.type)}
                    >
                      {i18n.t('consultation.results.download.button')}
                    </ResultsDownloadButtonStyle>
                  </ResultsDownloadItemStyle>
                ))}
            </UnstyledListStyle>
          </TileWithTitle>
        )}
      </ConsultationPageContentStyle>
    </>
  );
};
