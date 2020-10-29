// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { type StateRoot } from 'Shared/store/types';
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
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { useSelector } from 'react-redux';
import { SequenceAuthorInfosStyle, SequenceInfosWrapperStyle } from './style';

type Props = {
  /** Object with author's properties */
  proposal: ProposalType,
};

const ProposalAuthorAge = ({ age }) => {
  if (!age) {
    return null;
  }

  return <>{`, ${i18n.t('proposal_card.author.age', { age })}`}</>;
};

export const SequenceProposalAuthor = ({ proposal }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const { author } = proposal;
  const isOrganisation = author.userType === TYPE_ORGANISATION;
  const isPersonality = author.userType === TYPE_PERSONALITY;
  const isBasicUser = author.userType === TYPE_USER;
  const isMobile = useMobile();
  return (
    <>
      <SequenceAuthorInfosStyle>
        <Avatar
          avatarUrl={author.avatarUrl}
          isSequence
          avatarSize={isMobile ? 36 : 50}
        />
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.author.from')}
        </ScreenReaderItemStyle>
        <SequenceInfosWrapperStyle>
          {isOrganisation && (
            <>
              <RedLinkRouterStyle
                onClick={() => trackClickPublicProfile(TYPE_ORGANISATION)}
                to={getOrganisationProfileLink(
                  country,
                  author.organisationSlug
                )}
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
                to={getPersonalityProfileLink(country, proposal.userId)}
              >
                {formatAuthorName(author.firstName)}
              </RedLinkRouterStyle>
              <CertifiedIconStyle aria-hidden focusable="false" />
            </>
          )}
          {isBasicUser && formatAuthorName(author.firstName)}
          <ProposalAuthorAge age={author.age} />
        </SequenceInfosWrapperStyle>
      </SequenceAuthorInfosStyle>
    </>
  );
};
