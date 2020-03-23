// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { isInProgress } from 'Shared/helpers/date';
import { type ProposalType } from 'Shared/types/proposal';
import {
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { Vote } from 'Client/features/vote';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { getProposalLink } from 'Shared/helpers/url';
import {
  PopularProposalWrapperStyle,
  PopularProposalHeader,
  PopularProposalTagStyle,
} from './style';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
};

export const PopularProposalCard = ({
  proposal,
  position = 0,
  size = 0,
}: Props) => {
  const canVote = isInProgress(proposal.question);
  return (
    <PopularProposalWrapperStyle
      role="article"
      aria-posinset={position}
      aria-setsize={size}
    >
      <PopularProposalHeader aria-hidden>
        {`#${position}`}
      </PopularProposalHeader>
      <AuthorWrapperStyle>
        <ProposalAuthorElement proposal={proposal} withAvatar />
      </AuthorWrapperStyle>
      <ProposalInnerStyle>
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.content')}
        </ScreenReaderItemStyle>
        <ProposalStyle
          id={`proposal_content_${position}`}
          to={getProposalLink(
            proposal.country,
            proposal.language,
            proposal.slug,
            proposal.id,
            proposal.slug
          )}
        >
          {proposal.content}
        </ProposalStyle>
        {canVote ? (
          <Vote
            proposalId={proposal.id}
            votes={proposal.votes}
            proposalKey={proposal.proposalKey}
            index={position}
            questionSlug={proposal.slug}
          />
        ) : (
          <DetailledVoteResults
            votes={proposal.votes}
            proposalId={proposal.id}
          />
        )}
      </ProposalInnerStyle>
      {proposal.selectedStakeTag && (
        <PopularProposalTagStyle>
          <ScreenReaderItemStyle
            dangerouslySetInnerHTML={{
              __html: i18n.t('consultation.tags.proposal_list'),
            }}
          />
          {proposal.selectedStakeTag.label}
        </PopularProposalTagStyle>
      )}
    </PopularProposalWrapperStyle>
  );
};
