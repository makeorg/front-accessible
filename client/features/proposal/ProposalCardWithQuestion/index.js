// @flow
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { OrganisationsVote } from 'Client/features/vote/Organisation';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement/ProposalWithQuestion';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import {
  ProposalCardStyle,
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { isInProgress } from 'Shared/helpers/date';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';

type Props = {
  /** Object with all proposal's properties */
  proposal: TypeProposal,
  /** Show or not organisation who voted */
  withOrganisations?: boolean,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
};

export const ProposalCardWithQuestion = ({
  proposal,
  withOrganisations = false,
  position,
  size,
}: Props) => {
  const proposalLink = getProposalLink(
    proposal.country,
    proposal.language,
    proposal.question.slug,
    proposal.id,
    proposal.slug
  );
  const canVote = isInProgress(proposal.question);

  return (
    <ProposalCardStyle
      role="article"
      aria-posinset={position}
      aria-setsize={size}
    >
      <AuthorWrapperStyle>
        <ProposalAuthorElement proposal={proposal} withAvatar />
      </AuthorWrapperStyle>
      <ProposalInnerStyle>
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.content')}
        </ScreenReaderItemStyle>
        <ProposalStyle to={proposalLink}>{proposal.content}</ProposalStyle>
        {canVote ? (
          <Vote
            proposalId={proposal.id}
            questionSlug={proposal.question.slug}
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
        {withOrganisations && proposal.organisations && (
          <OrganisationsVote
            organisations={proposal.organisations}
            country={proposal.country}
            language={proposal.country}
          />
        )}
      </ProposalInnerStyle>
      <ProposalFooterWithQuestionElement
        question={proposal.question}
        consultationLink={getConsultationLink(
          proposal.country,
          proposal.language,
          proposal.question.slug
        )}
      />
    </ProposalCardStyle>
  );
};
