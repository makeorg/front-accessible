import React from 'react';
import { type Question } from 'Shared/types/question';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { i18n } from 'Shared/i18n';
import { SvgLightBulb } from 'Client/ui/Svg/elements';
import { ConsultationIconStyle } from 'Client/pages/Operation/Styled';
import { isGreatCause } from 'Shared/helpers/question';
import { ProposalWrapperStyle, ProposalTitleStyle } from '../Styled/Proposal';

type Props = {
  question: Question,
};

export const ConsultationProposalComponent = ({ question }: Props) => {
  const questionIsGreatCause = isGreatCause(question.operationKind);
  return (
    <ProposalWrapperStyle
      aria-labelledby="proposal_aside_title"
      id="proposal_submit"
    >
      <FourthLevelTitleStyle
        as="h3"
        id="proposal_aside_title"
        className={!questionIsGreatCause && 'not-great-cause-proposal'}
      >
        <ConsultationIconStyle aria-hidden>
          <SvgLightBulb style={{ fontSize: '16px' }} />
        </ConsultationIconStyle>
        {i18n.t('consultation.proposal.title')}
      </FourthLevelTitleStyle>
      {questionIsGreatCause && (
        <ProposalTitleStyle fontColor={question.theme.color}>
          {question.question}
        </ProposalTitleStyle>
      )}
      <ProposalSubmit />
    </ProposalWrapperStyle>
  );
};
