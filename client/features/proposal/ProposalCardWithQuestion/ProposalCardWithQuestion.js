/* @flow */
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import {
  ProposalCardStyle,
  ProposalStyle,
} from 'Client/ui/Elements/ProposalCardElements';

type Props = {
  proposal: TypeProposal,
  position: number,
  size: number,
};

export const ProposalCardWithQuestion = (props: Props) => {
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
      role="article"
      aria-posinset={position}
      aria-setsize={size}
    >
      <ProposalAuthorElement
        author={author}
        country={proposal.country}
        language={proposal.language}
        createdAt={proposal.createdAt}
        withAvatar
      />
      <ProposalStyle href={proposalLink}>{proposal.content}</ProposalStyle>
      <Vote
        proposalId={proposal.id}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
      />
      <ProposalFooterWithQuestionElement
        question={question}
        consultationLink={getConsultationLink(
          proposal.country,
          proposal.language,
          question.slug
        )}
      />
    </ProposalCardStyle>
  );
};
