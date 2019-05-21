// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import {
  getProposalLink,
  getOrganisationProfileLink,
} from 'Shared/helpers/url';
import { voteStaticParams } from 'Shared/constants/vote';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { VoteResultElement } from 'Client/ui/Proposal/VoteResultElement';
import { ProposalFooterWithTagElement } from 'Client/ui/Proposal/FooterElement';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { ProposalSeparatorStyle } from 'Client/ui/Proposal/Styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import {
  ProposalCardStyle,
  ProposalStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import {
  ProfileVoteCardStyle,
  ProfileVoteTitleStyle,
  ProfileVoteDescriptionStyle,
  ProfileHasVotedStyle,
} from './Styled';

type Props = {
  organisation: TypeOrganisation,
  proposal: TypeProposal,
  voteKey: string,
  position: number,
  size: number,
};

export const ProfileVoteCard = ({
  voteKey,
  organisation,
  proposal,
  position,
  size,
}: Props) => {
  const { author, question } = proposal;
  const voteAttributes = voteStaticParams[voteKey];
  return (
    <ProfileVoteCardStyle>
      <ProfileVoteTitleStyle>
        <ProfileHasVotedStyle
          aria-label={voteAttributes.label}
          color={voteAttributes.color}
        >
          {voteAttributes.icon}
        </ProfileHasVotedStyle>
        <ProfileVoteDescriptionStyle>
          <RedLinkStyle
            href={getOrganisationProfileLink(
              organisation.country,
              organisation.language,
              organisation.slug
            )}
          >
            {organisation.organisationName}
          </RedLinkStyle>
          &nbsp;
          <SvgCheckedSymbol
            style={{ fontSize: '14px', fill: TextColors.Blue }}
          />
          &nbsp;
          {i18n.t(`profile.organisation.proposal_${voteKey}`)}
        </ProfileVoteDescriptionStyle>
      </ProfileVoteTitleStyle>

      <ProposalCardStyle
        aria-labelledby={`proposal_author_${position}`}
        aria-describedby={`proposal_content_${position}`}
        role="article"
        aria-posinset={position}
        aria-setsize={size}
      >
        <HiddenItemStyle id={`proposal_author_${position}`}>
          {author.firstName}
        </HiddenItemStyle>
        <ProposalAuthorElement
          author={author}
          country={proposal.country}
          language={proposal.language}
          createdAt={proposal.createdAt}
          withAvatar
        />
        <ProposalSeparatorStyle />
        <ProposalStyle
          id={`proposal_content_${position}`}
          href={getProposalLink(
            proposal.country,
            proposal.language,
            question.slug,
            proposal.id,
            proposal.slug
          )}
        >
          {proposal.content}
        </ProposalStyle>
        <VoteResultElement
          proposalId={proposal.id}
          votes={proposal.votes}
          votedKey={voteKey}
          withLabel={false}
        />
        <ProposalFooterWithTagElement tags={proposal.tags} />
      </ProposalCardStyle>
    </ProfileVoteCardStyle>
  );
};