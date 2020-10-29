import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { DeprecatedProposalSubmit } from 'Client/features/proposal/Deprecated/ProposalSubmit';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import {
  ProposalWrapperStyle,
  ProposalTitleStyle,
  ProposalTitleIconStyle,
} from '../Styled/Proposal';

type Props = {
  question: QuestionType,
};

export const ConsultationProposal = ({ question }: Props) => {
  const questionIsGreatCause = isGreatCause(question.operationKind);
  return (
    <ProposalWrapperStyle
      aria-labelledby="proposal_aside_title"
      id="proposal_submit"
      data-cy-container="proposal_submit"
    >
      <FourthLevelTitleStyle
        as="h3"
        id="proposal_aside_title"
        className={!questionIsGreatCause && 'not-great-cause-proposal'}
      >
        <ProposalTitleIconStyle aria-hidden focusable="false" />
        {i18n.t('consultation.proposal.title')}
      </FourthLevelTitleStyle>
      {questionIsGreatCause && (
        <ProposalTitleStyle fontColor={question.theme.color}>
          {question.question}
        </ProposalTitleStyle>
      )}
      <DeprecatedProposalSubmit />
    </ProposalWrapperStyle>
  );
};
