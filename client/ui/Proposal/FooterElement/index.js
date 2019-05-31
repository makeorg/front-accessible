// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { Tag } from 'Client/ui/Elements/Tag';
import { TagListItemStyle } from 'Client/features/consultation/Styled/TagFilter';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ProposalTagListStyle,
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
      <ScreenReaderItemStyle
        as="p"
        dangerouslySetInnerHTML={{
          __html: i18n.t('consultation.tags.proposal_list'),
        }}
      />
      <ProposalTagListStyle>
        {tags.slice(0, NUMBER_OF_TAGS_TO_DISPLAY).map(tag => (
          <TagListItemStyle key={tag.tagId}>
            <Tag name={tag.label} key={tag.tagId} />
          </TagListItemStyle>
        ))}
      </ProposalTagListStyle>
    </React.Fragment>
  );
};

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
    <React.Fragment>
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

ProposalFooterWithQuestionElement.defaultProps = {
  isProposalAccepted: true,
};
