// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import {
  getOrganisationProfileLink,
  getPersonalityProfileLink,
} from 'Shared/helpers/url';
import { Avatar } from 'Client/ui/Avatar';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { trackClickPublicProfile } from 'Shared/services/Tracking';
import {
  TYPE_ORGANISATION,
  TYPE_PERSONALITY,
  TYPE_USER,
} from 'Shared/constants/user';
import {
  AuthorDescriptionStyle,
  AuthorInfosStyle,
  ProposalStatusStyle,
  CertifiedIconStyle,
} from './Styled';

type Props = {
  /** Object with author's properties */
  proposal: TypeProposal,
  /** Include avatar */
  withAvatar?: boolean,
  /** Include creation date */
  withCreationDate?: boolean,
  /** Include formatted proposal status */
  formattedProposalStatus?: string,
};

const ProposalAuthorAge = ({ age }) => {
  if (!age) {
    return null;
  }

  return <>{`, ${i18n.t('proposal_card.author.age', { age })}`}</>;
};

export const ProposalAuthorElement = ({
  proposal,
  withAvatar,
  withCreationDate,
  formattedProposalStatus,
}: Props) => {
  const { author, language, country } = proposal;
  const isOrganisation = author.userType === TYPE_ORGANISATION;
  const isPersonality = author.userType === TYPE_PERSONALITY;
  const isBasicUser = author.userType === TYPE_USER;

  return (
    <AuthorDescriptionStyle>
      <AuthorInfosStyle as="div">
        {withAvatar && (
          <>
            <Avatar avatarUrl={author.avatarUrl} />
            <> </>
          </>
        )}
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.author.from')}
        </ScreenReaderItemStyle>
        {isOrganisation && (
          <>
            <RedLinkStyle
              onClick={() => trackClickPublicProfile(TYPE_ORGANISATION)}
              to={getOrganisationProfileLink(
                country,
                language,
                author.organisationSlug
              )}
            >
              {author.organisationName}
            </RedLinkStyle>
            <SvgCheckedSymbol style={CertifiedIconStyle} />
          </>
        )}
        {isPersonality && (
          <>
            <RedLinkStyle
              onClick={() => trackClickPublicProfile(TYPE_PERSONALITY)}
              to={getPersonalityProfileLink(country, language, proposal.userId)}
            >
              {author.firstName}
            </RedLinkStyle>
            <SvgCheckedSymbol style={CertifiedIconStyle} />
          </>
        )}
        {isBasicUser && author.firstName}
        <ProposalAuthorAge age={author.age} />
        {withCreationDate && !!proposal.createdAt && (
          <>
            &nbsp;&bull;&nbsp;
            <ScreenReaderItemStyle>
              {i18n.t('proposal_card.author.date')}
            </ScreenReaderItemStyle>
            <time dateTime={proposal.createdAt}>
              {DateHelper.creationDateFormat(proposal.createdAt)}
            </time>
          </>
        )}
      </AuthorInfosStyle>
      {formattedProposalStatus && (
        <ProposalStatusStyle className={`status-${formattedProposalStatus}`}>
          <ScreenReaderItemStyle>
            {i18n.t('proposal_card.status.title')}
          </ScreenReaderItemStyle>
          {i18n.t(`proposal_card.status.${formattedProposalStatus}`)}
        </ProposalStatusStyle>
      )}
    </AuthorDescriptionStyle>
  );
};

ProposalAuthorElement.defaultProps = {
  withAvatar: false,
  withCreationDate: false,
  formattedProposalStatus: undefined,
};
