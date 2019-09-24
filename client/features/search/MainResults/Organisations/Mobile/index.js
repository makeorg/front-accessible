// @flow
import React from 'react';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { useSlider } from 'Client/hooks/useSlider';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { Avatar } from 'Client/ui/Avatar';
import {
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
import {
  SearchOrganisationsSliderParams,
  SearchOrganisationsSliderStylesheet,
} from './slider';

type Props = {
  organisations: TypeOrganisation[],
};
export const MainResultsOrganisationsMobile = ({ organisations }: Props) => {
  const organisationsLength = organisations.length <= 0;
  useSlider(
    'search-organisation-slider',
    SearchOrganisationsSliderParams,
    organisationsLength
  );

  return (
    <React.Fragment>
      <SearchOrganisationsSliderStylesheet />
      <div className="search-organisation-slider">
        <div className="searchslider__track" data-glide-el="track">
          <ul className="searchslider__slides">
            {organisations.map(organisation => (
              <li key={organisation.slug} className="searchslider__slide">
                <SearchOrganisationItemStyle
                  key={organisation.slug}
                  as={Link}
                  to={getOrganisationProfileLink(
                    organisation.country,
                    organisation.language,
                    organisation.slug
                  )}
                >
                  <ProfileAvatarLayoutStyle>
                    <SearchOrganisationAvatarStyle>
                      <Avatar
                        avatarSize={80}
                        avatarUrl={organisation.avatarUrl}
                      />
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
