// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { ProposalFooterStyle, PostedInLabelStyle } from '../Styled';

type Props = {
  question: TypeQuestion,
  consultationLink: string,
};

export const ProposalFooterWithQuestionElement = ({
  question,
  consultationLink,
}: Props) => (
  <ProposalFooterStyle>
    <PostedInLabelStyle as="span">
      {i18n.t('proposal_card.posted_label')}
    </PostedInLabelStyle>
    <RedLinkStyle to={consultationLink}>
      {question.wording.question}
    </RedLinkStyle>
  </ProposalFooterStyle>
);
