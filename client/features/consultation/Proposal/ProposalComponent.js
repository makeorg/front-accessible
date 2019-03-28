import React from 'react';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { SvgLightBulb } from 'Client/ui/Svg/elements';
import { ProposalWrapperStyle, ProposalTitleStyle } from '../Styled/Proposal';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const ConsultationProposalComponent = (props: Props) => {
  const { question, questionConfiguration } = props;
  return (
    <ProposalWrapperStyle>
      <ThirdLevelTtitleStyle>
        <IconWrapperStyle aria-hidden>
          <SvgLightBulb />
        </IconWrapperStyle>
        {i18n.t('consultation.proposal.title')}
      </ThirdLevelTtitleStyle>
      <ProposalTitleStyle fontColor={questionConfiguration.theme.color}>
        {question.question}
      </ProposalTitleStyle>
      <ProposalSubmit />
    </ProposalWrapperStyle>
  );
};
