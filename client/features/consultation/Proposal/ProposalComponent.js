import React from 'react';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { i18n } from 'Shared/i18n';
import { SvgLightBulb } from 'Client/ui/Svg/elements';
import { ConsultationIconStyle } from 'Client/pages/Operation/Styled';
import { ProposalWrapperStyle, ProposalTitleStyle } from '../Styled/Proposal';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const ConsultationProposalComponent = (props: Props) => {
  const { question, questionConfiguration } = props;
  return (
    <ProposalWrapperStyle
      aria-labelledby="proposal_aside_title"
      id="proposal_submit"
    >
      <FourthLevelTitleStyle as="h3" id="proposal_aside_title">
        <ConsultationIconStyle aria-hidden>
          <SvgLightBulb style={{ fontSize: '16px' }} />
        </ConsultationIconStyle>
        {i18n.t('consultation.proposal.title')}
      </FourthLevelTitleStyle>
      <ProposalTitleStyle fontColor={questionConfiguration.theme.color}>
        {question.question}
      </ProposalTitleStyle>
      <ProposalSubmit />
    </ProposalWrapperStyle>
  );
};
