// @flow
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type ProposalType } from 'Shared/types/proposal';
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
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
  /** Show or not organisation who voted */
  withOrganisations?: boolean,
  /** Enable radius on Mobile */
  withMobileRadius?: boolean,
};

export const ProposalCardWithQuestion = ({
  proposal,
  position,
  size,
  withOrganisations = false,
  withMobileRadius = false,
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
      className={withMobileRadius ? 'mobile-radius' : ''}
      aria-posinset={position}
      aria-setsize={size}
    >
      <AuthorWrapperStyle>
        <ProposalAuthorElement proposal={proposal} withAvatar />
      </AuthorWrapperStyle>
      <ProposalInnerStyle>
        <ColumnElementStyle>
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
        </ColumnElementStyle>
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
