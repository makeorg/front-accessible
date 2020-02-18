// @flow
import React, { useRef } from 'react';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { type TypeSliderParams } from 'Shared/types/views';
import { useSlider } from 'Client/hooks/useSlider';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { Avatar } from 'Client/ui/Avatar';
import { SearchOrganisationItemStyle } from 'Client/features/search/Styled';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileAvatarLayoutStyle,
  ProfileAvatarStyle,
} from 'Client/ui/Elements/ProfileElements';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
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
    <>
      <GliderStylesheet />
      <div className={`${SEARCH_ORGANISATION_SLIDER} glider-contain`}>
        <div className={`${SEARCH_ORGANISATION_SLIDER} glider`} ref={sliderRef}>
          <SearchSliderListStyle
            className={`${SEARCH_ORGANISATION_SLIDER} glider-track with-avatar`}
          >
            {organisations.map(organisation => (
              <SearchSliderListItemStyle
                key={organisation.slug}
                className={SEARCH_ORGANISATION_SLIDER}
              >
                <SearchOrganisationItemStyle
                  className="mobile-radius"
                  key={organisation.slug}
                  as={Link}
                  to={getOrganisationProfileLink(
                    organisation.country,
                    organisation.language,
                    organisation.slug
                  )}
                >
                  <ProfileAvatarLayoutStyle>
                    <ProfileAvatarStyle>
                      <Avatar
                        avatarSize={80}
                        avatarUrl={organisation.avatarUrl}
                      />
                    </ProfileAvatarStyle>
                    <ProfileContentWrapperStyle>
                      <ProfileTitleStyle>
                        <ScreenReaderItemStyle>
                          {i18n.t('profile.common.labels.organisation')}
                        </ScreenReaderItemStyle>
                        {organisation.organisationName}
                        <SvgCheckedSymbol style={CertifiedIconStyle} />
                      </ProfileTitleStyle>
                    </ProfileContentWrapperStyle>
                  </ProfileAvatarLayoutStyle>
                </SearchOrganisationItemStyle>
              </SearchSliderListItemStyle>
            ))}
          </SearchSliderListStyle>
        </div>
      </div>
    </>
  );
};
