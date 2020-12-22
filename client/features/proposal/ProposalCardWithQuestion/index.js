// @flow
import React from 'react';
import { Vote } from 'Client/features/vote';
import { type ProposalType } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { OrganisationsVote } from 'Client/features/vote/Organisation';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement/ProposalWithQuestion';
import { DeprecatedProposalAuthor } from 'Client/ui/Proposal/DeprecatedAuthor';
import {
  ProposalCardStyle,
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { isInProgress } from 'Shared/helpers/date';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/DeprecatedAuthor/Styled';
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
    proposal.context.country,
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
        <DeprecatedProposalAuthor proposal={proposal} withAvatar />
      </AuthorWrapperStyle>
      <ProposalInnerStyle>
        <ColumnElementStyle>
          <ScreenReaderItemStyle>
            {i18n.t('proposal_card.content')}
          </ScreenReaderItemStyle>
          <ProposalStyle to={proposalLink} lang={proposal.question.language}>
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
        {withOrganisations && proposal.organisations && (
          <OrganisationsVote
            organisations={proposal.organisations}
            country={proposal.context.country}
          />
        )}
      </ProposalInnerStyle>
      <ProposalFooterWithQuestionElement
        question={proposal.question}
        consultationLink={getConsultationLink(
          proposal.context.country,
          proposal.question.slug
        )}
      />
    </ProposalCardStyle>
  );
};
