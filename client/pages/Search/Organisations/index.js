// @flow
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { type StateRoot } from 'Shared/store/types';
import { MetaTags } from 'Client/app/MetaTags';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SvgAngleArrowLeft, SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { Avatar } from 'Client/ui/Avatar';
import {
  SearchOrganisationsListStyle,
  SearchOrganisationItemStyle,
  SearchOrganisationsListItemStyle,
} from 'Client/features/search/Styled';
import {
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileAvatarLayoutStyle,
  ProfileAvatarStyle,
} from 'Client/ui/Elements/ProfileElements';
import { useDesktop } from 'Client/hooks/useMedia';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
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
};

export const SearchOrganisations = ({ history, location }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
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
              <SearchOrganisationsListItemStyle
                key={organisation.organisationId}
              >
                <SearchOrganisationItemStyle
                  className="mobile-radius"
                  as={Link}
                  to={getOrganisationProfileLink(
                    country,
                    language,
                    organisation.slug
                  )}
                >
                  <ProfileAvatarLayoutStyle>
                    <ProfileAvatarStyle avatarSize={80}>
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
                        {formatOrganisationName(organisation.organisationName)}
                        <SvgCheckedSymbol style={CertifiedIconStyle} />
                      </ProfileTitleStyle>
                    </ProfileContentWrapperStyle>
                  </ProfileAvatarLayoutStyle>
                </SearchOrganisationItemStyle>
              </SearchOrganisationsListItemStyle>
            ))}
          </SearchOrganisationsListStyle>
        </SearchPageResultsStyle>
        {isDesktop && <SearchSidebar />}
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  );
};
