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
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SvgCheckedSymbol, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { VoteResultElement } from 'Client/ui/Proposal/VoteResultElement';
import { ProposalFooterWithTagElement } from 'Client/ui/Proposal/FooterElement/ProposalWithTag';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { TextColors } from 'Client/app/assets/vars/Colors';
import {
  ProposalCardStyle,
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { AuthorWrapperStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { ButtonIconWrapperStyle } from 'Client/ui/Elements/Vote/Styled';
import {
  ProfileVoteCardStyle,
  ProfileVoteWrapperStyle,
  ProfileVoteTitleStyle,
  ProfileVoteDescriptionStyle,
  ProfileHasVotedStyle,
} from './Styled';

type Props = {
  /** Object with all organisation's properties */
  organisation: TypeOrganisation,
  /** Object with all proposal's properties */
  proposal: TypeProposal,
  /** Nature of the organisation's vote */
  voteKey: string,
  /** Proposal's position in list */
  position: number,
  /** Size of proposals list */
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
    <ProfileVoteWrapperStyle aria-posinset={position} aria-setsize={size}>
      <ProfileVoteTitleStyle>
        <ProfileHasVotedStyle
          aria-label={voteAttributes.label}
          color={voteAttributes.color}
        >
          <ButtonIconWrapperStyle transform={voteAttributes.transform}>
            <SvgThumbsUp aria-hidden />
          </ButtonIconWrapperStyle>
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

      <ProfileVoteCardStyle>
        <ProposalCardStyle as="div">
          <AuthorWrapperStyle>
            <ProposalAuthorElement
              author={author}
              country={proposal.country}
              language={proposal.language}
              createdAt={proposal.createdAt}
              withAvatar
            />
          </AuthorWrapperStyle>
          <ProposalInnerStyle>
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
            />
          </ProposalInnerStyle>

          <ProposalFooterWithTagElement tags={proposal.tags} />
        </ProposalCardStyle>
      </ProfileVoteCardStyle>
    </ProfileVoteWrapperStyle>
  );
};
