// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { Tag } from 'Client/ui/Elements/Tag';
import { ProposalSeparatorStyle } from 'Client/ui/Proposal/Styled';
import {
  ProposalFooterStyle,
  PostedInLabelStyle,
  PostedInLinkStyle,
} from './Styled';

const NUMBER_OF_TAGS_TO_DISPLAY = 4;

type ProposalFooterWithTagElementProps = {
  tags: TypeTag[],
};

export const ProposalFooterWithTagElement = ({
  tags,
}: ProposalFooterWithTagElementProps) => {
  if (!tags.length) {
    return null;
  }

  return (
    <React.Fragment>
      <ProposalSeparatorStyle />
      <ProposalFooterStyle>
        {tags.slice(0, NUMBER_OF_TAGS_TO_DISPLAY).map(tag => (
          <Tag name={tag.label} key={tag.tagId} />
        ))}
      </ProposalFooterStyle>
    </React.Fragment>
  );
};

type ProposalFooterWithQuestionElementProps = {
  question: TypeQuestion,
  consultationLink: string,
  isProposalAccepted: boolean,
};

export const ProposalFooterWithQuestionElement = ({
  question,
  consultationLink,
  isProposalAccepted,
}: ProposalFooterWithQuestionElementProps) => {
  return (
    <React.Fragment>
      <ProposalSeparatorStyle />
      <ProposalFooterStyle>
        <PostedInLabelStyle>
          {i18n.t('proposal_card.posted_label')}
        </PostedInLabelStyle>
        <PostedInLinkStyle
          {...(isProposalAccepted
            ? {
                href: consultationLink,
              }
            : { as: 'span' })}
        >
          {question.wording.question}
        </PostedInLinkStyle>
      </ProposalFooterStyle>
    </React.Fragment>
  );
};
