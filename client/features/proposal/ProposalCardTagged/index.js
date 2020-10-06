// @flow
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type ProposalType } from 'Shared/types/proposal';
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
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';

type Props = {
  /** Object with all organisation's properties */
  proposal: ProposalType,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
};

export const ProposalCardTagged = ({ proposal, position, size }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  const proposalLink = getProposalLink(
    country,
    proposal.question.slug,
    proposal.id,
    proposal.slug
  );
  const canVote = isInProgress(proposal.question);

  return (
    <ProposalCardStyle aria-posinset={position} aria-setsize={size}>
      <AuthorWrapperStyle>
        <ProposalAuthorElement
          proposal={proposal}
          withAvatar
          withCreationDate
        />
      </AuthorWrapperStyle>
      <ProposalInnerStyle>
        <ColumnElementStyle>
          <ScreenReaderItemStyle>
            {i18n.t('proposal_card.content')}
          </ScreenReaderItemStyle>
          <ProposalStyle id={`proposal_content_${position}`} to={proposalLink}>
            {proposal.content}
          </ProposalStyle>
          {canVote ? (
            <Vote
              proposal={proposal}
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
        </ColumnElementStyle>

        {proposal.organisations && (
          <OrganisationsVote
            organisations={proposal.organisations}
            country={country}
          />
        )}
      </ProposalInnerStyle>
      <ProposalFooterWithTagElement tags={proposal.tags} />
    </ProposalCardStyle>
  );
};
