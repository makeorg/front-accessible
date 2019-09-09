// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { ProposalFooterStyle, PostedInLabelStyle } from '../Styled';

type ProposalFooterWithQuestionElementProps = {
  question: TypeQuestion,
  consultationLink: string,
  isProposalAccepted?: boolean,
};

export const ProposalFooterWithQuestionElement = ({
  question,
  consultationLink,
  isProposalAccepted,
}: ProposalFooterWithQuestionElementProps) => {
  return (
    <ProposalFooterStyle>
      <PostedInLabelStyle as="span">
        {i18n.t('proposal_card.posted_label')}
      </PostedInLabelStyle>
      <RedLinkStyle
        {...(isProposalAccepted
          ? {
              href: consultationLink,
            }
          : { as: 'span' })}
      >
        {question.wording.question}
      </RedLinkStyle>
    </ProposalFooterStyle>
  );
};

ProposalFooterWithQuestionElement.defaultProps = {
  isProposalAccepted: true,
};
