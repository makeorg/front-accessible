// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { getProposalLink } from 'Shared/helpers/url';
import { voteStaticParams } from 'Shared/constants/vote';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SvgCheckedSymbol, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { VoteResultElement } from 'Client/ui/Proposal/VoteResultElement';
import { ProposalFooterWithTagElement } from 'Client/ui/Proposal/FooterElement';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { ProposalSeparatorStyle } from 'Client/ui/Proposal/Styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { ProfileVoteCardStyle, ProfileHasVotedStyle } from './Styled';
import {
  ProposalCardTaggedStyle,
  ProposalStyle,
} from '../ProposalCardTagged/Styled';

type Props = {
  organisation: TypeOrganisation,
  proposal: TypeProposal,
  voteKey: string,
};

export const ProfileVoteCard = ({ voteKey, organisation, proposal }: Props) => {
  const position = 0;
  const size = 1;
  const { author, question } = proposal;
  const voteAttributes = voteStaticParams[voteKey];
  return (
    <ProfileVoteCardStyle>
      <div>
        <React.Fragment>
          <ProfileHasVotedStyle
            aria-label={voteAttributes.label}
            color={voteAttributes.color}
          >
            <SvgThumbsUp />
          </ProfileHasVotedStyle>
          <RedLinkStyle href="#">{organisation.organisationName}</RedLinkStyle>
          &nbsp;
          <SvgCheckedSymbol
            style={{ fontSize: '14px', fill: TextColors.Blue }}
          />
          &nbsp;
          {i18n.t(`profile.organisation.proposal_${voteKey}`)}
        </React.Fragment>
      </div>
      <ProposalCardTaggedStyle
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
          createdAt={proposal.createdAt}
          withAvatar
        />
        <ProposalSeparatorStyle />
        <ProposalStyle
          id={`proposal_content_${position}`}
          href={getProposalLink(
            question.country,
            question.language,
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
        />
        <ProposalFooterWithTagElement tags={proposal.tags} />
      </ProposalCardTaggedStyle>
    </ProfileVoteCardStyle>
  );
};
