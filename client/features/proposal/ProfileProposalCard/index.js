// @flow
import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement/ProposalWithQuestion';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { ProposalStyle } from 'Client/ui/Elements/ProposalCardElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { ProfileProposalCardStyle } from './Styled';

type Props = {
  /** Object with all proposal's properties */
  proposal: TypeProposal,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
  size: number,
  /** Optional display for proposal's status */
  withStatus?: boolean,
};

export const ProfileProposalCard = (props: Props) => {
  const { proposal, position, size } = props;
  const { author, question } = proposal;
  const formattedProposalStatus = proposal.status.toLowerCase();
  const isProposalAccepted = formattedProposalStatus === 'accepted';

  return (
    <ProfileProposalCardStyle
      role="article"
      aria-posinset={position}
      aria-setsize={size}
      className={`proposal-${formattedProposalStatus}`}
    >
      <AuthorWrapperStyle>
        <ProposalAuthorElement
          author={author}
          country={proposal.country}
          language={proposal.language}
          createdAt={proposal.createdAt}
          withAvatar
          formattedProposalStatus={formattedProposalStatus}
        />
      </AuthorWrapperStyle>
      <ScreenReaderItemStyle>
        {i18n.t('proposal_card.content')}
      </ScreenReaderItemStyle>
      <ProposalStyle
        id={`proposal_content_${position}`}
        {...(isProposalAccepted
          ? {
              to: getProposalLink(
                proposal.country,
                proposal.language,
                question.slug,
                proposal.id,
                proposal.slug
              ),
              as: Link,
            }
          : { as: 'p' })}
      >
        {proposal.content}
      </ProposalStyle>
      {isProposalAccepted && (
        <DetailledVoteResults votes={proposal.votes} proposalId={proposal.id} />
      )}
      <ProposalFooterWithQuestionElement
        question={question}
        consultationLink={getConsultationLink(
          proposal.country,
          proposal.language,
          question.slug
        )}
        isProposalAccepted={isProposalAccepted}
      />
    </ProfileProposalCardStyle>
  );
};

ProfileProposalCard.defaultPropTypes = {
  withStatus: false,
};
