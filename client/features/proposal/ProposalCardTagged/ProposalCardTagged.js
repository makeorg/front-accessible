/* @flow */
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type ProposalType } from 'Shared/types/proposal';
import { ContentSeparatorStyle } from 'Client/ui/Elements/Separators';
import { CardStyle } from 'Client/ui/Cards';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { Tag } from 'Client/ui/Elements/Tag';
import { Avatar } from 'Client/ui/Avatar';
import { i18n } from 'Shared/i18n';
import { ProposalAuthor } from '../ProposalAuthor';
import { ProposalStyle, HeaderStyle, FooterStyle, AvatarStyle } from './Styled';

type Props = {
  proposal: ProposalType,
};

export const ProposalCardTagged = ({ proposal }: Props) => {
  return (
    <CardStyle>
      <HeaderStyle>
        <AvatarStyle>
          <Avatar />
        </AvatarStyle>
        <ProposalAuthor author={proposal.author} />
      </HeaderStyle>
      <ContentSeparatorStyle />
      <ProposalStyle>{proposal.content}</ProposalStyle>
      <Vote
        proposalId={proposal.id}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
      />
      <ParagraphStyle as="span">
        {i18n.t('vote.label', { count: proposal.votes.length })}
      </ParagraphStyle>
      <ContentSeparatorStyle />
      <FooterStyle>
        {proposal.tags &&
          proposal.tags.map(tag => <Tag name={tag.label} key={tag.tagId} />)}
      </FooterStyle>
    </CardStyle>
  );
};
