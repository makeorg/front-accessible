// @flow
import React from 'react';
import { type ProposalType } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement/ProposalWithQuestion';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { ProposalStyle } from 'Client/ui/Elements/ProposalCardElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { ProfileProposalCardStyle } from './Styled';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
};

export const ProfileProposalCard = ({ proposal, position, size }: Props) => {
  const formattedProposalStatus = proposal.status.toLowerCase();
  const isProposalAccepted = formattedProposalStatus === 'accepted';
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  return (
    <ProfileProposalCardStyle
      aria-posinset={position}
      aria-setsize={size}
      className={`proposal-${formattedProposalStatus}`}
    >
      <AuthorWrapperStyle>
        <ProposalAuthorElement
          proposal={proposal}
          withAvatar
          formattedProposalStatus={formattedProposalStatus}
        />
      </AuthorWrapperStyle>
      <ScreenReaderItemStyle>
        {i18n.t('proposal_card.content')}
      </ScreenReaderItemStyle>
      <ProposalStyle
        id={`proposal_content_${position}`}
        to={
          isProposalAccepted
            ? getProposalLink(
                country,
                proposal.question.slug,
                proposal.id,
                proposal.slug
              )
            : undefined
        }
        as={isProposalAccepted ? undefined : 'p'}
      >
        {proposal.content}
      </ProposalStyle>
      {isProposalAccepted && (
        <DetailledVoteResults votes={proposal.votes} proposalId={proposal.id} />
      )}
      <ProposalFooterWithQuestionElement
        question={proposal.question}
        consultationLink={getConsultationLink(country, proposal.question.slug)}
      />
    </ProfileProposalCardStyle>
  );
};
