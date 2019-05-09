// @flow
import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { DetailledVoteResults } from 'Client/features/vote/DetailledResults';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement';
import {
  ProfileProposalCardStyle,
  ProposalSeparatorStyle,
  ProposalHeaderStyle,
  ProposalStyle,
} from './Styled';

type Props = {
  proposal: TypeProposal,
  position: number,
  size: number,
  withStatus?: boolean,
};

export const ProfileProposalCard = (props: Props) => {
  const { proposal, position, size } = props;
  const { author, question } = proposal;
  const formattedProposalStatus = proposal.status.toLowerCase();
  const isProposalAccepted = formattedProposalStatus === 'accepted';

  return (
    <ProfileProposalCardStyle
      aria-labelledby={`proposal_author_${position}`}
      aria-describedby={`proposal_content_${position}`}
      role="article"
      aria-posinset={position}
      aria-setsize={size}
      className={`proposal-${formattedProposalStatus}`}
    >
      <ProposalHeaderStyle>
        <ProposalAuthorElement
          author={author}
          createdAt={proposal.createdAt}
          withAvatar
          withStatus
          formattedProposalStatus={formattedProposalStatus}
        />
      </ProposalHeaderStyle>
      <ProposalSeparatorStyle />
      <ProposalStyle
        id={`proposal_content_${position}`}
        {...(isProposalAccepted
          ? {
              href: getProposalLink(
                question.country,
                question.language,
                question.slug,
                proposal.id,
                proposal.slug
              ),
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
          question.country,
          question.language,
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
