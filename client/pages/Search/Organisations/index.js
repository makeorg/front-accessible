// @flow
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, type RouterHistory } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type Location } from 'history';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import {
  type OrganisationType,
  type OrganisationsType,
} from 'Shared/types/organisation';
import { trackDisplaySearchOragnisationsResult } from 'Shared/services/Tracking';
import { OrganisationService } from 'Shared/services/Organisation';
import { type StateRoot } from 'Shared/store/types';
import { MetaTags } from 'Client/app/MetaTags';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';

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
import { CertifiedIconStyle } from 'Client/ui/Proposal/DeprecatedAuthor/Styled';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
import { SearchBackButton } from 'Client/features/search/BackButton';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import {
  SearchPageTitleStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchPageWrapperStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

type Props = {
  location: Location,
  history: RouterHistory,
};

export const SearchOrganisations = ({ history, location }: Props) => {
  const { country, device } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const params = new URLSearchParams(location.search);
  const term = params.get('query') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState<number>(0);
  const [organisations, setOrganisations] = useState<OrganisationType[]>([]);
  const isDesktop = matchDesktopDevice(device);

  const initOrganisations = async () => {
    setIsLoading(true);
    const organisationsResponse: ?OrganisationsType =
      await OrganisationService.searchOrganisations(country, term);

    if (organisationsResponse) {
      const { results, total } = organisationsResponse;
      setOrganisations(results);
      setCount(total);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    initOrganisations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  useEffect(() => {
    trackDisplaySearchOragnisationsResult();
  }, []);

  return (
    <SearchPageWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.organisations', {
          term,
        })}
      />

      <SearchBackButton term={term} history={history} />
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
                  to={getOrganisationProfileLink(country, organisation.slug)}
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
                        <CertifiedIconStyle aria-hidden focusable="false" />
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
