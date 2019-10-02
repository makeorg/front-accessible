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
  SvgLightBulb,
  SvgLightning,
  SvgThumbsUp,
  SvgMap,
} from 'Client/ui/Svg/elements';
import { PieChart } from 'Client/ui/Data/PieChart';
import { ConsultationPannelSidebar } from '../../Sidebar/ConsultationPannel';
import { ResultsContext } from '../../Results/Context';
import { ResultsIconsStyle } from '../../Results/Styled';
import { KeyFigures } from '../../Results/KeyFigures';
import { TopIdeas } from '../../Results/TopIdeas';
import { ProposalsResults } from '../../Results/Proposals';

type Props = {
  questionResults: TypeQuestionResults,
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
};

const Results = {
  type: 'pie',
  name: 'Pie Chart n° 1',
  legend:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  data: [
    {
      label: 'Justice sociale',
      sublabel: 'et fiscale',
      percent: 21,
      color: '#4c45a5',
      adjustLabel: { textAlign: 'left', xAxis: 2.5 },
    },
    {
      label: 'RSE et politique',
      sublabel: "d'entreprise",
      percent: 12,
      color: '#eb7575',
      adjustLabel: { textAlign: 'left', yAxis: 2.25 },
    },
    {
      label: 'Conditions',
      sublabel: 'de travail',
      percent: 9,
      color: '#eeb29a',
      adjustLabel: { textAlign: 'right', xAxis: 1.75, yAxis: 2.1 },
    },
    {
      label: 'Intêret général',
      percent: 7,
      color: '#ffd674',
      adjustLabel: { textAlign: 'right', xAxis: 1.75 },
    },
    {
      label: 'Méthodes',
      sublabel: 'de travail',
      percent: 6,
      color: '#fff689',
      adjustLabel: { textAlign: 'right', xAxis: 1.75 },
    },
    {
      label: 'Emploi',
      percent: 6,
      color: '#c1ebdd',
      adjustLabel: { textAlign: 'right', xAxis: 1.75, yAxis: 1.9 },
    },
    {
      label: 'Croissance',
      sublabel: 'compétitivité',
      percent: 6,
      color: '#59bad4',
      adjustLabel: { textAlign: 'right', xAxis: 1.75 },
    },
    {
      label: 'Code du',
      sublabel: 'travail et lois',
      percent: 5,
      color: '#5985af',
      adjustLabel: { textAlign: 'left', xAxis: 1.9 },
    },
    {
      label: 'Autre',
      percent: 28,
      color: '#ffffff',
      adjustLabel: { hidePercent: true, yAxis: 1.725 },
    },
  ],
};

export const ResultsPannel = ({
  questionResults,
  questionConfiguration,
  question,
}: Props) => {
  useEffect(() => {
    trackDisplayConsultation('results');
  }, []);

  return (
    <React.Fragment>
      <MetaTags
        title={i18n.t('meta.consultation.results.title', {
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
        title={i18n.t('consultation.results.top_ideas.title')}
        icon={<SvgLightBulb aria-hidden style={ResultsIconsStyle} />}
      >
        <TopIdeas topIdeas={questionResults.top_ideas} />
      </TileWithTitle>
      <TileWithTitle
        title={i18n.t('consultation.results.cartography.title')}
        icon={<SvgMap aria-hidden style={ResultsIconsStyle} />}
      >
        <PieChart
          name={Results.name}
          legend={Results.legend}
          data={Results.data}
        />
      </TileWithTitle>
      <TileWithTitle
        title={i18n.t('consultation.results.proposals.controversials')}
        icon={<SvgLightning aria-hidden style={ResultsIconsStyle} />}
      >
        <ProposalsResults proposals={questionResults.controversials} />
      </TileWithTitle>
      <TileWithTitle
        title={i18n.t('consultation.results.proposals.rejected')}
        icon={<SvgThumbsUp aria-hidden style={ResultsIconsStyle} />}
      >
        <ProposalsResults proposals={questionResults.rejected} isRejected />
      </TileWithTitle>
      <TileWithTitle title={i18n.t('consultation.results.participation.title')}>
        participation
      </TileWithTitle>
    </ConsultationPageContentStyle>
  </React.Fragment>
);
