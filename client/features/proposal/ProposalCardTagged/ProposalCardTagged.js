/* @flow */
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type ProposalType } from 'Shared/types/proposal';
import { CardStyle } from 'Client/ui/Cards';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { Tag } from 'Client/ui/Elements/Tag';
import { i18n } from 'Shared/i18n';
import { getVotesCount } from 'Shared/helpers/voteResult';
import { ProposalAuthorWithAvatar } from '../ProposalAuthor/WithAvatar';
import { ProposalStyle, FooterStyle, ProposalSeparatorStyle } from './Styled';

type Props = {
  proposal: ProposalType,
};

export const ProposalCardTagged = (props: Props) => {
  const { proposal } = props;
  return (
    <CardStyle>
      <ProposalAuthorWithAvatar
        author={proposal.author}
        createdAt={proposal.createdAt}
      />
      <ProposalSeparatorStyle />
      <ProposalStyle>{proposal.content}</ProposalStyle>
      <Vote
        proposalId={proposal.id}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
      />
      <CenterParagraphStyle>
        {i18n.t('vote.label', { count: getVotesCount(proposal.votes) })}
      </CenterParagraphStyle>
      <ProposalSeparatorStyle />
      <FooterStyle>
        {proposal.tags &&
          proposal.tags
            .slice(0, 4)
            .map(tag => <Tag name={tag.label} key={tag.tagId} />)}
      </FooterStyle>
    </CardStyle>
  );
};
