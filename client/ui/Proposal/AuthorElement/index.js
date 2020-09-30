// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
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
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import {
  AuthorDescriptionStyle,
  AuthorInfosStyle,
  ProposalStatusStyle,
  CertifiedIconStyle,
  InfosWrapperStyle,
} from './Styled';

type Props = {
  /** Object with author's properties */
  proposal: ProposalType,
  /** Include avatar */
  withAvatar?: boolean,
  /** Include creation date */
  withCreationDate?: boolean,
  /** Include formatted proposal status */
  formattedProposalStatus?: string,
  /** Specifc design for sequence avatar */
  isSequence?: boolean,
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
  isSequence,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const { author } = proposal;
  const isOrganisation = author.userType === TYPE_ORGANISATION;
  const isPersonality = author.userType === TYPE_PERSONALITY;
  const isBasicUser = author.userType === TYPE_USER;
  const isMobile = useMobile();
  return (
    <AuthorDescriptionStyle>
      <AuthorInfosStyle as="div" isSequence={isSequence}>
        {withAvatar && (
          <>
            {isSequence && (
              <Avatar
                avatarUrl={author.avatarUrl}
                isSequence={isSequence}
                avatarSize={isMobile ? 30 : 50}
              />
            )}
            {!isSequence && <Avatar avatarUrl={author.avatarUrl} />}
          </>
        )}
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.author.from')}
        </ScreenReaderItemStyle>
        <InfosWrapperStyle>
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
              <CertifiedIconStyle aria-hidden />
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
              <CertifiedIconStyle aria-hidden />
            </>
          )}
          {isBasicUser && formatAuthorName(author.firstName)}
          <ProposalAuthorAge age={author.age} />
        </InfosWrapperStyle>
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
