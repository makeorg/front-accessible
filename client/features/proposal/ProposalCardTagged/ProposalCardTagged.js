/* @flow */
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { Tag } from 'Client/ui/Elements/Tag';
import { getProposalLink } from 'Shared/helpers/url';
import { ProposalAuthorWithAvatar } from '../ProposalAuthor/WithAvatar';
import {
  ProposalCardTaggedStyle,
  ProposalStyle,
  FooterStyle,
  ProposalSeparatorStyle,
} from './Styled';

type Props = {
  question: TypeQuestion,
  proposal: TypeProposal,
  position: number,
  size: number,
};

export const ProposalCardTagged = (props: Props) => {
  const { question, proposal, position, size } = props;
  const { author } = proposal;
  const displayTags = proposal.tags && proposal.tags.length > 0;
  const numberOfTagsToDisplay = 4;
  const proposalLink = getProposalLink(
    question.country,
    question.language,
    question.slug,
    proposal.id,
    proposal.slug
  );

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
      <ProposalStyle id={`proposal_content_${position}`} href={proposalLink}>
        {proposal.content}
      </ProposalStyle>
      <Vote
        proposalId={proposal.id}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
      />
      {displayTags && (
        <React.Fragment>
          <ProposalSeparatorStyle />
          <FooterStyle>
            {proposal.tags.slice(0, numberOfTagsToDisplay).map(tag => (
              <Tag name={tag.label} key={tag.tagId} />
            ))}
          </FooterStyle>
        </React.Fragment>
      )}
    </ProposalCardTaggedStyle>
  );
};
