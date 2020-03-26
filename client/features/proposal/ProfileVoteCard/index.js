// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { type OrganisationType } from 'Shared/types/organisation';
import {
  getProposalLink,
  getOrganisationProfileLink,
} from 'Shared/helpers/url';
import { voteStaticParams } from 'Shared/constants/vote';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
import { SvgCheckedSymbol, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { VoteResultElement } from 'Client/ui/Proposal/VoteResultElement';
import { ProposalFooterWithTagElement } from 'Client/ui/Proposal/FooterElement/ProposalWithTag';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import {
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import {
  AuthorWrapperStyle,
  CertifiedIconStyle,
} from 'Client/ui/Proposal/AuthorElement/Styled';
import { ButtonIconWrapperStyle } from 'Client/ui/Elements/Vote/Styled';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { CardStyle } from 'Client/ui/Cards';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
import {
  ProfileVoteCardStyle,
  ProfileVoteWrapperStyle,
  ProfileVoteTitleStyle,
  ProfileHasVotedStyle,
} from './Styled';

type Props = {
  /** Object with all organisation's properties */
  organisation: OrganisationType,
  /** Object with all proposal's properties */
  proposal: ProposalType,
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
        <div>
          <RedLinkRouterStyle
            to={getOrganisationProfileLink(
              organisation.country,
              organisation.language,
              organisation.slug
            )}
          >
            {formatOrganisationName(organisation.organisationName)}
          </RedLinkRouterStyle>
          <SvgCheckedSymbol style={CertifiedIconStyle} />
          &nbsp;
          {i18n.t(`profile.organisation.proposal_${voteKey}`)}
        </div>
      </ProfileVoteTitleStyle>
      <ProfileVoteCardStyle>
        <CardStyle as="div">
          <AuthorWrapperStyle>
            <ProposalAuthorElement proposal={proposal} withAvatar />
          </AuthorWrapperStyle>
          <ProposalInnerStyle>
            <ScreenReaderItemStyle>
              {i18n.t('proposal_card.content')}
            </ScreenReaderItemStyle>
            <ProposalStyle
              id={`proposal_content_${position}`}
              to={getProposalLink(
                proposal.country,
                proposal.language,
                proposal.question.slug,
                proposal.id,
                proposal.slug
              )}
            >
              {proposal.content}
            </ProposalStyle>
            <VoteResultElement
              proposal={proposal}
              proposalId={proposal.id}
              votes={proposal.votes}
              votedKey={voteKey}
              proposalKey={proposal.proposalKey}
            />
          </ProposalInnerStyle>

          <ProposalFooterWithTagElement tags={proposal.tags} />
        </CardStyle>
      </ProfileVoteCardStyle>
    </ProfileVoteWrapperStyle>
  );
};
