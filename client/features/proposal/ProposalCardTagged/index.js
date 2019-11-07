// @flow
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getProposalLink } from 'Shared/helpers/url';
import { ProposalFooterWithTagElement } from 'Client/ui/Proposal/FooterElement/ProposalWithTag';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import {
  ProposalCardStyle,
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { OrganisationsVote } from 'Client/features/vote/Organisation';
import { isInProgress } from 'Shared/helpers/date';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';

type Props = {
  /** Object with all organisation's properties */
  proposal: TypeProposal,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
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
  const canVote = isInProgress(question);

  return (
    <ProposalCardStyle
      role="article"
      aria-posinset={position}
      aria-setsize={size}
    >
      <AuthorWrapperStyle>
        <ProposalAuthorElement
          author={author}
          country={proposal.country}
          language={proposal.language}
          createdAt={proposal.createdAt}
          withAvatar
          withCreationDate
        />
      </AuthorWrapperStyle>
      <ProposalInnerStyle>
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.content')}
        </ScreenReaderItemStyle>
        <ProposalStyle id={`proposal_content_${position}`} to={proposalLink}>
          {proposal.content}
        </ProposalStyle>
        {canVote ? (
          <Vote
            proposalId={proposal.id}
            votes={proposal.votes}
            proposalKey={proposal.proposalKey}
            index={position}
          />
        ) : (
          <DetailledVoteResults
            votes={proposal.votes}
            proposalId={proposal.id}
          />
        )}
        {proposal.organisations && (
          <OrganisationsVote
            organisations={proposal.organisations}
            country={proposal.country}
            language={proposal.country}
          />
        )}
      </ProposalInnerStyle>

      <ProposalFooterWithTagElement tags={proposal.tags} />
    </ProposalCardStyle>
  );
};
