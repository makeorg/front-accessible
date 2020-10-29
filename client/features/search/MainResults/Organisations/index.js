// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { type OrganisationType } from 'Shared/types/organisation';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import { useMobile } from 'Client/hooks/useMedia';
import { Avatar } from 'Client/ui/Avatar';
import {
  SearchOrganisationsListStyle,
  SearchOrganisationsListItemStyle,
  SearchOrganisationItemStyle,
  SearchOrganisationAvatarStyle,
} from 'Client/features/search/Styled';

import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileAvatarLayoutStyle,
} from 'Client/ui/Elements/ProfileElements';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
import { MainResultsOrganisationsMobile } from './Mobile';

type Props = {
  organisations: OrganisationType[],
};

export const MainResultsOrganisations = ({ organisations }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isMobile = useMobile();

  if (isMobile) {
    return <MainResultsOrganisationsMobile organisations={organisations} />;
  }
  return (
    <div id="organisations_list" role="feed">
      <SearchOrganisationsListStyle>
        {organisations.map(organisation => (
          <SearchOrganisationsListItemStyle key={organisation.organisationId}>
            <SearchOrganisationItemStyle
              as={Link}
              to={getOrganisationProfileLink(country, organisation.slug)}
            >
              <ProfileAvatarLayoutStyle>
                <SearchOrganisationAvatarStyle>
                  <Avatar avatarSize={80} avatarUrl={organisation.avatarUrl} />
                </SearchOrganisationAvatarStyle>
                <ProfileContentWrapperStyle>
                  <ProfileTitleStyle>
                    <ScreenReaderItemStyle>
                      {i18n.t('profile.common.labels.organisation')}
                    </ScreenReaderItemStyle>
                    {formatOrganisationName(organisation.organisationName)}
                    <CertifiedIconStyle aria-hidden focusable="false" />
                  </ProfileTitleStyle>
                </ProfileContentWrapperStyle>
              </ProfileAvatarLayoutStyle>
            </SearchOrganisationItemStyle>
          </SearchOrganisationsListItemStyle>
        ))}
      </SearchOrganisationsListStyle>
    </div>
  );
};
