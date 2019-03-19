import React from 'react';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import { Svg } from 'Client/ui/Svg';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
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
        <IconInButtonStyle>
          <Svg type="SvgLightBulb" />
        </IconInButtonStyle>
        {i18n.t('consultation.proposal.title')}
      </ThirdLevelTtitleStyle>
      <ProposalTitleStyle fontColor={questionConfiguration.theme.color}>
        {question.question}
      </ProposalTitleStyle>
      <ProposalSubmit />
    </ProposalWrapperStyle>
  );
};
