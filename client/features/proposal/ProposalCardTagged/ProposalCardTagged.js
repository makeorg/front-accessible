/* @flow */
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type ProposalType } from 'Shared/types/proposal';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { Tag } from 'Client/ui/Elements/Tag';
import { ProposalAuthorWithAvatar } from '../ProposalAuthor/WithAvatar';
import {
  ProposalCardTaggedStyle,
  ProposalStyle,
  FooterStyle,
  ProposalSeparatorStyle,
} from './Styled';

type Props = {
  proposal: ProposalType,
  position: number,
  size: number,
};

export const ProposalCardTagged = (props: Props) => {
  const { proposal, position, size } = props;
  const { author } = proposal;
  return (
    <ProposalCardTaggedStyle
      aria-labelledby={`proposal_author_${position}`}
      aria-describedby={`proposal_content_${position}`}
      role="article"
      aria-posinset={position}
      aria-setsize={size}
    >
      <HiddenItemStyle id={`proposal_author_${position}`}>
        {author.firstName}
      </HiddenItemStyle>
      <ProposalAuthorWithAvatar
        author={author}
        createdAt={proposal.createdAt}
      />
      <ProposalSeparatorStyle />
      <ProposalStyle id={`proposal_content_${position}`}>
        {proposal.content}
      </ProposalStyle>
      <Vote
        proposalId={proposal.id}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
      />
      {proposal.tags && proposal.tags.length > 0 && (
        <React.Fragment>
          <ProposalSeparatorStyle />
          <FooterStyle>
            {proposal.tags.slice(0, 4).map(tag => (
              <Tag name={tag.label} key={tag.tagId} />
            ))}
          </FooterStyle>
        </React.Fragment>
      )}
    </ProposalCardTaggedStyle>
  );
};
