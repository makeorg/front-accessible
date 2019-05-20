/* @flow */
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getProposalLink } from 'Shared/helpers/url';
import { ProposalFooterWithTagElement } from 'Client/ui/Proposal/FooterElement';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { ProposalSeparatorStyle } from 'Client/ui/Proposal/Styled';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import {
  ProposalCardStyle,
  ProposalStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { OrganisationsVote } from 'Client/features/vote/Organisation';

type Props = {
  proposal: TypeProposal,
  position: number,
  size: number,
};

export const ProposalCardTagged = (props: Props) => {
  const { proposal, position, size } = props;
  const { author, question } = proposal;
  const proposalLink = getProposalLink(
    proposal.country,
    proposal.language,
    question.slug,
    proposal.id,
    proposal.slug
  );

  return (
    <ProposalCardStyle
      aria-labelledby={`proposal_author_${position}`}
      aria-describedby={`proposal_content_${position}`}
      role="article"
      aria-posinset={position}
      aria-setsize={size}
    >
      <HiddenItemStyle id={`proposal_author_${position}`}>
        {author.firstName}
      </HiddenItemStyle>
      <ProposalAuthorElement
        author={author}
        country={proposal.country}
        language={proposal.language}
        createdAt={proposal.createdAt}
        withAvatar
      />
      <ProposalSeparatorStyle />
      <ProposalStyle id={`proposal_content_${position}`} href={proposalLink}>
        {proposal.content}
      </ProposalStyle>
      <Vote
        proposalId={proposal.id}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
        index={position}
      />
      {proposal.organisations && (
        <OrganisationsVote
          organisations={proposal.organisations}
          country={proposal.country}
          language={proposal.country}
        />
      )}
      <ProposalFooterWithTagElement tags={proposal.tags} />
    </ProposalCardStyle>
  );
};
