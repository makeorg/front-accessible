// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import {
  getOrganisationProfileLink,
  getPersonalityProfileLink,
} from 'Shared/helpers/url';
import { Avatar } from 'Client/ui/Avatar';
import { useMobile } from 'Client/hooks/useMedia';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { trackClickPublicProfile } from 'Shared/services/Tracking';
import {
  TYPE_ORGANISATION,
  TYPE_PERSONALITY,
  TYPE_USER,
} from 'Shared/constants/user';
import {
  formatAuthorName,
  formatOrganisationName,
} from 'Shared/helpers/stringFormatter';
import { CertifiedIconStyle } from 'Client/ui/Proposal/DeprecatedAuthor/Styled';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthorInfosStyle, InfosWrapperStyle } from './style';

type Props = {
  /** Object with author's properties */
  proposal: ProposalType,
  /** Enable seuquence context & specials styles */
  isSequence?: boolean,
};

export const ProposalAuthorAge = ({ age }) => {
  if (!age) {
    return null;
  }

  return <>{`, ${i18n.t('proposal_card.author.age', { age })}`}</>;
};

export const ProposalAuthorInformations = ({ author, isSequence }) => {
  const { country } = useParams();

  const isOrganisation = author.userType === TYPE_ORGANISATION;
  const isPersonality = author.userType === TYPE_PERSONALITY;
  const isBasicUser = author.userType === TYPE_USER;

  return (
    <>
      <ScreenReaderItemStyle>
        {i18n.t('proposal_card.author.from')}
      </ScreenReaderItemStyle>
      <InfosWrapperStyle className={isSequence && 'sequence'}>
        {isOrganisation && (
          <>
            <RedLinkRouterStyle
              onClick={() => trackClickPublicProfile(TYPE_ORGANISATION)}
              to={getOrganisationProfileLink(country, author.organisationSlug)}
            >
              {formatOrganisationName(author.organisationName)}
            </RedLinkRouterStyle>
            <CertifiedIconStyle aria-hidden focusable="false" />
          </>
        )}
        {isPersonality && (
          <>
            <RedLinkRouterStyle
              onClick={() => trackClickPublicProfile(TYPE_PERSONALITY)}
              to={getPersonalityProfileLink(country, author.userId)}
            >
              {formatAuthorName(author.firstName)}
            </RedLinkRouterStyle>
            <CertifiedIconStyle aria-hidden focusable="false" />
          </>
        )}
        {isBasicUser && formatAuthorName(author.firstName)}
        <ProposalAuthorAge age={author.age} />
      </InfosWrapperStyle>
    </>
  );
};

const setAvatarSize = (isMobile: boolean, isSequence: boolean) => {
  if (!isMobile && isSequence) {
    return 50;
  }

  return 36;
};

export const ProposalAuthor = ({ proposal, isSequence = false }: Props) => {
  const { author } = proposal;
  const isMobile = useMobile();
  const avatarSize = setAvatarSize(isMobile, isSequence);

  return (
    <>
      <AuthorInfosStyle>
        <Avatar
          avatarUrl={author.avatarUrl}
          isSequence
          avatarSize={avatarSize}
        />
      </AuthorInfosStyle>
      <ProposalAuthorInformations author={author} isSequence={isSequence} />
    </>
  );
};
