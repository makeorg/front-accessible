// @flow
import React, { useRef } from 'react';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { type TypeSliderParams } from 'Shared/types/views';
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
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import {
  SearchSliderListStyle,
  SearchSliderListItemStyle,
} from '../../Proposals/Styled';

type Props = {
  organisations: TypeOrganisation[],
};

const SEARCH_ORGANISATION_SLIDER: string = 'search-organisation';
const SearchOrganisationsSliderParams: TypeSliderParams = {
  slidesToShow: 1.15,
  interactiveChildren: {
    links: true,
  },
};

export const MainResultsOrganisationsMobile = ({ organisations }: Props) => {
  const sliderRef = useRef();
  const hasOrganisations = organisations.length > 0;
  useSlider(sliderRef, SearchOrganisationsSliderParams, hasOrganisations);

  return (
    <React.Fragment>
      <GliderStylesheet />
      <div className={`${SEARCH_ORGANISATION_SLIDER} glider-contain`}>
        <div className={`${SEARCH_ORGANISATION_SLIDER} glider`} ref={sliderRef}>
          <SearchSliderListStyle
            className={`${SEARCH_ORGANISATION_SLIDER} glider-track`}
          >
            {organisations.map(organisation => (
              <SearchSliderListItemStyle
                key={organisation.slug}
                className={SEARCH_ORGANISATION_SLIDER}
              >
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
                        <SvgCheckedSymbol
                          style={{
                            fontSize: '14px',
                            marginLeft: '5px',
                            fill: TextColors.Blue,
                          }}
                        />
                      </ProfileTitleStyle>
                    </ProfileContentWrapperStyle>
                  </ProfileAvatarLayoutStyle>
                </SearchOrganisationItemStyle>
              </SearchSliderListItemStyle>
            ))}
          </SearchSliderListStyle>
        </div>
      </div>
    </React.Fragment>
  );
};
