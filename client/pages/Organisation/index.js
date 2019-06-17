// @flow
import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as OrganisationService from 'Shared/services/Organisation';
import {
  Redirect,
  matchPath,
  type match as TypeMatch,
  type Location as TypeLocation,
} from 'react-router';
import loadable from '@loadable/component';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';
import { useMobile } from 'Client/hooks/useMedia';
import { TabNavStyle, TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import {
  ROUTE_ORGANISATION_PROPOSALS,
  ROUTE_ORGANISATION_VOTES,
  getRouteOrganisationProposals,
  getRouteOrganisationVotes,
} from 'Shared/routes';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
  ProfileAvatarLayoutStyle,
  ProfileAvatarStyle,
  ProfileContentWrapperStyle,
  ProfileTitleStyle,
  ProfileSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { Avatar } from 'Client/ui/Avatar';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements/CheckedSymbol';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { UserDescription } from 'Client/features/profile/UserInformations/Description';
import { OrganisationProfileSkipLinks } from 'Client/app/SkipLinks/Organisation';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';

const OrganisationProposalsPage = loadable(() =>
  import('Client/pages/Organisation/Proposals')
);
const OrganisationVotesPage = loadable(() =>
  import('Client/pages/Organisation/Votes')
);

type Props = {
  match: TypeMatch,
  location: TypeLocation,
};

const OrganisationPage = (props: Props) => {
  const [organisation, setOrganisation] = useState(null);
  const [isLoading, setIsLoding] = useState<boolean>(true);
  const [avatarSize, setAvatarSize] = useState<number>(60);
  const isMobile = useMobile();
  const { match, location } = props;
  const { country, language, organisationSlug } = match.params;
  const organisationProposalsLink = getRouteOrganisationProposals(
    country,
    language,
    organisationSlug
  );
  const organisationFavouritesLink = getRouteOrganisationVotes(
    country,
    language,
    organisationSlug
  );

  const isOrganisationProposalsActive = !!matchPath(
    location.pathname,
    ROUTE_ORGANISATION_PROPOSALS
  );
  const isOrganisationVotesActive = !!matchPath(
    location.pathname,
    ROUTE_ORGANISATION_VOTES
  );

  useEffect(() => {
    const fetchOrganisation = async () => {
      const loadedOrganisation: ?TypeOrganisation = await OrganisationService.getOrganisationBySlug(
        organisationSlug
      );

      setOrganisation(loadedOrganisation);
      setIsLoding(false);
    };

    fetchOrganisation();

    if (!isMobile) {
      setAvatarSize(160);
    }
  }, [organisationSlug, isMobile]);

  if (!organisation && isLoading) {
    return (
      <MiddlePageWrapperStyle aria-busy>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }

  if (!organisation) {
    return <Redirect to="/" />;
  }

  return (
    <ProfileWrapperStyle>
      <OrganisationProfileSkipLinks />
      <MetaTags />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarStyle>
          <ProfileAvatarLayoutStyle>
            <ProfileAvatarStyle>
              <Avatar
                avatarSize={avatarSize}
                avatarUrl={organisation.avatarUrl}
              />
            </ProfileAvatarStyle>
          </ProfileAvatarLayoutStyle>
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
          {organisation.description && (
            <React.Fragment>
              <ProfileSeparatorStyle />
              <ScreenReaderItemStyle>
                {i18n.t('profile.common.labels.biography')}
              </ScreenReaderItemStyle>
              <UserDescription description={organisation.description} />
            </React.Fragment>
          )}
        </ProfilePageSidebarStyle>
        <ProfilePageContentStyle>
          <TabNavStyle
            aria-label={i18n.t('common.secondary_nav')}
            id="organisation_nav"
          >
            <TabListStyle>
              <TabStyle isSelected={isOrganisationProposalsActive}>
                <Link
                  to={organisationProposalsLink}
                  aria-current={isOrganisationProposalsActive}
                >
                  {i18n.t('organisation.tabs.proposals')}
                </Link>
              </TabStyle>
              <TabStyle isSelected={isOrganisationVotesActive}>
                <Link
                  to={organisationFavouritesLink}
                  aria-current={isOrganisationVotesActive}
                >
                  {i18n.t('organisation.tabs.votes')}
                </Link>
              </TabStyle>
            </TabListStyle>
          </TabNavStyle>
          <Switch>
            <Route
              path={ROUTE_ORGANISATION_PROPOSALS}
              exact
              component={() => (
                <OrganisationProposalsPage organisation={organisation} />
              )}
            />
            <Route
              path={ROUTE_ORGANISATION_VOTES}
              exact
              component={() => (
                <OrganisationVotesPage organisation={organisation} />
              )}
            />
          </Switch>
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

// default export needed for loadable component
export default OrganisationPage; // eslint-disable-line import/no-default-export
