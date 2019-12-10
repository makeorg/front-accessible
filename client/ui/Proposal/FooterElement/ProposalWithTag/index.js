// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ProposalFooterTagListStyle,
  ProposalFooterTagListItemStyle,
} from '../Styled';

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
      <ProposalFooterTagListStyle>
        {tags
          .filter(tag => tag.display === true)
          .slice(0, NUMBER_OF_TAGS_TO_DISPLAY)
          .map(tag => (
            <ProposalFooterTagListItemStyle as="li" key={tag.tagId}>
              {tag.label}
            </ProposalFooterTagListItemStyle>
          ))}
      </ProposalFooterTagListStyle>
    </React.Fragment>
  );
};
