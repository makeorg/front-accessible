// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type Location, type History } from 'history';
import { getRouteSearch } from 'Shared/routes';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import {
  trackDisplaySearchOragnisationsResult,
  trackClickSearchReturn,
} from 'Shared/services/Tracking';
import { searchOrganisations } from 'Shared/services/Organisation';
import { MetaTags } from 'Client/app/MetaTags';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SvgAngleArrowLeft, SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { Avatar } from 'Client/ui/Avatar';
import { TextColors } from 'Client/app/assets/vars/Colors';
import {
  SearchOrganisationsListStyle,
  SearchOrganisationItemStyle,
  SearchOrganisationAvatarStyle,
} from 'Client/features/search/Styled';
import {
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileAvatarLayoutStyle,
} from 'Client/ui/Elements/ProfileElements';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  SearchPageTitleStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchBackStyle,
  SearchBackArrowStyle,
  SearchPageWrapperStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

type Props = {
  location: Location,
  history: History,
  country: string,
  language: string,
};

export const SearchOrganisationsComponent = ({
  location,
  history,
  country,
  language,
}: Props) => {
  const params = new URLSearchParams(location.search);
  const term = params.get('query') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState<number>(0);
  const [organisations, setOrganisations] = useState<TypeOrganisation[]>([]);
  const isDesktop = useDesktop();

  const initOrganisations = async () => {
    setIsLoading(true);
    const { results, total } = await searchOrganisations(
      country,
      language,
      term
    );
    setOrganisations(results);
    setCount(total);
    setIsLoading(false);
  };
  useEffect(() => {
    initOrganisations();
  }, [term]);

  const handleReturn = () => {
    trackClickSearchReturn();
    history.push(getRouteSearch(country, language, term));
  };

  useEffect(() => {
    trackDisplaySearchOragnisationsResult();
  }, []);
  return (
    <SearchPageWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.organisations', {
          term,
          count,
        })}
      />
      <SearchBackStyle onClick={() => handleReturn()}>
        <SvgAngleArrowLeft style={SearchBackArrowStyle} aria-hidden />
        {i18n.t('common.back')}
      </SearchBackStyle>
      <SearchPageTitleStyle>
        {isLoading
          ? i18n.t('search.titles.loading')
          : i18n.t('search.titles.organisations', {
              term,
              count,
            })}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>
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
            ))}
          </SearchOrganisationsListStyle>
        </SearchPageResultsStyle>
        {isDesktop && <SearchSidebar />}
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const SearchOrganisations = connect(mapStateToProps)(
  SearchOrganisationsComponent
);
