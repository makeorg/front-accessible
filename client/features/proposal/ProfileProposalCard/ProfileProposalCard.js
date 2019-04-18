/* @flow */
import React from 'react';
import { type Question } from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { getProposalLink, getConsultationLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { DetailledVoteResults } from 'Client/features/vote/DetailledResults';
import { ProposalAuthorWithAvatar } from '../ProposalAuthor/WithAvatar';
import {
  ProfileProposalCardStyle,
  ProposalSeparatorStyle,
  ProposalHeaderStyle,
  ProposalStatusStyle,
  ProposalStyle,
  FooterStyle,
  PostedInLabelStyle,
  PostedInLinkStyle,
} from './Styled';

type Props = {
  question: Question,
  proposal: ProposalType,
  position: number,
  size: number,
  withStatus?: boolean,
};

export const ProfileProposalCard = (props: Props) => {
  const { question, proposal, position, size, withStatus } = props;
  const { author } = proposal;
  const proposalLink = getProposalLink(
    question.country,
    question.language,
    question.slug,
    proposal.id,
    proposal.slug
  );
  const consultationLink = getConsultationLink(
    question.country,
    question.language,
    question.slug
  );
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
        <ProposalAuthorWithAvatar
          author={author}
          createdAt={proposal.createdAt}
        />
        {withStatus && (
          <ProposalStatusStyle className={`status-${formattedProposalStatus}`}>
            {i18n.t(`proposal_card.status.${formattedProposalStatus}`)}
          </ProposalStatusStyle>
        )}
      </ProposalHeaderStyle>
      <ProposalSeparatorStyle />
      <ProposalStyle
        id={`proposal_content_${position}`}
        {...(isProposalAccepted ? { href: proposalLink } : { as: 'p' })}
      >
        {proposal.content}
      </ProposalStyle>
      {isProposalAccepted && <DetailledVoteResults votes={proposal.votes} />}
      <ProposalSeparatorStyle />
      <FooterStyle>
        <PostedInLabelStyle>
          {i18n.t('proposal_card.posted_label')}
        </PostedInLabelStyle>
        <PostedInLinkStyle
          {...(isProposalAccepted
            ? { href: consultationLink }
            : { as: 'span' })}
        >
          {question.question}
        </PostedInLinkStyle>
      </FooterStyle>
    </ProfileProposalCardStyle>
  );
};
