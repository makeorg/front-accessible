// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { useMobile } from 'Client/hooks/useMedia';
import { Avatar } from 'Client/ui/Avatar';
import {
  SearchOrganisationsListStyle,
  SearchOrganisationItemStyle,
  SearchOrganisationAvatarStyle,
} from 'Client/features/search/Styled';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import {
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileAvatarLayoutStyle,
} from 'Client/ui/Elements/ProfileElements';
import { MainResultsOrganisationsMobile } from './Mobile';

type Props = {
  country: string,
  language: string,
  organisations: TypeOrganisation[],
};
const MainResultsOrganisationsComponent = ({
  country,
  language,
  organisations,
}: Props) => {
  const isMobile = useMobile();

  if (isMobile) {
    return <MainResultsOrganisationsMobile organisations={organisations} />;
  }
  return (
    <div id="organisations_list" role="feed">
      <SearchOrganisationsListStyle>
        {organisations.map(organisation => (
          <SearchOrganisationItemStyle
            key={organisation.organisationId}
            as={Link}
            to={getOrganisationProfileLink(
              country,
              language,
              organisation.slug
            )}
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
                  {organisation.organisationName}
                  &nbsp;
                  <SvgCheckedSymbol
                    style={{ fontSize: '14px', fill: TextColors.Blue }}
                  />
                </ProfileTitleStyle>
              </ProfileContentWrapperStyle>
            </ProfileAvatarLayoutStyle>
          </SearchOrganisationItemStyle>
        ))}
      </SearchOrganisationsListStyle>
    </div>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const MainResultsOrganisations = connect(mapStateToProps)(
  MainResultsOrganisationsComponent
);
